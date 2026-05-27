import fs from "node:fs/promises";
import path from "node:path";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = "sp71dZjRyg34ttojoNw1cn";

if (!FIGMA_TOKEN) {
  console.error("❌ FIGMA_TOKEN belum diset.");
  console.error("Jalankan: export FIGMA_TOKEN='TOKEN_FIGMA_KAMU'");
  process.exit(1);
}

const assets = [
  // PNG images
  {
    name: "hero-ampelgading",
    nodeId: "20:2",
    format: "png",
    output: "src/assets/images/hero-ampelgading.png",
  },
  {
    name: "color-grading-satu",
    nodeId: "84:5",
    format: "png",
    output: "src/assets/images/color-grading-satu.png",
  },
  {
    name: "color-grading-dua",
    nodeId: "84:6",
    format: "png",
    output: "src/assets/images/color-grading-dua.png",
  },
  {
    name: "img-0405",
    nodeId: "84:8",
    format: "png",
    output: "src/assets/images/img-0405.png",
  },
  {
    name: "imggg",
    nodeId: "84:4",
    format: "png",
    output: "src/assets/images/imggg.png",
  },
  {
    name: "img-0423",
    nodeId: "84:2",
    format: "png",
    output: "src/assets/images/img-0423.png",
  },
  {
    name: "img-0460",
    nodeId: "84:3",
    format: "png",
    output: "src/assets/images/img-0460.png",
  },
  {
    name: "img-0274",
    nodeId: "84:7",
    format: "png",
    output: "src/assets/images/img-0274.png",
  },
  {
    name: "img-0379",
    nodeId: "91:10",
    format: "png",
    output: "src/assets/images/img-0379.png",
  },
  {
    name: "image-3",
    nodeId: "114:5",
    format: "png",
    output: "src/assets/images/image-3.png",
  },

  // SVG logos
  {
    name: "ampelgading-logo-header",
    nodeId: "124:106",
    format: "svg",
    output: "src/assets/logos/ampelgading-logo-header.svg",
  },
  {
    name: "ampelgading-logo-footer",
    nodeId: "124:105",
    format: "svg",
    output: "src/assets/logos/ampelgading-logo-footer.svg",
  },

  // SVG decorations
  {
    name: "organic-lines-large",
    nodeId: "164:146",
    format: "svg",
    output: "src/assets/decorations/organic-lines-large.svg",
  },
  {
    name: "organic-lines-footer",
    nodeId: "90:2",
    format: "svg",
    output: "src/assets/decorations/organic-lines-footer.svg",
  },
  {
    name: "group-727",
    nodeId: "182:640",
    format: "svg",
    output: "src/assets/decorations/group-727.svg",
  },
  {
    name: "vector-decor",
    nodeId: "189:3",
    format: "svg",
    output: "src/assets/decorations/vector-decor.svg",
  },

  // SVG icons
  {
    name: "social-icon-1",
    nodeId: "142:5",
    format: "svg",
    output: "src/assets/icons/social-icon-1.svg",
  },
  {
    name: "social-icon-2",
    nodeId: "142:4",
    format: "svg",
    output: "src/assets/icons/social-icon-2.svg",
  },
  {
    name: "location-icon",
    nodeId: "142:7",
    format: "svg",
    output: "src/assets/icons/location-icon.svg",
  },
  {
    name: "email-icon",
    nodeId: "144:256",
    format: "svg",
    output: "src/assets/icons/email-icon.svg",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function figmaFetchJson(url, maxRetries = 6) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, {
      headers: {
        "X-Figma-Token": FIGMA_TOKEN,
      },
    });

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get("retry-after") || "60");
      console.warn(
        `⚠️ Rate limited. Retry after ${retryAfter}s. Attempt ${attempt}/${maxRetries}`,
      );
      await sleep(retryAfter * 1000);
      continue;
    }

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Figma API error ${response.status}: ${text}`);
    }

    return response.json();
  }

  throw new Error("429 terlalu sering. Coba ulang beberapa menit lagi.");
}

async function getExportUrlsBatch(group) {
  const ids = group.map((asset) => asset.nodeId).join(",");
  const format = group[0].format;

  const params = new URLSearchParams({
    ids,
    format,
  });

  if (format === "png") {
    params.set("scale", "2");
  }

  const apiUrl = `https://api.figma.com/v1/images/${FILE_KEY}?${params.toString()}`;
  const json = await figmaFetchJson(apiUrl);

  return json.images || {};
}

async function downloadFile(url, output, maxRetries = 4) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const response = await fetch(url);

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get("retry-after") || "30");
      console.warn(`⚠️ Download rate limited. Retry after ${retryAfter}s`);
      await sleep(retryAfter * 1000);
      continue;
    }

    if (!response.ok) {
      throw new Error(`Download error ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    if (buffer.length < 100) {
      throw new Error(`File terlalu kecil: ${buffer.length} bytes`);
    }

    await ensureDir(output);
    await fs.writeFile(output, buffer);
    return;
  }

  throw new Error(`Gagal download setelah ${maxRetries} percobaan`);
}

let success = 0;
let failed = 0;

const groups = [
  assets.filter((asset) => asset.format === "png"),
  assets.filter((asset) => asset.format === "svg"),
];

for (const group of groups) {
  if (group.length === 0) continue;

  const format = group[0].format;
  console.log(
    `\nRequest export URL batch format: ${format}, total: ${group.length}`,
  );

  let imageMap = {};

  try {
    imageMap = await getExportUrlsBatch(group);
  } catch (error) {
    console.error(`❌ Gagal ambil export URL batch ${format}`);
    console.error(`   ${error.message}`);
    failed += group.length;
    continue;
  }

  for (const asset of group) {
    try {
      const url = imageMap[asset.nodeId];

      if (!url) {
        throw new Error(`Tidak ada export URL untuk node ${asset.nodeId}`);
      }

      console.log(`Downloading ${asset.output}`);
      await downloadFile(url, asset.output);

      console.log(`✅ OK: ${asset.output}`);
      success++;
    } catch (error) {
      console.error(`❌ Failed: ${asset.output}`);
      console.error(`   ${error.message}`);
      failed++;
    }
  }
}

console.log("");
console.log(`Done. Berhasil: ${success}, Gagal: ${failed}`);

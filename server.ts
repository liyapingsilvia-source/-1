import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  /** 与仓库本地预览约定一致，默认 8080（可用 PORT 覆盖） */
  const PORT = Number(process.env.PORT) || 8080;

  // Increase body size limit for base64 images
  app.use(express.json({ limit: '10mb' }));

  // Image proxy to fix CORS/Tainted Canvas issues
  app.get("/api/proxy-image", async (req, res) => {
    const imageUrl = req.query.url as string;
    if (!imageUrl) {
      return res.status(400).send("URL is required");
    }

    try {
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      const contentType = response.headers['content-type'];
      res.setHeader('Content-Type', contentType || 'image/jpeg');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(response.data);
    } catch (error) {
      console.error("Proxy error:", error);
      res.status(500).send("Failed to fetch image");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      root: path.resolve(__dirname),
      configFile: path.resolve(__dirname, "vite.config.ts"),
      server: {
        middlewareMode: true,
      },
      // MPA: index.html + tiktok-profile-tux.html 等多入口
      appType: "mpa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
  }

  const httpServer = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`TUX 个人页: http://localhost:${PORT}/tiktok-profile-tux.html`);
  });

  httpServer.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `[dev] 端口 ${PORT} 已被占用。请关闭占用进程或执行: PORT=8090 npm run dev`,
      );
    } else {
      console.error(err);
    }
    process.exit(1);
  });
}

startServer();

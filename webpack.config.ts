import * as path from "path";
import * as webpack from "webpack";
import { buildWebPackConfig } from "./config/build/buildWebPackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";
  const config: webpack.Configuration = buildWebPackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl: apiUrl,
  });
  return config;
};

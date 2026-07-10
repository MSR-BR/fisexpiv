import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository ? repository.split("/") : [];
const isUserSite = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : undefined),
  base: process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}` : undefined),
  integrations: [mdx()],
});

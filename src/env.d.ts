/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

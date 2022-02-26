/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECTID: string
  readonly VITE_SANITY_DATASET: string
  readonly VITE_POST_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
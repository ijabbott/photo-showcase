/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY_HEADER: string,
    readonly VITE_API_KEY_VALUE: string,
    readonly VITE_API_PATH: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

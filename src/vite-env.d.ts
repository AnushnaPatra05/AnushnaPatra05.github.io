/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CV_DRIVE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

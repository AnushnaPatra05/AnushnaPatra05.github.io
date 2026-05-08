const driveId = import.meta.env.VITE_CV_DRIVE_ID;

export const CV_DOWNLOAD_URL = driveId
  ? `https://drive.google.com/uc?export=download&id=${driveId}`
  : '#';

if (!driveId) console.warn('VITE_CV_DRIVE_ID is not set in environment variables');

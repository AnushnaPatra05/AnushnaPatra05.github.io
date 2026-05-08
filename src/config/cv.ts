// Add VITE_CV_DRIVE_ID to Vercel Environment Variables
// Value = the ID from your Google Drive shareable link
// e.g. https://drive.google.com/file/d/THIS_PART_HERE/view

export const CV_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_CV_DRIVE_ID}`;

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  type: "image" | "pdf";
};

export const certificates: Certificate[] = [
  { id: 1, title: "TYPESCRIPT", issuer: "UDEMY", date: "MAY 10 2026", file: "/certificates/UC-d6b2b2a2-f3b0-40ca-a9d0-218530b3e3db.jpg", type: "image" },
  { id: 2, title: "TESTING ANGULAR (KARMA-JASMINE)", issuer: "UDEMY", date: "JULY 10 2024", file: "certificates/UC-60aab9e2-56db-4050-b580-41203afb7654_page-0001.jpg", type: "image" },
  { id: 3, title: "WEB DESIGNING", issuer: "UDEMY", date: "MAY 7 2026", file: "/certificates/UC-c061f769-e30c-4bf7-a16c-2bcb6c9050ff.jpg", type: "image" },
  { id: 4, title: "AI + CHATGPT", issuer: "UDEMY", date: "APRIL 9 2025", file: "/certificates/AI+ChatGPT_page-0001.jpg", type: "image" },
  { id: 5, title: "TYPESCRIPT", issuer: "UDEMY", date: "MAY 4 2026", file: "/certificates/UC-5aaa4584-76fa-4dae-a762-2e38313fdab1_page-0001.jpg", type: "image" },

]; 
import { PAGE_TOKEN } from "@/constants";

export const getDefaultPage = () =>
  typeof window !== "undefined"
    ? Number(localStorage.getItem(PAGE_TOKEN) || 1)
    : 1;

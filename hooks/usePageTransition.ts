"use client";

import { useRouter } from "next/navigation";

export const usePageTransition = () => {
  // Hooks
  const router = useRouter();

  // Setup
  const isBrowser = typeof window !== "undefined";
  // @ts-ignore
  const isSupported = isBrowser && typeof document.startViewTransition === "function";

  // Handlers
  const transition = async (path: string) => {
    // 🔌 Short Circuit
    if (!isSupported) {
      router.push(path);
      return;
    }

    // @ts-ignore
    document.startViewTransition(() => {
      router.push(path);
    });
  };

  return { transition };
};

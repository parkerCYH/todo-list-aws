"use client";

import { useSyncExternalStore } from "react";

import { createScrollStore } from "@/stores/scrollStore";

const scrollStore = createScrollStore<string>();

export function useScrollRegistry() {
  const refs = useSyncExternalStore(
    scrollStore.subscribe,
    scrollStore.getSnapshot,
    scrollStore.getServerSnapshot
  );

  return {
    registerRef: scrollStore.registerRef,
    scrollTo: scrollStore.scrollTo,
    refs,
  };
}

"use client";

import { useSyncExternalStore } from "react";

/** Nothing ever changes, so the store never needs to notify. */
const neverChanges = () => () => {};

/**
 * True only after hydration.
 *
 * useSyncExternalStore rather than setState-in-an-effect: it returns the
 * server snapshot during SSR and the client snapshot afterwards in a single
 * pass, so there is no cascading re-render (and no react-hooks lint error).
 */
export function useMounted() {
  return useSyncExternalStore(
    neverChanges,
    () => true,
    () => false,
  );
}

/**
 * Whether the visitor is on an Apple platform, for rendering ⌘K vs Ctrl K.
 * Returns false on the server so the markup matches the first client render.
 */
export function useIsApplePlatform() {
  return useSyncExternalStore(
    neverChanges,
    () => {
      const platform =
        (navigator as Navigator & { userAgentData?: { platform?: string } })
          .userAgentData?.platform ??
        navigator.platform ??
        "";
      return /mac|iphone|ipad|ipod/i.test(platform);
    },
    () => false,
  );
}

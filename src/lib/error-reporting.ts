export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("Runtime Error Captured:", error, {
    route: window.location.pathname,
    ...context,
  });
}

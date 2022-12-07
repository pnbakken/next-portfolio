export function $(
  selector,
  scope = typeof window === "document" ? document : undefined
) {
  return scope ? scope.querySelector(selector) : undefined;
}

export function $all(
  selector,
  scope = typeof window === "document" ? document : undefined
) {
  return scope ? scope.querySelectorAll(selector) : undefined;
}

export function $(selector, scope = window ? document : undefined) {
  return scope ? scope.querySelector(selector) : undefined;
}

export function $all(selector, scope = window ? document : undefined) {
  return scope ? scope.querySelectorAll(selector) : undefined;
}

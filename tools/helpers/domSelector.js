export function $(selector, scope = window ? document : undefined) {
  return scope ? scope.querySelector(selector) : undefined;
}

export function $all(selector, scope = window ? document : undefined) {
  return scope ? scope.querySelectorAll(selector) : undefined;
}

export function $allClass(selector, scope = window ? document : undefined) {
  return scope ? scope.getElementsByClassName(selector) : undefined;
}

export function $id(id, scope = window ? document : undefined) {
  return scope ? scope.getElementById(id) : undefined;
}

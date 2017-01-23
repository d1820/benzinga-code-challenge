export function createUniqueId(prefix = '') {
  return prefix + (Date.now() + Math.random());
}

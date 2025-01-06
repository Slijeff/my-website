export const pick = <Target, KeysToPick extends keyof Target>(
  targetObj: Target,
  keys: KeysToPick[],
) => keys.reduce((acc, key) => ({ ...acc, [key]: targetObj[key] }), {});

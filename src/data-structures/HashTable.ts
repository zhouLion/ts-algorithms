export const craeteHashTable = (hashTableSize = 32) => {
  const keys: Record<string, number> = {};
  const buckets: { key: string, value: unknown }[][] = Array(hashTableSize).fill(() => []);

  /**
   * 散列函数
   * 怎么简单怎么来，这里使用 key 中每个字符的 ASCII 码值的总和计算 hash 值
   *
   * 再对计算的值做更进一步的处理，将其与数组的长度取模，从而得到一个桶的索引
   *
   * hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
   */
  const hash = (key: string) => {
    const hash = Array.from(key).reduce((accumulator, char) => {
      return accumulator + char.charCodeAt(0);
    }, 0);
    return hash % buckets.length;
  };

  const has = (key: string) => {
    return keys[key] !== undefined;
  };

  const set = (key: string, value: unknown) => {
    const hashKey = hash(key);
    keys[key] = hashKey;
    const bucket = buckets[hashKey];

    // 如果桶中已经存在了这个 key，则替换它的值
    const node = bucket
      .find((but) => but.key === key);
    if (!node) {
      bucket.push({ key, value });
    } else {
      node.value = value;
    }
  };

  const get = (key: string) => {
    const hashKey = keys[key];
    if (!hashKey) return undefined;
    const bucket = buckets[hashKey];
    const node = bucket.find((but) => but.key === key);
    return node ? node.value : undefined;
  };

  const del = (key: string) => {
    const hashKey = keys[key];
    if (!hashKey) return undefined;
    const bucket = buckets[hashKey];
    const node = bucket.find((but) => but.key === key);
    if (!node) return undefined;
    if (node) {
      const deletedNodes = bucket.splice(bucket.indexOf(node), 1);
      delete keys[key];
      return deletedNodes;
    }
  };

  return {
    get,
    set,
    has,
    delete: del,
    get keys() {
      return keys;
    },
    get length() {
      return Object.values(buckets).reduce((accumulator, bucket) => {
        return bucket.length + accumulator;
      }, 0);
    },
  };
};

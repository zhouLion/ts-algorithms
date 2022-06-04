export interface IComparator<T> {
  compare(a: T, b: T): number;
  /** 等于 */
  eq(a: T, b: T): boolean;
  /** 小于 */
  lt(a: T, b: T): boolean;
  /** 大于 */
  gt(a: T, b: T): boolean;
  /** 小于或等于 */
  ltOrEq(a: T, b: T): boolean;
  /** 大于或等于 */
  gtOrEq(a: T, b: T): boolean;
}

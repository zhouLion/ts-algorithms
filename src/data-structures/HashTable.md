# HashTable 哈希表

[wiki/哈希表](https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E8%A1%A8)

在计算机数据结构中， 哈希表（也称为 hash table 或 hash map）是一类关联数组 -- associative array，该结构需实现 `key -> value` 的映射，即键值对映射。

哈希表是将一个值通过特定的 「哈希算法/散列函数」计算出一个对应索引，在相同索引中的值，都被放置在这个索引所对应的「槽 (slot)」 或「桶 (bucket)」 中，之后可以通过该索引找到所需的值。

哈希表在生活中的常见应用场景便是通讯录，程序会使用每个人的姓名的首字母 A-Z，通过这种散列函数，使我们可以快速定位到某个人。

编写一个查询效率高的哈希表的关键就在于哈希算法的实现。
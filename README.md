# JavaScript 算法与数据结构

本仓库包含了多种基于 JavaScript 的算法与数据结构。

*注意：这个项目仅用于学习和研究，**不是**用于生产环境。*

## 数据结构

数据结构是在计算机中组织和存储数据的一种特殊方式，使得数据可以高效地被访问和修改。更确切地说，数据结构是数据值的集合，表示数据之间的关系，也包括了作用在数据上的函数或操作。

`B` - 初学者， `A` - 进阶

* [x] `B` [链表](docs/data-structures/LinkedList.md)
* [x] `B` [双向链表](docs/data-structures/DoublyLinkedList.ts)
* [x] `B` [队列](docs/data-structures/Queue.md)
* [x] `B` [栈](docs/data-structures/Stack.md)
* [x] `B` [哈希表(散列)](docs/data-structures/HashTable.md)
* [x] `B` [堆](docs/data-structures/Heap.md) - 最大堆 & 最小堆
* [ ] `B` [优先队列](docs/data-structures/priority-queue/README.zh-CN.md)
* [ ] `A` [字典树](docs/data-structures/trie/README.zh-CN.md)
* [ ] `A` [树](docs/data-structures/tree/README.zh-CN.md)
  * [ ] `A` [二叉查找树](docs/data-structures/tree/binary-search-tree)
  * [ ] `A` [AVL 树](docs/data-structures/tree/avl-tree)
  * [ ] `A` [红黑树](docs/data-structures/tree/red-black-tree)
  * [ ] `A` [线段树](docs/data-structures/tree/segment-tree) - 使用 `最小/最大/总和` 范围查询示例
  * [ ] `A` [树状数组](docs/data-structures/tree/fenwick-tree) (二叉索引树)
* [x]`A` [图](docs/data-structures/Graph.ts) (有向图与无向图)
* [ ]`A` [并查集](docs/data-structures/disjoint-set)
* [ ]`A` [布隆过滤器](docs/data-structures/bloom-filter)

## 算法

算法是如何解决一类问题的明确规范。算法是一组精确定义操作序列的规则。

`B` - 初学者， `A` - 进阶

### 算法主题

* **数学**
  * [ ] `B` [位运算](docs/algorithms/math/bits) - set/get/update/clear 位、乘以/除以二进制位 、变负等
  * [ ] `B` [阶乘](docs/algorithms/math/factorial/README.zh-CN.md)
  * [ ] `B` [斐波那契数](docs/algorithms/math/fibonacci) - `经典` 和 `闭式` 版本
  * [ ] `B` [素数检测](docs/algorithms/math/primality-test) (排除法)
  * [ ] `B` [欧几里得算法](docs/algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  * [ ] `B` [最小公倍数](docs/algorithms/math/least-common-multiple) (LCM)
  * [ ] `B` [素数筛](docs/algorithms/math/sieve-of-eratosthenes) - 查找任意给定范围内的所有素数
  * [ ] `B` [判断 2 次方数](docs/algorithms/math/is-power-of-two) - 检查数字是否为 2 的幂 (原生和按位算法)
  * [ ] `B` [杨辉三角形](docs/algorithms/math/pascal-triangle)
  * [ ] `B` [复数](docs/algorithms/math/complex-number) - 复数及其基本运算
  * [ ] `B` [弧度和角](docs/algorithms/math/radian) - 弧度与角的相互转换
  * [ ] `B` [快速算次方](docs/algorithms/math/fast-powering)
  * [ ] `A` [整数拆分](docs/algorithms/math/integer-partition)
  * [ ] `A` [割圆术](docs/algorithms/math/liu-hui) - 基于 N-gons 的近似 π 计算
  * [ ] `A` [离散傅里叶变换](docs/algorithms/math/fourier-transform) - 把时间信号解析成构成它的频率
* **集合**
  * [ ] `B` [笛卡尔积](docs/algorithms/sets/cartesian-product) - 多集合结果
  * [ ] `A` [洗牌算法](docs/algorithms/sets/fisher-yates) - 随机置换有限序列
  * [ ] `A` [幂集](docs/algorithms/sets/power-set) - 该集合的所有子集
  * [ ] `A` [排列](docs/algorithms/sets/permutations) (有/无重复)
  * [ ] `A` [组合](docs/algorithms/sets/combinations) (有/无重复)
  * [ ] `A` [最长公共子序列](docs/algorithms/sets/longest-common-subsequence) (LCS)
  * [ ] `A` [最长递增子序列](docs/algorithms/sets/longest-increasing-subsequence)
  * [ ] `A` [最短公共父序列](docs/algorithms/sets/shortest-common-supersequence) (SCS)
  * [ ] `A` [背包问题](docs/algorithms/sets/knapsack-problem) - `0/1` 和 `无边界` 问题
  * [ ] `A` [最大子数列问题](docs/algorithms/sets/maximum-subarray) - `BF 算法` 和 `动态规划`
  * [ ] `A` [组合求和](docs/algorithms/sets/combination-sum) - 查找形成特定总和的所有组合
* **字符串**
  * [ ] `B` [汉明距离](docs/algorithms/string/hamming-distance) - 符号不同的位置数
  * [ ] `A` [莱温斯坦距离](docs/algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
  * [ ] `A` [Knuth–Morris–Pratt 算法](docs/algorithms/string/knuth-morris-pratt) KMP 算法 - 子串搜索 (模式匹配)
  * [ ] `A` [字符串快速查找](docs/algorithms/string/z-algorithm) - 子串搜索 (模式匹配)
  * [ ] `A` [Rabin Karp 算法](docs/algorithms/string/rabin-karp) - 子串搜索
  * [ ] `A` [最长公共子串](docs/algorithms/string/longest-common-substring)
  * [ ] `A` [正则表达式匹配](docs/algorithms/string/regular-expression-matching)
* **搜索**
  * [ ] `B` [线性搜索](docs/algorithms/search/linear-search)
  * [ ] `B` [跳转搜索/块搜索](docs/algorithms/search/jump-search) - 搜索有序数组
  * [ ] `B` [二分查找](docs/algorithms/search/binary-search) - 搜索有序数组
  * [ ] `B` [插值搜索](docs/algorithms/search/interpolation-search) - 搜索均匀分布的有序数组
* **排序**
  * [ ] `B` [冒泡排序](docs/algorithms/sorting/bubble-sort)
  * [ ] `B` [选择排序](docs/algorithms/sorting/selection-sort)
  * [ ] `B` [插入排序](docs/algorithms/sorting/insertion-sort)
  * [ ] `B` [堆排序](docs/algorithms/sorting/heap-sort)
  * [ ] `B` [归并排序](docs/algorithms/sorting/merge-sort)
  * [ ] `B` [快速排序](docs/algorithms/sorting/quick-sort) - in-place (原地) 和 non-in-place 版本
  * [ ] `B` [希尔排序](docs/algorithms/sorting/shell-sort)
  * [ ] `B` [计数排序](docs/algorithms/sorting/counting-sort)
  * [ ] `B` [基数排序](docs/algorithms/sorting/radix-sort)
* **链表**
  - `B` [正向遍历](docs/algorithms/linked-list/traversal)
  - `B` [反向遍历](docs/algorithms/linked-list/reverse-traversal)
* **树**
  * [ ] `B` [深度优先搜索](docs/algorithms/tree/depth-first-search) (DFS)
  * [ ] `B` [广度优先搜索](docs/algorithms/tree/breadth-first-search) (BFS)
* **图**
  * [ ] `B` [深度优先搜索](docs/algorithms/graph/depth-first-search) (DFS)
  * [ ] `B` [广度优先搜索](docs/algorithms/graph/breadth-first-search) (BFS)
  * [ ] `B` [克鲁斯克尔演算法](docs/algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
  * [ ] `A` [戴克斯特拉算法](docs/algorithms/graph/dijkstra) - 找到图中所有顶点的最短路径
  * [ ] `A` [贝尔曼-福特算法](docs/algorithms/graph/bellman-ford) - 找到图中所有顶点的最短路径
  * [ ] `A` [弗洛伊德算法](docs/algorithms/graph/floyd-warshall) - 找到所有顶点对 之间的最短路径
  * [ ] `A` [判圈算法](docs/algorithms/graph/detect-cycle) - 对于有向图和无向图 (基于 DFS 和不相交集的版本)
  * [ ] `A` [普林演算法](docs/algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  * [ ] `A` [拓扑排序](docs/algorithms/graph/topological-sorting) - DFS 方法
  * [ ] `A` [关节点](docs/algorithms/graph/articulation-points) - Tarjan 算法 (基于 DFS)
  * [ ] `A` [桥](docs/algorithms/graph/bridges) - 基于 DFS 的算法
  * [ ] `A` [欧拉回径与一笔画问题](docs/algorithms/graph/eulerian-path) - Fleury 的算法 - 一次访问每个边
  * [ ] `A` [哈密顿图](docs/algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  * [ ] `A` [强连通分量](docs/algorithms/graph/strongly-connected-components) - Kosaraju 算法
  * [ ] `A` [旅行推销员问题](docs/algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市
* **加密**
  * [ ] `B` [多项式 hash](docs/algorithms/cryptography/polynomial-hash) - 基于多项式的 rolling hash 函数
* **机器学习**
  * [ ] `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) -7个简单的JS函数，说明机器如何实际学习（向前/向后传播）
* **未分类**
  * [ ] `B` [汉诺塔](docs/algorithms/uncategorized/hanoi-tower)
  * [ ] `B` [旋转矩阵](docs/algorithms/uncategorized/square-matrix-rotation) - 原地算法
  * [ ] `B` [跳跃游戏](docs/algorithms/uncategorized/jump-game) - 回溯,、动态编程 (自上而下+自下而上) 和贪婪的例子
  * [ ] `B` [独特(唯一) 路径](docs/algorithms/uncategorized/unique-paths) - 回溯、动态编程和基于 Pascal 三角形的例子
  * [ ] `B` [雨水收集](docs/algorithms/uncategorized/rain-terraces) - 诱捕雨水问题 (动态编程和暴力版本)
  * [ ] `B` [递归楼梯](docs/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * [ ] `A` [八皇后问题](docs/algorithms/uncategorized/n-queens)
  * [ ] `A` [骑士巡逻](docs/algorithms/uncategorized/knight-tour)

### 算法范式

算法范式是一种通用方法，基于一类算法的设计。这是比算法更高的抽象，就像算法是比计算机程序更高的抽象。

* **BF 算法** - `查找/搜索` 所有可能性并选择最佳解决方案
  * [ ] `B` [线性搜索](docs/algorithms/search/linear-search)
  * [ ] `B` [雨水收集](docs/algorithms/uncategorized/rain-terraces) - 诱导雨水问题
  * [ ] `B` [递归楼梯](docs/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * [ ] `A` [最大子数列](docs/algorithms/sets/maximum-subarray)
  * [ ] `A` [旅行推销员问题](docs/algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市
  * [ ] `A` [离散傅里叶变换](docs/algorithms/math/fourier-transform) - 把时间信号解析成构成它的频率
* **贪心法** - 在当前选择最佳选项，不考虑以后情况
  * [ ] `B` [跳跃游戏](docs/algorithms/uncategorized/jump-game)
  * [ ] `A` [背包问题](docs/algorithms/sets/knapsack-problem)
  * [ ] `A` [戴克斯特拉算法](docs/algorithms/graph/dijkstra) - 找到所有图顶点的最短路径
  * [ ] `A` [普里姆算法](docs/algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  * [ ] `A` [克鲁斯卡尔算法](docs/algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
* **分治法** - 将问题分成较小的部分，然后解决这些部分
  * [ ] `B` [二分查找](docs/algorithms/search/binary-search)
  * [ ] `B` [汉诺塔](docs/algorithms/uncategorized/hanoi-tower)
  * [ ] `B` [杨辉三角形](docs/algorithms/math/pascal-triangle)
  * [ ] `B` [欧几里得算法](docs/algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  * [ ] `B` [归并排序](docs/algorithms/sorting/merge-sort)
  * [ ] `B` [快速排序](docs/algorithms/sorting/quick-sort)
  * [ ] `B` [树深度优先搜索](docs/algorithms/tree/depth-first-search) (DFS)
  * [ ] `B` [图深度优先搜索](docs/algorithms/graph/depth-first-search) (DFS)
  * [ ] `B` [跳跃游戏](docs/algorithms/uncategorized/jump-game)
  * [ ] `B` [快速算次方](docs/algorithms/math/fast-powering)
  * [ ] `A` [排列](docs/algorithms/sets/permutations) (有/无重复)
  * [ ] `A` [组合](docs/algorithms/sets/combinations) (有/无重复)
* **动态规划(Dynamic programming)** - 使用以前找到的子解决方案构建解决方案
  * [ ] `B` [斐波那契数](docs/algorithms/math/fibonacci)
  * [ ] `B` [跳跃游戏](docs/algorithms/uncategorized/jump-game)
  * [ ] `B` [独特路径](docs/algorithms/uncategorized/unique-paths)
  * [ ] `B` [雨水收集](docs/algorithms/uncategorized/rain-terraces) - 疏导雨水问题
  * [ ] `B` [递归楼梯](docs/algorithms/uncategorized/recursive-staircase) - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
  * [ ] `A` [莱温斯坦距离](docs/algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
  * [ ] `A` [最长公共子序列](docs/algorithms/sets/longest-common-subsequence) (LCS)
  * [ ] `A` [最长公共子串](docs/algorithms/string/longest-common-substring)
  * [ ] `A` [最长递增子序列](docs/algorithms/sets/longest-increasing-subsequence)
  * [ ] `A` [最短公共子序列](docs/algorithms/sets/shortest-common-supersequence)
  * [ ] `A` [0-1背包问题](docs/algorithms/sets/knapsack-problem)
  * [ ] `A` [整数拆分](docs/algorithms/math/integer-partition)
  * [ ] `A` [最大子数列](docs/algorithms/sets/maximum-subarray)
  * [ ] `A` [贝尔曼-福特算法](docs/algorithms/graph/bellman-ford) - 找到所有图顶点的最短路径
  * [ ] `A` [弗洛伊德算法](docs/algorithms/graph/floyd-warshall) - 找到所有顶点对之间的最短路径
  * [ ] `A` [正则表达式匹配](docs/algorithms/string/regular-expression-matching)
* **回溯法** - 类似于 `BF 算法` 试图产生所有可能的解决方案，但每次生成解决方案测试如果它满足所有条件，那么只有继续生成后续解决方案。否则回溯并继续寻找不同路径的解决方案。
  * [ ] `B` [跳跃游戏](docs/algorithms/uncategorized/jump-game)
  * [ ] `B` [独特路径](docs/algorithms/uncategorized/unique-paths)
  * [ ] `A` [幂集](docs/algorithms/sets/power-set) - 该集合的所有子集
  * [ ] `A` [哈密顿图](docs/algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  * [ ] `A` [八皇后问题](docs/algorithms/uncategorized/n-queens)
  * [ ] `A` [骑士巡逻](docs/algorithms/uncategorized/knight-tour)
  * [ ] `A` [组合求和](docs/algorithms/sets/combination-sum) - 从规定的总和中找出所有的组合
* **Branch & Bound** - 记住在回溯搜索的每个阶段找到的成本最低的解决方案，并使用到目前为止找到的成本最小值作为下限。以便丢弃成本大于最小值的解决方案。通常，使用 BFS 遍历以及状态空间树的 DFS 遍历。

## 如何使用本仓库

**安装依赖**
```
npm install
```

**运行 ESLint**

检查代码质量

```
npm run lint
```

**执行测试**

```
npm test
```

**按照名称执行测试**
```
npm test -- 'LinkedList'
```

## 有用的信息

### 引用

[▶ YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### 大O符号

大O符号中指定的算法的增长顺序。

![Big O graphs](./assets/big-o-graph.png)

源: [Big O Cheat Sheet](http://bigocheatsheet.com/).

以下是一些最常用的 大O标记法 列表以及它们与不同大小输入数据的性能比较。

| 大O标记法      | 计算10个元素                 | 计算100个元素                 | 计算1000个元素                  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### 数据结构操作的复杂性

| 数据结构       |  连接  |  查找  |  插入  |  删除  | 备注 |
| -------------- | :----: | :----: | :----: | :----: | ---- |
| **数组**       |   1    |   n    |   n    |   n    |      |
| **栈**         |   n    |   n    |   1    |   1    |      |
| **队列**       |   n    |   n    |   1    |   1    |      |
| **链表**       |   n    |   n    |   1    |   1    |      |
| **哈希表**     |   -    |   n    |   n    |   n    | 在完全哈希函数情况下，复杂度是 O(1） |
| **二分查找树** |   n    |   n    |   n    |   n    | 在平衡树情况下，复杂度是 O(log(n)) |
| **B 树**       | log(n) | log(n) | log(n) | log(n) |      |
| **红黑树**     | log(n) | log(n) | log(n) | log(n) |      |
| **AVL 树**     | log(n) | log(n) | log(n) | log(n) |      |
| **布隆过滤器** |   -    |   1    |   1    | - | 存在一定概率的判断错误（误判成存在） |

### 数组排序算法的复杂性

| 名称                  | 最优      | 平均      | 最坏          | 内存      | 稳定      | 备注                  |
| --------------------- | :-------: | :-------: | :-----------: | :-------: | :-------: | --------------------- |
| **冒泡排序**          | n         | n^2       | n^2           | 1         | Yes       |                       |
| **插入排序**          | n         | n^2       | n^2           | 1         | Yes       |                       |
| **选择排序**          | n^2       | n^2       | n^2           | 1         | No        |                       |
| **堆排序**            | n log(n)  | n log(n)  | n log(n)      | 1         | No        |                       |
| **归并排序**          | n log(n)  | n log(n)  | n log(n)      | n         | Yes       |                       |
| **快速排序**          | n log(n)  | n log(n)  | n^2           | log(n)    | No        | 在 in-place 版本下，内存复杂度通常是 O(log(n)) |
| **希尔排序**          | n log(n)  | 取决于差距序列   | n (log(n))^2  | 1         | No        |  |
| **计数排序**          | n + r     | n + r     | n + r         | n + r     | Yes       | r - 数组里最大的数    |
| **基数排序**          | n * k     | n * k     | n * k         | n + k     | Yes       | k - 最长 key 的升序   |

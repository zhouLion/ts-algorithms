# 栈
在计算机数据机构中，栈是一种特殊的线性表，其特点是 - “后进先出”（LIFO = last in, first out）


栈需要实现两个基本操作：
- push：将一个元素添加到栈顶
```
# push

[3]- push ->     [3]
            [2]  [2]
            [1]  [1]
```

- pop：将栈顶元素弹出，并返回该元素
```
# pop

[3]     - pop -> [3]
[2]  [2]
[1]  [1]
```

实际上，JavaScript 中的数组 Array 就是一个已实现的栈的实例。

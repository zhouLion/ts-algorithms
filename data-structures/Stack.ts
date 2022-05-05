/**
 * @see {@link https://en.wikipedia.org/wiki/Stack_(abstract_data_type)}
 * @description
 * ![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)
 * # 栈 - Stack
 * 在计算机科学中，栈是一个抽象数据结构，用作表示元素的集合，它需要具有两个基本操作
 * - push：将元素添加到栈顶
 * - pop：弹出位于栈顶的最新添加的元素，将元素移除
 * 
 * 这两个操作可以简单地理解为：LIFO = last in, first out，即后进先出。
 * 栈就可以类比为一组堆叠的物体，比如一摞书，一摞盘子，新的物体堆叠在别的物体的上方，
 * 当要取出物体的时候，也是从顶部开始获取。要想获取更深层的物体，需要一个个从顶部抽取出来。
 */
export type Stack<T> = {
    isEmpty: () => boolean;
    /** 将元素添加到栈的末尾 */
    push: (item: T) => void;
    /**
     * 删除最新入栈的元素，并且把元素值返回出去
     */
    pop: () => T | undefined;
    peek: () => T | undefined;
    size: () => number;
    clear: () => void;
    toArray: () => T[];
    toString: () => string;
}

export function createStack<T>(initialList?: T[]): Stack<T>;

export function createStack<T>(initialList?: T[]): Stack<T> {
    // 有许多方法也使用 linked list 来实现，
    // 不过这里使用数组来实现，因为它足够简单
    const list: T[] = [];
    if (initialList
        && Array.isArray(initialList)
        && initialList.length
    ) {
        list.push(...initialList);
    }

    const stack: Stack<T> = {
        push(item: T) {
            list.push(item);
        },
        pop() {
            return list.pop();
        },
        peek() {
            return list[0];
        },
        isEmpty() {
            return list.length === 0;
        },
        size() {
            return list.length;
        },
        clear() {
            list.length = 0;
        },
        toArray() {
            return list.slice();
        },
        toString() {
            return list.join(', ');
        },
    };
    return stack;
}

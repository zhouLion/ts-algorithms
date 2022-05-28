/**
 * # 图

  在计算机科学中, **图(graph)** 是一种抽象数据类型,
  旨在实现数学中的无向图和有向图概念，特别是图论领域。

  一个图数据结构是一个(由有限个或者可变数量的)顶点/节点/点和边构成的有限集。

  如果顶点对之间是无序的,称为无序图,否则称为有序图;

  如果顶点对之间的边是没有方向的,称为无向图,否则称为有向图;

  如果顶点对之间的边是有权重的,该图可称为加权图。
 */
declare function createGraphVertex<T>(value: T, getKey: (value: T) => string): {
    value: T;
    key: string;
};
declare type GraphVertex = ReturnType<typeof createGraphVertex>;
declare function createGraphEdge(startVertex: GraphVertex, endVertex: GraphVertex, weight?: number): {
    startVertex: {
        value: unknown;
        key: string;
    };
    endVertex: {
        value: unknown;
        key: string;
    };
    weight: number;
};
declare type GraphEdge = ReturnType<typeof createGraphEdge>;
declare function createGraph(isDirected?: boolean): Readonly<{
    isDirected: boolean;
    vertices: {
        value: unknown;
        key: string;
    }[];
    edges: {
        startVertex: {
            value: unknown;
            key: string;
        };
        endVertex: {
            value: unknown;
            key: string;
        };
        weight: number;
    }[];
    createGraphEdge: typeof createGraphEdge;
    createGraphVertex: typeof createGraphVertex;
    addVertex(vertex: GraphVertex): any;
    getVertex(key: string): {
        value: unknown;
        key: string;
    } | undefined;
    addEdge(edge: GraphEdge): any;
    neighbors(vertex: GraphVertex): {
        startVertex: {
            value: unknown;
            key: string;
        };
        endVertex: {
            value: unknown;
            key: string;
        };
        weight: number;
    }[];
    toJSON(): {
        isDirected: boolean;
        vertices: {
            key: string;
            value: unknown;
        }[];
        edges: {
            start: string;
            end: string;
            weight: number;
        }[];
    };
}>;

export { GraphEdge, GraphVertex, createGraph, createGraphEdge, createGraphVertex };

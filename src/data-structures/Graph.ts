/**
 * # 图

  在计算机科学中, **图(graph)** 是一种抽象数据类型,
  旨在实现数学中的无向图和有向图概念，特别是图论领域。

  一个图数据结构是一个(由有限个或者可变数量的)顶点/节点/点和边构成的有限集。

  如果顶点对之间是无序的,称为无序图,否则称为有序图;

  如果顶点对之间的边是没有方向的,称为无向图,否则称为有向图;

  如果顶点对之间的边是有权重的,该图可称为加权图。
 */

export function createGraphVertex<T>(value: T, getKey: (value: T) => string) {
  const vertex = {
    value,
    key: getKey(value),
  };
  return vertex;
}

export type GraphVertex = ReturnType<typeof createGraphVertex>;

export function createGraphEdge(startVertex: GraphVertex, endVertex: GraphVertex, weight = 0) {
  const edge = {
    startVertex,
    endVertex,
    weight,
  };
  return edge;
}

export type GraphEdge = ReturnType<typeof createGraphEdge>;

export function createGraph(isDirected = false) {
  const graph = Object.freeze({
    isDirected,
    vertices: [] as Array<GraphVertex>,
    edges: [] as Array<GraphEdge>,
    createGraphEdge,
    createGraphVertex,

    addVertex(vertex: GraphVertex) {
      const existedVertex = this.getVertex(vertex.key);
      if (existedVertex) {
        existedVertex.value = vertex.value;
        return this;
      }
      this.vertices.push(vertex);
      return this;
    },

    getVertex(key: string) {
      return this.vertices.find((vertice) => {
        return vertice.key === key;
      });
    },

    addEdge(edge: GraphEdge) {
      this
        .addVertex(edge.startVertex)
        .addVertex(edge.endVertex)
        .edges.push(edge);
      return this;
    },

    neighbors(vertex: GraphVertex) {
      return this.edges.filter((edge) => {
        return edge.startVertex === vertex || edge.endVertex === vertex;
      });
    },

    toJSON() {
      const { isDirected } = this;
      const { vertices, edges } = this;
      const verticesJSON = vertices.map((vertex) => {
        const { key, value } = vertex;
        return { key, value };
      });
      const edgesJSON = edges.map((edge) => {
        const { startVertex, endVertex, weight } = edge;
        return { start: startVertex.key, end: endVertex.key, weight };
      });
      return { isDirected, vertices: verticesJSON, edges: edgesJSON };
    },
  });

  return graph;
}

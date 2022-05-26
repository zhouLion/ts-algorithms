var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data-structures/Graph.ts
var Graph_exports = {};
__export(Graph_exports, {
  createGraph: () => createGraph
});
module.exports = __toCommonJS(Graph_exports);
function createGraphVertex(value, getKey) {
  const vertex = {
    value,
    key: getKey(value),
    edges: Object.freeze([])
  };
  return vertex;
}
function createGraphEdge(startVertex, endVertex, weight = 0) {
  const edge = {
    startVertex,
    endVertex,
    weight
  };
  return edge;
}
var createGraph = (isDirected = false) => {
  const graph = Object.freeze({
    isDirected,
    vertices: [],
    edges: [],
    createGraphEdge,
    createGraphVertex,
    addVertex(vertex) {
      const existedVertex = this.getVertex(vertex.key);
      if (existedVertex) {
        existedVertex.value = vertex.value;
        return this;
      }
      this.vertices.push(vertex);
      return this;
    },
    getVertex(key) {
      return this.vertices.find((vertice) => {
        return vertice.key === key;
      });
    },
    addEdge(edge) {
      this.addVertex(edge.startVertex);
      this.addVertex(edge.endVertex);
      this.edges.push(edge);
      return this;
    },
    toJSON() {
      const { isDirected: isDirected2 } = this;
    }
  });
  return graph;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createGraph
});

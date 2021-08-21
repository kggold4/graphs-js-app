class GraphAlgo {
    constructor(graph = null) {
        this.init(graph);
    }

    copy() {
        
    }

    init(graph) {
        this.graph = graph;
    }

    getGraph() {
        return this.graph;
    }

    isConnected() {
        this.color = []
        
        
    }

    shortestPath(id1, id2) {
        let empty = []
        if(this.graph.nodeSize() == 0 || !this.graph.hasNode(id1) || !this.graph.hasNode(id2)) return empty;
    }

    shortestPathDist(id1, id2) {

    }
}
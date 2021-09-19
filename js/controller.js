class Controller {
    constructor() {
        this.graph = new Graph();
        this.prevGraphs = new Stack();
        this.nextGraphs = new Stack();
        this.graphAlgo = new GraphAlgo();
    }

    initAlgo() { this.graphAlgo.init(this.graph); }

    savePrev() { this.initAlgo(); this.prevGraphs.push(this.graphAlgo.copy()); }

    prev() {
        this.initAlgo();
        this.nextGraphs.push(this.graphAlgo.copy());
        let prev_graph = this.prevGraphs.pop();
        if(prev_graph != null) this.graph = prev_graph;
    }

    next() {
        this.initAlgo();
        this.
    }

    hasNode(id) { return this.graph.hasNode(id); }

    addNode(id, position, tag, info) { this.savePrev(); this.graph.addNode(id, position, tag, info); }

    removeNode(id) { this.savePrev(); return this.graph.removeNode(id); }

    hasEdge(id1, id2) { return this.graph.addEdge(id1, id2); }

    addEdge(id1, id2) { this.savePrev(); this.graph.addEdge(id1, id2); }

    removeEdge(id1, id2) { this.savePrev(); this.graph.removeEdge(id1, id2); }

    // return number of nodes in the graph
    nodeSize() { return this.graph.nodeSize(); }

    // return number of edges in the graph
    edgeSize() { return this.graph.edgeSize(); }

    // return true if the graph is empty of nodes
    empty() { return this.graph.empty(); }

    // retrun the mode count of the graph
    getMc() { return this.graph.getMc; }

    // return a list with all nodes id (integer) that the graph contains
    getNodesList() { return this.graph.getNodesList(); }
}
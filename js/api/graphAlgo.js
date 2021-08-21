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

    // return true if all the nodes in the graph are connected with edges using BFS algorithm
    isConnected() {

        // if the graph is empty return true
        if(this.graph.empty() || this.graph.nodeSize() == 1) return true;

        let colors = {}
        let i = 0;

        for(const node in this.graph.nodes) {
            colors[node] = Color.WHITE;
            i++;
        }

        console.log(colors);
        let color = []


        let startNode = this.graph.nodes[0];

        let q = new Queue();
        q.enqueue()
        
        return true;
    }

    shortestPath(id1, id2) {
        let empty = []
        if(this.graph.nodeSize() == 0 || !this.graph.hasNode(id1) || !this.graph.hasNode(id2)) return empty;
    }

    shortestPathDist(id1, id2) {

    }
}
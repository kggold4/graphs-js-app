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

        // for each id of node in the graph add to colors with WHITE value
        let colors = {}
        for(const node in this.graph.nodes) {
            colors[this.graph.nodes[node].id] = Color.WHITE;
        }

        // getting the first node in the graph and add it to the queue
        let startNode = this.graph.nodes[0];
        let q = new Queue();
        q.enqueue(startNode);

        // set the first node as GREY
        colors[startNode.id] = Color.GREY;

        // BFS algorithm
        while(!q.empty()) {
            let u = q.dequeue();
            for(const v in this.graph.getChilds(u.id)) {
                if(colors[v] == Color.WHITE) {
                    colors[v] = Color.GREY;
                    let v_node = this.graph.getNode(v);
                    q.enqueue(v_node);
                }
            }

            // set node as visited = BLACK
            colors[u.id] = Color.BLACK;
        }

        // if all the nodes are visited (BLACK) return true, else: return false
        for(const [key, value] of Object.entries(colors)) {
            if(value != Color.BLACK) return false;
        }
        return true;
    }

    shortestPath(id1, id2) {
        let empty = []
        if(this.graph.nodeSize() == 0 || !this.graph.hasNode(id1) || !this.graph.hasNode(id2)) return empty;
    }

    shortestPathDist(id1, id2) {

    }
}
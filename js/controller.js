// controller class is the class that controll the api and the gui as one in this project
// this is the interface between the user and the data-startures/algorithms and the graphical user interface
class Controller {
    constructor() {
        this.graph = new Graph();
        this.graphAlgo = new GraphAlgo();

        this.prevGraphs = new Stack();
        this.nextGraphs = new Stack();
        
        this.border = new Border();
    }

    /**
     * GUI functions
     */

    refresh_graph() {
        this.drawNodes();
        this.drawEdges();
    }

    drawNodes() {
        for(const node of this.graph.nodes) {
            this.border.drawNode(node.id,
                                 node.position,
                                 node.info,
                                 node.tag,
                                 this.graph.getChilds(node.id),
                                 this.graph.getParents(node.id));
        }
    }

    drawEdges() {
        for(const node_id of this.graph.getNodesList()) {
            console.log("node_id is: ", node_id);
            for(const child of this.graph.getChilds(node_id)) {
                this.border.drawEdge(this.graph.getNode(node_id),
                                        this.graph.getNode(child),
                                        this.graph.getEdgeDistance(parseInt(node_id), parseInt(child)));
            }
            
        }
    }

    /**
     * Graph data structure functions
     */

    createGraph(n, e) {
        this.graph = createRandomGraph(n, e);
        this.initAlgo();
    }

    // each operation save the state current graph in the prev stack
    savePrev() { this.initAlgo(); this.prevGraphs.push(this.graphAlgo.copy()); }

    // return to the last graph
    prev() {
        this.initAlgo();
        this.nextGraphs.push(this.graphAlgo.copy());
        let prev_graph = this.prevGraphs.pop();
        if(prev_graph != null) this.graph = prev_graph;
    }

    // return the the next graph (after doing prev)
    next() {
        this.savePrev();
        let next_graph = this.nextGraphs.pop();
        if(next_graph != null) this.graph = next_graph;
    }

    // return true the graph is contains a node with the id number
    hasNode(id) { return this.graph.hasNode(id); }

    // adding a node by id number
    addNode(id, position, tag, info) { this.savePrev(); this.graph.addNode(id, position, tag, info); }

    // remove a node by id number
    removeNode(id) { this.savePrev(); return this.graph.removeNode(id); }

    // retrun true if id1 is connected by edge to id2 (id1 and id2 are id number of nodes in the graph)
    hasEdge(id1, id2) { return this.graph.addEdge(id1, id2); }

    // connect between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
    addEdge(id1, id2) { this.savePrev(); this.graph.addEdge(id1, id2); }

    // remove connection between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
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

    /**
     * Graph algorithms functions
     */

    // initialize the graph to the graph algo
    initAlgo() {
        let g = this.graphAlgo.getGraph();
        if(g == null || this.graph.getMc() != g.getMc()) {
            this.graphAlgo.init(this.graph);
        }
    }

    // return true if all the nodes in the graph are connected with edges using BFS algorithm
    isConnected() {
        this.initAlgo();
        return this.graphAlgo.isConnected();
    }

    // return the shortest path between two nodes using Dijkstra algorithm
    shortestPath(id1, id2) {
        this.initAlgo();
        return this.graphAlgo.shortestPath(id1, id2);
    }

    shortestPathDist(id1, id2) {
        this.initAlgo();
        return this.graphAlgo.shortestPathDist(id1, id2);
    }

    // return the distance of the graph diameter
    diameterDistance() {
        return this.graphAlgo.diameterDistance();
    }
}

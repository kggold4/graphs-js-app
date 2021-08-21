// this class represents a directed weighted graph data structure
class Graph {

    // graph constructor
    constructor() {

        // nodes objects array
        this.nodes = [];

        // each nodes id contains an array with his childes
        this.childes = {};

        // mode count
        this.mc = 0;

        // edge count
        this.ec = 0;
    }

    // getting node object by id number
    // using linear search O(n), n = |V|
    getNode(id) {
        if(!this.hasNode(id)) return null;
        for(var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id == id) return this.nodes[i];
        }
        return this.nodes[id];
    }

    // return true the graph is contains a node with the id number
    // using linear search O(n), n = |V|
    hasNode(id) {
        if(isNaN(id) || id < 0 || this.nodeSize <= 0) return false;
        return containsNode(this.nodes, id);
    }

    // adding a node by id number
    addNode(id, position, tag, info) {

        // if node is already exist
        if(this.hasNode(id)) return false;

        // create new node
        var node = new Node(id, position, tag, info);

        // push to nodes and childes
        this.nodes.push(node);
        this.childes[id] = []
        this.addMc();
        return true;
    }

    // remove a node by id number
    // O(n + e^2), n = |V|, e = |E|
    removeNode(id) {

        // if node is not in the graph
        if(this.nodeSize <= 0 || !this.hasNode(id)) return false;

        // remove edges between node id to his childes
        for(var k = this.childes[id].length - 1; k >= 0; k--) {
            this.removeEdge(parseInt(id), this.childes[id][k]);
        }
        
        // remove node id as a child
        for(var child in this.childes) {
            for(var i = 0; i < this.childes[child].length; i++) {
                if(this.childes[child][i] == id) {
                    this.removeEdge(parseInt(child), this.childes[child][i]);
                }
            }
        }

        // linear search for the node by id
        for(var i = 0; i < this.nodes.length; i++) {

            // found the node
            if(this.nodes[i].id == id) {

                // remove node from nodes
                this.nodes.splice(i, 1);
            }
        }

        // remove node id in childes
        delete this.childes[id];
        this.addMc();
        return true;
    
    }

    // retrun true if id1 is connected by edge to id2 (id1 and id2 are id number of nodes in the graph)
    hasEdge(id1, id2) {
        if(!this.hasNode(id1) || !this.hasNode(id2)) return false;
        else return contains(this.childes[id1], id2);
    }

    // connect between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
    addEdge(id1, id2) {
        if(!this.hasNode(id1) || !this.hasNode(id2) || this.hasEdge(id1, id2) || id1 == id2) return false;
        else {
            this.childes[id1].push(id2);
            this.ec++;
            this.addMc();
            return true;
        }
    }

    // remove connection between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
    removeEdge(id1, id2) {
        if(!this.hasNode(id1) || !this.hasNode(id2) || !this.hasEdge(id1, id2) || id1 == id2) return false;
        else {
            var index = getIndex(this.childes[id1], id2);
            this.childes[id1].splice(index, 1);
            this.ec--;
            this.addMc();
            return true;
        }
    }

    // return the child of a specific node
    getChilds(id) { return this.childes[id]; }

    // return number of nodes in the graph
    nodeSize() { return this.nodes.length; }

    // return number of edges in the graph
    edgeSize() { return this.ec; }

    // retrun the mode count of the graph
    getMc() { return this.mc; }

    // add 1 to the mode count
    addMc() { this.mc++; }

    // console graph
    print() {
        console.log("graph nodes:", this.nodes);
        console.log("graph childs:", this.childes);
        console.log("mc is:", this.mc);
        console.log("|V| is:", this.nodeSize());
        console.log("|E| is:", this.edgeSize());
    }
}

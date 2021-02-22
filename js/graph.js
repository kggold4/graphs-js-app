// graph data structure
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

        // linear search for the node by id
        for(var i = 0; i < this.nodes.length; i++) {

            // found the node
            if(this.nodes[i].id == id) {

                // search for the node in chileds
                for(var j = 0; j < this.childes.length; j++) {

                    // found the node as a parent
                    if(this.childes[j] == id) this.childes[j] = [];

                    // found the node as a child
                    else {
                        for(var k = 0; k < this.childes[j].length; k++) {
                            if(this.childes[j][k] == id) this.childes[j].splice(k, 1);
                        }
                    }
                }

                // remove node
                this.nodes.splice(i, 1);
                this.addMc();
                return true;
            }
        }
        return false;
    }

    // retrun true if id1 is connected by edge to id2 (id1 and id2 are id number of nodes in the graph)
    hasEdge(id1, id2) {
        if(!this.hasNode(id1) || !this.hasNode(id2)) return false;
        else return contains(this.childes[id1], id2);
    }

    // connect between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
    addEdge(id1, id2) {
        if(this.hasEdge(id1, id2) || id1 == id2) return false;
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

    // return number of nodes in the graph
    nodeSize() {
        return this.nodes.length;
    }

    // return number of edges in the graph
    edgeSize() {
        return this.ec;
    }

    // retrun the mode count of the graph
    getMc() {
        return this.mc;
    }

    // add 1 to the mode count
    addMc() {
        this.mc++;
    }

    // console graph
    print() {
        console.log(this.nodes);
        console.log(this.childes);
        console.log("mc is:", this.mc)
    }
}
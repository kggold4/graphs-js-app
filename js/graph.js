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
    getNode(id) {
        if(!this.hasNode(id)) return null;
        for(var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id == id) return this.nodes[i];
        }
        return this.nodes[id];
    }

    // return true the graph is contains a node with the id number
    hasNode(id) {
        if(isNaN(id) || id < 0) return false;
        for(var i = 0; i < this.nodes.length; i++) if(this.nodes[i].id == id) return true;
        return false;
    }

    // adding a node by id number
    addNode(id, position, tag, info) {
        if(this.hasNode(id)) return false;
        var node = new Node(id, position, tag, info);
        this.nodes.push(node);
        this.childes[id] = []
        this.addMc();
        return true;
    }

    // remove a node by id number
    removeNode(id) {
        for(var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id == id) {
                this.nodes.splice(i, 1);
                delete this.childes[id];
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
        if(this.hasEdge(id1, id2)) return false;
        else {
            this.childes[id1].push(id2);
            this.ec++;
            this.addMc();
            return true;
        }
    }

    // remove connection between two nodes in the graph (id1 and id2 are id number of nodes in the graph)
    removeEdge(id1, id2) {
        if(isNaN(id1) || isNaN(id2) || !this.hasNode(id1) || !this.hasNode(id2) || this.childes[id1] != id2) return false;
        else {
            var index = this.childes[id1].indexOf(id2);
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
    }
}
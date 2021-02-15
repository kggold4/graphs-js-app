class Graph {
    constructor() {
        this.nodes = [];
        this.childes = {};
        this.mc = 0;
        this.ec = 0;
    }

    getNode(id) {
        for(var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id == id) return this.nodes[i];
        }
        return this.nodes[id];
    }

    hasNode(id) {
        for(var i = 0; i < this.nodes.length; i++) if(this.nodes[i].id == id) return true;
        return false;
    }

    addNode(id, position, tag, info) {
        if(this.hasNode(id)) return false;
        var node = new Node(id, position, tag, info);
        this.nodes.push(node);
        this.addMc();
        return true;
    }

    removeNode(id) {
        for(var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].id == id) {
                this.nodes.splice(i, 1);
                this.addMc();
                return true;
            }
        }
        return false;
    }

    connect(id1, id2) {
        if(isNaN(id1) || isNaN(id2) || !this.hasNode(id1) || !this.hasNode(id2) || this.childes[id1] == id2) return false;
        else {
            this.childes[id1] = id2;
            this.ec++;
            this.addMc();
            return true;
        }

    }

    removeEdge(id1, id2) {
        if(isNaN(id1) || isNaN(id2) || !this.hasNode(id1) || !this.hasNode(id2) || this.childes[id1] != id2) return false;
        else {
            delete this.childes[id1];
            this.ec--;
            this.addMc();
            return true;
        }
    }

    nodeSize() {
        return this.nodes.length;
    }

    edgeSize() {
        return this.ec;
    }

    getMc() {
        return this.mc;
    }

    addMc() {
        this.mc++;
    }

    print() {
        console.log(this.nodes);
        console.log(this.childes);
    }
}
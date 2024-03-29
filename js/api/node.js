// this class represents a node (vertex) data structure in a directed weighted graph
class Node {
    
    // constructor
    constructor(id = node_counter, position = getPosition(), tag = 0, info = '') {
        this.id = id;
        if(position == null) this.position = getPosition();
        else this.position = position;
        this.tag = tag;
        if(info == '' || info == null) this.info = String(id);
        else this.info = info;
        node_counter++;
    }

    // set node id
    setId(id) { this.id = id; }

    // get node id
    getId() { return this.id; }

    // set node position
    setPosition(position) { this.position = position; }

    // get node position
    getPosition() { return this.position; }

    // set node tag
    setTag(tag) { this.tag = tag; }

    // get node tag
    getTag() { return this.tag; }

    // set node info
    setInfo(info) { this.info = info; }

    // get node info
    getInfo() { return this.info; }
}

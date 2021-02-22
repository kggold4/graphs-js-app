class Node {
    
    // constructor
    constructor(id, position, tag, info) {

        if(id == null) this.id = node_counter;
        else this.id = id;

        if(position == null) this.position = getPosition();
        else this.position = position;

        if(tag == null) this.tag = 0;
        else this.tag = tag;

        if(info == null) this.info = "";
        else this.info = info;

        node_counter++;
        
    }

    // set node id
    setId(id) {
        this.id = id;
    }

    // get node id
    getId() {
        return this.id;
    }

    // set node position
    setPosition(position) {
        this.position = position;
    }

    // get node position
    getPosition() {
        return this.position;
    }

    // set node tag
    setTag(tag) {
        this.tag = tag;
    }

    // get node tag
    getTag() {
        return this.tag;
    }

    // set node info
    setInfo(info) {
        this.info = info;
    }

    // get node info
    getInfo() {
        return this.info;
    }
    
}
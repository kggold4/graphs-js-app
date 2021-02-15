class Node {
    
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

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setPosition(position) {
        this.position = position;
    }

    getPosition() {
        return this.position;
    }

    setTag(tag) {
        this.tag = tag;
    }

    getTag() {
        return this.tag;
    }

    setInfo(info) {
        this.info = info;
    }

    getInfo() {
        return this.info;
    }
    
}
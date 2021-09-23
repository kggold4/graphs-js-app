const border_size = 150;
const pos_space = 25;

function showPos(id) {
    let pos = document.getElementById(String('pos' + id));
    pos.style.display="block";
}

function hidePos(id) {
    let pos = document.getElementById(String('pos' + id));
    pos.style.display="none";
}

function showDist(id, childs, parents) {
    console.log("(show) id: ", id, "childs: ", childs, "parents: ", parents);
    if(childs.length > 0) {
        for(const i of childs) {
            document.getElementById("dist" + id + "to" + i).style.display = "block";
        }
    }
    if(parents.length > 0) {
        for(const i of parents) {
            document.getElementById("dist" + i + "to" + id).style.display = "block";
        }
    }
}

function hideDist(id, childs, parents) {
    console.log("(hide) id: ", id, "childs: ", childs, "parents: ", parents);
    if(childs.length > 0) {
        for(const i of childs) {
            document.getElementById("dist" + id + "to" + i).style.display = "none";
        }
    }
    if(parents.length > 0) {
        for(const i of parents) {
            document.getElementById("dist" + i + "to" + id).style.display = "none";
        }
    }
}

class Border {
    constructor() {
        
    }

    addToMain(content) {
        let current_content = main.innerHTML;
        main.innerHTML = current_content + content;
    }

    drawNode(id, position, info, tag, childs, parents) {
        let content = '';
        content += '<span\
            id="' + String("node" + id) + '"\
            class="node"\
            onmouseover="showPos(' + id + ');showDist(' + id + ',[' + childs + '],[' + parents + ']);"\
            onmouseout="hidePos(' + id +');hideDist(' + id + ',[' + childs + '],[' + parents + ']);"\
            >';
        content += info;
        content += '</span>';
        content += '<span\
            id="' + String("pos" + id) + '"\
            class="pos"\
            >';
        content += '<span class="small bold italic">X:</span> ' + position[0].toFixed(3);
        content += ', '
        content += '<span class="small bold italic">Y:</span> ' + position[1].toFixed(3);
        content += '</span>';
        this.addToMain(content);
        let node = document.getElementById(String("node" + id));
        let pos = document.getElementById(String("pos" + id));
        let x_pos = position[0];
        let y_pos = position[1];
        node.style.left = x_pos + 'px';
        node.style.top = y_pos + 'px';
        pos.style.left = x_pos + pos_space + 'px';
        pos.style.top = y_pos + pos_space + 'px';
    }

    drawEdge(node1, node2, dist) {
        var content = '';
        content += '<svg class="edge"\
            >';
        content += '<line\
            id="' + String("edge" + node1.id + "to" + node2.id) + '"\
            x1="' + node1.position[0] + '"\
            y1="' + node1.position[1] + '"\
            x2="' + node2.position[0] + '"\
            y2="' + node2.position[1] + '"\
            >';
        content += '</line>';
        content += '</svg>';
        content += '<span\
            id="' + String("dist" + node1.id + "to" + node2.id) + '"\
            class="dist"\
            >';
        content += '<span class="small bold italic">dist: </span>';
        content += dist.toFixed(3);;
        content += '</span>';
        this.addToMain(content);
        let line_dist = document.getElementById(String("dist" + node1.id + "to" + node2.id));
        let x_pos = (node1.position[0] + node2.position[0]) / 2;
        let y_pos = (node1.position[1] + node2.position[1]) / 2;
        line_dist.style.left = x_pos + 'px';
        line_dist.style.top = y_pos + 'px';
    }
}

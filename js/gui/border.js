const border_size = 150;
const pos_space = 25;
let current_nodes_ids = [];
let current_pos_ids = [];
let current_svgedges_ids = [];
let current_edges_ids = [];
let current_dist_ids = [];

function clear_draws() {
    for(const id of current_nodes_ids) {
        if(document.getElementById(id) != null) document.getElementById(id).remove();
    }
    for(const id of current_pos_ids) {
        if(document.getElementById(id) != null) document.getElementById(id).remove();
    }
    for(const id of current_svgedges_ids) {
        if(document.getElementById(id) != null) document.getElementById(id).remove();
    }
    for(const id of current_edges_ids) {
        if(document.getElementById(id) != null) document.getElementById(id).remove();
    }
    for(const id of current_dist_ids) {
        if(document.getElementById(id) != null) document.getElementById(id).remove();
    }
}

function showPos(id) {
    let pos = document.getElementById(String('pos' + id));
    pos.style.display="block";
}

function hidePos(id) {
    let pos = document.getElementById(String('pos' + id));
    pos.style.display="none";
}

function showDist(id, childs, parents) {
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

function change_pos(id) {

    node_id = String("node" + id);
    console.log("(change_pos) id is: ", id);
    var elem = document.getElementById(node_id);
  
    var mousePosition;
    var offset = [0,0];
    var isDown = false;
    
    elem.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            elem.offsetLeft - e.clientX,
            elem.offsetTop - e.clientY
        ];
    }, true);
  
    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
  
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
  
                x : event.clientX,
                y : event.clientY
  
            };
            elem.style.left = (mousePosition.x + offset[0]) + 'px';
            elem.style.top  = (mousePosition.y + offset[1]) + 'px';


            
            // let childs = controller.getChilds(id);
            // // console.log("childs of ", id, " are: ", childs);
            // for(const child of childs) {
            //     controller.drawEdge(id, child);
            // }
            


            // for(const node_id of this.graph.getNodesList()) {
            //     for(const child of this.graph.getChilds(node_id)) {
            //         this.border.drawEdge(this.graph.getNode(node_id),
            //                                 this.graph.getNode(child),
            //                                 this.graph.getEdgeDistance(parseInt(node_id), parseInt(child)));
            //     } 
            // }
            
        }
    }, true);
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
            onmouseover="change_pos(' + id + ');"\
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
        current_nodes_ids.push(String("node" + id));
        current_pos_ids.push(String("pos" + id));
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
            id="' + String("svgedge" + node1.id + "to" + node2.id) + '"\
            >';
        content += "<defs>\
            <marker\
            id='head'\
            orient='auto'\
            markerWidth='7'\
            markerHeight='7'\
            refX='10.5'\
            refY='2'>\
            <path d='M0,1 V4 L3,2 Z' fill='red'/>\
            </marker>\
            </defs>";
        content += '<line\
            id="' + String("edge" + node1.id + "to" + node2.id) + '"\
            x1="' + node1.position[0] + '"\
            y1="' + node1.position[1] + '"\
            x2="' + node2.position[0] + '"\
            y2="' + node2.position[1] + '"\
            marker-end="url(#head)"\
            stroke-width="2.5"\
            fill="none"\
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
        current_svgedges_ids.push(String("svgedge" + node1.id + "to" + node2.id));
        current_edges_ids.push(String("edge" + node1.id + "to" + node2.id));
        current_dist_ids.push(String("dist" + node1.id + "to" + node2.id));
        let line_dist = document.getElementById(String("dist" + node1.id + "to" + node2.id));
        let x_pos = (node1.position[0] + node2.position[0]) / 2;
        let y_pos = (node1.position[1] + node2.position[1]) / 2;
        line_dist.style.left = x_pos + 'px';
        line_dist.style.top = y_pos + 'px';
    }
}

/**
 * arrows on edges taken from:
 * <!-- http://jsfiddle.net/Z5Qkf/1/ -->
 * <!-- https://stackoverflow.com/questions/11808860/how-to-place-arrow-head-triangles-on-svg-lines -->
 */
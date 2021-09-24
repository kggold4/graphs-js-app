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

// function canvas_arrow(context, fromx, fromy, tox, toy) {
//     var headlen = 10; // length of head in pixels
//     var dx = tox - fromx;
//     var dy = toy - fromy;
//     var angle = Math.atan2(dy, dx);
//     context.moveTo(fromx, fromy);
//     context.lineTo(tox, toy);
//     context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
//     context.moveTo(tox, toy);
//     context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
// }

// function drawArrow(fromx, fromy, tox, toy){
//     //variables to be used when creating the arrow
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     const width = 22;
//     var headlen = 10;
//     // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
//     tox -= Math.cos(angle) * ((width*1.15));
//     toy -= Math.sin(angle) * ((width*1.15));

//     var angle = Math.atan2(toy-fromy,tox-fromx);

//     //starting path of the arrow from the start square to the end square and drawing the stroke
//     ctx.beginPath();
//     ctx.moveTo(fromx, fromy);
//     ctx.lineTo(tox, toy);
//     ctx.strokeStyle = "#cc0000";
//     ctx.lineWidth = width;
//     ctx.stroke();

//     //starting a new path from the head of the arrow to one of the sides of the point
//     ctx.beginPath();
//     ctx.moveTo(tox, toy);
//     ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

//     //path from the side point of the arrow, to the other side point
//     ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

//     //path from the side point back to the tip of the arrow, and then again to the opposite side point
//     ctx.lineTo(tox, toy);
//     ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

//     //draws the paths created above
//     ctx.strokeStyle = "#cc0000";
//     ctx.lineWidth = width;
//     ctx.stroke();
//     ctx.fillStyle = "#cc0000";
//     ctx.fill();
// }

// function midMarkers(poly,spacing) {
//     var svg = poly.ownerSVGElement;
//     for(var pts = poly.points, i = 1; i < pts.numberOfItems; ++i) {
//         var p0 = pts.getItem(i-1), p1 = pts.getItem(i);
//         var dx = p1.x - p0.x, dy = p1.y - p0.y;
//         var d = Math.sqrt(dx*dx+dy*dy);
//         var numPoints = Math.floor( d/spacing );
//         dx /= numPoints;
//         dy /= numPoints;
//         for (var j=numPoints-1;j>0;--j){
//             var pt = svg.createSVGPoint();
//             pt.x = p0.x+dx*j;
//             pt.y = p0.y+dy*j;
//             pts.insertItemBefore(pt,i);
//         }
//     if (numPoints>0) i += numPoints-1;
//     }
// }



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
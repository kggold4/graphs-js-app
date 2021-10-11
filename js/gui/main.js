function start() {
    const main = document.getElementById('main');
    const space_between_nodes = document.getElementById('space_between_nodes');
    const range_output = document.getElementById('range_output');
    const number_of_nodes_input = document.getElementById('number_of_nodes_input');
    const number_of_edges_input = document.getElementById('number_of_edges_input');

    let controller = new Controller();
    controller.createGraph(10, 20);
    controller.graph.print();
    controller.refresh_graph();

    console.log(controller.isConnected());
    console.log("shortest path from 0 to 8 : ", controller.shortestPath(0, 8));
    console.log("shortest path from 0 to 8 : ", controller.shortestPathDist(0, 8));
    console.log("diameter distance : ", controller.diameterDistance());
}

function check_range() {
    space = space_between_nodes.value
    range_output.innerHTML = space;
}

let open =  false;

function show(id) {
    let element = document.getElementById(id);
    let mark = document.getElementById(id + "_mark");
    if(element.style.display == 'none' || !open) {
        element.style.display = 'block';
        mark.innerHTML = '-';
        open = true;
    } else {
        element.style.display = 'none';
        mark.innerHTML = '+';
        open = false;
    }
}
let node_counter = 0;
let space = 500;

// return a randomal postion of a node [x, y, z]
function getPosition() {
    return [Math.random() * space, Math.random() * space, 0];
}

// calculate distance function between two nodes
function distance(node1, node2) {
    var deltaX = node1.getPosition()[0] - node2.getPosition()[0];
    var deltaY = node1.getPosition()[1] - node2.getPosition()[1];
    var deltaZ = node1.getPosition()[2] - node2.getPosition()[2];
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2));
}

function createRandomGraph(n, e, start_counter_nodes = 1) {
    let graph = new Graph();
    for(var i = start_counter_nodes; i <= n; i++) {
        graph.addNode(i);
    }
    let count_edges = 0;
    while(count_edges < e) {
        let id1 = randIntBetween(start_counter_nodes, n);
        let id2 = randIntBetween(start_counter_nodes, n);

        while(id1 === id2 || graph.hasEdge(id1, id2)) {
            id1 = randIntBetween(start_counter_nodes, n);
            id2 = randIntBetween(start_counter_nodes, n);
        }

        graph.addEdge(id1, id2);
        count_edges++;
    }
    return graph;
}
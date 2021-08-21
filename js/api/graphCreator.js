let node_counter = 0;

// return a randomal postion of a node [x, y, z]
function getPosition() {
    return [Math.random(), Math.random(), 0];
}

// calculate distance function between two nodes
function distance(node1, node2) {
    var deltaX = node1.getPosition[0] - node2.getPosition[0];
    var deltaY = node1.getPosition[1] - node2.getPosition[1];
    var deltaZ = node1.getPosition[2] - node2.getPosition[2];
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2));
}

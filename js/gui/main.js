function start() {
    const main = document.getElementById('main');
    const space_between_nodes = document.getElementById('space_between_nodes');
    const range_output = document.getElementById('range_output');
    const number_of_nodes_input = document.getElementById('number_of_nodes_input');
    const number_of_edges_input = document.getElementById('number_of_edges_input');
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
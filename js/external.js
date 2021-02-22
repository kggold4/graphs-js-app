// linear search on given array O(n)
function contains(arr, item) {
    for(var i = 0; i < arr.length; i++) if(arr[i] == item) return true;
    return false;
}

function containsNode(arr, id) {
    for(var i = 0; i < arr.length; i++) if(arr[i].getId() == id) return true;
    return false;
}

// getting an index of an item in a given array
// if the item cannot be found return -1
function getIndex(arr, item) {
    for(var i = 0; i < arr.length; i++) if(arr[i] == item) return i;
    return -1;
}
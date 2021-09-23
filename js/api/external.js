// linear search on given array and an item O(n)
function contains(arr, item) {
    for(var i = 0; i < arr.length; i++) if(arr[i] == item) return true;
    return false;
}

// linear search on given array and an id of node O(n)
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

// for getting a size of an dict
Object.size = function(obj) {
    var size = 0;
    for(var key in obj) if(obj.hasOwnProperty(key)) size++;
    return size;
};

// return a random integer between min and max numbers (both inclusive)
function randIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
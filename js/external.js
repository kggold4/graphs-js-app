function contains(arr, item) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == item) return true;
    }
    return false;
}

function index(arr, item) {
    if(!contains(arr, item)) return -1;
    else {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == item) return i;
        }
    }
}
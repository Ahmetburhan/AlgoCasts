function QuickSort(arr) {
    function recurse(s, e) {
        if (s >= e) return;
        let wall = s;
        let pivot = e;
        for (let current = s; current < e; current++) {
            if (arr[current] < arr[pivot]) {
                [arr[current], arr[wall]] = [arr[wall], arr[current]];
                wall++;
            }
        }
        [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]]
        recurse(s, wall - 1);
        recurse(wall + 1, e);
    }
    recurse(0, arr.length - 1);
    return arr;
}

console.log(QuickSort([9, 8, 1, 2, 6, 3, 7, 4, 5]))
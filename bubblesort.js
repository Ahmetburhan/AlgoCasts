function bubbleSort(array) {

    let swapped = true;

    while (swapped) {
        swapped = false;

        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }

        }
        console.log(array);

    }
    return array;
}

let a = [5, 4, 3, 2, 0, 6, 3, 2, 1, 3, 3];

a = bubbleSort(a);


console.log(a);
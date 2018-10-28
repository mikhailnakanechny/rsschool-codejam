function recursion(tree) {
    const array = [];

    function recursiveFill(node, level) {

        if (node.left){
            recursiveFill(node.left, level + 1);}

        if (node.right) {
            recursiveFill(node.right, level + 1);}

        if (array[level]) {
            array[level] = array[level].concat([node.value]);
        }
        else {
            array[level] = [node.value];
        }


    }

    recursiveFill(tree, 0);

    return array;
}



let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]

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




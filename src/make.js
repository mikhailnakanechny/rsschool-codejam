function make(){
    const array =[...arguments];

    return function solution (){
        if (typeof arguments[0] === 'function' ){
            return array.reduce(arguments[0]);}
            else {
                array.push(...arguments);
                return solution;}
    }
}


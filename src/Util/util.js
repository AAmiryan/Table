const filteredArray = (targetArr, findIndexFn, updateFn) => {
    let newArray = [...targetArr];
    const index = newArray.findIndex(findIndexFn);
    newArray.splice(index, 1, updateFn());
    return newArray;
}

const removedArray = (targetArr, findIndexFn) => {   
    const arr = targetArr.filter(findIndexFn)
    return arr;
}


export {
    removedArray, 
    filteredArray
}
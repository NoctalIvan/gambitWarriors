// select an element in an array with a transformation fun and a comparison fun
// trans = element to value to compare
// comp = true if 1st val better than 2nd
module.exports = (arr, trans, comp) => {
    return arr.slice(1).reduce((best, val) => 
        comp(trans(val), best.val) ? {elem: val, val: trans(val)} : best,
        {elem: arr[0], val: trans(arr[0])}
    ).elem
}
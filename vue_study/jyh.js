function strCut(str,num) {
    let strArr = [];
    for(let i = 0; i < str.length;i += num)strArr.push(str.slice(i,i + num));
    return strArr;
}
function toNum(arr) {
    let arr2 = [];
    for(let i = 0;i < arr.length; i++){
        // let j = arr[i];
        // arr2[i] = parseInt(j,16);
        arr2[i] = parseInt(arr[i],16);
    }
    return arr2;
}
function sum(arr) {
    let  k = 0;
    for(i = 0; i < arr.length; i++){
        k = k+arr[i];
    }
    return k;
}
function lastStep(num) {
    let str = num + "";
    let arr = str.split('');
    // console.log(arr);
    let str1 = arr[arr.length-2] +''+ arr[arr.length-1];
    let k =  parseInt(str1).toString(16).toUpperCase();
    if(k.length == 1){
        k = k.padStart(2,'0')
    }
    return k;
}
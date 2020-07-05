let w  = 10;
let i = 0;

function setup(){
    createCanvas(700, 200);
    value = new Array(floor(width/ w));
    item = value.length;
    for (i = 0; i < item; i ++){
        value[i] = random(height);
    }
    mergeSort(value);
}

function mergeSort(arr) {
    if (arr.length === 1) {
      return arr
    }
  
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle) 
    return merge(arr,
      mergeSort(left),
      mergeSort(right)
    )
  }
  

  function merge(arr, left, right) {
    let result = []
    let a = 0
    let b = 0
  
    while (a < left.length && b < right.length) {
        if (left[a] < right[b]) {
            result.push(left[a])
            a++
        }  
        else {
            result.push(right[b])
            b++
        }
    }
  
    while (a < left.length){
        result.push(left[a])
        a ++
    }
    while (b < right.length){
        result.push(right[b])
        b ++
    }
    for (let i = 0;  i < result.length; i ++){
        arr[i] = result[i];
    }
    return result;
  }

function draw(){
    background(51);
    for (i = 0; i < value.length; i ++){
        stroke(0);
        fill(255);
        rect(i * w, height - value[i], w, value[i]);
    
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
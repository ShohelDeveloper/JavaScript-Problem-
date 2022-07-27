// argument
function sum(){
        var sum = 0
        for(var i = 0; i < arguments.length; i++){
            sum += arguments[i]
        }
        console.log(sum)
}

sum(1,2,3)

// argument lenth
console.log(arguments.length)

    //   /////////////////////////////////////////////////
    function func(n) {
        var f = () => arguments[0] + n; 
        return f();
    }
      
    console.log(func(3)); 


    // //////////////////////////////////////////

function add(m,s){
    return m + s
}

var arr = []

arr.push(add)

console.log(arr)
console.log(arr[0])
console.log(arr[0](5,3))

// ///////////////////////////////////////////////////////////

var arr = [1,2,3]

var include = arr.forEach( (v,i,a) =>{
       console.log(a)
})

////////////////////////////////////////////////

var arr = [1,2,3]

var include = arr.reduce( (prev,curr) =>{
       console.log(prev,curr)
})


////////////////////////////////

var arr = [1,2,3]
 
var sum = arr.reduce((prev,curre) =>{
    return prev + curre
})
 
console.log(sum)

//////////////////////////////////////

function first(c){
    var result = 1
      return function(n){
          for( var i = 0; i < c; i++){c
             result *= n
          }
          return result
      }
     
  }
   
  var base10 = first(10)
  console.log(base10(2))


//   ///////////////////////////////////////////////

var arr = [92 ,1,75,2,3,4,5]

function myReduce(arr,cb,acc){
    for(var i = 0; i < arr.length; i++){
        acc = cb(acc,arr[i])
    }
    return acc
}
 
var result = myReduce(arr,(prev,curre)=>{
 
            return prev + curre
}, 0)

console.log(result)
let test = "equal"
console.log(test == "equal")
console.log(test != "equal")

console.log(test.toLowerCase()== 'equal')

let  value = 10;

console.log(value>10)
console.log(value<10)
console.log(value>=10)
console.log(value<=10)

if (value<=8 && value>=10){
    console.log(" ..")
}
    
if (value<=8 || value>=10){
    console.log("---")
}

arr = [11 , 22 ,34 ,4]
if(23 in arr){
    console.log(true)
}
if(!24 in arr){
    console.log(false)
}
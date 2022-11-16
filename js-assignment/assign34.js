favorite_pizzas = ['pineapple ' ,'pepperoni ' , 'veggie ' ];



for(let i=0; i<favorite_pizzas.length; i++){
    console.log(favorite_pizzas[i]);
}

console.log("\n")


favorite_pizzas.forEach((n) => {
    console.log("I really like " + n + " pizza!")
});


console.log("\nI really like pizza!");
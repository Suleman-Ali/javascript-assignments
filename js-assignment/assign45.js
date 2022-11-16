function makeCar(manufacturer, model_name, color="blue", two_package=0){
    car={"Manufacturer":manufacturer, "Model Name":model_name, "Color":color,"Two Package":two_package}
    return car;
    
    }
    car=makeCar("supra","outback", color="blue",two_package=0)
    console.log(car)
    
    
    car=makeCar("ferrari","outback", color="Red")
    console.log(car)
    
    
    car=makeCar("subaru","outback")
    console.log(car)
show_magicians = ['Harry Houdini', 'David Blaine', 'Teller']


show_magicians.forEach(F => {
    console.log(F)
});
    
    
    function make_great(magicians){
    
    great_magicians = []
    
    while (magicians){
        magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.push(great_magician)
    }
    
    
    
    }
    
    console.log("\nGreat magicians:")
    great_magicians = make_great(show_magicians)
    show_magicians(great_magicians)
    
    console.log("\nOriginal magicians:")
    show_magicians(magicians)
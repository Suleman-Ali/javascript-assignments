function show_magicians(magicians){

for (magician in magicians)
    console.log(magician)
}



function make_great(magicians){

great_magicians = []

while (magicians){
    magician = magicians.pop()
    great_magician = magician + ' the Great'
    great_magicians.push(great_magician)
}

for (great_magician in great_magicians){
    magicians.push(great_magician)

return magicians;
}

}
magicians = ['Harry Houdini', 'David Blaine', 'Teller']
show_magicians(magicians)

console.log("\nGreat magicians:")
great_magicians = make_great(magicians)
show_magicians(great_magicians)

console.log("\nOriginal magicians:")
show_magicians(magicians)
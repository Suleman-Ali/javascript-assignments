function make_great(list_of_magicians){
    new_list = []
    for (magician in list_of_magicians)
        new_list.push('The great ' + magician)
    return new_list;
}
// magician_names = ['Alice', 'Alex', 'Blake']
// magician_names = make_great(magician_names)
// console.log(magician_names)

// function show_magicians(names){
//     for (name in names){
//         console.log(name)
// }
// }
// show_magicians(magicians)
// greats = []
// function make_great(names){
//     for (name in names){
//             greats.push(name + ' the Great')
// }
// }
// make_great(magicians)
// console.log(greats)
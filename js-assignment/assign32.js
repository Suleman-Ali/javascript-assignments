var current_users = ['Henry','David','Charles','Robert','James','Thomas'];
var new_users = ['Alex','Bobby','David','Henry', 'Eric'];


for(var i=0; i<new_users.length; i++){

if(current_users.indexOf(new_users[i])){
console.log(new_users[i] + ' will need to enter a new username.');
}

else
  console.log('The username ' + new_users[i] +' is available.')

}

var user_names = ['Alex','Bobby','admin','John', 'Eric'];
var userCount = user_names.length;
for(var i=0; i<userCount; i++){

    if(user_names[i] == 'admin'){
        console.log('Hello admin, would you like to see a status report?');
    }

    else{
        console.log('Hello ' + user_names[i] + ', thank you for logging in again.');
    }
}
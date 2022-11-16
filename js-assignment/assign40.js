function make_album(artist_name, album_title, number_of_songs){
    album = {'artist name': artist_name, 'album_title': album_title}
    
    if (number_of_songs)
        album['number of songs'] = number_of_songs
    return album
}
musician = make_album('Kanye west', 'Ye')
console.log(musician)
musician = make_album('xxtention', 'Sad', number_of_songs=2)
console.log(musician)

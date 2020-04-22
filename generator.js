function generate(){
    fetch('https://random-word-api.herokuapp.com/word?number=3')
  .then(response => response.json())
	.then(json => {
  let password = ""
	json.forEach(word => {
	password += word.charAt(0).toUpperCase() + word.slice(1);
})
password += Math.floor(Math.random()*999)
	return password
})
}

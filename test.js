
const meme = require('./index');
const data = meme.meme()

data.then(function(result) {
    console.log(result)
})


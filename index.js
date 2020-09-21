module.exports={
    meme: async function(poke) {
        const fetch = require("node-fetch");
   const response = await fetch(`https://some-random-api.ml/pokedex?pokemon=${encodeURIComponent(poke)}`)
   const data = await response.json()
   const memes = {
    image: data.image,
    caption: data.caption,
    category: data.category
    }
    return memes
    }
}
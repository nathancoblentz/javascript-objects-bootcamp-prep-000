var playlist = new Object ({

      gratefulDead:"Ripple",
      Phish: "Piper",
      theBand: "Cripple Creek",
      tomPetty: "American Girl",
      prince: "Purple Rain",
      kanye: "Gold Digger"

  })


function updatePlaylist(playlist, artistName, songTitle) {
    songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, {'Phil Ochs': songTitle})
}

function removeFromPlaylist(playlist, artistName) {  
  deliete playlist.kanye;
  return playlist;
}

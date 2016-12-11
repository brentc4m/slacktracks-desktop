interface SpotifyApi {
  request(
    name: string,
    args: string[],
    cb1?: () => void,
    cb2?: () => void,
    cb3?: () => void,
    cb4?: () => void): void
}

interface SpotifyApiContainer {
  readonly api: SpotifyApi
}

declare const SpotifyApi: SpotifyApiContainer

function testEvent(name: string) {
  SpotifyApi.api.request(name, ["main"], function () {
    console.log("1")
    console.log(arguments)
  }, function () {
    console.log("2")
    console.log(arguments)
  }, function () {
    console.log("3")
    console.log(arguments)
  }, function () {
    console.log("4")
    console.log(arguments)
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const {ipcRenderer} = require("electron")
  ipcRenderer.on("playTrack", (event, trackId) => {
    SpotifyApi.api.request("player_play_track",
      ["main", `spotify:track:${trackId}`])
  })
})

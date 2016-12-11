import { Injectable } from "@angular/core"
import WebViewElement = Electron.WebViewElement
import { PlaybackTrack } from "../models/playbacktrack"

@Injectable()
export class PlayerService {
  protected spotify = <WebViewElement> document.getElementById("spotify")

  constructor() {
    this.spotify.addEventListener("dom-ready",
      () => this.spotify.openDevTools())
  }

  playTrack(track: PlaybackTrack): void {
    this.spotify.send("playTrack", track.backendMetadata.id)
  }
}

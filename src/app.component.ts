import { Component } from "@angular/core"
import { TrackService } from "./services/trackservice"
import { PlayerService } from "./services/playerservice"

@Component({
  moduleId: module.id,
  providers: [
    PlayerService,
    TrackService,
  ],
  selector: "app",
  templateUrl: "app.component.html",
})
export class AppComponent {
  constructor(
    protected readonly playerService: PlayerService,
    protected readonly trackService: TrackService,
  ) {}

  playNext(): void {
    const options = {playQueue: true, playLoved: true}
    // FIXME: error handling
    this.trackService.getNextTrack(options).subscribe(
      track => this.playerService.playTrack(track)
    )
  }
}

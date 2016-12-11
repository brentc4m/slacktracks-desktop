import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import "rxjs/Rx"
import { ErrorObservable } from "rxjs/observable/ErrorObservable"
import { PlaybackOptions } from "../models/playbackoptions"
import { PlaybackTrack } from "../models/playbacktrack"

@Injectable()
export class TrackService {
  private readonly baseUrl = "http://localhost:9000"

  constructor(private readonly http: Http) {}

  // FIXME: DRY
  getNextTrack(options: PlaybackOptions): Observable<PlaybackTrack> {
    return this.http.post(`${this.baseUrl}/next-track`, options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // FIXME: common, handle play errors better
  private handleError(error: Response | any): ErrorObservable<string> {
    let errMsg: string
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ""} ${error.json()}`
    } else {
      errMsg = error.message ? error.message : error.toString()
    }
    console.error(errMsg)
    return Observable.throw(errMsg)
  }
}

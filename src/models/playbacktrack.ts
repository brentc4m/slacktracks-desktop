import { BackendMetadata } from "./backendmetadata"
import { Track } from "./track"

export interface PlaybackTrack {
  readonly info: Track
  readonly backendMetadata: BackendMetadata
}

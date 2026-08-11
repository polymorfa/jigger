export const WamMediaStreamPlayback = 1584 as const

export interface MediaStreamPlaybackEvent {
  /** field 1, wire `overall_t` */
  overallT?: string
  /** field 2, wire `media_size` */
  mediaSize?: string
  /** field 3, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 4, wire `bytes_downloaded_start` */
  bytesDownloadedStart?: string
  /** field 5, wire `bytes_transferred` */
  bytesTransferred?: string
  /** field 6, wire `video_duration` */
  videoDuration?: number
  /** field 7, wire `initial_buffering_t` */
  initialBufferingT?: string
  /** field 8, wire `total_rebuffering_t` */
  totalRebufferingT?: string
  /** field 9, wire `total_rebuffering_count` */
  totalRebufferingCount?: number
  /** field 10, wire `overall_play_t` */
  overallPlayT?: string
  /** field 11, wire `playback_state` */
  playbackState?: PLAYBACKSTATETYPE
  /** field 12, wire `forced_play_count` */
  forcedPlayCount?: number
  /** field 13, wire `seek_count` */
  seekCount?: number
  /** field 14, wire `playback_count` */
  playbackCount?: number
  /** field 15, wire `did_play` */
  didPlay?: boolean
  /** field 16, wire `playback_origin` */
  playbackOrigin?: PLAYBACKORIGINTYPE
  /** field 17, wire `playback_error` */
  playbackError?: number
  /** field 18, wire `status_id` */
  statusId?: string
}
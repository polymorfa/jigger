export const WamChannelsVideoPlay = 6556 as const

export interface ChannelsVideoPlayEvent {
  /** field 1, wire `auto_play_t` */
  autoPlayT?: number
  /** field 2, wire `cid` */
  cid?: string
  /** field 3, wire `height` */
  height?: number
  /** field 4, wire `post_id` */
  postId?: string
  /** field 5, wire `video_duration` */
  videoDuration?: number
  /** field 6, wire `video_initial_buffering_t` */
  videoInitialBufferingT?: string
  /** field 7, wire `video_play_origin` */
  videoPlayOrigin?: VIDEOPLAYORIGIN
  /** field 8, wire `video_play_result` */
  videoPlayResult?: VIDEOPLAYRESULT
  /** field 9, wire `video_play_t` */
  videoPlayT?: number
  /** field 10, wire `video_play_type` */
  videoPlayType?: VIDEOPLAYTYPE
  /** field 11, wire `video_size` */
  videoSize?: string
  /** field 12, wire `width` */
  width?: number
  /** field 13, wire `finish_count` */
  finishCount?: number
  /** field 14, wire `watching_module` */
  watchingModule?: string
}
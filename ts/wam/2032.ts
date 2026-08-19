export const WamInlineVideoPlaybackClosed = 2032 as const

export interface InlineVideoPlaybackClosedEvent {
  /** field 1, wire `inline_video_type` */
  inlineVideoType?: INLINEVIDEOTYPE
  /** field 2, wire `inline_video_duration_t` */
  inlineVideoDurationT?: string
  /** field 3, wire `inline_video_played` */
  inlineVideoPlayed?: boolean
  /** field 4, wire `inline_video_stall_t` */
  inlineVideoStallT?: string
  /** field 5, wire `inline_video_watch_t` */
  inlineVideoWatchT?: string
  /** field 6, wire `inline_video_play_start_t` */
  inlineVideoPlayStartT?: string
  /** field 7, wire `inline_video_cancel_before_play_state_t` */
  inlineVideoCancelBeforePlayStateT?: string
  /** field 8, wire `inline_video_complete` */
  inlineVideoComplete?: boolean
  /** field 9, wire `inline_video_completion_rate` */
  inlineVideoCompletionRate?: number
  /** field 10, wire `inline_video_cta_click` */
  inlineVideoCtaClick?: INLINEVIDEOCTACLICK
  /** field 11, wire `inline_video_error` */
  inlineVideoError?: string
  /** field 12, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 13, wire `inline_video_has_rcat` */
  inlineVideoHasRcat?: boolean
  /** field 14, wire `chat_size` */
  chatSize?: number
  /** field 15, wire `is_sent_by_me` */
  isSentByMe?: boolean
  /** field 16, wire `rcat_sender_platform` */
  rcatSenderPlatform?: PLATFORMTYPE
}
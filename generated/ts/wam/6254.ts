export const WamPsChannelsSnaplEvent = 6254 as const

export interface PsChannelsSnaplEventEvent {
  /** field 1, wire `video_event_json` */
  videoEventJson?: string
  /** field 2, wire `app_id` */
  appId?: number
}
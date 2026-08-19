export const WamChannelDyi = 4726 as const

export interface ChannelDyiEvent {
  /** field 1, wire `channel_dyi_event_type` */
  channelDyiEventType?: CHANNELDYIEVENTTYPE
  /** field 2, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 3, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}
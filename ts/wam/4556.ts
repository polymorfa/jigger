export const WamChannelAdmin = 4556 as const

export interface ChannelAdminEvent {
  /** field 1, wire `admin_flow_action_sequence_number` */
  adminFlowActionSequenceNumber?: number
  /** field 2, wire `admin_flow_type` */
  adminFlowType?: ADMINFLOWTYPE
  /** field 3, wire `channel_admin_action` */
  channelAdminAction?: CHANNELADMINACTION
  /** field 4, wire `channel_admin_session_id` */
  channelAdminSessionId?: number
  /** field 5, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 6, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}
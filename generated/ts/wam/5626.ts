export const WamChannelProducerInsightsNavigation = 5626 as const

export interface ChannelProducerInsightsNavigationEvent {
  /** field 1, wire `channel_producer_insights_action_target` */
  channelProducerInsightsActionTarget?: ACTIONTARGET
  /** field 2, wire `channel_producer_insights_action_type` */
  channelProducerInsightsActionType?: CHANNELPRODUCERINSIGHTSACTIONTYPE
  /** field 3, wire `channel_producer_insights_entry_point` */
  channelProducerInsightsEntryPoint?: CHANNELPRODUCERINSIGHTSENTRYPOINT
  /** field 4, wire `channel_producer_insights_sequence_number` */
  channelProducerInsightsSequenceNumber?: number
  /** field 5, wire `channel_producer_insights_surface` */
  channelProducerInsightsSurface?: CHANNELPRODUCERINSIGHTSSURFACE
  /** field 6, wire `cid` */
  cid?: string
  /** field 7, wire `producer_insights_session_id` */
  producerInsightsSessionId?: number
  /** field 8, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 9, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}
export const WamChannelCoreEvent = 4692 as const

export interface ChannelCoreEventEvent {
  /** field 1, wire `channel_core_event_type` */
  channelCoreEventType?: CHANNELEVENTTYPE
  /** field 2, wire `channel_entry_point` */
  channelEntryPoint?: CHANNELENTRYPOINT
  /** field 3, wire `channel_entry_point_app` */
  channelEntryPointApp?: CHANNELENTRYPOINTAPP
  /** field 4, wire `cid` */
  cid?: string
  /** field 5, wire `entry_point_metadata` */
  entryPointMetadata?: string
  /** field 6, wire `event_surface` */
  eventSurface?: CHANNELEVENTSURFACE
  /** field 7, wire `channel_directory_session_id` */
  channelDirectorySessionId?: number
  /** field 8, wire `channel_core_event_sequence_number` */
  channelCoreEventSequenceNumber?: number
  /** field 9, wire `directory_channel_index` */
  directoryChannelIndex?: number
  /** field 10, wire `channel_entry_point_metadata` */
  channelEntryPointMetadata?: CHANNELENTRYPOINTMETADATA
  /** field 12, wire `channel_event_unit` */
  channelEventUnit?: CHANNELEVENTUNIT
  /** field 13, wire `similar_channels_session_id` */
  similarChannelsSessionId?: number
  /** field 14, wire `discovery_surface` */
  discoverySurface?: TSSURFACE
  /** field 15, wire `channel_discovery_query_id` */
  channelDiscoveryQueryId?: string
  /** field 16, wire `channel_discovery_search_id` */
  channelDiscoverySearchId?: string
  /** field 17, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 18, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 19, wire `channel_request_metadata` */
  channelRequestMetadata?: string
  /** field 20, wire `trace_id_int` */
  traceIdInt?: number
  /** field 21, wire `core_event_trigger` */
  coreEventTrigger?: COREEVENTTRIGGERTYPE
}
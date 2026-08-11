export const WamStatusCrosspostRequest = 4994 as const

export interface StatusCrosspostRequestEvent {
  /** field 1, wire `cac_session_id` */
  cacSessionId?: string
  /** field 2, wire `crosspost_destination` */
  crosspostDestination?: CROSSPOSTDESTINATIONTYPE
  /** field 3, wire `crosspost_error_type` */
  crosspostErrorType?: string
  /** field 4, wire `crosspost_origin` */
  crosspostOrigin?: CROSSPOSTORIGINTYPE
  /** field 5, wire `default_status_privacy_settings` */
  defaultStatusPrivacySettings?: PRIVACYSETTINGSVALUETYPE
  /** field 6, wire `is_auto_crosspost_enabled_in_settings` */
  isAutoCrosspostEnabledInSettings?: boolean
  /** field 7, wire `is_auto_crossposted` */
  isAutoCrossposted?: boolean
  /** field 8, wire `status_cross_post_per_post_status_privacy_setting` */
  statusCrossPostPerPostStatusPrivacySetting?: PRIVACYSETTINGSVALUETYPE
  /** field 9, wire `status_crosspost_media_type` */
  statusCrosspostMediaType?: MEDIATYPE
  /** field 10, wire `status_crosspost_result` */
  statusCrosspostResult?: CROSSPOSTRESULTTYPE
  /** field 11, wire `status_id` */
  statusId?: string
  /** field 12, wire `status_crosspost_entry_point` */
  statusCrosspostEntryPoint?: string
  /** field 13, wire `status_crosspost_share_type` */
  statusCrosspostShareType?: STATUSCROSSPOSTSHARETYPEENUM
  /** field 14, wire `status_crosspost_event_type` */
  statusCrosspostEventType?: string
  /** field 15, wire `status_crosspost_flow_trace_id` */
  statusCrosspostFlowTraceId?: string
  /** field 16, wire `status_crosspost_trace_id` */
  statusCrosspostTraceId?: number
  /** field 17, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
}
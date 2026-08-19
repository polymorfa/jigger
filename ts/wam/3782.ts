export const WamMexEvent = 3782 as const

export interface MexEventEvent {
  /** field 1, wire `is_mex` */
  isMex?: boolean
  /** field 2, wire `mex_event_data` */
  mexEventData?: string
  /** field 3, wire `mex_event_end_time` */
  mexEventEndTime?: number
  /** field 7, wire `mex_event_operation` */
  mexEventOperation?: string
  /** field 8, wire `mex_event_request_size` */
  mexEventRequestSize?: number
  /** field 9, wire `mex_event_response_size` */
  mexEventResponseSize?: number
  /** field 10, wire `mex_event_retries` */
  mexEventRetries?: number
  /** field 11, wire `mex_event_start_time` */
  mexEventStartTime?: number
  /** field 12, wire `mex_event_duration_t` */
  mexEventDurationT?: string
  /** field 13, wire `mex_event_envelope_response_status` */
  mexEventEnvelopeResponseStatus?: number
  /** field 14, wire `mex_event_payload_response_status` */
  mexEventPayloadResponseStatus?: number
}
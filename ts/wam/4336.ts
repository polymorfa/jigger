export const WamMexEventV2 = 4336 as const

export interface MexEventV2Event {
  /** field 1, wire `mex_event_v2_duration_ms` */
  mexEventV2DurationMs?: string
  /** field 2, wire `mex_event_v2_end_time` */
  mexEventV2EndTime?: number
  /** field 3, wire `mex_event_v2_error_codes` */
  mexEventV2ErrorCodes?: string
  /** field 4, wire `mex_event_v2_errors` */
  mexEventV2Errors?: string
  /** field 5, wire `mex_event_v2_has_data` */
  mexEventV2HasData?: boolean
  /** field 6, wire `mex_event_v2_is_mex` */
  mexEventV2IsMex?: boolean
  /** field 7, wire `mex_event_v2_operation_name` */
  mexEventV2OperationName?: string
  /** field 8, wire `mex_event_v2_query_id` */
  mexEventV2QueryId?: string
  /** field 9, wire `mex_event_v2_start_time` */
  mexEventV2StartTime?: number
  /** field 10, wire `mex_event_v2_is_argo_payload` */
  mexEventV2IsArgoPayload?: boolean
  /** field 11, wire `mex_fb_user_type` */
  mexFbUserType?: string
  /** field 12, wire `mex_event_v2_experiment_flag` */
  mexEventV2ExperimentFlag?: number
  /** field 13, wire `trace_id_int` */
  traceIdInt?: number
}
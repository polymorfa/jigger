export const WamNonMessagePeerDataOperationResponse = 3904 as const

export interface NonMessagePeerDataOperationResponseEvent {
  /** field 1, wire `peer_data_error_count` */
  peerDataErrorCount?: number
  /** field 2, wire `peer_data_not_found_count` */
  peerDataNotFoundCount?: number
  /** field 3, wire `peer_data_request_session_id` */
  peerDataRequestSessionId?: string
  /** field 4, wire `peer_data_request_type` */
  peerDataRequestType?: PEERDATAREQUESTTYPE
  /** field 5, wire `peer_data_response_count` */
  peerDataResponseCount?: number
  /** field 6, wire `peer_data_success_process_count` */
  peerDataSuccessProcessCount?: number
  /** field 7, wire `peer_data_success_response_count` */
  peerDataSuccessResponseCount?: number
  /** field 8, wire `peer_data_response_apply_result` */
  peerDataResponseApplyResult?: PEERDATARESPONSEAPPLYRESULTTYPE
  /** field 9, wire `peer_data_request_error_code` */
  peerDataRequestErrorCode?: PEERDATAREQUESTERRORCODE
}
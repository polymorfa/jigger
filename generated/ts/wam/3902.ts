export const WamNonMessagePeerDataMediaUpload = 3902 as const

export interface NonMessagePeerDataMediaUploadEvent {
  /** field 1, wire `peer_data_error_count` */
  peerDataErrorCount?: number
  /** field 2, wire `peer_data_existing_data_no_upload_count` */
  peerDataExistingDataNoUploadCount?: number
  /** field 3, wire `peer_data_not_found_count` */
  peerDataNotFoundCount?: number
  /** field 4, wire `peer_data_request_count` */
  peerDataRequestCount?: number
  /** field 5, wire `peer_data_request_session_id` */
  peerDataRequestSessionId?: string
  /** field 6, wire `peer_data_request_type` */
  peerDataRequestType?: PEERDATAREQUESTTYPE
  /** field 7, wire `peer_data_success_upload_count` */
  peerDataSuccessUploadCount?: number
  /** field 8, wire `peer_data_response_result` */
  peerDataResponseResult?: PEERDATARESPONSERESULTTYPE
  /** field 9, wire `peer_data_success_inline_no_upload_count` */
  peerDataSuccessInlineNoUploadCount?: number
}
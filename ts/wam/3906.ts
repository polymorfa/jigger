export const WamNonMessagePeerDataRequest = 3906 as const

export interface NonMessagePeerDataRequestEvent {
  /** field 1, wire `peer_data_request_count` */
  peerDataRequestCount?: number
  /** field 2, wire `peer_data_request_session_id` */
  peerDataRequestSessionId?: string
  /** field 3, wire `peer_data_request_type` */
  peerDataRequestType?: PEERDATAREQUESTTYPE
  /** field 4, wire `peer_data_request_error_code` */
  peerDataRequestErrorCode?: PEERDATAREQUESTERRORCODE
}
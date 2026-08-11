export const WamPsBufferUpload = 2244 as const

export interface PsBufferUploadEvent {
  /** field 1, wire `ps_buffer_upload_result` */
  psBufferUploadResult?: PSBUFFERUPLOADRESULT
  /** field 2, wire `ps_buffer_upload_t` */
  psBufferUploadT?: string
  /** field 3, wire `ps_buffer_upload_http_response_code` */
  psBufferUploadHttpResponseCode?: number
  /** field 4, wire `ps_token_not_ready_reason` */
  psTokenNotReadyReason?: PSTOKENNOTREADYREASON
  /** field 5, wire `wa_connected_to_chatd` */
  waConnectedToChatd?: boolean
  /** field 6, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 9, wire `ps_upload_reason` */
  psUploadReason?: PSUPLOADREASON
  /** field 10, wire `ps_force_upload` */
  psForceUpload?: boolean
  /** field 11, wire `ps_dithered_t` */
  psDitheredT?: number
  /** field 12, wire `is_from_wamsys` */
  isFromWamsys?: boolean
  /** field 13, wire `ps_buffer_sequence_number` */
  psBufferSequenceNumber?: number
  /** field 14, wire `is_user_sampled` */
  isUserSampled?: boolean
  /** field 15, wire `is_realtime` */
  isRealtime?: boolean
}
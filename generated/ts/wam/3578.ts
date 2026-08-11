export const WamE2eRetryReject = 3578 as const

export interface E2eRetryRejectEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `msg_retry_count` */
  msgRetryCount?: number
  /** field 3, wire `retry_reject_reason` */
  retryRejectReason?: RETRYREJECTREASON
  /** field 4, wire `retry_revoke` */
  retryRevoke?: boolean
  /** field 5, wire `sender_device_type` */
  senderDeviceType?: DEVICETYPE
  /** field 6, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 7, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 8, wire `is_pq` */
  isPq?: boolean
  /** field 9, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 10, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 11, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 12, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 13, wire `pq_fallback_reason` */
  pqFallbackReason?: PQFALLBACKREASON
}
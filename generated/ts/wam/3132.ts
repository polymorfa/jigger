export const WamMessageHighRetryCount = 3132 as const

export interface MessageHighRetryCountEvent {
  /** field 1, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 2, wire `retry_count` */
  retryCount?: number
  /** field 3, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 4, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 5, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 6, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 7, wire `is_receiver_lid_based` */
  isReceiverLidBased?: boolean
  /** field 8, wire `is_sender_lid_based` */
  isSenderLidBased?: boolean
  /** field 9, wire `is_pq` */
  isPq?: boolean
  /** field 10, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 11, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
}
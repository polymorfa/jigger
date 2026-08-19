export const WamSenderKeyExpired = 3130 as const

export interface SenderKeyExpiredEvent {
  /** field 1, wire `chat_type` */
  chatType?: MESSAGECHATTYPE
  /** field 2, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 3, wire `expiry_reason` */
  expiryReason?: EXPIRYREASON
}
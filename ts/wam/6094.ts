export const WamReportingTokenValidationFailureSender = 6094 as const

export interface ReportingTokenValidationFailureSenderEvent {
  /** field 1, wire `client_message_id` */
  clientMessageId?: string
  /** field 2, wire `e2e_receiver_type` */
  e2eReceiverType?: DEVICETYPE
  /** field 3, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 4, wire `edit_type` */
  editType?: EDITTYPE
  /** field 5, wire `is_lid` */
  isLid?: boolean
  /** field 6, wire `is_message_retry` */
  isMessageRetry?: boolean
  /** field 7, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 8, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 9, wire `offline` */
  offline?: boolean
  /** field 10, wire `reporting_token_validation_failure_reason` */
  reportingTokenValidationFailureReason?: REPORTINGTOKENVALIDATIONFAILUREREASON
  /** field 11, wire `sender_jid` */
  senderJid?: string
  /** field 12, wire `is_secret_encrypted_msg` */
  isSecretEncryptedMsg?: boolean
  /** field 13, wire `reporting_token_version` */
  reportingTokenVersion?: number
  /** field 14, wire `is_message_media_retry` */
  isMessageMediaRetry?: boolean
  /** field 15, wire `message_is_forward` */
  messageIsForward?: boolean
  /** field 16, wire `group_history_bundle_message_id` */
  groupHistoryBundleMessageId?: string
}
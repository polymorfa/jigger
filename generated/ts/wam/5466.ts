export const WamReportingTokenValidationFailure = 5466 as const

export interface ReportingTokenValidationFailureEvent {
  /** field 1, wire `edit_type` */
  editType?: EDITTYPE
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 4, wire `reporting_token_validation_failure_reason` */
  reportingTokenValidationFailureReason?: REPORTINGTOKENVALIDATIONFAILUREREASON
  /** field 5, wire `is_lid` */
  isLid?: boolean
  /** field 6, wire `is_message_retry` */
  isMessageRetry?: boolean
  /** field 7, wire `offline` */
  offline?: boolean
  /** field 8, wire `is_secret_encrypted_msg` */
  isSecretEncryptedMsg?: boolean
  /** field 9, wire `reporting_token_version` */
  reportingTokenVersion?: number
  /** field 10, wire `is_message_media_retry` */
  isMessageMediaRetry?: boolean
  /** field 11, wire `message_is_forward` */
  messageIsForward?: boolean
  /** field 13, wire `is_part_of_group_history` */
  isPartOfGroupHistory?: boolean
  /** field 14, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
}
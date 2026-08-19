export const WamE2eMessageSend = 476 as const

export interface E2eMessageSendEvent {
  /** field 1, wire `e2e_successful` */
  e2eSuccessful?: boolean
  /** field 2, wire `e2e_failure_reason` */
  e2eFailureReason?: E2EFAILUREREASON
  /** field 3, wire `retry_count` */
  retryCount?: number
  /** field 4, wire `e2e_destination` */
  e2eDestination?: E2EDESTINATION
  /** field 5, wire `e2e_ciphertext_type` */
  e2eCiphertextType?: E2ECIPHERTEXTTYPE
  /** field 6, wire `e2e_ciphertext_version` */
  e2eCiphertextVersion?: number
  /** field 7, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 8, wire `e2e_receiver_type` */
  e2eReceiverType?: DEVICETYPE
  /** field 9, wire `enc_retry_count` */
  encRetryCount?: number
  /** field 10, wire `message_is_invisible` */
  messageIsInvisible?: boolean
  /** field 11, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 12, wire `is_lid` */
  isLid?: boolean
  /** field 13, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 14, wire `edit_type` */
  editType?: EDITTYPE
  /** field 15, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 16, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 17, wire `bot_type` */
  botType?: BOTTYPE
  /** field 18, wire `e2e_backfill` */
  e2eBackfill?: boolean
  /** field 19, wire `e2e_receiver_device_type` */
  e2eReceiverDeviceType?: E2EDEVICETYPE
  /** field 20, wire `message_distribution_type` */
  messageDistributionType?: MESSAGEDISTRIBUTIONENUMTYPE
  /** field 21, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 22, wire `group_encryption_state` */
  groupEncryptionState?: GROUPENCRYPTIONTYPE
  /** field 23, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 24, wire `is_simple_signal` */
  isSimpleSignal?: boolean
  /** field 25, wire `is_pq` */
  isPq?: boolean
  /** field 26, wire `initial_send_attempt_reachability_status` */
  initialSendAttemptReachabilityStatus?: REACHABILITYSTATUS
  /** field 27, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 28, wire `message_type_str` */
  messageTypeStr?: string
}
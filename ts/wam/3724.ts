export const WamIncomingMessageDrop = 3724 as const

export interface IncomingMessageDropEvent {
  /** field 1, wire `e2e_ciphertext_type` */
  e2eCiphertextType?: E2ECIPHERTEXTTYPE
  /** field 2, wire `e2e_destination` */
  e2eDestination?: E2EDESTINATION
  /** field 3, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 4, wire `message_drop_reason` */
  messageDropReason?: MESSAGEDROPREASONTYPE
  /** field 5, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 6, wire `offline` */
  offline?: boolean
  /** field 7, wire `retry_count` */
  retryCount?: number
  /** field 8, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 9, wire `e2e_failure_reason` */
  e2eFailureReason?: E2EFAILUREREASON
  /** field 10, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 11, wire `offline_count` */
  offlineCount?: number
  /** field 12, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 13, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 14, wire `bot_type` */
  botType?: BOTTYPE
  /** field 15, wire `is_lid` */
  isLid?: boolean
  /** field 16, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 18, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 19, wire `is_simple_signal` */
  isSimpleSignal?: boolean
  /** field 20, wire `is_pq` */
  isPq?: boolean
  /** field 21, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 22, wire `processing_deferred` */
  processingDeferred?: boolean
  /** field 23, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
  /** field 24, wire `trace_id_int` */
  traceIdInt?: number
}
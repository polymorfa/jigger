export const WamE2eMessageRecv = 478 as const

export interface E2eMessageRecvEvent {
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
  /** field 8, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 9, wire `offline` */
  offline?: boolean
  /** field 10, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 11, wire `is_lid` */
  isLid?: boolean
  /** field 12, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 13, wire `edit_type` */
  editType?: EDITTYPE
  /** field 14, wire `stanza_type` */
  stanzaType?: STANZATYPE
  /** field 15, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 16, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 17, wire `message_addressing_mode` */
  messageAddressingMode?: ADDRESSINGMODE
  /** field 18, wire `server_addressing_mode` */
  serverAddressingMode?: ADDRESSINGMODE
  /** field 19, wire `bot_type` */
  botType?: BOTTYPE
  /** field 20, wire `is_hosted_chat` */
  isHostedChat?: boolean
  /** field 21, wire `message_distribution_type` */
  messageDistributionType?: MESSAGEDISTRIBUTIONENUMTYPE
  /** field 22, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 23, wire `group_encryption_state` */
  groupEncryptionState?: GROUPENCRYPTIONTYPE
  /** field 25, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 26, wire `is_simple_signal` */
  isSimpleSignal?: boolean
  /** field 27, wire `is_pq` */
  isPq?: boolean
  /** field 28, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 29, wire `processing_deferred` */
  processingDeferred?: boolean
  /** field 30, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
  /** field 31, wire `trace_id_int` */
  traceIdInt?: number
}
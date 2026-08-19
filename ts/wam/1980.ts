export const WamPlaceholderActivity = 1980 as const

export interface PlaceholderActivityEvent {
  /** field 1, wire `placeholder_type_ind` */
  placeholderTypeInd?: PLACEHOLDERTYPE
  /** field 2, wire `placeholder_action_ind` */
  placeholderActionInd?: PLACEHOLDERACTION
  /** field 3, wire `placeholder_chat_type_ind` */
  placeholderChatTypeInd?: PLACEHOLDERCHATTYPE
  /** field 4, wire `placeholder_time_period` */
  placeholderTimePeriod?: number
  /** field 5, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 6, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 7, wire `message_is_revoke` */
  messageIsRevoke?: boolean
  /** field 8, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 9, wire `device_count` */
  deviceCount?: number
  /** field 10, wire `participant_count` */
  participantCount?: number
  /** field 11, wire `placeholder_add_reason` */
  placeholderAddReason?: PLACEHOLDERREASONTYPE
  /** field 12, wire `is_lid` */
  isLid?: boolean
  /** field 13, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 14, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 15, wire `message_before_reg` */
  messageBeforeReg?: boolean
  /** field 16, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 17, wire `placeholder_population_type` */
  placeholderPopulationType?: PLACEHOLDERPOPULATIONTYPE
  /** field 19, wire `is_hosted_chat` */
  isHostedChat?: boolean
  /** field 20, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 22, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 23, wire `is_simple_signal` */
  isSimpleSignal?: boolean
  /** field 24, wire `bot_type` */
  botType?: BOTTYPE
  /** field 25, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
}
export const WamMdDeviceSyncAck = 2180 as const

export interface MdDeviceSyncAckEvent {
  /** field 1, wire `chat_type` */
  chatType?: MESSAGECHATTYPE
  /** field 2, wire `revoke` */
  revoke?: boolean
  /** field 3, wire `is_lid` */
  isLid?: boolean
  /** field 4, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 5, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 6, wire `server_addressing_mode` */
  serverAddressingMode?: ADDRESSINGMODE
  /** field 7, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 8, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
}
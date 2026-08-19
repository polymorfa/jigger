export const WamMdBadDeviceSentMessage = 2176 as const

export interface MdBadDeviceSentMessageEvent {
  /** field 1, wire `peer_type` */
  peerType?: DEVICETYPE
  /** field 2, wire `dsm_error` */
  dsmError?: DSMERROR
  /** field 3, wire `edit_type` */
  editType?: EDITTYPE
  /** field 4, wire `is_lid` */
  isLid?: boolean
  /** field 5, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 6, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 7, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 9, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 10, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
}
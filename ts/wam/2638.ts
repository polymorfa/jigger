export const WamOfflineCountTooHigh = 2638 as const

export interface OfflineCountTooHighEvent {
  /** field 1, wire `stanza_type` */
  stanzaType?: STANZATYPE
  /** field 2, wire `offline_count` */
  offlineCount?: number
  /** field 3, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 4, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 5, wire `receipt_stanza_type` */
  receiptStanzaType?: string
  /** field 6, wire `notification_stanza_type` */
  notificationStanzaType?: string
  /** field 7, wire `call_stanza_type` */
  callStanzaType?: CALLSTANZATYPE
  /** field 8, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 9, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 10, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
}
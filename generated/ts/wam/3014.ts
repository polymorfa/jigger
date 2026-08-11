export const WamPrekeysDepletion = 3014 as const

export interface PrekeysDepletionEvent {
  /** field 1, wire `prekeys_fetch_reason` */
  prekeysFetchReason?: PREKEYSFETCHCONTEXT
  /** field 2, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 3, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
}
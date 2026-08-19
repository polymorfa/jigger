export const WamStickerError = 5024 as const

export interface StickerErrorEvent {
  /** field 1, wire `sticker_error_type` */
  stickerErrorType?: STICKERERRORTYPE
  /** field 2, wire `sticker_message_type` */
  stickerMessageType?: STICKERSENDMESSAGETYPE
}
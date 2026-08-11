export const WamStickerPickerOpened = 1854 as const

export interface StickerPickerOpenedEvent {
  /** field 1, wire `sticker_picker_entry_point` */
  stickerPickerEntryPoint?: STICKERPICKERENTRYPOINT
}
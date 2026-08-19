export const WamStickerStoreOpened = 3020 as const

export interface StickerStoreOpenedEvent {
  /** field 1, wire `sticker_store_opened_origin` */
  stickerStoreOpenedOrigin?: STICKERSTOREOPENEDORIGINTYPE
}
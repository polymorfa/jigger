export const WamStickerLatency = 5026 as const

export interface StickerLatencyEvent {
  /** field 1, wire `size` */
  size?: number
  /** field 2, wire `sticker_latency_action` */
  stickerLatencyAction?: STICKERLATENCYACTION
  /** field 3, wire `sticker_latency_tt_action` */
  stickerLatencyTtAction?: number
}
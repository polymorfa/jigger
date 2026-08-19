export const WamWebcChatOpen = 864 as const

export interface WebcChatOpenEvent {
  /** field 1, wire `webc_unread_count` */
  webcUnreadCount?: string
  /** field 2, wire `webc_chat_open_t` */
  webcChatOpenT?: string
  /** field 4, wire `webc_rendered_message_count` */
  webcRenderedMessageCount?: number
  /** field 5, wire `webc_final_rendered_message_count` */
  webcFinalRenderedMessageCount?: number
  /** field 6, wire `webc_chat_open_painted_t` */
  webcChatOpenPaintedT?: string
  /** field 7, wire `webc_chat_open_before_paint_t` */
  webcChatOpenBeforePaintT?: string
  /** field 8, wire `webc_window_height_float` */
  webcWindowHeightFloat?: string
}
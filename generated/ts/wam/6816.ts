export const WamAboutConsumptionDaily = 6816 as const

export interface AboutConsumptionDailyEvent {
  /** field 1, wire `about_chat_bubble_tap_count` (about_chat_bubble_tap_count >= 0) */
  aboutChatBubbleTapCount?: number
  /** field 2, wire `about_chat_consumption_count` (about_chat_consumption_count >= 0) */
  aboutChatConsumptionCount?: number
  /** field 3, wire `about_locale` */
  aboutLocale?: string
  /** field 4, wire `about_message_send_count` (about_message_send_count >= 0) */
  aboutMessageSendCount?: number
}
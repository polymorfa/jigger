export const WamGatedMessageReceived = 3152 as const

export interface GatedMessageReceivedEvent {
  /** field 1, wire `chat_gated_reason` */
  chatGatedReason?: CHATGATEDREASON
}
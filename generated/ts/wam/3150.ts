export const WamGatedChatOpened = 3150 as const

export interface GatedChatOpenedEvent {
  /** field 1, wire `chat_gated_reason` */
  chatGatedReason?: CHATGATEDREASON
  /** field 2, wire `self_initiated` */
  selfInitiated?: boolean
}
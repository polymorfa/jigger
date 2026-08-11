export const WamMdAppStateMessageRange = 2522 as const

export interface MdAppStateMessageRangeEvent {
  /** field 1, wire `additional_messages_count` */
  additionalMessagesCount?: number
}
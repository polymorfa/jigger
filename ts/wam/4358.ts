export const WamWamDroppedEvent = 4358 as const

export interface WamDroppedEventEvent {
  /** field 1, wire `dropped_event_code` */
  droppedEventCode?: number
  /** field 2, wire `dropped_event_count` */
  droppedEventCount?: number
  /** field 3, wire `is_from_wamsys` */
  isFromWamsys?: boolean
}
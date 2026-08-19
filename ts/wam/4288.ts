export const WamBlockEventsFs = 4288 as const

export interface BlockEventsFsEvent {
  /** field 1, wire `block_entry_point` */
  blockEntryPoint?: BLOCKENTRYPOINT
  /** field 2, wire `block_event_action_type` */
  blockEventActionType?: BLOCKEVENTACTIONTYPE
  /** field 3, wire `block_event_is_suspicious` */
  blockEventIsSuspicious?: boolean
  /** field 4, wire `block_event_is_unsub` */
  blockEventIsUnsub?: boolean
  /** field 5, wire `past_call` */
  pastCall?: boolean
  /** field 6, wire `past_call_result` */
  pastCallResult?: CALLRESULTTYPE
}
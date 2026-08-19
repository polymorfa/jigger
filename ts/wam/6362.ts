export const WamThreadInteractionDataVoip = 6362 as const

export interface ThreadInteractionDataVoipEvent {
  /** field 1, wire `call_offers_received` */
  callOffersReceived?: number
  /** field 2, wire `call_offers_sent` */
  callOffersSent?: number
  /** field 3, wire `calls_result_busy` */
  callsResultBusy?: number
  /** field 4, wire `calls_result_cancelled` */
  callsResultCancelled?: number
  /** field 5, wire `calls_result_connected` */
  callsResultConnected?: number
  /** field 6, wire `calls_result_error` */
  callsResultError?: number
  /** field 7, wire `calls_result_missed` */
  callsResultMissed?: number
  /** field 8, wire `calls_result_rejected` */
  callsResultRejected?: number
  /** field 9, wire `thread_ds` */
  threadDs?: string
  /** field 11, wire `total_call_duration` */
  totalCallDuration?: number
  /** field 12, wire `video_calls_offered` */
  videoCallsOffered?: number
  /** field 13, wire `voice_calls_offered` */
  voiceCallsOffered?: number
  /** field 14, wire `thread_id` */
  threadId?: string
  /** field 15, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 16, wire `thread_creation_date` */
  threadCreationDate?: string
}
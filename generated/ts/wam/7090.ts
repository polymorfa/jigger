export const WamMediaHubUserJourney = 7090 as const

export interface MediaHubUserJourneyEvent {
  /** field 1, wire `custom_fields` */
  customFields?: string
  /** field 2, wire `media_hub_action` */
  mediaHubAction?: ACTIONCODE
  /** field 3, wire `media_hub_entry_point` */
  mediaHubEntryPoint?: ENTRYPOINTTYPE
  /** field 4, wire `media_hub_sequence_number` */
  mediaHubSequenceNumber?: number
  /** field 5, wire `media_hub_session_id` */
  mediaHubSessionId?: string
  /** field 6, wire `media_hub_surface` */
  mediaHubSurface?: SURFACECODE
  /** field 7, wire `unified_session_id` */
  unifiedSessionId?: string
}
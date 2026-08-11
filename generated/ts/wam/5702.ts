export const WamSearchTheWebFunnel = 5702 as const

export interface SearchTheWebFunnelEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `stw_entry_point` */
  stwEntryPoint?: STWENTRYPOINT
  /** field 3, wire `stw_format` */
  stwFormat?: STWFORMAT
  /** field 4, wire `stw_interaction` */
  stwInteraction?: STWINTERACTION
  /** field 5, wire `image_search_failed_error_type` */
  imageSearchFailedErrorType?: IMAGESEARCHFAILEDERRORTYPE
}
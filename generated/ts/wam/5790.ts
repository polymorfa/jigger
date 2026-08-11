export const WamWebcMessageProcessingPerf = 5790 as const

export interface WebcMessageProcessingPerfEvent {
  /** field 1, wire `decryption_t` */
  decryptionT?: number
  /** field 2, wire `is_offline` */
  isOffline?: boolean
  /** field 3, wire `parsing_t` */
  parsingT?: number
  /** field 4, wire `post_processing_t` */
  postProcessingT?: number
  /** field 5, wire `pre_processing_t` */
  preProcessingT?: number
  /** field 6, wire `processing_t` */
  processingT?: number
  /** field 7, wire `db_storing_t` */
  dbStoringT?: number
  /** field 8, wire `lid_processing_t` */
  lidProcessingT?: number
  /** field 9, wire `report_token_validation_t` */
  reportTokenValidationT?: number
}
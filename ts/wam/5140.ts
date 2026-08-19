export const WamCtwa1pdConversion = 5140 as const

export interface Ctwa1pdConversionEvent {
  /** field 1, wire `ctwa1pd_conversion_type` */
  ctwa1pdConversionType?: CTWA1PDCONVERSIONTYPE
  /** field 2, wire `ctwa_tracking_payload` */
  ctwaTrackingPayload?: string
  /** field 3, wire `biz_platform` */
  bizPlatform?: BIZPLATFORM
  /** field 7, wire `ctwa_signals` */
  ctwaSignals?: string
  /** field 8, wire `ctwa1pd_conversion_metadata` */
  ctwa1pdConversionMetadata?: string
  /** field 9, wire `ctwa1pd_conversion_schema_version` */
  ctwa1pdConversionSchemaVersion?: number
  /** field 10, wire `ctwa_conversation_depth` */
  ctwaConversationDepth?: number
  /** field 11, wire `ctwa_conversation_repeat` */
  ctwaConversationRepeat?: number
  /** field 12, wire `ctwa_direction_from` */
  ctwaDirectionFrom?: CTWADIRECTIONFROM
  /** field 13, wire `is_latest_conversion_token` */
  isLatestConversionToken?: boolean
  /** field 14, wire `two_measurement_enabled` */
  twoMeasurementEnabled?: boolean
}
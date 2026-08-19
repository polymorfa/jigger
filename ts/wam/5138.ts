export const WamCtwa3pdConversion = 5138 as const

export interface Ctwa3pdConversionEvent {
  /** field 1, wire `ctwa3pd_conversion_metadata` */
  ctwa3pdConversionMetadata?: string
  /** field 2, wire `ctwa3pd_conversion_subtype` */
  ctwa3pdConversionSubtype?: string
  /** field 3, wire `ctwa3pd_conversion_type` */
  ctwa3pdConversionType?: string
  /** field 4, wire `ctwa3pd_schema_version` */
  ctwa3pdSchemaVersion?: number
  /** field 5, wire `ctwa3pd_surface_type` */
  ctwa3pdSurfaceType?: string
  /** field 6, wire `ctwa_tracking_payload` */
  ctwaTrackingPayload?: string
  /** field 7, wire `ctwa_signals` */
  ctwaSignals?: string
  /** field 8, wire `ctwa_conversation_depth` */
  ctwaConversationDepth?: number
  /** field 9, wire `ctwa_conversation_repeat` */
  ctwaConversationRepeat?: number
  /** field 10, wire `ctwa_direction_from` */
  ctwaDirectionFrom?: CTWADIRECTIONFROM
}
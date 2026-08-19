export const WamBizAiComponentInteraction = 8490 as const

export interface BizAiComponentInteractionEvent {
  /** field 1, wire `biz_ai_button_action` */
  bizAiButtonAction?: string
  /** field 2, wire `biz_ai_component_type` */
  bizAiComponentType?: string
  /** field 3, wire `biz_ai_error_detail` */
  bizAiErrorDetail?: string
  /** field 4, wire `biz_ai_render_outcome` */
  bizAiRenderOutcome?: BIZAIRENDEROUTCOMETYPE
  /** field 5, wire `biz_ai_asset_materialization_asset_id` */
  bizAiAssetMaterializationAssetId?: string
  /** field 6, wire `biz_ai_asset_materialization_asset_type` */
  bizAiAssetMaterializationAssetType?: string
  /** field 7, wire `biz_ai_asset_materialization_failure_type` */
  bizAiAssetMaterializationFailureType?: BIZAIASSETMATERIALIZATIONFAILURETYPE
  /** field 8, wire `biz_ai_message_uuid` */
  bizAiMessageUuid?: string
  /** field 11, wire `biz_ai_client_has_fallback_text` */
  bizAiClientHasFallbackText?: boolean
}
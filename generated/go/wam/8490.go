const WamBizAiComponentInteraction = 8490 // channel: regular

type BizAiComponentInteractionEvent struct {
	BizAiButtonAction string `wam:"biz_ai_button_action"` // field 1
	BizAiComponentType string `wam:"biz_ai_component_type"` // field 2
	BizAiErrorDetail string `wam:"biz_ai_error_detail"` // field 3
	BizAiRenderOutcome BIZAIRENDEROUTCOMETYPE `wam:"biz_ai_render_outcome"` // field 4
	BizAiAssetMaterializationAssetId string `wam:"biz_ai_asset_materialization_asset_id"` // field 5
	BizAiAssetMaterializationAssetType string `wam:"biz_ai_asset_materialization_asset_type"` // field 6
	BizAiAssetMaterializationFailureType BIZAIASSETMATERIALIZATIONFAILURETYPE `wam:"biz_ai_asset_materialization_failure_type"` // field 7
	BizAiMessageUuid string `wam:"biz_ai_message_uuid"` // field 8
	BizAiClientHasFallbackText bool `wam:"biz_ai_client_has_fallback_text"` // field 11
}
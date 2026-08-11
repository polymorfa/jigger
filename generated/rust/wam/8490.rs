pub const WAM_BIZ_AI_COMPONENT_INTERACTION: u32 = 8490;

#[derive(Debug, Default)]
pub struct BizAiComponentInteractionEvent {
    /// field 1, wire `biz_ai_button_action`
    pub biz_ai_button_action: Option<String>,
    /// field 2, wire `biz_ai_component_type`
    pub biz_ai_component_type: Option<String>,
    /// field 3, wire `biz_ai_error_detail`
    pub biz_ai_error_detail: Option<String>,
    /// field 4, wire `biz_ai_render_outcome`
    pub biz_ai_render_outcome: Option<BIZAIRENDEROUTCOMETYPE>,
    /// field 5, wire `biz_ai_asset_materialization_asset_id`
    pub biz_ai_asset_materialization_asset_id: Option<String>,
    /// field 6, wire `biz_ai_asset_materialization_asset_type`
    pub biz_ai_asset_materialization_asset_type: Option<String>,
    /// field 7, wire `biz_ai_asset_materialization_failure_type`
    pub biz_ai_asset_materialization_failure_type: Option<BIZAIASSETMATERIALIZATIONFAILURETYPE>,
    /// field 8, wire `biz_ai_message_uuid`
    pub biz_ai_message_uuid: Option<String>,
    /// field 11, wire `biz_ai_client_has_fallback_text`
    pub biz_ai_client_has_fallback_text: Option<bool>,
}
pub const WAM_META_AI_UPSELL_CTA: u32 = 6532;

#[derive(Debug, Default)]
pub struct MetaAiUpsellCtaEvent {
    /// field 1, wire `meta_ai_upsell_cta_operation`
    pub meta_ai_upsell_cta_operation: Option<METAAIUPSELLCTAOPERATIONTYPE>,
    /// field 2, wire `meta_ai_upsell_cta_source`
    pub meta_ai_upsell_cta_source: Option<METAAIUPSELLCTASOURCETYPE>,
}
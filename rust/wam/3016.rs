pub const WAM_MD_SYNCD_DOGFOODING_FEATURE_USAGE: u32 = 3016;

#[derive(Debug, Default)]
pub struct MdSyncdDogfoodingFeatureUsageEvent {
    /// field 1, wire `md_syncd_dogfooding_feature`
    pub md_syncd_dogfooding_feature: Option<MDFEATURECODE>,
}
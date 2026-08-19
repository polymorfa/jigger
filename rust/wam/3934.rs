pub const WAM_WEBC_NATIVE_UPSELL_CTA: u32 = 3934;

#[derive(Debug, Default)]
pub struct WebcNativeUpsellCtaEvent {
    /// field 1, wire `webc_native_upsell_cta_source`
    pub webc_native_upsell_cta_source: Option<WEBCNATIVEUPSELLCTASOURCETYPE>,
    /// field 2, wire `webc_native_upsell_cta_event_type`
    pub webc_native_upsell_cta_event_type: Option<WEBCNATIVEUPSELLCTAEVENTTYPE>,
    /// field 3, wire `webc_native_upsell_cta_qr_screen_experiment_group`
    pub webc_native_upsell_cta_qr_screen_experiment_group: Option<WEBCNATIVEUPSELLCTAQRSCREENEXPERIMENTGROUP>,
    /// field 4, wire `webc_native_upsell_cta_release_channel`
    pub webc_native_upsell_cta_release_channel: Option<WEBCNATIVEUPSELLCTARELEASECHANNEL>,
    /// field 5, wire `webc_native_upsell_cta_is_beta_user`
    pub webc_native_upsell_cta_is_beta_user: Option<bool>,
}
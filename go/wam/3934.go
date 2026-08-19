const WamWebcNativeUpsellCta = 3934 // channel: regular

type WebcNativeUpsellCtaEvent struct {
	WebcNativeUpsellCtaSource WEBCNATIVEUPSELLCTASOURCETYPE `wam:"webc_native_upsell_cta_source"` // field 1
	WebcNativeUpsellCtaEventType WEBCNATIVEUPSELLCTAEVENTTYPE `wam:"webc_native_upsell_cta_event_type"` // field 2
	WebcNativeUpsellCtaQrScreenExperimentGroup WEBCNATIVEUPSELLCTAQRSCREENEXPERIMENTGROUP `wam:"webc_native_upsell_cta_qr_screen_experiment_group"` // field 3
	WebcNativeUpsellCtaReleaseChannel WEBCNATIVEUPSELLCTARELEASECHANNEL `wam:"webc_native_upsell_cta_release_channel"` // field 4
	WebcNativeUpsellCtaIsBetaUser bool `wam:"webc_native_upsell_cta_is_beta_user"` // field 5
}
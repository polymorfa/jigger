export const WamWebcNativeUpsellCta = 3934 as const

export interface WebcNativeUpsellCtaEvent {
  /** field 1, wire `webc_native_upsell_cta_source` */
  webcNativeUpsellCtaSource?: WEBCNATIVEUPSELLCTASOURCETYPE
  /** field 2, wire `webc_native_upsell_cta_event_type` */
  webcNativeUpsellCtaEventType?: WEBCNATIVEUPSELLCTAEVENTTYPE
  /** field 3, wire `webc_native_upsell_cta_qr_screen_experiment_group` */
  webcNativeUpsellCtaQrScreenExperimentGroup?: WEBCNATIVEUPSELLCTAQRSCREENEXPERIMENTGROUP
  /** field 4, wire `webc_native_upsell_cta_release_channel` */
  webcNativeUpsellCtaReleaseChannel?: WEBCNATIVEUPSELLCTARELEASECHANNEL
  /** field 5, wire `webc_native_upsell_cta_is_beta_user` */
  webcNativeUpsellCtaIsBetaUser?: boolean
}
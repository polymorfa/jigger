export const WamSmbDataSharingConsentScreen = 3972 as const

export interface SmbDataSharingConsentScreenEvent {
  /** field 1, wire `smb_data_sharing_consent_screen_type` */
  smbDataSharingConsentScreenType?: SMBDATASHARINGCONSENTSCREENTYPE
  /** field 2, wire `smb_data_sharing_consent_screen_version` */
  smbDataSharingConsentScreenVersion?: number
  /** field 3, wire `smb_data_sharing_consent_screen_entry_point` */
  smbDataSharingConsentScreenEntryPoint?: SMBDATASHARINGCONSENTSCREENENTRYPOINT
  /** field 4, wire `elapsed_time_ms` */
  elapsedTimeMs?: number
  /** field 5, wire `previous_impression_count` */
  previousImpressionCount?: number
  /** field 6, wire `previous_opt_out_impression_count` */
  previousOptOutImpressionCount?: number
  /** field 7, wire `smb_data_sharing_consent_disclosure_version` */
  smbDataSharingConsentDisclosureVersion?: number
}
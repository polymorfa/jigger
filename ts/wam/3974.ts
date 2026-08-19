export const WamSmbDataSharingConsentSetting = 3974 as const

export interface SmbDataSharingConsentSettingEvent {
  /** field 1, wire `smb_data_sharing_consent_setting_entry_point` */
  smbDataSharingConsentSettingEntryPoint?: SMBDATASHARINGCONSENTSETTINGENTRYPOINT
  /** field 2, wire `smb_data_sharing_consent_setting_type` */
  smbDataSharingConsentSettingType?: boolean
  /** field 3, wire `smb_data_sharing_consent_setting_version` */
  smbDataSharingConsentSettingVersion?: number
}
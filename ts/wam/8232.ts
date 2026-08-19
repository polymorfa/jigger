export const WamSmbPerCustomerDataSharingControl = 8232 as const

export interface SmbPerCustomerDataSharingControlEvent {
  /** field 1, wire `smb_per_customer_data_sharing_control_action` */
  smbPerCustomerDataSharingControlAction?: SMBPERCUSTOMERDATASHARINGCONTROLACTION
  /** field 2, wire `smb_per_customer_data_sharing_control_action_opt_in_status` */
  smbPerCustomerDataSharingControlActionOptInStatus?: boolean
  /** field 3, wire `smb_per_customer_data_sharing_control_current_opt_in_status` */
  smbPerCustomerDataSharingControlCurrentOptInStatus?: boolean
  /** field 4, wire `smb_per_customer_data_sharing_control_entry_point` */
  smbPerCustomerDataSharingControlEntryPoint?: SMBPERCUSTOMERDATASHARINGCONTROLENTRYPOINT
  /** field 5, wire `smb_per_customer_data_sharing_control_version` */
  smbPerCustomerDataSharingControlVersion?: number
  /** field 6, wire `smb_per_customer_data_sharing_control_global_data_sharing_entry_point` */
  smbPerCustomerDataSharingControlGlobalDataSharingEntryPoint?: SMBDATASHARINGCONSENTSCREENENTRYPOINT
  /** field 7, wire `smb_per_customer_data_sharing_control_opt_in_customer_count` */
  smbPerCustomerDataSharingControlOptInCustomerCount?: number
}
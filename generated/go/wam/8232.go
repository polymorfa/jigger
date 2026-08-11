const WamSmbPerCustomerDataSharingControl = 8232 // channel: regular

type SmbPerCustomerDataSharingControlEvent struct {
	SmbPerCustomerDataSharingControlAction SMBPERCUSTOMERDATASHARINGCONTROLACTION `wam:"smb_per_customer_data_sharing_control_action"` // field 1
	SmbPerCustomerDataSharingControlActionOptInStatus bool `wam:"smb_per_customer_data_sharing_control_action_opt_in_status"` // field 2
	SmbPerCustomerDataSharingControlCurrentOptInStatus bool `wam:"smb_per_customer_data_sharing_control_current_opt_in_status"` // field 3
	SmbPerCustomerDataSharingControlEntryPoint SMBPERCUSTOMERDATASHARINGCONTROLENTRYPOINT `wam:"smb_per_customer_data_sharing_control_entry_point"` // field 4
	SmbPerCustomerDataSharingControlVersion int64 `wam:"smb_per_customer_data_sharing_control_version"` // field 5
	SmbPerCustomerDataSharingControlGlobalDataSharingEntryPoint SMBDATASHARINGCONSENTSCREENENTRYPOINT `wam:"smb_per_customer_data_sharing_control_global_data_sharing_entry_point"` // field 6
	SmbPerCustomerDataSharingControlOptInCustomerCount int64 `wam:"smb_per_customer_data_sharing_control_opt_in_customer_count"` // field 7
}
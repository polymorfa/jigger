pub const WAM_SMB_PER_CUSTOMER_DATA_SHARING_CONTROL: u32 = 8232;

#[derive(Debug, Default)]
pub struct SmbPerCustomerDataSharingControlEvent {
    /// field 1, wire `smb_per_customer_data_sharing_control_action`
    pub smb_per_customer_data_sharing_control_action: Option<SMBPERCUSTOMERDATASHARINGCONTROLACTION>,
    /// field 2, wire `smb_per_customer_data_sharing_control_action_opt_in_status`
    pub smb_per_customer_data_sharing_control_action_opt_in_status: Option<bool>,
    /// field 3, wire `smb_per_customer_data_sharing_control_current_opt_in_status`
    pub smb_per_customer_data_sharing_control_current_opt_in_status: Option<bool>,
    /// field 4, wire `smb_per_customer_data_sharing_control_entry_point`
    pub smb_per_customer_data_sharing_control_entry_point: Option<SMBPERCUSTOMERDATASHARINGCONTROLENTRYPOINT>,
    /// field 5, wire `smb_per_customer_data_sharing_control_version`
    pub smb_per_customer_data_sharing_control_version: Option<i64>,
    /// field 6, wire `smb_per_customer_data_sharing_control_global_data_sharing_entry_point`
    pub smb_per_customer_data_sharing_control_global_data_sharing_entry_point: Option<SMBDATASHARINGCONSENTSCREENENTRYPOINT>,
    /// field 7, wire `smb_per_customer_data_sharing_control_opt_in_customer_count`
    pub smb_per_customer_data_sharing_control_opt_in_customer_count: Option<i64>,
}
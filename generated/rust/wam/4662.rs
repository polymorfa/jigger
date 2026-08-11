pub const WAM_CTWA_LABEL_SIGNAL: u32 = 4662;

#[derive(Debug, Default)]
pub struct CtwaLabelSignalEvent {
    /// field 1, wire `ctwa_label_signal_version`
    pub ctwa_label_signal_version: Option<i64>,
    /// field 2, wire `ctwa_label_target`
    pub ctwa_label_target: Option<CTWALABELTARGET>,
    /// field 3, wire `ctwa_label_type`
    pub ctwa_label_type: Option<CTWALABELTYPE>,
    /// field 4, wire `deep_link_conversion_data`
    pub deep_link_conversion_data: Option<String>,
    /// field 5, wire `deep_link_conversion_source`
    pub deep_link_conversion_source: Option<String>,
    /// field 6, wire `event_sharing_setting_enabled`
    pub event_sharing_setting_enabled: Option<bool>,
    /// field 7, wire `global_sharing_setting_enabled`
    pub global_sharing_setting_enabled: Option<bool>,
    /// field 8, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 9, wire `ctwa_signal_metadata`
    pub ctwa_signal_metadata: Option<String>,
    /// field 10, wire `customer_ads_sharing_setting_enabled`
    pub customer_ads_sharing_setting_enabled: Option<CUSTOMERADSSHARINGSETTINGENABLED>,
    /// field 11, wire `ctwa_conversation_depth`
    pub ctwa_conversation_depth: Option<i64>,
}
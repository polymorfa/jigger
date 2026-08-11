pub const WAM_CTWA_ORDER_SIGNAL: u32 = 4264;

#[derive(Debug, Default)]
pub struct CtwaOrderSignalEvent {
    /// field 1, wire `ctwa_order_signal_version`
    pub ctwa_order_signal_version: Option<i64>,
    /// field 2, wire `deep_link_conversion_data`
    pub deep_link_conversion_data: Option<String>,
    /// field 3, wire `deep_link_conversion_source`
    pub deep_link_conversion_source: Option<String>,
    /// field 4, wire `event_sharing_setting_enabled`
    pub event_sharing_setting_enabled: Option<bool>,
    /// field 5, wire `global_sharing_setting_enabled`
    pub global_sharing_setting_enabled: Option<bool>,
    /// field 6, wire `order_signal_type`
    pub order_signal_type: Option<ORDERSIGNALTYPE>,
    /// field 7, wire `order_status`
    pub order_status: Option<ORDERSTATUS>,
    /// field 8, wire `order_paid`
    pub order_paid: Option<bool>,
    /// field 9, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 10, wire `ctwa_signal_metadata`
    pub ctwa_signal_metadata: Option<String>,
    /// field 11, wire `customer_ads_sharing_setting_enabled`
    pub customer_ads_sharing_setting_enabled: Option<CUSTOMERADSSHARINGSETTINGENABLED>,
}
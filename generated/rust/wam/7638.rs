pub const WAM_MD_LABEL_SYNC_TRACKING: u32 = 7638;

#[derive(Debug, Default)]
pub struct MdLabelSyncTrackingEvent {
    /// field 1, wire `label_sync_device_role`
    pub label_sync_device_role: Option<LABELSYNCDEVICEROLETYPE>,
    /// field 2, wire `label_sync_direction`
    pub label_sync_direction: Option<LABELSYNCDIRECTIONTYPE>,
    /// field 3, wire `label_sync_has_pending`
    pub label_sync_has_pending: Option<bool>,
    /// field 4, wire `label_sync_hash`
    pub label_sync_hash: Option<String>,
    /// field 5, wire `label_sync_is_capi_hosted`
    pub label_sync_is_capi_hosted: Option<bool>,
    /// field 6, wire `label_sync_is_labeled`
    pub label_sync_is_labeled: Option<bool>,
    /// field 7, wire `label_sync_result`
    pub label_sync_result: Option<LABELSYNCRESULTTYPE>,
    /// field 8, wire `label_sync_timestamp`
    pub label_sync_timestamp: Option<i64>,
    /// field 9, wire `label_sync_type`
    pub label_sync_type: Option<LABELSYNCTYPEENUM>,
    /// field 10, wire `label_sync_predefined_id`
    pub label_sync_predefined_id: Option<i64>,
}
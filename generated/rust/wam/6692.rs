pub const WAM_STATUS_VIEWER_ACTION: u32 = 6692;

#[derive(Debug, Default)]
pub struct StatusViewerActionEvent {
    /// field 1, wire `attribution_type`
    pub attribution_type: Option<TOPBARATTRIBUTIONTYPE>,
    /// field 2, wire `viewer_action_type`
    pub viewer_action_type: Option<STATUSVIEWACTIONTYPE>,
    /// field 3, wire `attribution_types`
    pub attribution_types: Option<String>,
    /// field 4, wire `status_category`
    pub status_category: Option<STATUSCATEGORY>,
    /// field 5, wire `external_source_domain_type`
    pub external_source_domain_type: Option<INLINEVIDEOTYPE>,
    /// field 6, wire `url_status_clicked`
    pub url_status_clicked: Option<URLSTATUSCLICKED>,
    /// field 7, wire `url_status_type`
    pub url_status_type: Option<URLSTATUSTYPE>,
    /// field 8, wire `action_index`
    pub action_index: Option<i64>,
    /// field 9, wire `link_load_time`
    pub link_load_time: Option<i64>,
    /// field 10, wire `link_open_result`
    pub link_open_result: Option<String>,
    /// field 11, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 12, wire `status_id`
    pub status_id: Option<String>,
    /// field 13, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
}
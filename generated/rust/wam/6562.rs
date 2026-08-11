pub const WAM_CTWA_AD_CREATION_AND_MANAGEMENT_JOURNEY: u32 = 6562;

#[derive(Debug, Default)]
pub struct CtwaAdCreationAndManagementJourneyEvent {
    /// field 1, wire `ctwa_ad_account_type`
    pub ctwa_ad_account_type: Option<CTWAADACCOUNTTYPE>,
    /// field 2, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 3, wire `lwi_action_type`
    pub lwi_action_type: Option<LWIACTIONTYPE>,
    /// field 4, wire `lwi_entry_point`
    pub lwi_entry_point: Option<LWIENTRYPOINT>,
    /// field 5, wire `lwi_flow_id`
    pub lwi_flow_id: Option<String>,
    /// field 6, wire `lwi_sub_entry_point`
    pub lwi_sub_entry_point: Option<LWISUBENTRYPOINT>,
    /// field 7, wire `lwi_surface`
    pub lwi_surface: Option<LWISURFACE>,
    /// field 8, wire `seq_id`
    pub seq_id: Option<i64>,
    /// field 9, wire `target_component`
    pub target_component: Option<TARGETCOMPONENT>,
    /// field 10, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 11, wire `wa_ad_account_eligibility`
    pub wa_ad_account_eligibility: Option<WAADACCOUNTELIGIBILITY>,
    /// field 12, wire `wa_ad_account_id`
    pub wa_ad_account_id: Option<String>,
}
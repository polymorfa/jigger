pub const WAM_WA_PLUS_BENEFIT_USER_JOURNEY: u32 = 7896;

#[derive(Debug, Default)]
pub struct WaPlusBenefitUserJourneyEvent {
    /// field 1, wire `wpbuj_action`
    pub wpbuj_action: Option<WPBUJACTION>,
    /// field 2, wire `wpbuj_benefit_status`
    pub wpbuj_benefit_status: Option<WPBUJBENEFITSTATUS>,
    /// field 3, wire `wpbuj_benefit_type`
    pub wpbuj_benefit_type: Option<WPBUJBENEFITTYPE>,
    /// field 4, wire `wpbuj_custom_fields`
    pub wpbuj_custom_fields: Option<String>,
    /// field 5, wire `wpbuj_error_message`
    pub wpbuj_error_message: Option<String>,
    /// field 6, wire `wpbuj_outcome_name`
    pub wpbuj_outcome_name: Option<WPBUJOUTCOMENAME>,
    /// field 7, wire `wpbuj_session_id`
    pub wpbuj_session_id: Option<String>,
    /// field 8, wire `wpbuj_source`
    pub wpbuj_source: Option<WPBUJSOURCE>,
    /// field 9, wire `wpbuj_surface`
    pub wpbuj_surface: Option<WPBUJSURFACE>,
    /// field 10, wire `wsua_product_type`
    pub wsua_product_type: Option<WSUAPRODUCTTYPE>,
    /// field 11, wire `wpbuj_action_target`
    pub wpbuj_action_target: Option<String>,
}
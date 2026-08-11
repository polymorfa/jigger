pub const WAM_REPORT_TO_ADMIN_EVENTS: u32 = 4420;

#[derive(Debug, Default)]
pub struct ReportToAdminEventsEvent {
    /// field 1, wire `report_to_admin_interaction`
    pub report_to_admin_interaction: Option<REPORTTOADMININTERACTION>,
    /// field 2, wire `rta_group_id`
    pub rta_group_id: Option<String>,
}
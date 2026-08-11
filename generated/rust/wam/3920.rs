pub const WAM_STATUS_REPORTING_EVENTS: u32 = 3920;

#[derive(Debug, Default)]
pub struct StatusReportingEventsEvent {
    /// field 1, wire `status_report_interaction`
    pub status_report_interaction: Option<STATUSREPORTINTERACTION>,
    /// field 2, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
}
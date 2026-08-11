pub const WAM_NEWSLETTER_ENFORCEMENT_EVENTS: u32 = 7112;

#[derive(Debug, Default)]
pub struct NewsletterEnforcementEventsEvent {
    /// field 1, wire `cid`
    pub cid: Option<String>,
    /// field 2, wire `enforcement_interaction_event`
    pub enforcement_interaction_event: Option<ENFORCEMENTINTERACTIONEVENT>,
    /// field 3, wire `enforcement_type`
    pub enforcement_type: Option<ENFORCEMENTTYPE>,
    /// field 4, wire `interaction_entry_point`
    pub interaction_entry_point: Option<INTERACTIONENTRYPOINT>,
    /// field 5, wire `interaction_surface`
    pub interaction_surface: Option<INTERACTIONSURFACE>,
    /// field 6, wire `newsletter_enforcement_session_id`
    pub newsletter_enforcement_session_id: Option<i64>,
    /// field 7, wire `violation_category`
    pub violation_category: Option<String>,
}
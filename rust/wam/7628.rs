pub const WAM_PS_API_SIGNUP_FLOW: u32 = 7628;

#[derive(Debug, Default)]
pub struct PsApiSignupFlowEvent {
    /// field 1, wire `business_lid`
    pub business_lid: Option<i64>,
    /// field 3, wire `signup_user_journey_operation`
    pub signup_user_journey_operation: Option<SIGNUPUSERJOURNEYOPERATION>,
    /// field 4, wire `business_phone_number`
    pub business_phone_number: Option<i64>,
    /// field 5, wire `signup_deep_link_id`
    pub signup_deep_link_id: Option<String>,
    /// field 6, wire `signup_entry_point`
    pub signup_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 7, wire `thread_creation_time`
    pub thread_creation_time: Option<THREADCREATIONTIME>,
}
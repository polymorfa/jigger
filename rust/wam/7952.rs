pub const WAM_FS_API_SIGNUP_FLOW: u32 = 7952;

#[derive(Debug, Default)]
pub struct FsApiSignupFlowEvent {
    /// field 1, wire `signup_entry_point`
    pub signup_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 2, wire `signup_user_journey_operation`
    pub signup_user_journey_operation: Option<SIGNUPUSERJOURNEYOPERATION>,
    /// field 3, wire `thread_creation_time`
    pub thread_creation_time: Option<THREADCREATIONTIME>,
    /// field 4, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 5, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}
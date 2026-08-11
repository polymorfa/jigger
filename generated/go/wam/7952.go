const WamFsApiSignupFlow = 7952 // channel: regular

type FsApiSignupFlowEvent struct {
	SignupEntryPoint SIGNUPENTRYPOINT `wam:"signup_entry_point"` // field 1
	SignupUserJourneyOperation SIGNUPUSERJOURNEYOPERATION `wam:"signup_user_journey_operation"` // field 2
	ThreadCreationTime THREADCREATIONTIME `wam:"thread_creation_time"` // field 3
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 5
}
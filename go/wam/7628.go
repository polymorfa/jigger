const WamPsApiSignupFlow = 7628 // channel: private

type PsApiSignupFlowEvent struct {
	BusinessLid int64 `wam:"business_lid"` // field 1
	SignupUserJourneyOperation SIGNUPUSERJOURNEYOPERATION `wam:"signup_user_journey_operation"` // field 3
	BusinessPhoneNumber int64 `wam:"business_phone_number"` // field 4
	SignupDeepLinkId string `wam:"signup_deep_link_id"` // field 5
	SignupEntryPoint SIGNUPENTRYPOINT `wam:"signup_entry_point"` // field 6
	ThreadCreationTime THREADCREATIONTIME `wam:"thread_creation_time"` // field 7
}
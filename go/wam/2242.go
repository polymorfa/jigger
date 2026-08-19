const WamSignCredential = 2242 // channel: regular

type SignCredentialEvent struct {
	SignCredentialResult SIGNCREDENTIALRESULT `wam:"sign_credential_result"` // field 1
	RetryCount int64 `wam:"retry_count"` // field 2
	SignCredentialT string `wam:"sign_credential_t"` // field 3
	OverallT string `wam:"overall_t"` // field 4
	WaConnectedToChatd bool `wam:"wa_connected_to_chatd"` // field 5
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 6
	ProjectCode PROJECTCODE `wam:"project_code"` // field 7
	IsFromWameta bool `wam:"is_from_wameta"` // field 8
}
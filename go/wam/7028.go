const WamWebArkoseToken = 7028 // channel: regular

type WebArkoseTokenEvent struct {
	Token string `wam:"token"` // field 1
	MdSessionId string `wam:"md_session_id"` // field 2
	MdClientSessionId string `wam:"md_client_session_id"` // field 3
}
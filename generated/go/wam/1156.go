const WamDeepLinkClick = 1156 // channel: regular

type DeepLinkClickEvent struct {
	DeepLinkHasText bool `wam:"deep_link_has_text"` // field 1
	DeepLinkHasPhoneNumber bool `wam:"deep_link_has_phone_number"` // field 2
	DeepLinkSessionId string `wam:"deep_link_session_id"` // field 3
	DeepLinkHasUsername bool `wam:"deep_link_has_username"` // field 4
	DeepLinkHasUsernamePin bool `wam:"deep_link_has_username_pin"` // field 5
	DeepLinkRequirePinEntry bool `wam:"deep_link_require_pin_entry"` // field 6
}
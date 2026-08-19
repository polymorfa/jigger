const WamDeepLinkOpen = 2136 // channel: regular

type DeepLinkOpenEvent struct {
	DeepLinkOpenFrom DEEPLINKOPENFROM `wam:"deep_link_open_from"` // field 2
	DeepLinkType DEEPLINKTYPE `wam:"deep_link_type"` // field 3
	IsContact bool `wam:"is_contact"` // field 4
	LinkOwnerType OWNERTYPE `wam:"link_owner_type"` // field 5
	DeepLinkSessionId string `wam:"deep_link_session_id"` // field 6
	SourceSurface int64 `wam:"source_surface"` // field 7
	Campaign string `wam:"campaign"` // field 8
	FailureReason string `wam:"failure_reason"` // field 9
}
const WamMediaHubUserJourney = 7090 // channel: regular

type MediaHubUserJourneyEvent struct {
	CustomFields string `wam:"custom_fields"` // field 1
	MediaHubAction ACTIONCODE `wam:"media_hub_action"` // field 2
	MediaHubEntryPoint ENTRYPOINTTYPE `wam:"media_hub_entry_point"` // field 3
	MediaHubSequenceNumber int64 `wam:"media_hub_sequence_number"` // field 4
	MediaHubSessionId string `wam:"media_hub_session_id"` // field 5
	MediaHubSurface SURFACECODE `wam:"media_hub_surface"` // field 6
	UnifiedSessionId string `wam:"unified_session_id"` // field 7
}
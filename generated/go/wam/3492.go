const WamCommunityCreation = 3492 // channel: regular

type CommunityCreationEvent struct {
	CommunityCreationActionCount int64 `wam:"community_creation_action_count"` // field 1
	CommunityCreationActionTaken COMMUNITYCREATIONACTIONTAKENTYPE `wam:"community_creation_action_taken"` // field 2
	CommunityCreationCurrentScreen COMMUNITYCREATIONCURRENTSCREENTYPE `wam:"community_creation_current_screen"` // field 3
	CommunityCreationSessionId string `wam:"community_creation_session_id"` // field 4
	CommunityCreationEntrypoint COMMUNITYCREATIONENTRYPOINTTYPE `wam:"community_creation_entrypoint"` // field 5
	CommunityId string `wam:"community_id"` // field 6
}
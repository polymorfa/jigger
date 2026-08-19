const WamGroupMemberTagUpdate = 7010 // channel: regular

type GroupMemberTagUpdateEvent struct {
	GroupId string `wam:"group_id"` // field 1
	GroupMemberTagUpdateAction GROUPMEMBERTAGUPDATEACTIONTYPE `wam:"group_member_tag_update_action"` // field 2
	HasMemberTagAtStart bool `wam:"has_member_tag_at_start"` // field 3
	MemberTagEntryPoint GROUPMEMBERTAGENTRYPOINTTYPE `wam:"member_tag_entry_point"` // field 4
	UiSurface TSSURFACE `wam:"ui_surface"` // field 5
	UnifiedSessionId string `wam:"unified_session_id"` // field 6
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 7
}
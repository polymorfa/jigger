const WamPollsActions = 3676 // channel: regular

type PollsActionsEvent struct {
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 1
	IsAdmin bool `wam:"is_admin"` // field 2
	PollAction POLLACTIONTYPE `wam:"poll_action"` // field 3
	PollCreationDs int64 `wam:"poll_creation_ds"` // field 4
	PollOptionsCount int64 `wam:"poll_options_count"` // field 5
	IsAGroup bool `wam:"is_a_group"` // field 6
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 7
	ChatType MESSAGECHATTYPE `wam:"chat_type"` // field 8
	HideVoterName bool `wam:"hide_voter_name"` // field 9
	PollDurationMs int64 `wam:"poll_duration_ms"` // field 10
}
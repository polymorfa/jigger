const WamGroupCatchUp = 3058 // channel: regular

type GroupCatchUpEvent struct {
	MentionsCountPendingPercentage int64 `wam:"mentions_count_pending_percentage"` // field 4
}
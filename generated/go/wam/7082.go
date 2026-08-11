const WamMentionPickerAction = 7082 // channel: regular

type MentionPickerActionEvent struct {
	GroupSize int64 `wam:"group_size"` // field 1
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 2
	IsAGroup bool `wam:"is_a_group"` // field 3
	MentionType MENTIONTYPE `wam:"mention_type"` // field 4
	ThreadId string `wam:"thread_id"` // field 5
	MentionGroupId string `wam:"mention_group_id"` // field 6
}
const WamMdGroupParticipantMissAck = 4146 // channel: regular

type MdGroupParticipantMissAckEvent struct {
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 1
	IsLid bool `wam:"is_lid"` // field 2
	MessageIsRevoke bool `wam:"message_is_revoke"` // field 3
	ParticipantAddCount int64 `wam:"participant_add_count"` // field 4
	ParticipantRemoveCount int64 `wam:"participant_remove_count"` // field 5
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 6
}
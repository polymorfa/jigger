const WamEphemeralOutOfSyncInfo = 3892 // channel: regular

type EphemeralOutOfSyncInfoEvent struct {
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 1
	IncomingMessageEphemeralityDuration int64 `wam:"incoming_message_ephemerality_duration"` // field 2
	IsAGroup bool `wam:"is_a_group"` // field 3
	IsNewThreadForUser bool `wam:"is_new_thread_for_user"` // field 5
	OtherDefaultModeDuration int64 `wam:"other_default_mode_duration"` // field 6
	ThreadEphemeralityDuration int64 `wam:"thread_ephemerality_duration"` // field 7
	ThreadId string `wam:"thread_id"` // field 8
	UserDefaultModeDuration int64 `wam:"user_default_mode_duration"` // field 9
}
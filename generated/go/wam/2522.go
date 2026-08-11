const WamMdAppStateMessageRange = 2522 // channel: regular

type MdAppStateMessageRangeEvent struct {
	AdditionalMessagesCount int64 `wam:"additional_messages_count"` // field 1
}
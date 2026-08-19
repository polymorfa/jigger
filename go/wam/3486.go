const WamKeepInChatNux = 3486 // channel: regular

type KeepInChatNuxEvent struct {
	ChatEphemeralityDuration int64 `wam:"chat_ephemerality_duration"` // field 1
	KicNuxActionName KICNUXACTIONNAMETYPE `wam:"kic_nux_action_name"` // field 2
	ThreadId string `wam:"thread_id"` // field 3
	Trigger TRIGGERTYPE `wam:"trigger"` // field 4
}
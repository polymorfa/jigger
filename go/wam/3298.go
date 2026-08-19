const WamUiRevokeAction = 3298 // channel: regular

type UiRevokeActionEvent struct {
	MessageAction UIREVOKEACTIONTYPE `wam:"message_action"` // field 1
	UiRevokeActionDuration int64 `wam:"ui_revoke_action_duration"` // field 2
	UiRevokeActionSessionId string `wam:"ui_revoke_action_session_id"` // field 3
}
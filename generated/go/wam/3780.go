const WamUiMessageYourselfAction = 3780 // channel: regular

type UiMessageYourselfActionEvent struct {
	UiMessageYourselfActionSessionId string `wam:"ui_message_yourself_action_session_id"` // field 1
	UiMessageYourselfActionType UIMESSAGEYOURSELFACTIONTYPE `wam:"ui_message_yourself_action_type"` // field 2
	UiMessageYourselfFunnelName UIMESSAGEYOURSELFFUNNELNAME `wam:"ui_message_yourself_funnel_name"` // field 3
}
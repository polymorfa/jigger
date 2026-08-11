const WamGroupJourney = 4512 // channel: regular

type GroupJourneyEvent struct {
	ActionType CHATFILTERACTIONTYPES `wam:"action_type"` // field 1
	AppSessionId string `wam:"app_session_id"` // field 2
	GroupSize int64 `wam:"group_size"` // field 3
	Surface SURFACETYPE `wam:"surface"` // field 4
	ThreadType THREADTYPE `wam:"thread_type"` // field 5
	UserRole USERROLETYPE `wam:"user_role"` // field 6
	UiSurface TSSURFACE `wam:"ui_surface"` // field 7
}
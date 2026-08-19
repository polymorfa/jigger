const WamMdCriticalEvent = 2746 // channel: regular

type MdCriticalEventEvent struct {
	MdCriticalEventCode MDSYNCDCRITICALEVENTCODE `wam:"md_critical_event_code"` // field 1
	Collection COLLECTION `wam:"collection"` // field 2
	MutationActionName string `wam:"mutation_action_name"` // field 3
	MdCriticalEventErrorMessage string `wam:"md_critical_event_error_message"` // field 4
	MdCriticalEventStage string `wam:"md_critical_event_stage"` // field 5
}
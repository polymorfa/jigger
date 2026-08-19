const WamChatFilterEvent = 1616 // channel: regular

type ChatFilterEventEvent struct {
	ActionType CHATFILTERACTIONTYPES `wam:"action_type"` // field 1
	FilterType CHATFILTERTYPES `wam:"filter_type"` // field 2
	SessionId int64 `wam:"session_id"` // field 3
	SearchResultType CHATSEARCHRESULTTYPE `wam:"search_result_type"` // field 4
	TargetScreen CHATFILTERTARGETSCREEN `wam:"target_screen"` // field 5
	ActivitySessionId string `wam:"activity_session_id"` // field 6
	Metadata string `wam:"metadata"` // field 7
	SearchQueryId string `wam:"search_query_id"` // field 8
	SearchRequestId string `wam:"search_request_id"` // field 9
	PredefinedId int64 `wam:"predefined_id"` // field 10
	LabelName string `wam:"label_name"` // field 11
	ListId int64 `wam:"list_id"` // field 12
	ListIndex int64 `wam:"list_index"` // field 13
	ListType LISTTYPE `wam:"list_type"` // field 14
	ThreadId string `wam:"thread_id"` // field 15
}
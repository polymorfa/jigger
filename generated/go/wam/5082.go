const WamSystemMessageClick = 5082 // channel: regular

type SystemMessageClickEvent struct {
	IsAGroup bool `wam:"is_a_group"` // field 1
	IsANewThread bool `wam:"is_a_new_thread"` // field 2
	SystemMessageCategory SYSTEMMESSAGECATEGORYTYPE `wam:"system_message_category"` // field 3
	SystemMessageType SYSTEMMESSAGETYPETYPE `wam:"system_message_type"` // field 4
}
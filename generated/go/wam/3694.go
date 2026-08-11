const WamMessageContextMenuActions = 3694 // channel: regular

type MessageContextMenuActionsEvent struct {
	IsAGroup bool `wam:"is_a_group"` // field 1
	IsMultiAction bool `wam:"is_multi_action"` // field 2
	IsOriginalSender bool `wam:"is_original_sender"` // field 3
	MessageContextMenuAction MESSAGECONTEXTMENUACTIONTYPE `wam:"message_context_menu_action"` // field 4
	MessageContextMenuOption MESSAGECONTEXTMENUOPTIONTYPE `wam:"message_context_menu_option"` // field 5
}
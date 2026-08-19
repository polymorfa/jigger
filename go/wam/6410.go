const WamThreadInteractionDataAi = 6410 // channel: regular

type ThreadInteractionDataAiEvent struct {
	AiChatOrigins AICHATORIGINSTYPE `wam:"ai_chat_origins"` // field 1
	BottomSheetAnimatedSent int64 `wam:"bottom_sheet_animated_sent"` // field 2
	BottomSheetEditedAnimatedSent int64 `wam:"bottom_sheet_edited_animated_sent"` // field 3
	BottomSheetEditedSent int64 `wam:"bottom_sheet_edited_sent"` // field 4
	BottomSheetImagesGenerated int64 `wam:"bottom_sheet_images_generated"` // field 5
	BottomSheetMemuInitiated int64 `wam:"bottom_sheet_memu_initiated"` // field 6
	BottomSheetMemuMessagesSent int64 `wam:"bottom_sheet_memu_messages_sent"` // field 7
	BottomSheetMessagesSent int64 `wam:"bottom_sheet_messages_sent"` // field 8
	BottomSheetPromptsInitiated int64 `wam:"bottom_sheet_prompts_initiated"` // field 9
	BottomSheetRegeneratedSent int64 `wam:"bottom_sheet_regenerated_sent"` // field 10
	CommandSheetShow int64 `wam:"command_sheet_show"` // field 11
	ImagineCommandClick int64 `wam:"imagine_command_click"` // field 14
	ImagineMeMessagesSent int64 `wam:"imagine_me_messages_sent"` // field 15
	ImagineMePromptsInitiatedCount int64 `wam:"imagine_me_prompts_initiated_count"` // field 16
	ThreadDs string `wam:"thread_ds"` // field 17
	MetaAiMentionClick int64 `wam:"meta_ai_mention_click"` // field 19
	MetaAiMentionShow int64 `wam:"meta_ai_mention_show"` // field 20
	SuggestionPromptsClick int64 `wam:"suggestion_prompts_click"` // field 21
	SuggestionPromptsShow int64 `wam:"suggestion_prompts_show"` // field 22
	TotalMessageFromAgentCnt int64 `wam:"total_message_from_agent_cnt"` // field 24
	TotalMessageToAgentCnt int64 `wam:"total_message_to_agent_cnt"` // field 25
	ThreadId string `wam:"thread_id"` // field 26
	ThreadIdByLid string `wam:"thread_id_by_lid"` // field 27
	ThreadCreationDate string `wam:"thread_creation_date"` // field 28
	AiDiscoveryTab string `wam:"ai_discovery_tab"` // field 29
}
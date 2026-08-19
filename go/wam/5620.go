const WamImagineActions = 5620 // channel: regular

type ImagineActionsEvent struct {
	ImagineAction IMAGINEACTION `wam:"imagine_action"` // field 1
	ImagineActionSource IMAGINEACTIONSOURCE `wam:"imagine_action_source"` // field 3
	ImagineActionTarget IMAGINEACTIONTARGET `wam:"imagine_action_target"` // field 4
	ImagineActionThreadType IMAGINEACTIONTHREADTYPE `wam:"imagine_action_thread_type"` // field 5
	IsCancelled bool `wam:"is_cancelled"` // field 6
	IsSent bool `wam:"is_sent"` // field 7
	ImagineActionDuration string `wam:"imagine_action_duration"` // field 8
	MaxIndex int64 `wam:"max_index"` // field 9
	SelectedImageIndex int64 `wam:"selected_image_index"` // field 10
	ImplementationType IMPLEMENTATIONTYPE `wam:"implementation_type"` // field 11
	ImagineMediaType IMAGINEMEDIATYPE `wam:"imagine_media_type"` // field 12
	ImagineActionSourceSubtype IMAGINEACTIONSOURCESUBTYPE `wam:"imagine_action_source_subtype"` // field 13
	AiSessionId string `wam:"ai_session_id"` // field 14
	ThreadSessionId string `wam:"thread_session_id"` // field 15
	MetaAiConversationThreadId string `wam:"meta_ai_conversation_thread_id"` // field 16
	TextModality TEXTMODALITYTYPE `wam:"text_modality"` // field 17
	UnifiedSessionId string `wam:"unified_session_id"` // field 18
}
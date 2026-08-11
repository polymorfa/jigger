const WamLabelEvent = 1422 // channel: regular

type LabelEventEvent struct {
	LabelTarget LABELTARGETS `wam:"label_target"` // field 1
	LabelOperation LABELOPERATIONS `wam:"label_operation"` // field 2
	PredefinedLabelNumber int64 `wam:"predefined_label_number"` // field 3
	LabelCount int64 `wam:"label_count"` // field 4
	ItemsLabeledCount int64 `wam:"items_labeled_count"` // field 5
	LabelOperationEntryPoint string `wam:"label_operation_entry_point"` // field 6
	CustomLabelTitle string `wam:"custom_label_title"` // field 9
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 10
	ThreadCreationDate string `wam:"thread_creation_date"` // field 11
	ThreadId string `wam:"thread_id"` // field 12
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 13
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 14
	MessageDepth int64 `wam:"message_depth"` // field 15
	AppSessionId string `wam:"app_session_id"` // field 16
	ExtraAttributes string `wam:"extra_attributes"` // field 17
	UserActionTarget string `wam:"user_action_target"` // field 18
	SmbListFeatureName SMBLISTFEATURENAMETYPE `wam:"smb_list_feature_name"` // field 19
	SmbListSurface SMBLISTSURFACETYPE `wam:"smb_list_surface"` // field 20
}
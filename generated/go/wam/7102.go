const WamSmbListEvent = 7102 // channel: regular

type SmbListEventEvent struct {
	CustomListTitle string `wam:"custom_list_title"` // field 1
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 2
	LabelOperation LABELOPERATIONS `wam:"label_operation"` // field 3
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 4
	ListId int64 `wam:"list_id"` // field 5
	ListIndex int64 `wam:"list_index"` // field 6
	ListType LISTTYPE `wam:"list_type"` // field 7
	MessageDepth int64 `wam:"message_depth"` // field 8
	PredefinedId int64 `wam:"predefined_id"` // field 9
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 10
	UpdateEntryPoint UPDATEENTRYPOINT `wam:"update_entry_point"` // field 11
	BulkLabeling bool `wam:"bulk_labeling"` // field 12
	CurrentListState string `wam:"current_list_state"` // field 13
	LabelTarget LABELTARGETS `wam:"label_target"` // field 14
	ListsApplied string `wam:"lists_applied"` // field 15
	ListsRemoved string `wam:"lists_removed"` // field 16
	AppSessionId string `wam:"app_session_id"` // field 17
	ExtraAttributes string `wam:"extra_attributes"` // field 18
	UserActionTarget string `wam:"user_action_target"` // field 19
	SmbListFeatureName SMBLISTFEATURENAMETYPE `wam:"smb_list_feature_name"` // field 20
	SmbListSurface SMBLISTSURFACETYPE `wam:"smb_list_surface"` // field 21
}
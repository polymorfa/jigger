const WamStatusPosterActions = 3546 // channel: regular

type StatusPosterActionsEvent struct {
	RetryCount int64 `wam:"retry_count"` // field 1
	StatusAudienceSize int64 `wam:"status_audience_size"` // field 2
	StatusContentSource STATUSCONTENTSOURCE `wam:"status_content_source"` // field 3
	StatusContentType STATUSCONTENTTYPE `wam:"status_content_type"` // field 4
	StatusCreationEntryPoint STATUSCREATIONENTRYPOINT `wam:"status_creation_entry_point"` // field 5
	StatusEventType STATUSEVENTTYPE `wam:"status_event_type"` // field 7
	StatusPostFailureReason string `wam:"status_post_failure_reason"` // field 8
	StatusPrivacyType STATUSPRIVACYTYPE `wam:"status_privacy_type"` // field 10
	StatusSessionId int64 `wam:"status_session_id"` // field 11
	StatusId string `wam:"status_id"` // field 12
	StatusDuration int64 `wam:"status_duration"` // field 13
	Editable bool `wam:"editable"` // field 14
	ExternalInteractables int64 `wam:"external_interactables"` // field 15
	ExternalPackageName string `wam:"external_package_name"` // field 16
	ShareType string `wam:"share_type"` // field 17
	StickerType STICKERTYPE `wam:"sticker_type"` // field 18
	UnifiedSessionId string `wam:"unified_session_id"` // field 19
	StatusPostingSessionId int64 `wam:"status_posting_session_id"` // field 20
	SelectedLayoutConfigId SELECTEDLAYOUTCONFIGID `wam:"selected_layout_config_id"` // field 21
	SelectedMediaCount int64 `wam:"selected_media_count"` // field 22
	StatusMediaPickerFormatType STATUSMEDIAPICKERFORMATTYPE `wam:"status_media_picker_format_type"` // field 23
	PairedMediaType PAIREDMEDIATYPE `wam:"paired_media_type"` // field 24
	StatusPairedMediaQuality STATUSPAIREDMEDIAQUALITY `wam:"status_paired_media_quality"` // field 25
	DefaultTrimmedVideoDuration int64 `wam:"default_trimmed_video_duration"` // field 26
	OriginalVideoDuration int64 `wam:"original_video_duration"` // field 27
	IsFavoured bool `wam:"is_favoured"` // field 28
	MediaIndex int64 `wam:"media_index"` // field 29
	StatusCategory STATUSCATEGORY `wam:"status_category"` // field 30
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 31
	CanSaveAsDraft bool `wam:"can_save_as_draft"` // field 32
	HasDraftAvailable bool `wam:"has_draft_available"` // field 33
	CardType ENGAGEMENTCARDTYPE `wam:"card_type"` // field 34
	CardVariant ENGAGEMENTCARDVARIANT `wam:"card_variant"` // field 35
	Cid string `wam:"cid"` // field 36
	IsBatchedPost bool `wam:"is_batched_post"` // field 37
	StatusPartCode string `wam:"status_part_code"` // field 38
}
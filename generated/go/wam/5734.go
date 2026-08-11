const WamShareContentUserJourney = 5734 // channel: regular

type ShareContentUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	HasFiles bool `wam:"has_files"` // field 2
	HasImages bool `wam:"has_images"` // field 3
	HasLinks bool `wam:"has_links"` // field 4
	HasVideo bool `wam:"has_video"` // field 5
	MediaCount int64 `wam:"media_count"` // field 6
	NumberOfRecipients int64 `wam:"number_of_recipients"` // field 7
	ShareContentUserJourneyAction SHARECONTENTUSERJOURNEYACTION `wam:"share_content_user_journey_action"` // field 8
	ShareContentUserJourneySurfaceEntryPoint TSSURFACE `wam:"share_content_user_journey_surface_entry_point"` // field 9
	UiSurface TSSURFACE `wam:"ui_surface"` // field 10
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 11
	CaptionAdded bool `wam:"caption_added"` // field 12
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 13
	UnifiedSessionId string `wam:"unified_session_id"` // field 14
	IsForwardFlow bool `wam:"is_forward_flow"` // field 15
	MessageSelectedCount int64 `wam:"message_selected_count"` // field 16
	HasMusic bool `wam:"has_music"` // field 17
	HasCaptionPrefilled bool `wam:"has_caption_prefilled"` // field 21
	HasBotImagineImages bool `wam:"has_bot_imagine_images"` // field 22
	PrefilledCaptionRemoved bool `wam:"prefilled_caption_removed"` // field 23
	ShareContentUserJourneyEntryPoint SHARECONTENTUSERJOURNEYENTRYPOINT `wam:"share_content_user_journey_entry_point"` // field 24
	HasStatusRecipient bool `wam:"has_status_recipient"` // field 25
	ForwardUserJourneyFunnelId string `wam:"forward_user_journey_funnel_id"` // field 27
}
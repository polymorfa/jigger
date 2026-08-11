const WamStatusMute = 2978 // channel: regular

type StatusMuteEvent struct {
	StatusSessionId int64 `wam:"status_session_id"` // field 1
	StatusViewerSessionId int64 `wam:"status_viewer_session_id"` // field 2
	StatusItemIndex int64 `wam:"status_item_index"` // field 3
	PsaCampaignIds string `wam:"psa_campaign_ids"` // field 4
	PsaCampaignItemIndex int64 `wam:"psa_campaign_item_index"` // field 5
	MuteOrigin MUTEORIGIN `wam:"mute_origin"` // field 6
	PsaCampaignId string `wam:"psa_campaign_id"` // field 7
	MuteAction MUTEACTION `wam:"mute_action"` // field 8
	IsPosterBiz bool `wam:"is_poster_biz"` // field 9
	IsPosterInAddressBook bool `wam:"is_poster_in_address_book"` // field 10
	UnifiedSessionId string `wam:"unified_session_id"` // field 11
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 12
	StatusCategory STATUSCATEGORY `wam:"status_category"` // field 13
	StatusPosterContactType STATUSPOSTERCONTACTTYPE `wam:"status_poster_contact_type"` // field 14
	Cid string `wam:"cid"` // field 15
}
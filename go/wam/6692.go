const WamStatusViewerAction = 6692 // channel: regular

type StatusViewerActionEvent struct {
	AttributionType TOPBARATTRIBUTIONTYPE `wam:"attribution_type"` // field 1
	ViewerActionType STATUSVIEWACTIONTYPE `wam:"viewer_action_type"` // field 2
	AttributionTypes string `wam:"attribution_types"` // field 3
	StatusCategory STATUSCATEGORY `wam:"status_category"` // field 4
	ExternalSourceDomainType INLINEVIDEOTYPE `wam:"external_source_domain_type"` // field 5
	UrlStatusClicked URLSTATUSCLICKED `wam:"url_status_clicked"` // field 6
	UrlStatusType URLSTATUSTYPE `wam:"url_status_type"` // field 7
	ActionIndex int64 `wam:"action_index"` // field 8
	LinkLoadTime int64 `wam:"link_load_time"` // field 9
	LinkOpenResult string `wam:"link_open_result"` // field 10
	PsaCampaignId string `wam:"psa_campaign_id"` // field 11
	StatusId string `wam:"status_id"` // field 12
	StatusViewerSessionId int64 `wam:"status_viewer_session_id"` // field 13
}
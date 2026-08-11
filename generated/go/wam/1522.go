const WamViewBusinessProfile = 1522 // channel: regular

type ViewBusinessProfileEvent struct {
	ViewBusinessProfileAction VIEWBUSINESSPROFILEACTION `wam:"view_business_profile_action"` // field 1
	WebsiteSource WEBSITESOURCETYPE `wam:"website_source"` // field 2
	BusinessProfileJid string `wam:"business_profile_jid"` // field 3
	ScrollDepth int64 `wam:"scroll_depth"` // field 4
	LinkedAccount BUSINESSTOOLSLINKEDACCOUNTTYPE `wam:"linked_account"` // field 5
	CatalogSessionId string `wam:"catalog_session_id"` // field 6
	IsSelfView bool `wam:"is_self_view"` // field 7
	ProfileEntryPoint PROFILEENTRYPOINT `wam:"profile_entry_point"` // field 8
	BizFbSize TRUSTSIGNALBUCKETS `wam:"biz_fb_size"` // field 9
	BizIgSize TRUSTSIGNALBUCKETS `wam:"biz_ig_size"` // field 10
	IsProfileLinked bool `wam:"is_profile_linked"` // field 11
	HasCoverPhoto bool `wam:"has_cover_photo"` // field 12
}
const WamMmCollectionWindowStateEvent = 6744 // channel: private

type MmCollectionWindowStateEventEvent struct {
	BusinessLidOrJid string `wam:"business_lid_or_jid"` // field 1
	MmHasDisclosedToken bool `wam:"mm_has_disclosed_token"` // field 2
	MmHasDisclosedUrl bool `wam:"mm_has_disclosed_url"` // field 3
	MmHasShowDisclosureFlag bool `wam:"mm_has_show_disclosure_flag"` // field 4
	TemplateId string `wam:"template_id"` // field 5
	MmDisclosureFlags int64 `wam:"mm_disclosure_flags"` // field 6
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 7
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 8
	MmHasUndisclosedToken bool `wam:"mm_has_undisclosed_token"` // field 9
}
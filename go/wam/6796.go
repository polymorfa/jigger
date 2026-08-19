const WamMmDisclosureStateFsEvent = 6796 // channel: regular

type MmDisclosureStateFsEventEvent struct {
	DisclosureEventType DISCLOSUREEVENTTYPE `wam:"disclosure_event_type"` // field 1
	DisclosureInteraction DISCLOSUREINTERACTION `wam:"disclosure_interaction"` // field 2
	DisclosureSource DISCLOSURESOURCE `wam:"disclosure_source"` // field 3
	DisclosureSuppressionReason DISCLOSURESUPPRESSIONREASON `wam:"disclosure_suppression_reason"` // field 4
	DisclosureSurface DISCLOSURESURFACE `wam:"disclosure_surface"` // field 5
	IsCompanionDevice bool `wam:"is_companion_device"` // field 6
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 7
	MmHasDisclosedUrl bool `wam:"mm_has_disclosed_url"` // field 8
	MmHasShowDisclosureFlag bool `wam:"mm_has_show_disclosure_flag"` // field 9
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 10
	UserBecameDisclosed bool `wam:"user_became_disclosed"` // field 11
	MmDisclosureFlags int64 `wam:"mm_disclosure_flags"` // field 12
}
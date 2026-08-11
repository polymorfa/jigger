const WamMmDisclosureStateEvent = 6552 // channel: private

type MmDisclosureStateEventEvent struct {
	BusinessLidOrJid string `wam:"business_lid_or_jid"` // field 1
	DisclosureEventType DISCLOSUREEVENTTYPE `wam:"disclosure_event_type"` // field 3
	DisclosureInteraction DISCLOSUREINTERACTION `wam:"disclosure_interaction"` // field 4
	DisclosureSource DISCLOSURESOURCE `wam:"disclosure_source"` // field 5
	DisclosureSuppressionReason DISCLOSURESUPPRESSIONREASON `wam:"disclosure_suppression_reason"` // field 6
	DisclosureSurface DISCLOSURESURFACE `wam:"disclosure_surface"` // field 7
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 8
	MmHasDisclosedUrl bool `wam:"mm_has_disclosed_url"` // field 9
	MmHasShowDisclosureFlag bool `wam:"mm_has_show_disclosure_flag"` // field 10
	TemplateId string `wam:"template_id"` // field 11
	UserBecameDisclosed bool `wam:"user_became_disclosed"` // field 13
	IsCompanionDevice bool `wam:"is_companion_device"` // field 14
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 15
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 16
	IsNetworkAvailable bool `wam:"is_network_available"` // field 18
	MmDisclosureFlags int64 `wam:"mm_disclosure_flags"` // field 19
}
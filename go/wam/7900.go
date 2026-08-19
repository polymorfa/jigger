const WamAudienceManagement = 7900 // channel: regular

type AudienceManagementEvent struct {
	AudienceEventSurface AUDIENCEEVENTSURFACETYPE `wam:"audience_event_surface"` // field 1
	AudienceExtraData string `wam:"audience_extra_data"` // field 2
	AudienceManagementAction AUDIENCEMANAGEMENTACTIONTYPE `wam:"audience_management_action"` // field 3
	AudiencePredicateType AUDIENCEPREDICATETYPEENUM `wam:"audience_predicate_type"` // field 4
	AudienceResolutionTrigger AUDIENCERESOLUTIONTRIGGERTYPE `wam:"audience_resolution_trigger"` // field 5
}
const WamNewsletterEnforcementEvents = 7112 // channel: regular

type NewsletterEnforcementEventsEvent struct {
	Cid string `wam:"cid"` // field 1
	EnforcementInteractionEvent ENFORCEMENTINTERACTIONEVENT `wam:"enforcement_interaction_event"` // field 2
	EnforcementType ENFORCEMENTTYPE `wam:"enforcement_type"` // field 3
	InteractionEntryPoint INTERACTIONENTRYPOINT `wam:"interaction_entry_point"` // field 4
	InteractionSurface INTERACTIONSURFACE `wam:"interaction_surface"` // field 5
	NewsletterEnforcementSessionId int64 `wam:"newsletter_enforcement_session_id"` // field 6
	ViolationCategory string `wam:"violation_category"` // field 7
}
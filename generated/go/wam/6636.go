const WamAutomaticEventsUserJourney = 6636 // channel: regular

type AutomaticEventsUserJourneyEvent struct {
	AutomaticEventsTargetComponent AUTOMATICEVENTSTARGETCOMPONENTENUM `wam:"automatic_events_target_component"` // field 1
	SmbUserActionType SMBUSERACTIONTYPEENUM `wam:"smb_user_action_type"` // field 2
	Surface SURFACETYPE `wam:"surface"` // field 3
	ExtraAttributes string `wam:"extra_attributes"` // field 4
}
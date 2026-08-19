const WamContactSearchExperience = 6574 // channel: regular

type ContactSearchExperienceEvent struct {
	IsUsernameSearch bool `wam:"is_username_search"` // field 1
	SearchActionName SEARCHACTIONNAME `wam:"search_action_name"` // field 2
	SearchStartsWithAt bool `wam:"search_starts_with_at"` // field 4
	ContactSearchEntrypoint CONTACTSEARCHENTRYPOINT `wam:"contact_search_entrypoint"` // field 5
}
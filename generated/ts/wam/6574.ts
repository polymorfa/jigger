export const WamContactSearchExperience = 6574 as const

export interface ContactSearchExperienceEvent {
  /** field 1, wire `is_username_search` */
  isUsernameSearch?: boolean
  /** field 2, wire `search_action_name` */
  searchActionName?: SEARCHACTIONNAME
  /** field 4, wire `search_starts_with_at` */
  searchStartsWithAt?: boolean
  /** field 5, wire `contact_search_entrypoint` */
  contactSearchEntrypoint?: CONTACTSEARCHENTRYPOINT
}
export const WamStatusPrivacySettings = 3200 as const

export interface StatusPrivacySettingsEvent {
  /** field 1, wire `setting` */
  setting?: SETTING
  /** field 2, wire `previous_setting` */
  previousSetting?: SETTING
  /** field 3, wire `selected_list_size` */
  selectedListSize?: number
  /** field 4, wire `status_privacy_surface` */
  statusPrivacySurface?: STATUSPRIVACYSURFACE
  /** field 5, wire `status_privacy_settings_action` */
  statusPrivacySettingsAction?: STATUSPRIVACYSETTINGSACTION
  /** field 6, wire `status_posting_session_id` */
  statusPostingSessionId?: number
  /** field 7, wire `selected_contacts_size` */
  selectedContactsSize?: number
  /** field 8, wire `selected_groups_size` */
  selectedGroupsSize?: number
  /** field 9, wire `allow_resharing` */
  allowResharing?: boolean
  /** field 10, wire `allow_forwarding` */
  allowForwarding?: boolean
  /** field 11, wire `status_privacy_settings_view` */
  statusPrivacySettingsView?: STATUSPRIVACYSETTINGSVIEW
  /** field 12, wire `contact_suggestion` */
  contactSuggestion?: CONTACTSUGGESTION
  /** field 13, wire `selection_pill_pos` */
  selectionPillPos?: number
  /** field 14, wire `contact_suggestions_count` */
  contactSuggestionsCount?: number
  /** field 15, wire `last_successful_ranking_update` */
  lastSuccessfulRankingUpdate?: number
  /** field 16, wire `status_privacy_lists` */
  statusPrivacyLists?: string
}
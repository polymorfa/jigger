export const WamDeepLinkClick = 1156 as const

export interface DeepLinkClickEvent {
  /** field 1, wire `deep_link_has_text` */
  deepLinkHasText?: boolean
  /** field 2, wire `deep_link_has_phone_number` */
  deepLinkHasPhoneNumber?: boolean
  /** field 3, wire `deep_link_session_id` */
  deepLinkSessionId?: string
  /** field 4, wire `deep_link_has_username` */
  deepLinkHasUsername?: boolean
  /** field 5, wire `deep_link_has_username_pin` */
  deepLinkHasUsernamePin?: boolean
  /** field 6, wire `deep_link_require_pin_entry` */
  deepLinkRequirePinEntry?: boolean
}
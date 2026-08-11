export const WamEditBusinessProfile = 1466 as const

export interface EditBusinessProfileEvent {
  /** field 1, wire `edit_profile_action` */
  editProfileAction?: EDITPROFILEACTION
  /** field 2, wire `edit_business_profile_session_id` */
  editBusinessProfileSessionId?: string
  /** field 3, wire `has_description` */
  hasDescription?: boolean
  /** field 4, wire `has_category` */
  hasCategory?: boolean
  /** field 5, wire `has_address` */
  hasAddress?: boolean
  /** field 6, wire `has_hours` */
  hasHours?: boolean
  /** field 7, wire `has_email` */
  hasEmail?: boolean
  /** field 8, wire `has_website` */
  hasWebsite?: boolean
  /** field 9, wire `edit_profile_action_field` */
  editProfileActionField?: BUSINESSPROFILEFIELD
  /** field 10, wire `business_profile_entry_point` */
  businessProfileEntryPoint?: BUSINESSPROFILEENTRYPOINT
  /** field 11, wire `has_payment_info` */
  hasPaymentInfo?: boolean
  /** field 12, wire `has_connected_fb_media` */
  hasConnectedFbMedia?: boolean
  /** field 13, wire `has_connected_ig_media` */
  hasConnectedIgMedia?: boolean
}
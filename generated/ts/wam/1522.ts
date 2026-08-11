export const WamViewBusinessProfile = 1522 as const

export interface ViewBusinessProfileEvent {
  /** field 1, wire `view_business_profile_action` */
  viewBusinessProfileAction?: VIEWBUSINESSPROFILEACTION
  /** field 2, wire `website_source` */
  websiteSource?: WEBSITESOURCETYPE
  /** field 3, wire `business_profile_jid` */
  businessProfileJid?: string
  /** field 4, wire `scroll_depth` */
  scrollDepth?: number
  /** field 5, wire `linked_account` */
  linkedAccount?: BUSINESSTOOLSLINKEDACCOUNTTYPE
  /** field 6, wire `catalog_session_id` */
  catalogSessionId?: string
  /** field 7, wire `is_self_view` */
  isSelfView?: boolean
  /** field 8, wire `profile_entry_point` */
  profileEntryPoint?: PROFILEENTRYPOINT
  /** field 9, wire `biz_fb_size` */
  bizFbSize?: TRUSTSIGNALBUCKETS
  /** field 10, wire `biz_ig_size` */
  bizIgSize?: TRUSTSIGNALBUCKETS
  /** field 11, wire `is_profile_linked` */
  isProfileLinked?: boolean
  /** field 12, wire `has_cover_photo` */
  hasCoverPhoto?: boolean
}
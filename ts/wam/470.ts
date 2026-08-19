export const WamContactUsSession = 470 as const

export interface ContactUsSessionEvent {
  /** field 1, wire `contact_us_exit_state` */
  contactUsExitState?: CONTACTUSEXITSTATE
  /** field 2, wire `contact_us_faq` */
  contactUsFaq?: boolean
  /** field 3, wire `contact_us_automatic_email` */
  contactUsAutomaticEmail?: boolean
  /** field 4, wire `contact_us_logs` */
  contactUsLogs?: boolean
  /** field 5, wire `contact_us_outage` */
  contactUsOutage?: boolean
  /** field 6, wire `contact_us_outage_email` */
  contactUsOutageEmail?: boolean
  /** field 11, wire `contact_us_t` */
  contactUsT?: string
  /** field 12, wire `contact_us_menu_faq_t` */
  contactUsMenuFaqT?: string
  /** field 19, wire `contact_us_screenshot_c` */
  contactUsScreenshotC?: string
  /** field 21, wire `language_code` */
  languageCode?: string
}
const WamContactUsSession = 470 // channel: regular

type ContactUsSessionEvent struct {
	ContactUsExitState CONTACTUSEXITSTATE `wam:"contact_us_exit_state"` // field 1
	ContactUsFaq bool `wam:"contact_us_faq"` // field 2
	ContactUsAutomaticEmail bool `wam:"contact_us_automatic_email"` // field 3
	ContactUsLogs bool `wam:"contact_us_logs"` // field 4
	ContactUsOutage bool `wam:"contact_us_outage"` // field 5
	ContactUsOutageEmail bool `wam:"contact_us_outage_email"` // field 6
	ContactUsT string `wam:"contact_us_t"` // field 11
	ContactUsMenuFaqT string `wam:"contact_us_menu_faq_t"` // field 12
	ContactUsScreenshotC string `wam:"contact_us_screenshot_c"` // field 19
	LanguageCode string `wam:"language_code"` // field 21
}
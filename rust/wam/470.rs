pub const WAM_CONTACT_US_SESSION: u32 = 470;

#[derive(Debug, Default)]
pub struct ContactUsSessionEvent {
    /// field 1, wire `contact_us_exit_state`
    pub contact_us_exit_state: Option<CONTACTUSEXITSTATE>,
    /// field 2, wire `contact_us_faq`
    pub contact_us_faq: Option<bool>,
    /// field 3, wire `contact_us_automatic_email`
    pub contact_us_automatic_email: Option<bool>,
    /// field 4, wire `contact_us_logs`
    pub contact_us_logs: Option<bool>,
    /// field 5, wire `contact_us_outage`
    pub contact_us_outage: Option<bool>,
    /// field 6, wire `contact_us_outage_email`
    pub contact_us_outage_email: Option<bool>,
    /// field 11, wire `contact_us_t`
    pub contact_us_t: Option<String>,
    /// field 12, wire `contact_us_menu_faq_t`
    pub contact_us_menu_faq_t: Option<String>,
    /// field 19, wire `contact_us_screenshot_c`
    pub contact_us_screenshot_c: Option<String>,
    /// field 21, wire `language_code`
    pub language_code: Option<String>,
}
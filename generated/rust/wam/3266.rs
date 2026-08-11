pub const WAM_PS_PHONE_NUMBER_HYPERLINK: u32 = 3266;

#[derive(Debug, Default)]
pub struct PsPhoneNumberHyperlinkEvent {
    /// field 1, wire `is_phone_num_hyperlink_owner`
    pub is_phone_num_hyperlink_owner: Option<bool>,
    /// field 2, wire `phone_num_hyperlink_action`
    pub phone_num_hyperlink_action: Option<PHONENUMHYPERLINKACTIONTYPE>,
    /// field 3, wire `phone_number_status_on_wa`
    pub phone_number_status_on_wa: Option<bool>,
    /// field 4, wire `sequence_number`
    pub sequence_number: Option<i64>,
}
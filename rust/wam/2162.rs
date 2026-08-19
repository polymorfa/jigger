pub const WAM_PAYMENTS_USER_ACTION: u32 = 2162;

#[derive(Debug, Default)]
pub struct PaymentsUserActionEvent {
    /// field 1, wire `payments_event_id`
    pub payments_event_id: Option<String>,
    /// field 2, wire `payments_country_code`
    pub payments_country_code: Option<String>,
    /// field 3, wire `payment_action_type`
    pub payment_action_type: Option<PAYMENTACTIONTYPES>,
    /// field 4, wire `action_target`
    pub action_target: Option<PAYMENTACTIONTARGETS>,
    /// field 5, wire `screen`
    pub screen: Option<String>,
    /// field 6, wire `referral`
    pub referral: Option<String>,
    /// field 7, wire `payment_mode`
    pub payment_mode: Option<PAYMENTMODETYPES>,
    /// field 8, wire `upi_payments_psp_id`
    pub upi_payments_psp_id: Option<UPIPAYMENTSPSPIDTYPE>,
    /// field 9, wire `payments_error_code`
    pub payments_error_code: Option<String>,
    /// field 10, wire `payments_error_text`
    pub payments_error_text: Option<String>,
    /// field 11, wire `payments_bank_id`
    pub payments_bank_id: Option<String>,
    /// field 12, wire `payments_response_result`
    pub payments_response_result: Option<PAYMENTSRESPONSERESULTTYPE>,
    /// field 13, wire `payments_accounts_exist`
    pub payments_accounts_exist: Option<bool>,
    /// field 14, wire `payments_sms_provider_retry_count`
    pub payments_sms_provider_retry_count: Option<i64>,
    /// field 15, wire `payment_sms_provider_number`
    pub payment_sms_provider_number: Option<String>,
    /// field 16, wire `payments_sms_request_retry_count`
    pub payments_sms_request_retry_count: Option<i64>,
    /// field 17, wire `payments_request_name`
    pub payments_request_name: Option<PAYMENTSREQUESTNAMETYPE>,
    /// field 18, wire `payments_banks_search_activated`
    pub payments_banks_search_activated: Option<bool>,
    /// field 19, wire `payments_banks_search_string`
    pub payments_banks_search_string: Option<String>,
    /// field 20, wire `payments_banks_search_selected`
    pub payments_banks_search_selected: Option<bool>,
    /// field 21, wire `payments_banks_scrolled`
    pub payments_banks_scrolled: Option<bool>,
    /// field 22, wire `payments_banks_row_selected`
    pub payments_banks_row_selected: Option<i64>,
    /// field 23, wire `payment_number_of_accounts_available`
    pub payment_number_of_accounts_available: Option<i64>,
    /// field 24, wire `payment_account_row_selected`
    pub payment_account_row_selected: Option<i64>,
    /// field 25, wire `payments_banks_selected_name`
    pub payments_banks_selected_name: Option<String>,
    /// field 26, wire `payments_request_retry_count`
    pub payments_request_retry_count: Option<i64>,
    /// field 27, wire `payments_request_retry_time_delay_seconds`
    pub payments_request_retry_time_delay_seconds: Option<i64>,
    /// field 28, wire `payments_upi_check_pin_error_reason`
    pub payments_upi_check_pin_error_reason: Option<PAYMENTSUPICHECKPINUSERERRORREASONTYPE>,
    /// field 29, wire `payments_has_multiple_sims`
    pub payments_has_multiple_sims: Option<bool>,
    /// field 30, wire `payments_verify_card_result`
    pub payments_verify_card_result: Option<PAYMENTSVERIFYCARDRESULTTYPE>,
    /// field 31, wire `payments_contacts_bucket`
    pub payments_contacts_bucket: Option<PAYMENTSCONTACTSBUCKETTYPE>,
    /// field 32, wire `payment_number_of_people_invited`
    pub payment_number_of_people_invited: Option<i64>,
    /// field 33, wire `payment_pin_set_up`
    pub payment_pin_set_up: Option<bool>,
    /// field 34, wire `payment_sent`
    pub payment_sent: Option<bool>,
    /// field 35, wire `query_params`
    pub query_params: Option<String>,
    /// field 36, wire `payments_is_order`
    pub payments_is_order: Option<bool>,
    /// field 37, wire `referral_context`
    pub referral_context: Option<String>,
    /// field 38, wire `payments_order_type`
    pub payments_order_type: Option<String>,
    /// field 39, wire `payments_p2m_payment_config_id`
    pub payments_p2m_payment_config_id: Option<String>,
    /// field 40, wire `payments_is_mandate`
    pub payments_is_mandate: Option<bool>,
    /// field 41, wire `payments_mandate`
    pub payments_mandate: Option<String>,
    /// field 42, wire `payments_iq_call_status`
    pub payments_iq_call_status: Option<PAYMENTSIQCALL>,
    /// field 43, wire `merchant_type`
    pub merchant_type: Option<MERCHANTTYPETYPE>,
    /// field 44, wire `p2m_type`
    pub p2m_type: Option<P2MTYPETYPE>,
    /// field 45, wire `payment_transaction_status`
    pub payment_transaction_status: Option<PAYMENTTRANSACTIONSTATUSTYPE>,
    /// field 46, wire `previous_screen_name`
    pub previous_screen_name: Option<String>,
    /// field 47, wire `payments_error_title`
    pub payments_error_title: Option<String>,
    /// field 48, wire `custom_payment_methods_sync_status`
    pub custom_payment_methods_sync_status: Option<CUSTOMPAYMENTMETHODSSYNCSTATUS>,
}
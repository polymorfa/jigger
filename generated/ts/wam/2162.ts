export const WamPaymentsUserAction = 2162 as const

export interface PaymentsUserActionEvent {
  /** field 1, wire `payments_event_id` */
  paymentsEventId?: string
  /** field 2, wire `payments_country_code` */
  paymentsCountryCode?: string
  /** field 3, wire `payment_action_type` */
  paymentActionType?: PAYMENTACTIONTYPES
  /** field 4, wire `action_target` */
  actionTarget?: PAYMENTACTIONTARGETS
  /** field 5, wire `screen` */
  screen?: string
  /** field 6, wire `referral` */
  referral?: string
  /** field 7, wire `payment_mode` */
  paymentMode?: PAYMENTMODETYPES
  /** field 8, wire `upi_payments_psp_id` */
  upiPaymentsPspId?: UPIPAYMENTSPSPIDTYPE
  /** field 9, wire `payments_error_code` */
  paymentsErrorCode?: string
  /** field 10, wire `payments_error_text` */
  paymentsErrorText?: string
  /** field 11, wire `payments_bank_id` */
  paymentsBankId?: string
  /** field 12, wire `payments_response_result` */
  paymentsResponseResult?: PAYMENTSRESPONSERESULTTYPE
  /** field 13, wire `payments_accounts_exist` */
  paymentsAccountsExist?: boolean
  /** field 14, wire `payments_sms_provider_retry_count` */
  paymentsSmsProviderRetryCount?: number
  /** field 15, wire `payment_sms_provider_number` */
  paymentSmsProviderNumber?: string
  /** field 16, wire `payments_sms_request_retry_count` */
  paymentsSmsRequestRetryCount?: number
  /** field 17, wire `payments_request_name` */
  paymentsRequestName?: PAYMENTSREQUESTNAMETYPE
  /** field 18, wire `payments_banks_search_activated` */
  paymentsBanksSearchActivated?: boolean
  /** field 19, wire `payments_banks_search_string` */
  paymentsBanksSearchString?: string
  /** field 20, wire `payments_banks_search_selected` */
  paymentsBanksSearchSelected?: boolean
  /** field 21, wire `payments_banks_scrolled` */
  paymentsBanksScrolled?: boolean
  /** field 22, wire `payments_banks_row_selected` */
  paymentsBanksRowSelected?: number
  /** field 23, wire `payment_number_of_accounts_available` */
  paymentNumberOfAccountsAvailable?: number
  /** field 24, wire `payment_account_row_selected` */
  paymentAccountRowSelected?: number
  /** field 25, wire `payments_banks_selected_name` */
  paymentsBanksSelectedName?: string
  /** field 26, wire `payments_request_retry_count` */
  paymentsRequestRetryCount?: number
  /** field 27, wire `payments_request_retry_time_delay_seconds` */
  paymentsRequestRetryTimeDelaySeconds?: number
  /** field 28, wire `payments_upi_check_pin_error_reason` */
  paymentsUpiCheckPinErrorReason?: PAYMENTSUPICHECKPINUSERERRORREASONTYPE
  /** field 29, wire `payments_has_multiple_sims` */
  paymentsHasMultipleSims?: boolean
  /** field 30, wire `payments_verify_card_result` */
  paymentsVerifyCardResult?: PAYMENTSVERIFYCARDRESULTTYPE
  /** field 31, wire `payments_contacts_bucket` */
  paymentsContactsBucket?: PAYMENTSCONTACTSBUCKETTYPE
  /** field 32, wire `payment_number_of_people_invited` */
  paymentNumberOfPeopleInvited?: number
  /** field 33, wire `payment_pin_set_up` */
  paymentPinSetUp?: boolean
  /** field 34, wire `payment_sent` */
  paymentSent?: boolean
  /** field 35, wire `query_params` */
  queryParams?: string
  /** field 36, wire `payments_is_order` */
  paymentsIsOrder?: boolean
  /** field 37, wire `referral_context` */
  referralContext?: string
  /** field 38, wire `payments_order_type` */
  paymentsOrderType?: string
  /** field 39, wire `payments_p2m_payment_config_id` */
  paymentsP2mPaymentConfigId?: string
  /** field 40, wire `payments_is_mandate` */
  paymentsIsMandate?: boolean
  /** field 41, wire `payments_mandate` */
  paymentsMandate?: string
  /** field 42, wire `payments_iq_call_status` */
  paymentsIqCallStatus?: PAYMENTSIQCALL
  /** field 43, wire `merchant_type` */
  merchantType?: MERCHANTTYPETYPE
  /** field 44, wire `p2m_type` */
  p2mType?: P2MTYPETYPE
  /** field 45, wire `payment_transaction_status` */
  paymentTransactionStatus?: PAYMENTTRANSACTIONSTATUSTYPE
  /** field 46, wire `previous_screen_name` */
  previousScreenName?: string
  /** field 47, wire `payments_error_title` */
  paymentsErrorTitle?: string
  /** field 48, wire `custom_payment_methods_sync_status` */
  customPaymentMethodsSyncStatus?: CUSTOMPAYMENTMETHODSSYNCSTATUS
}
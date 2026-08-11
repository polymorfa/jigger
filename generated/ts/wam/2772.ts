export const WamLwiScreen = 2772 as const

export interface LwiScreenEvent {
  /** field 1, wire `lwi_flow_id` */
  lwiFlowId?: string
  /** field 2, wire `lwi_event_sequence_number` */
  lwiEventSequenceNumber?: number
  /** field 3, wire `product_id` */
  productId?: string
  /** field 4, wire `lwi_screen_reference` */
  lwiScreenReference?: LWISCREENREFERENCE
  /** field 5, wire `lwi_screen_action` */
  lwiScreenAction?: LWISCREENACTION
  /** field 6, wire `lwi_alert_reason` */
  lwiAlertReason?: LWIALERTREASON
  /** field 7, wire `user_has_linked_fb_page` */
  userHasLinkedFbPage?: boolean
  /** field 8, wire `selected_products_ids_list` */
  selectedProductsIdsList?: string
  /** field 9, wire `default_ads_content_selected` */
  defaultAdsContentSelected?: LWIADSCONTENTTYPE
  /** field 10, wire `user_has_catalog_items_to_promote` */
  userHasCatalogItemsToPromote?: boolean
  /** field 11, wire `user_has_status_to_promote` */
  userHasStatusToPromote?: boolean
  /** field 12, wire `create_ad_enabled` */
  createAdEnabled?: boolean
  /** field 13, wire `payment_method_set` */
  paymentMethodSet?: boolean
  /** field 14, wire `user_provided_fb_consent` */
  userProvidedFbConsent?: boolean
  /** field 15, wire `lwi_budget_in_local` */
  lwiBudgetInLocal?: number
  /** field 16, wire `lwi_currency` */
  lwiCurrency?: string
  /** field 17, wire `lwi_default_budget_in_local` */
  lwiDefaultBudgetInLocal?: number
  /** field 18, wire `lwi_default_duration_in_days` */
  lwiDefaultDurationInDays?: number
  /** field 19, wire `lwi_default_targeting_spec` */
  lwiDefaultTargetingSpec?: LWIDEFAULTTARGETINGSPEC
  /** field 20, wire `lwi_duration_in_days` */
  lwiDurationInDays?: number
  /** field 21, wire `lwi_targeting_spec` */
  lwiTargetingSpec?: string
  /** field 22, wire `lwi_ads_identity_type` */
  lwiAdsIdentityType?: LWIADSIDENTITYTYPE
  /** field 23, wire `user_went_through_fb_web_login` */
  userWentThroughFbWebLogin?: boolean
  /** field 24, wire `lwi_ctwa_ad_cta_type` */
  lwiCtwaAdCtaType?: LWICTWAADCTATYPE
  /** field 25, wire `lwi_ctwa_ad_status_type` */
  lwiCtwaAdStatusType?: LWICTWAADSTATUSTYPE
  /** field 26, wire `lwi_total_ctwa_ads` */
  lwiTotalCtwaAds?: number
  /** field 27, wire `lwi_is_fb_app_installed` */
  lwiIsFbAppInstalled?: boolean
  /** field 28, wire `lwi_viewer_has_edit_permission` */
  lwiViewerHasEditPermission?: boolean
  /** field 30, wire `lwi_extras` */
  lwiExtras?: string
  /** field 31, wire `used_saved_audience` */
  usedSavedAudience?: boolean
  /** field 32, wire `lwi_viewer_has_promote_permission` */
  lwiViewerHasPromotePermission?: boolean
  /** field 33, wire `alert_count` */
  alertCount?: number
  /** field 34, wire `user_has_seen_recommended_budget` */
  userHasSeenRecommendedBudget?: boolean
  /** field 35, wire `user_has_advanced_audience` */
  userHasAdvancedAudience?: boolean
  /** field 36, wire `billing_status` */
  billingStatus?: BILLINGSTATUS
  /** field 37, wire `validation_status` */
  validationStatus?: VALIDATIONSTATUS
  /** field 38, wire `onboarding_entry_point` */
  onboardingEntryPoint?: ONBOARDINGENTRYPOINT
  /** field 39, wire `item_count` */
  itemCount?: number
  /** field 40, wire `ad_media_type_selected` */
  adMediaTypeSelected?: LWIADMEDIATYPE
  /** field 41, wire `ad_content_recommendation` */
  adContentRecommendation?: ADCONTENTRECOMMENDATIONTYPE
  /** field 42, wire `ads_content_selected` */
  adsContentSelected?: LWIADSCONTENTTYPE
  /** field 43, wire `user_has_bp_credentials` */
  userHasBpCredentials?: boolean
  /** field 44, wire `wa_ad_account_id` */
  waAdAccountId?: string
  /** field 45, wire `audience_type` */
  audienceType?: AUDIENCETYPE
  /** field 46, wire `lwi_ad_campaign_id` */
  lwiAdCampaignId?: string
  /** field 49, wire `media_edited` */
  mediaEdited?: boolean
  /** field 50, wire `total_media_count` */
  totalMediaCount?: number
  /** field 51, wire `lwi_is_ig_app_installed` */
  lwiIsIgAppInstalled?: boolean
  /** field 52, wire `lwi_max_duration_in_days` */
  lwiMaxDurationInDays?: number
  /** field 53, wire `lwi_min_duration_in_days` */
  lwiMinDurationInDays?: number
  /** field 54, wire `lwi_budget_options_in_local` */
  lwiBudgetOptionsInLocal?: string
  /** field 55, wire `lwi_location_types_set_on_audience_selection` */
  lwiLocationTypesSetOnAudienceSelection?: string
  /** field 56, wire `user_has_changed_default_city_level_audience` */
  userHasChangedDefaultCityLevelAudience?: boolean
  /** field 57, wire `default_audience_location_type` */
  defaultAudienceLocationType?: DEFAULTAUDIENCELOCATIONTYPE
  /** field 58, wire `ctwa_ad_account_type` */
  ctwaAdAccountType?: CTWAADACCOUNTTYPE
  /** field 59, wire `ctwa_login_type` */
  ctwaLoginType?: CTWALOGINTYPE
  /** field 60, wire `user_has_multisource_media` */
  userHasMultisourceMedia?: boolean
  /** field 61, wire `ad_media_template_name` */
  adMediaTemplateName?: string
  /** field 63, wire `lwi_ad_creation_account_consent_flow` */
  lwiAdCreationAccountConsentFlow?: LWIADCREATIONACCOUNTCONSENTFLOW
  /** field 64, wire `smbi_ad_creation_access_token_source` */
  smbiAdCreationAccessTokenSource?: SMBIADCREATIONACCESSTOKENSOURCE
  /** field 65, wire `user_has_fb_media_to_promote` */
  userHasFbMediaToPromote?: boolean
  /** field 66, wire `media_source` */
  mediaSource?: MEDIASOURCE
  /** field 67, wire `user_has_media_carousel` */
  userHasMediaCarousel?: boolean
}
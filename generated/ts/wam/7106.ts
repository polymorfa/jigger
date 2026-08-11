export const WamWebHybridAppRateAndReviewRequested = 7106 as const

export interface WebHybridAppRateAndReviewRequestedEvent {
  /** field 1, wire `web_hybrid_app_rate_and_review_request_dialog_shown_time` */
  webHybridAppRateAndReviewRequestDialogShownTime?: string
  /** field 2, wire `web_hybrid_app_rate_and_review_request_source` */
  webHybridAppRateAndReviewRequestSource?: WEBHYBRIDAPPRATEANDREVIEWREQUESTSOURCE
  /** field 3, wire `web_hybrid_app_rate_and_review_status_result` */
  webHybridAppRateAndReviewStatusResult?: WEBHYBRIDAPPRATEANDREVIEWSTATUSRESULT
  /** field 4, wire `web_hybrid_app_rate_and_review_was_review_updated` */
  webHybridAppRateAndReviewWasReviewUpdated?: boolean
  /** field 5, wire `web_hybrid_fallbacked_to_ms_store_review_pipeline` */
  webHybridFallbackedToMsStoreReviewPipeline?: boolean
}
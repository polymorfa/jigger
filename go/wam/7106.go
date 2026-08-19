const WamWebHybridAppRateAndReviewRequested = 7106 // channel: regular

type WebHybridAppRateAndReviewRequestedEvent struct {
	WebHybridAppRateAndReviewRequestDialogShownTime string `wam:"web_hybrid_app_rate_and_review_request_dialog_shown_time"` // field 1
	WebHybridAppRateAndReviewRequestSource WEBHYBRIDAPPRATEANDREVIEWREQUESTSOURCE `wam:"web_hybrid_app_rate_and_review_request_source"` // field 2
	WebHybridAppRateAndReviewStatusResult WEBHYBRIDAPPRATEANDREVIEWSTATUSRESULT `wam:"web_hybrid_app_rate_and_review_status_result"` // field 3
	WebHybridAppRateAndReviewWasReviewUpdated bool `wam:"web_hybrid_app_rate_and_review_was_review_updated"` // field 4
	WebHybridFallbackedToMsStoreReviewPipeline bool `wam:"web_hybrid_fallbacked_to_ms_store_review_pipeline"` // field 5
}
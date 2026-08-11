pub const WAM_WEB_HYBRID_APP_RATE_AND_REVIEW_REQUESTED: u32 = 7106;

#[derive(Debug, Default)]
pub struct WebHybridAppRateAndReviewRequestedEvent {
    /// field 1, wire `web_hybrid_app_rate_and_review_request_dialog_shown_time`
    pub web_hybrid_app_rate_and_review_request_dialog_shown_time: Option<String>,
    /// field 2, wire `web_hybrid_app_rate_and_review_request_source`
    pub web_hybrid_app_rate_and_review_request_source: Option<WEBHYBRIDAPPRATEANDREVIEWREQUESTSOURCE>,
    /// field 3, wire `web_hybrid_app_rate_and_review_status_result`
    pub web_hybrid_app_rate_and_review_status_result: Option<WEBHYBRIDAPPRATEANDREVIEWSTATUSRESULT>,
    /// field 4, wire `web_hybrid_app_rate_and_review_was_review_updated`
    pub web_hybrid_app_rate_and_review_was_review_updated: Option<bool>,
    /// field 5, wire `web_hybrid_fallbacked_to_ms_store_review_pipeline`
    pub web_hybrid_fallbacked_to_ms_store_review_pipeline: Option<bool>,
}
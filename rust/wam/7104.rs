pub const WAM_WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_SHOWN: u32 = 7104;

#[derive(Debug, Default)]
pub struct WebHybridAppRateAndReviewPromptDialogShownEvent {
    /// field 1, wire `web_hybrid_app_rate_and_review_prompt_dialog_shown_time`
    pub web_hybrid_app_rate_and_review_prompt_dialog_shown_time: Option<String>,
    /// field 2, wire `web_hybrid_app_rate_and_review_prompt_dialog_status_result`
    pub web_hybrid_app_rate_and_review_prompt_dialog_status_result: Option<WEBHYBRIDAPPRATEANDREVIEWPROMPTDIALOGSTATUSRESULT>,
    /// field 3, wire `web_hybrid_dont_show_again_app_rate_and_review_checked`
    pub web_hybrid_dont_show_again_app_rate_and_review_checked: Option<bool>,
}
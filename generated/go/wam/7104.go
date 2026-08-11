const WamWebHybridAppRateAndReviewPromptDialogShown = 7104 // channel: regular

type WebHybridAppRateAndReviewPromptDialogShownEvent struct {
	WebHybridAppRateAndReviewPromptDialogShownTime string `wam:"web_hybrid_app_rate_and_review_prompt_dialog_shown_time"` // field 1
	WebHybridAppRateAndReviewPromptDialogStatusResult WEBHYBRIDAPPRATEANDREVIEWPROMPTDIALOGSTATUSRESULT `wam:"web_hybrid_app_rate_and_review_prompt_dialog_status_result"` // field 2
	WebHybridDontShowAgainAppRateAndReviewChecked bool `wam:"web_hybrid_dont_show_again_app_rate_and_review_checked"` // field 3
}
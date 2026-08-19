export const WamWebHybridAppRateAndReviewPromptDialogShown = 7104 as const

export interface WebHybridAppRateAndReviewPromptDialogShownEvent {
  /** field 1, wire `web_hybrid_app_rate_and_review_prompt_dialog_shown_time` */
  webHybridAppRateAndReviewPromptDialogShownTime?: string
  /** field 2, wire `web_hybrid_app_rate_and_review_prompt_dialog_status_result` */
  webHybridAppRateAndReviewPromptDialogStatusResult?: WEBHYBRIDAPPRATEANDREVIEWPROMPTDIALOGSTATUSRESULT
  /** field 3, wire `web_hybrid_dont_show_again_app_rate_and_review_checked` */
  webHybridDontShowAgainAppRateAndReviewChecked?: boolean
}
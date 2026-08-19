__d("WAWebWebHybridAppRateAndReviewPromptDialogShownWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult"], (function(t, n, r, o, a, i, l) {
	var e = o("WAWebWamCodegenUtils").defineEvents({ WebHybridAppRateAndReviewPromptDialogShown: [
		7104,
		{
			webHybridAppRateAndReviewPromptDialogShownTime: [1, o("WAWebWamCodegenUtils").TYPES.TIMER],
			webHybridAppRateAndReviewPromptDialogStatusResult: [2, o("WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult").WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT],
			webHybridDontShowAgainAppRateAndReviewChecked: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN]
		},
		[
			1,
			1,
			1
		],
		"regular"
	] }, { WebHybridAppRateAndReviewPromptDialogShown: [] });
	l.WebHybridAppRateAndReviewPromptDialogShownWamEvent = e;
}), 98);

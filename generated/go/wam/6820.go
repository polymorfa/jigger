const WamAboutCreationDaily = 6820 // channel: regular

type AboutCreationDailyEvent struct {
	AboutCreationStarted int64 `wam:"about_creation_started"` // field 1 (about_creation_started >= 0)
	AboutCreationVisit int64 `wam:"about_creation_visit"` // field 2 (about_creation_visit >= 0)
	AboutEntrypoint ABOUTENTRYPOINTTYPE `wam:"about_entrypoint"` // field 3
	AboutFailureCount int64 `wam:"about_failure_count"` // field 4 (about_failure_count >= 0)
	AboutLocale string `wam:"about_locale"` // field 5
	AboutSuccessCount int64 `wam:"about_success_count"` // field 6 (about_success_count >= 0)
}
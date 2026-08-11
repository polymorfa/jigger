const WamStatusReportingEvents = 3920 // channel: regular

type StatusReportingEventsEvent struct {
	StatusReportInteraction STATUSREPORTINTERACTION `wam:"status_report_interaction"` // field 1
	StatusPosterContactType STATUSPOSTERCONTACTTYPE `wam:"status_poster_contact_type"` // field 2
}
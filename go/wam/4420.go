const WamReportToAdminEvents = 4420 // channel: regular

type ReportToAdminEventsEvent struct {
	ReportToAdminInteraction REPORTTOADMININTERACTION `wam:"report_to_admin_interaction"` // field 1
	RtaGroupId string `wam:"rta_group_id"` // field 2
}
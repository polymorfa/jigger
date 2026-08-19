const WamPsFmxAction = 7054 // channel: private

type PsFmxActionEvent struct {
	CommonGroupNum int64 `wam:"common_group_num"` // field 1
	CountryShown bool `wam:"country_shown"` // field 2
	FmxEntryPoint FMXENTRYPOINT `wam:"fmx_entry_point"` // field 3
	FmxEvent FMXEVENT `wam:"fmx_event"` // field 4
	HighlightGroupType HIGHLIGHTGROUPTYPE `wam:"highlight_group_type"` // field 5
	IsSenderSmb bool `wam:"is_sender_smb"` // field 6
	NotAContactShown bool `wam:"not_a_contact_shown"` // field 7
	IsSuspiciousFmx bool `wam:"is_suspicious_fmx"` // field 8
	NewAccountShown bool `wam:"new_account_shown"` // field 9
	IsDifferentCountry bool `wam:"is_different_country"` // field 10
}
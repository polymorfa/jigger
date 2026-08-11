const WamWebDbTableUsage = 5074 // channel: regular

type WebDbTableUsageEvent struct {
	OfflineSessionId string `wam:"offline_session_id"` // field 1
	WebScenario WEBSCENARIOCODE `wam:"web_scenario"` // field 2
	WebTable string `wam:"web_table"` // field 3
	WebTableLogReason WEBTABLELOGREASONCODE `wam:"web_table_log_reason"` // field 4
	WebTableReadCount int64 `wam:"web_table_read_count"` // field 5
	WebTableWriteCount int64 `wam:"web_table_write_count"` // field 6
}
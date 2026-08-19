const WamMdLinkDeviceCompanion = 2576 // channel: regular

type MdLinkDeviceCompanionEvent struct {
	MdSessionId string `wam:"md_session_id"` // field 1
	MdLinkDeviceCompanionStage MDLINKDEVICECOMPANIONSTAGE `wam:"md_link_device_companion_stage"` // field 4
	MdWasUpgraded bool `wam:"md_was_upgraded"` // field 5
	MdLinkDeviceCompanionErrorCode int64 `wam:"md_link_device_companion_error_code"` // field 6
	MdTimestampS int64 `wam:"md_timestamp_s"` // field 7
	MdDurationS int64 `wam:"md_duration_s"` // field 8
	MdRegAttemptId string `wam:"md_reg_attempt_id"` // field 9
	MdCompanionRefHash string `wam:"md_companion_ref_hash"` // field 10
	MdLinkDeviceExperienceId int64 `wam:"md_link_device_experience_id"` // field 11
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 12
	AppContext string `wam:"app_context"` // field 13
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 14
	UserLocale string `wam:"user_locale"` // field 15
}
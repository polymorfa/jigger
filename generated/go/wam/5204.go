const WamCoexPrivacySysMsg = 5204 // channel: private

type CoexPrivacySysMsgEvent struct {
	CoexSysMsgBusinessId string `wam:"coex_sys_msg_business_id"` // field 1
	CoexSysMsgInsertionErrorCode int64 `wam:"coex_sys_msg_insertion_error_code"` // field 2
	CoexSysMsgInsertionErrorMsg string `wam:"coex_sys_msg_insertion_error_msg"` // field 3
	CoexSysMsgInsertionSuccess bool `wam:"coex_sys_msg_insertion_success"` // field 4
	CoexSysMsgIsSelf bool `wam:"coex_sys_msg_is_self"` // field 5
	CoexSysMsgMultiDeviceId int64 `wam:"coex_sys_msg_multi_device_id"` // field 6
	CoexSysMsgStateTransitionAttempt COEXSYSMSGSTATETRANSITIONATTEMPT `wam:"coex_sys_msg_state_transition_attempt"` // field 7
	CoexStatusReplyPrivacyDisclaimerUserAction COEXSTATUSREPLYPRIVACYDISCLAIMERUSERACTION `wam:"coex_status_reply_privacy_disclaimer_user_action"` // field 8
	CoexSysMsgInsertionChannel COEXSYSMSGINSERTIONCHANNEL `wam:"coex_sys_msg_insertion_channel"` // field 9
}
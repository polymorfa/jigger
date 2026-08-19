__d("MAWWriteLimitSharingAdminMsgContent", ["MAWAdminMsgType", "MAWCurrentUser"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n, r;
		return t ? (n = e === o("MAWCurrentUser").getID() ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_LIMIT_SHARING_ENABLED : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED, r = n === o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_LIMIT_SHARING_ENABLED ? [e] : []) : (n = e === o("MAWCurrentUser").getID() ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_LIMIT_SHARING_DISABLED : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED, r = n === o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_LIMIT_SHARING_DISABLED ? [e] : []), {
			adminMsgContent: r,
			adminType: n,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

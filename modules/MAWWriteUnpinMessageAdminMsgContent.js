__d("MAWWriteUnpinMessageAdminMsgContent", ["MAWAdminMsgType", "MAWCurrentUser"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e === o("MAWCurrentUser").getID() ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_UNPINNED_MESSAGE : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_UNPINNED_MESSAGE, n = t === o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_UNPINNED_MESSAGE ? [e] : [];
		return {
			adminMsgContent: n,
			adminType: t,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

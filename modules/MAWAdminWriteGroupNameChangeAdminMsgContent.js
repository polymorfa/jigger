__d("MAWAdminWriteGroupNameChangeAdminMsgContent", [
	"MAWAdminMsgType",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("MAWUserJidWrapper").getMyUserJid(), r, a = [];
		return e === n ? (r = o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_NAMED_GROUP, a.push(t)) : e == null ? (r = o("MAWAdminMsgType").ADMIN_MSG_TYPE.UNKNOWN_USER_NAMED_GROUP, a.push(t)) : (r = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_NAMED_GROUP, a.push(o("WAJids").userIdFromJid(e), t)), {
			adminMsgContent: a,
			adminType: r,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

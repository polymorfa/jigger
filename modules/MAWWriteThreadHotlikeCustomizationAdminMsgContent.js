__d("MAWWriteThreadHotlikeCustomizationAdminMsgContent", ["MAWAdminMsgType", "MAWCurrentUser"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = e === o("MAWCurrentUser").getID(), r = n ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_HOTLIKE : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_HOTLIKE, a = [];
		return r === o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_HOTLIKE ? a.push(t) : a.push(e, t), {
			adminMsgContent: a,
			adminType: r,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

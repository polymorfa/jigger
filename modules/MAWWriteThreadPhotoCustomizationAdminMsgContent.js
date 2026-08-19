__d("MAWWriteThreadPhotoCustomizationAdminMsgContent", ["MAWAdminMsgType", "MAWCurrentUser"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e === o("MAWCurrentUser").getID() ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_PHOTO : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_PHOTO, n = t === o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_PHOTO ? [e] : [];
		return {
			adminMsgContent: n,
			adminType: t,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

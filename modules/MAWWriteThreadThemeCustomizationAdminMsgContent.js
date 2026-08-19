__d("MAWWriteThreadThemeCustomizationAdminMsgContent", [
	"MAWAdminMsgType",
	"MAWCurrentUser",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r) {
		var a = e === o("MAWCurrentUser").getID(), i = u(a, r), l = [];
		return i === o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_THEME || i === o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_AI_THEME ? l.push(n) : l.push(e, n), t != null && l.push(t), {
			adminMsgContent: l,
			adminType: i,
			version: 1
		};
	}
	function u(t, n) {
		if (n != null) try {
			var r = parseInt(n, 10) === 7;
			if (r) return t ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_AI_THEME : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_AI_THEME;
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to convert theme type to integer: ", ""])), t);
		}
		return t ? o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_THEME : o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_THEME;
	}
	l.getAdminMsgContent = s;
}), 98);

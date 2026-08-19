__d("MAWWriteThreadNicknameCustomizationAdminMsgContent", ["MAWAdminMsgType", "MAWCurrentUser"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		var r = o("MAWCurrentUser").getID(), a = e === r && e !== t, i = t === r && t !== e, l = t === e && r === t, s = t === e && r !== t, u;
		l && n.length > 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_SET_OWN_NICKNAME : l && n.length === 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CLEAR_OWN_NICKNAME : s && n.length > 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_SET_OWN_NICKNAME : s && n.length === 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_OWN_NICKNAME : a && n.length > 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_NICKNAME : a && n.length === 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CLEAR_PARTICIPANT_NICKNAME : i && n.length > 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_CURRENT_USER_NICKNAME : i && n.length === 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_CURRENT_USER_NICKNAME : n.length > 0 ? u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_PARTICIPANT_NICKNAME : u = o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_PARTICIPANT_NICKNAME;
		var c = [];
		switch (u) {
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CUSTOMIZE_NICKNAME:
				c.push(t, n);
				break;
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_CURRENT_USER_NICKNAME:
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_SET_OWN_NICKNAME:
				c.push(e, n);
				break;
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_SET_OWN_NICKNAME:
				c.push(n);
				break;
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.CURRENT_USER_CLEAR_PARTICIPANT_NICKNAME:
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_OWN_NICKNAME:
				c.push(t);
				break;
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_CURRENT_USER_NICKNAME:
				c.push(e);
				break;
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CUSTOMIZE_PARTICIPANT_NICKNAME:
			case o("MAWAdminMsgType").ADMIN_MSG_TYPE.PARTICIPANT_CLEAR_PARTICIPANT_NICKNAME:
				c.push(e, t, n);
				break;
			default: break;
		}
		return {
			adminMsgContent: c,
			adminType: u,
			version: 1
		};
	}
	l.getAdminMsgContent = e;
}), 98);

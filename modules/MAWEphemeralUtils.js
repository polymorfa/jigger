__d("MAWEphemeralUtils", [
	"MAWLocalizationType",
	"MAWUserJidWrapper",
	"WAArmadilloApplication.pb",
	"WAJids",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 60, s = 60 * e, u = 24 * s;
	function c(t, n, r, a) {
		var i, l = [], c = n === u, d = t === o("MAWUserJidWrapper").getMyUserJid();
		if (a) i = o("MAWLocalizationType").LOCALIZATION_TYPE.EPHEMERAL_SETTINGS_AUTO_RESET;
		else if (t == null) n === 0 ? i = o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_OFF : n < e ? (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_SECONDS : o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_SECONDS, l.push(n.toString())) : n < s ? (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_MINUTES : o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_MINUTES, l.push((n / e).toString())) : n < u || c ? (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_HOURS : o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_HOURS, l.push((n / s).toString())) : (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_TURNED_ON_DAYS : o("MAWLocalizationType").LOCALIZATION_TYPE.UNKNOWN_USER_EPHEMERAL_SETTING_CHANGE_DAYS, l.push((n / u).toString()));
		else {
			var m = o("WAJids").extractUserId(t).toString();
			n === 0 ? d ? i = o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_OFF : (i = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_OFF, l.push(m)) : n < e ? (d ? i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_SECONDS : o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_SECONDS : (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_SECONDS : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_SECONDS, l.push(m)), l.push(n.toString())) : n < s ? (d ? i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_MINUTES : o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_MINUTES : (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_MINUTES : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_MINUTES, l.push(m)), l.push((n / e).toString())) : n < u || c ? (d ? i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_HOURS : o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_HOURS : (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_HOURS : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_HOURS, l.push(m)), l.push((n / s).toString())) : (d ? i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_TURNED_ON_DAYS : o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_SETTING_CHANGE_DAYS : (i = r ? o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_TURNED_ON_DAYS : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_SETTING_CHANGE_DAYS, l.push(m)), l.push((n / u).toString()));
		}
		return {
			adminMsgContent: l,
			adminType: i,
			version: 1
		};
	}
	function d(e, t, n) {
		var a, i = [], l = o("WAJids").extractUserId(t).toString();
		switch (e) {
			case o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREENSHOT_IMAGE:
				n ? a = o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_TAKE_SCREENSHOT : (a = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_TAKE_SCREENSHOT, i.push(l));
				break;
			case o("WAArmadilloApplication.pb").ARMADILLO_CONTENT_SCREENSHOT_ACTION_SCREENSHOT_TYPE.SCREEN_RECORDING:
				n ? a = o("MAWLocalizationType").LOCALIZATION_TYPE.YOU_EPHEMERAL_RECORD_SCREEN : (a = o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_EPHEMERAL_RECORD_SCREEN, i.push(l));
				break;
			default: throw r("err")("Received unexpected screenshot action type");
		}
		return {
			ephemeralScreenshotActionContent: i,
			ephemeralScreenshotActionType: a
		};
	}
	l.getEphemeralSettingChangeData = c, l.getEphemeralScreenshotActionData = d;
}), 98);

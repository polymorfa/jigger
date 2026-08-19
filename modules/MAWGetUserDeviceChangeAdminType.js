__d("MAWGetUserDeviceChangeAdminType", ["MAWLocalizationType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		switch (e) {
			case "add": return t ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_ADDED_DEVICE : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_ADDED_DEVICE;
			case "remove": return t ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_REMOVED_DEVICE : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_REMOVED_DEVICE;
			case "update": return t ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_UPDATED_DEVICE : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_UPDATED_DEVICE;
		}
	}
	l.getUserDeviceAdminType = e;
}), 98);

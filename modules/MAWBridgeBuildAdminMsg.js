__d("MAWBridgeBuildAdminMsg", [
	"MAWAdminMsg",
	"MAWAdminMsgNormalized",
	"MAWSubscribeToContactNames",
	"MAWThreadCustomizationUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e == null ? void 0 : e.replace(/\$/g, "$$$$");
	}
	function s(t, n, r) {
		r === void 0 && (r = 0);
		var a = o("MAWAdminMsgNormalized").deconstructContactIdsFromAdminContent(n, t), i = a.contactIds, l = a.contents, s = o("MAWThreadCustomizationUtils").nicknameOnlyForFirstParticipantChecking(n), u = o("MAWThreadCustomizationUtils").skipNicknameCheck(n);
		if (r === 1) {
			var c = o("MAWSubscribeToContactNames").getContactNameModeFromLocalizationType(n);
			return o("MAWAdminMsg").buildLocalizedString(l.map(e), i.map(function(e, t) {
				return s && t > 0 || u ? c === o("MAWSubscribeToContactNames").ContactNameMode.FIRST_NAME ? "$CONTACT_FIRST_NAME(" + e + ")" : "$CONTACT_FULL_NAME(" + e + ")" : c === o("MAWSubscribeToContactNames").ContactNameMode.FIRST_NAME ? "$PARTICIPANT_FIRST_NAME(" + e + ")" : "$PARTICIPANT_FULL_NAME(" + e + ")";
			}), n);
		}
		return o("MAWAdminMsg").buildLocalizedString(l, i, n);
	}
	l.buildAdminMsgText = s;
}), 98);

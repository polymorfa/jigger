__d("WAWebCrosspostingAutoShareAction", [
	"WALogger",
	"WAWebSettingsModel",
	"WAWebStatusSetAndSyncPrivacy",
	"WAWebUserPrefsStatus",
	"WAWebUserPrefsStatusType"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t, n) {
		t === "fb" ? (await r("WAWebUserPrefsStatus").persistShareToFB(n), r("WAWebSettingsModel").shareToFB = n) : t === "ig" && (await r("WAWebUserPrefsStatus").persistShareToIG(n), r("WAWebSettingsModel").shareToIG = n);
		var a = await Promise.all([
			r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
			r("WAWebUserPrefsStatus").getStatusAllowList(),
			r("WAWebUserPrefsStatus").getStatusDenyList(),
			r("WAWebUserPrefsStatus").getShareToFB(),
			r("WAWebUserPrefsStatus").getShareToIG()
		]), i = a[0], l = a[1], s = a[2], u = a[3], c = a[4], d = [];
		e: {
			if (i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList) {
				d = l;
				break e;
			}
			if (i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList) {
				d = s;
				break e;
			}
			if (i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) break e;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
		}
		var m = t === "fb" ? n : u, p = t === "ig" ? n : c;
		try {
			await o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
				setting: i,
				list: d,
				overrideShareToFB: m,
				overrideShareToIG: p
			});
		} catch (n) {
			throw n instanceof Error && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"crossposting_auto_share: toggle ",
				" failed ",
				""
			])), t, n.stack).sendLogs("crossposting_auto_share: toggle " + t + " failed"), n;
		}
	}
	l.toggleCrosspostAutoShare = s;
}), 98);

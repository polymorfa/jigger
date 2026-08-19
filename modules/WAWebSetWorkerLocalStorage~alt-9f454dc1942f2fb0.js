__d("WAWebSetWorkerLocalStorage", [
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebEnvironment",
	"WAWebGuestCoreLocalStorage",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsMeUser",
	"WAWebWidToJid"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s() {
		var t = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(), n = o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow(), a = [{
			key: "lidDeviceJid",
			value: t.toString()
		}, {
			key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
			value: n
		}], i = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
		i != null ? a.push({
			key: "deviceJid",
			value: o("WAWebWidToJid").widToDeviceJid(i)
		}) : o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[worker-local-storage] skipping deviceJid: no phone-number wid available"]))).sendLogs("worker-local-storage-skip-device-jid"), r("WAWebEnvironment").isGuest && a.push({
			key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
			value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode()
		}), await o("WAWebApiLocalStorage").updateLocalStorage(a);
	}
	function u() {
		return o("WAWebApiLocalStorage").clearLocalStorage();
	}
	l.setWorkerLocalStorage = s, l.clearWorkerLocalStorage = u;
}), 98);

__d("WAWebGlobalsInitialize", [
	"WAJids",
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebGlobals",
	"WAWebRunInTransaction",
	"WAWebUserPrefsKeys",
	"asyncToGeneratorRuntime",
	"err",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t, n, a = (e = yield o("WAWebApiLocalStorage").getLocalStorageValue("deviceJid")) != null ? e : "", i = (t = yield o("WAWebApiLocalStorage").getLocalStorageValue("lidDeviceJid")) != null ? t : "";
			if (r("isStringNullOrEmpty")(i)) throw r("err")("initializeGlobals: lidDeviceJid is missing from local storage");
			var l = c(a), s = (n = yield o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME)) != null ? n : "";
			o("WAWebGlobals").setGlobals({
				jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
				myJids: l,
				lidDeviceJid: i,
				displayName: s,
				runInTransaction: o("WAWebRunInTransaction").runInTransaction,
				newClockSkewCalculation: function() {
					return !1;
				}
			});
		}), u.apply(this, arguments);
	}
	function c(t) {
		var n = o("WAJids").interpretAndValidateJid(t);
		if (n.jidType !== "phoneDevice") {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[worker-globals] no phone-number deviceJid in local storage; jidType=", ""])), n.jidType).sendLogs("worker-globals-no-device-jid");
			return;
		}
		return {
			deviceJid: n.deviceJid,
			userJid: o("WAJids").extractUserJid(n.deviceJid)
		};
	}
	l.initializeGlobals = s;
}), 98);

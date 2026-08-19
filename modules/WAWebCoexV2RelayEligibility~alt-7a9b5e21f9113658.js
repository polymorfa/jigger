__d("WAWebCoexV2RelayEligibility", [
	"WALogger",
	"WAWebApiDeviceList",
	"WAWebCoexV2GatingUtils",
	"WAWebCoexV2HostedContactUtils",
	"WAWebUserPrefsMeUser",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(e) {
		if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
		var t = await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e) && !await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e) || await u();
		return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
	}
	async function u() {
		if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) return !1;
		try {
			var t = await o("WAWebApiDeviceList").getMyDeviceList();
			return t.devices.some(function(e) {
				return e.isHosted === !0;
			});
		} catch (t) {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] relay-eligibility: failed to read self device list"]))).catching(r("getErrorSafe")(t)).sendLogs("coexv2-self-device-list-read-failed"), !1;
		}
	}
	l.genIsCoexV2RelayEligibleSend = s;
}), 98);

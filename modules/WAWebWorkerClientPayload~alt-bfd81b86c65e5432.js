__d("WAWebWorkerClientPayload", [
	"WAJids",
	"WALogger",
	"WAWebBuildConstants",
	"WAWebClientPayloadReleaseChannel",
	"WAWebGlobals",
	"WAWebLid1X1MigrationGating",
	"WAWebProtobufsWa6.pb",
	"WAWebUserPrefsGeneral",
	"WAWebWamPlatform",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	var e, s = 0;
	function u() {
		s++;
	}
	async function c(t) {
		var n, r = o("WAWebGlobals").getMyDeviceJid(), a = babelHelpers.extends({}, await d(t), {
			username: parseInt(o("WAJids").extractUserId(o("WAJids").extractUserJid(r)), 10),
			device: (n = o("WAJids").extractDeviceId(r)) != null ? n : 0,
			lc: o("WAWebUserPrefsGeneral").getLoginCounter(),
			connectAttemptCount: s,
			lidDbMigrated: o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
		});
		return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[comms] getClientPayloadForLogin: connectAttemptCount=", ""])), s).tags("launch-socket-chat"), o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, a).readByteArrayView();
	}
	async function d(e) {
		return {
			passive: e ? e.passive : !1,
			pull: !0,
			connectType: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectType.WIFI_UNKNOWN,
			connectReason: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
			userAgent: await m(),
			webInfo: { webSubPlatform: p() }
		};
	}
	async function m() {
		return {
			appVersion: {
				primary: Number(o("WAWebBuildConstants").VERSION_PRIMARY),
				secondary: Number(o("WAWebBuildConstants").VERSION_SECONDARY),
				tertiary: Number(o("WAWebBuildConstants").VERSION_TERTIARY)
			},
			platform: o("WAWebProtobufsWa6.pb").ClientPayload$UserAgent$Platform.WEB,
			releaseChannel: await o("WAWebClientPayloadReleaseChannel").getReleaseChannel(),
			mcc: "000",
			mnc: "000",
			osVersion: "0.1",
			manufacturer: "",
			device: "Desktop",
			osBuildNumber: "0.1",
			localeLanguageIso6391: "en",
			localeCountryIso31661Alpha2: "US"
		};
	}
	function p() {
		switch (o("WAWebWamPlatform").getWamPlatform()) {
			case "WEB":
			case "PWA": return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.WEB_BROWSER;
			case "DARWIN":
			case "DARWIN_BETA": return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.DARWIN;
			case "MACSTORE": return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.APP_STORE;
			case "WIN_HYBRID": return o("WAWebProtobufsWa6.pb").ClientPayload$WebInfo$WebSubPlatform.WIN_HYBRID;
			default: return;
		}
	}
	l.incrementSuccessfulLoginCounter = u, l.getClientPayloadForLogin = c;
}), 98);

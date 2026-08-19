__d("WAWebVoipStartEmptyCall", [
	"fbt",
	"WALogger",
	"WAWebApiParse",
	"WAWebEnsureVoipInited",
	"WAWebFrontendContactGetters",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipCreateCallLink",
	"WAWebVoipStackInterface",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react"));
	async function m(t) {
		try {
			if (o("WAWebVoipStackInterface").getVoipStackInterface == null) throw r("err")("not in windows env");
			var n = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(!0);
			if (!n) return !1;
			var a = await Promise.all([
				o("WAWebVoipStackInterface").getVoipStackInterface(),
				o("WAWebVoipCreateCallLink").createCallLink({ callType: "video" }),
				o("WAWebEnsureVoipInited").ensureVoipInitialized()
			]), i = a[0], l = a[1], c = o("WAWebApiParse").parseCallLink(l);
			if (c == null) throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] start call failed: malformed link ", ""])), l).sendLogs("voip-landing-page-start-call-link-malformed"), r("err")("malformed call link");
			if (i == null) throw r("err")("voip stack interface unavailable");
			var m = o("WAWebFrontendContactGetters").getMyUsername();
			return await i.previewAndJoinCallLink(c.data.token, !0, t, m), !0;
		} catch (e) {
			return e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError || (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: landing page: start call failed to create call link: ", ""])), e).sendLogs("voip-landing-page-start-call-call-link-creation-failed"), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }))), !1;
		}
	}
	l.startEmptyCall = m;
}), 226);

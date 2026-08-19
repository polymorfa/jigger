__d("useWAWebBizAIConnectPartnerApp", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAIOAuthPopup",
	"WAWebBizAiPrepareOAuthAppInstallationMutation",
	"WAWebBizAiSaveUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = "https://b.whatsapp.com/oauth/biz_ai_redirect", g = "whatsapp_web:";
	function h() {
		var t = o("react-compiler-runtime").c(6), n = o("CometRelay").useMutation(o("WAWebBizAiPrepareOAuthAppInstallationMutation").PREPARE_OAUTH_APP_INSTALLATION_MUTATION), r = n[0], a = _(!0), i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return a.current = !0, (function() {
				a.current = !1;
			});
		}, l = [], t[0] = i, t[1] = l) : (i = t[0], l = t[1]), p(i, l);
		var s;
		t[2] !== r ? (s = function(n) {
			var t = o("WAWebBizAIOAuthPopup").openBlankOAuthPopup();
			if (t == null) {
				y();
				return;
			}
			r({
				onCompleted: function(n) {
					o("WAWebBizAIOAuthPopup").navigateOAuthPopup(t, o("WAWebBizAiPrepareOAuthAppInstallationMutation").getAppInstallationUrl(n)) || (t.close(), a.current && o("WAWebBizAiSaveUtils").showErrorToast());
				},
				onError: function(r) {
					t.close(), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizAiPrepareOAuthAppInstallationMutation failed"]))).catching(r).sendLogs("biz-ai-prepare-oauth-failed"), a.current && o("WAWebBizAiSaveUtils").showErrorToast();
				},
				variables: {
					plugin_id: n,
					redirect_uri: f,
					source: "" + g + window.location.hostname
				}
			});
		}, t[2] = r, t[3] = s) : s = t[3];
		var u = s, c;
		return t[4] !== u ? (c = { connect: u }, t[4] = u, t[5] = c) : c = t[5], c;
	}
	function y() {
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = h;
}), 226);

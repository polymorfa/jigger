__d("WAWebExternalLinkPopup.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebModalManager",
	"WAWebPremiumMessagesGatingUtils",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = 200, p = 140, _ = 60;
	function f(e) {
		return e.length > m ? e.substr(0, p) + "..." + e.substr(e.length - _) : e;
	}
	var g = "https:";
	function h(t, n) {
		var r = "w.meta.me";
		if (n === t) return !0;
		var a;
		try {
			a = new URL(n);
		} catch (t) {
			if (!(t instanceof TypeError)) throw t;
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Trackable link verification failed - invalid url format"]))).sendLogs("trackable-link-verification-failed"), !1;
		}
		return !(a.protocol !== g || a.hostname !== r);
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(16), n = e.merchantUrl, r = e.onOkClick, a = e.url, i = e.verifyTrackableLink, l = n != null ? n : a;
		if (i === !0 && !h(l, a)) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Trackable link verification failed"]))).sendLogs("trackable-link-verification-failed"), null;
		var c;
		t[0] !== r || t[1] !== a ? (c = function() {
			o("WAWebExternalLink.react").openExternalLink(a, { noApiCmdHandling: !0 }), r == null || r(), o("WAWebModalManager").ModalManager.close();
		}, t[0] = r, t[1] = a, t[2] = c) : c = t[2];
		var m = c, p = n != null ? n : a, _;
		t[3] !== p ? (_ = f(p), t[3] = p, t[4] = _) : _ = t[4];
		var g = _, y;
		t[5] !== g ? (y = o("WAWebPremiumMessagesGatingUtils").isPremiumMessagesNewLeavingWAContentEnabled() ? s._(
			/*BTDS*/
			"",
			[s._param("url", g)]
		) : g, t[5] = g, t[6] = y) : y = t[6];
		var C = y, b;
		t[7] !== C ? (b = d.jsx(o("WAWebText.react").WAWebTextSmall, {
			testid: "popup-url-text",
			children: C
		}), t[7] = C, t[8] = b) : b = t[8];
		var v = b, S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = {
			surface: "unknown",
			viewName: "external-link"
		}, t[9] = S) : S = t[9];
		var R, L, E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), L = s._(
			/*BTDS*/
			""
		), E = s._(
			/*BTDS*/
			""
		), t[10] = R, t[11] = L, t[12] = E) : (R = t[10], L = t[11], E = t[12]);
		var k;
		return t[13] !== v || t[14] !== m ? (k = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: S,
			testid: "external_link_popup",
			title: R,
			okText: L,
			cancelText: E,
			onOK: m,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: v
		}), t[13] = v, t[14] = m, t[15] = k) : k = t[15], k;
	}
	l.default = y;
}), 226);

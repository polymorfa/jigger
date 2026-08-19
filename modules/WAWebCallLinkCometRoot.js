__d("WAWebCallLinkCometRoot", [
	"BaseContextualLayerAnchorRoot.react",
	"WAWebCallLinkLandingPage.react",
	"WAWebModalManagerImplWrapper.react",
	"WAWebReceiverAppRoot.react",
	"WAWebUim",
	"WDSThemes",
	"buildWAWebCometRoot",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useEffect, d = "video", m = null, p = "", _ = !1, f = [], g = null;
	function h() {
		var e = o("react-compiler-runtime").c(1), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], c(y, t);
	}
	function y() {
		var e = o("WAWebUim").setupUimListeners();
		return e;
	}
	function C() {
		var t = o("react-compiler-runtime").c(2);
		h();
		var n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme), t[0] = n) : n = t[0];
		var a;
		return t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx("div", babelHelpers.extends({}, n, { children: u.jsx(r("BaseContextualLayerAnchorRoot.react"), { children: u.jsxs(o("WAWebReceiverAppRoot.react").WAWebReceiverAppRoot, { children: [u.jsx(r("WAWebCallLinkLandingPage.react"), {
			callType: d,
			errorReason: m,
			idHash: p,
			isGuestRedirectEnabled: _,
			locales: f,
			signedClearStaleVCUrl: g
		}), u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: o("WAWebModalManagerImplWrapper.react").ModalType })] }) }) })), t[1] = a) : a = t[1], a;
	}
	function b(e) {
		var t, n, o;
		d = e.callType, m = (t = e.errorReason) != null ? t : null, p = e.idHash, _ = e.isGuestRedirectEnabled, f = (n = e.locales) != null ? n : [], g = (o = e.signedClearStaleVCUrl) != null ? o : null, r("buildWAWebCometRoot")(C, { elementId: e.elementId });
	}
	l.WAWebCallLinkCometRoot = C, l.init = b;
}), 98);

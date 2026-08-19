__d("WAWebManagedAccountBanner.react", [
	"fbt",
	"WAWebBizCoexGatingUtils",
	"WAWebManagedAccountModalLoadable",
	"WAWebModalManager",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcInfo.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = { icon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function m() {
		var e = o("react-compiler-runtime").c(12), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), e[0] = t) : t = e[0];
		var n = t, a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = ["isAuthorizedAgent", "parentCompanyName"], e[1] = a) : a = e[1];
		var i = o("WAWebUseBusinessProfile.react").useBusinessProfile(n, a), l = i == null ? void 0 : i.parentCompanyName, c;
		e[2] !== l ? (c = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebManagedAccountModalLoadable").WAWebManagedAccountModalLoadable, { parentCompanyName: l }), { transition: "modal" });
		}, e[2] = l, e[3] = c) : c = e[3];
		var m = c;
		if (!o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled() || (i == null ? void 0 : i.isAuthorizedAgent) !== !0) return null;
		var p, _, f, g;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1xrf6ya xscbp6u x1phvje8 xcldk2z" }, _ = u.jsx(r("WDSIconIcInfo.react"), {
			width: 20,
			height: 20,
			iconXstyle: d.icon
		}), f = { className: "x14ug900" }, g = s._(
			/*BTDS*/
			""
		), e[4] = p, e[5] = _, e[6] = f, e[7] = g) : (p = e[4], _ = e[5], f = e[6], g = e[7]);
		var h, y;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x11g6tue x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1r8hjv8 x1ypdohk x1qlqyl8 xexx8yu xyri2b x18d9i69 x1c1uobl" }, y = s._(
			/*BTDS*/
			""
		), e[8] = h, e[9] = y) : (h = e[8], y = e[9]);
		var C;
		return e[10] !== m ? (C = u.jsxs("div", babelHelpers.extends({}, p, { children: [_, u.jsxs("span", babelHelpers.extends({}, f, { children: [
			g,
			" ",
			u.jsx("button", babelHelpers.extends({
				type: "button",
				onClick: m
			}, h, { children: y }))
		] }))] })), e[10] = m, e[11] = C) : C = e[11], C;
	}
	l.default = m;
}), 226);

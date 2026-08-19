__d("WAWebCallLinkErrorPage.react", [
	"fbt",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		logoHeader: {
			alignSelf: "xkh2ocl",
			paddingTop: "xl7twdi",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		cardArea: {
			width: "xh8yej3",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s._(
			/*BTDS*/
			""
		), t[0] = n) : n = t[0];
		var a = n, i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[1] = i) : i = t[1];
		var l = i, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1syab6t x1fgb4vj xh8yej3 x15hv16n x1us19tq x5yr21d x78zum5 xdt5ytf xw2csxc x1odjw0f xowvryd xu7uy1i x1e5xhrn x1t7qo4d x9lt2cq x9f619" }, t[2] = d) : d = t[2];
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			shrink: 0,
			xstyle: c.logoHeader,
			children: u.jsx(o("WAWebExternalLink.react").ExternalLinkEl, {
				"data-testid": "call-link-error-page-logo",
				href: "https://www.whatsapp.com/",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				className: "x78zum5 x6s0dn4 xmixu3c x1hl2dhg",
				children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
					height: 30,
					width: 130,
					testid: "call-link-error-page-logo-img"
				})
			})
		}), t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "xb1i3fl x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1wove2r x10nd7l6 x12t7uq9 x14s4pk6 x4i7bpe xiaro03 x15zmtp0 xcm4ngb x1sgudl8 x17ud9ob x1oiqv2n xomcbdp x27kpxv xh8yej3 x9f619 x2b8uid" }, t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx("h1", {
			"data-testid": "call-link-error-heading",
			className: "x579bpy xo1l8bm xkds0cx xiaed6b xipbhat xdj266r x1ua1l7f",
			children: a
		}), t[5] = _) : _ = t[5];
		var f;
		return t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsxs("div", babelHelpers.extends({}, d, { children: [m, u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.cardArea,
			children: u.jsxs("div", babelHelpers.extends({ "data-testid": "call-link-error-card" }, p, { children: [_, u.jsx("p", {
				"data-testid": "call-link-error-description",
				className: "x1jchvi3 x1qfxs89 xipbhat xdj266r xat24cr",
				children: l
			})] }))
		})] })), t[6] = f) : f = t[6], f;
	}
	l.default = d;
}), 226);

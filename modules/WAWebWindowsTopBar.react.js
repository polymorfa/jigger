__d("WAWebWindowsTopBar.react", [
	"fbt",
	"WAWebWaLogoIcon.react",
	"WAWebWindowsConstants",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingInlineStart15: {
			paddingInlineStart: "x1gx403c",
			$$css: !0
		},
		paddingInlineEnd10: {
			paddingInlineEnd: "x2vl965",
			$$css: !0
		}
	}, d = { brandColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function m() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebWindowsConstants").WINDOWS_BUILD_IS_BETA ? u.jsxs(u.Fragment, { children: ["\xA0", u.jsx("span", {
			className: "xhslqc4",
			children: s._(
				/*BTDS*/
				""
			)
		})] }) : null, e[0] = t) : t = e[0];
		var n = t, r;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1n2onr6 x13vifvy xh8yej3 x1vqgdyp x1h3rtpe x78zum5 x6s0dn4 x1pg5gke" }, e[1] = r) : r = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs("div", babelHelpers.extends({}, r, { children: [
			u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 20,
				width: 20,
				iconXstyle: d.brandColor,
				xstyle: [c.paddingInlineStart15, c.paddingInlineEnd10]
			}),
			s._(
				/*BTDS*/
				""
			),
			n
		] })), e[2] = a) : a = e[2], a;
	}
	l.default = m;
}), 226);

__d("WAWebMessageViaAdIndicator.react", [
	"fbt",
	"WAWebAdAttributionUtils",
	"WAWebClassnames",
	"WAWebMessageTopIndicatorText.react",
	"WAWebStateUtils",
	"WDSIconWdsIcChat.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		icon: {
			display: "x1rg5ohu",
			color: "xhslqc4",
			$$css: !0
		},
		container: {
			height: "xhvdbge",
			lineHeight: "x17fgdl5",
			$$css: !0
		},
		marginVert4: {
			marginTop: "xav9cv8",
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		marginEnd4: {
			marginInlineEnd: "x7g7pl8",
			$$css: !0
		},
		marginStart8: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(7), a = t.className, i = t.xstyle, l = o("WAWebStateUtils").unproxy(t.msg);
		if (!o("WAWebAdAttributionUtils").shouldShowAdAttribution(l)) return null;
		var u;
		n[0] !== a || n[1] !== i ? (u = o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(d.container, d.marginVert4, d.marginEnd4, d.marginStart8, i), a), n[0] = a, n[1] = i, n[2] = u) : u = n[2];
		var m;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(r("WDSIconWdsIcChat.react"), {
			xstyle: d.icon,
			height: 16,
			width: 16
		}), n[3] = m) : m = n[3];
		var p;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(r("WAWebMessageTopIndicatorText.react"), { children: s._(
			/*BTDS*/
			""
		) }), n[4] = p) : p = n[4];
		var _;
		return n[5] !== u ? (_ = c.jsxs("div", {
			className: u,
			children: [m, p]
		}), n[5] = u, n[6] = _) : _ = n[6], _;
	}
	l.default = m;
}), 226);

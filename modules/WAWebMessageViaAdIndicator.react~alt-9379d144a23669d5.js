__d("WAWebMessageViaAdIndicator.react", [
	"fbt",
	"WAWebAdAttributionUtils",
	"WAWebClassnames",
	"WAWebMessageTopIndicatorText.react",
	"WAWebStateUtils",
	"WDSIconWdsIcChat.react",
	"react",
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
		var n = t.className, a = t.xstyle, i = o("WAWebStateUtils").unproxy(t.msg);
		return o("WAWebAdAttributionUtils").shouldShowAdAttribution(i) ? c.jsxs("div", {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease((e || (e = r("stylex")))(d.container, d.marginVert4, d.marginEnd4, d.marginStart8, a), n),
			children: [c.jsx(r("WDSIconWdsIcChat.react"), {
				xstyle: d.icon,
				height: 16,
				width: 16
			}), c.jsx(r("WAWebMessageTopIndicatorText.react"), { children: s._(
				/*BTDS*/
				""
			) })]
		}) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

__d("WAWebLidDebugBadge.react", [
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		paddingInline3: {
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginInlineStart6: {
			marginInlineStart: "xdzw4kq",
			$$css: !0
		}
	}, d = { lidDebugLabel: {
		fontSize: "x190qgfh",
		background: "x9d0jvq",
		color: "x1pse0pq",
		fontWeight: "x117nqv4",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(3), a = t.isCAG, i = t.isParentGroup, l;
		i ? l = "Parent Group LID" : a === !0 ? l = "CAG LID" : a === !1 ? l = "Group LID" : l = "LID";
		var s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (e || (e = r("stylex"))).props(d.lidDebugLabel, o("WDSPaddings.stylex").wdsPaddings.paddingVer0, c.paddingInline3, c.marginInlineStart6), n[0] = s) : s = n[0];
		var m;
		return n[1] !== l ? (m = u.jsx("span", babelHelpers.extends({}, s, { children: l })), n[1] = l, n[2] = m) : m = n[2], m;
	}
	l.default = m;
}), 98);

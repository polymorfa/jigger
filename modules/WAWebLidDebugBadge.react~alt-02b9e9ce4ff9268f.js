__d("WAWebLidDebugBadge.react", [
	"WDSPaddings.stylex",
	"react",
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
		var n = t.isCAG, a = t.isParentGroup, i;
		return a ? i = "Parent Group LID" : n === !0 ? i = "CAG LID" : n === !1 ? i = "Group LID" : i = "LID", u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.lidDebugLabel, o("WDSPaddings.stylex").wdsPaddings.paddingVer0, c.paddingInline3, c.marginInlineStart6), { children: i }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

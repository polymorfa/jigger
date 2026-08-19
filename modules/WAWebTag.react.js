__d("WAWebTag.react", [
	"$InternalEnum",
	"WAWebL10N",
	"WDSFontTokenStyles",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcGradeFilled.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		marker: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			paddingTop: "x1gxa6cn",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		primary: {
			backgroundColor: "x1abdmlv",
			color: "xk4n5i7",
			$$css: !0
		},
		secondary: {
			backgroundColor: "x4wrhlh",
			color: "x14ug900",
			$$css: !0
		},
		error: {
			backgroundColor: "xrkjzwr",
			color: "x30a034",
			$$css: !0
		},
		square: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		round: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			minWidth: "xdhweic",
			$$css: !0
		},
		pill: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		iconStar: {
			transform: "x6ll9c4",
			$$css: !0
		},
		iconStartRTL: {
			transform: "x3c4gkl",
			$$css: !0
		}
	}, d = n("$InternalEnum").Mirrored([
		"Primary",
		"PrimaryPill",
		"Secondary",
		"Error"
	]), m = n("$InternalEnum").Mirrored([
		"STAR",
		"CHECK",
		"CLOSE"
	]), p = [d.Primary, d.PrimaryPill];
	function _(t) {
		var n = o("react-compiler-runtime").c(11), a = t.children, i = t.icon, l = t.round, s = t.testid, m = t.theme, _ = t.xstyle, g = l === void 0 ? !1 : l, h = m === void 0 ? d.Primary : m, y;
		n[0] !== g || n[1] !== h || n[2] !== _ ? (y = (e || (e = r("stylex"))).props(c.marker, o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized, p.includes(h) && c.primary, h === d.Secondary && c.secondary, h === d.PrimaryPill && c.pill, h === d.Error && c.error, g ? c.round : c.square, _), n[0] = g, n[1] = h, n[2] = _, n[3] = y) : y = n[3];
		var C;
		n[4] !== i ? (C = u.jsx(f, { name: i }), n[4] = i, n[5] = C) : C = n[5];
		var b;
		return n[6] !== a || n[7] !== y || n[8] !== C || n[9] !== s ? (b = u.jsxs("div", babelHelpers.extends({}, y, {
			"data-testid": s,
			children: [a, C]
		})), n[6] = a, n[7] = y, n[8] = C, n[9] = s, n[10] = b) : b = n[10], b;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.name, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
			width: 12,
			height: 12,
			xstyle: r("WAWebL10N").isRTL() ? c.iconStartRTL : c.iconStar
		}, t[0] = a) : a = t[0];
		var i = a, l;
		return t[1] !== n ? (l = n === m.STAR ? u.jsx(r("WDSIconIcGradeFilled.react"), babelHelpers.extends({}, i)) : n === m.CHECK ? u.jsx(r("WDSIconIcCheck.react"), babelHelpers.extends({}, i)) : n === m.CLOSE ? u.jsx(r("WDSIconIcClose.react"), babelHelpers.extends({}, i)) : n == null ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})(), t[1] = n, t[2] = l) : l = t[2], l;
	}
	l.TagTheme = d, l.TagIconName = m, l.Tag = _;
}), 98);

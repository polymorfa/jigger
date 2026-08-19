__d("WAWebTag.react", [
	"$InternalEnum",
	"WAWebL10N",
	"WDSFontTokenStyles",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcGradeFilled.react",
	"react",
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
		var n = t.children, a = t.icon, i = t.round, l = i === void 0 ? !1 : i, s = t.testid, m = t.theme, _ = m === void 0 ? d.Primary : m, g = t.xstyle;
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.marker, o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized, p.includes(_) && c.primary, _ === d.Secondary && c.secondary, _ === d.PrimaryPill && c.pill, _ === d.Error && c.error, l ? c.round : c.square, g), {
			"data-testid": s,
			children: [n, u.jsx(f, { name: a })]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.name, n = {
			width: 12,
			height: 12,
			xstyle: r("WAWebL10N").isRTL() ? c.iconStartRTL : c.iconStar
		};
		return t === m.STAR ? u.jsx(r("WDSIconIcGradeFilled.react"), babelHelpers.extends({}, n)) : t === m.CHECK ? u.jsx(r("WDSIconIcCheck.react"), babelHelpers.extends({}, n)) : t === m.CLOSE ? u.jsx(r("WDSIconIcClose.react"), babelHelpers.extends({}, n)) : t == null ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}
	f.displayName = f.name + " [from " + i.id + "]", l.TagTheme = d, l.TagIconName = m, l.Tag = _;
}), 98);

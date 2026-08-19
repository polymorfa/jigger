__d("WAWebBulletedListMutatorComponent.react", [
	"WAWebL10N",
	"WAWebTextMutatorComponentUtils",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { marginInlineStart18: {
		marginInlineStart: "xnkmj2t",
		$$css: !0
	} }, d = { ul: {
		wordBreak: "x13faqbe",
		whiteSpace: "xeaf4i8",
		position: "x1n2onr6",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(4), a = t.children, i = t.inline, l = t.largerIndentation, s = t.quoted, m = a === void 0 ? "" : a, p = i === void 0 ? !1 : i, _ = l === void 0 ? !1 : l, f = s === void 0 ? !1 : s;
		if (p) return m;
		var g;
		return n[0] !== m || n[1] !== _ || n[2] !== f ? (g = [], o("WAWebTextMutatorComponentUtils").groupListChildren(m).forEach(function(t, n) {
			t.isList ? g.push(u.jsx("ul", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.ul, !f && o("WDSMargins.stylex").wdsMargins.marginVer4, c.marginInlineStart18, _ ? c.marginInlineStart18 : o("WDSMargins.stylex").wdsMargins.marginStart8), {
				dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
				children: t.children
			}), n)) : g.push(t.children);
		}), n[0] = m, n[1] = _, n[2] = f, n[3] = g) : g = n[3], g;
	}
	l.default = m;
}), 98);

__d("WAWebBulletedListMutatorComponent.react", [
	"WAWebL10N",
	"WAWebTextMutatorComponentUtils",
	"WDSMargins.stylex",
	"react",
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
		var n = t.children, a = n === void 0 ? "" : n, i = t.inline, l = i === void 0 ? !1 : i, s = t.largerIndentation, m = s === void 0 ? !1 : s, p = t.quoted, _ = p === void 0 ? !1 : p;
		if (l) return a;
		var f = [];
		return o("WAWebTextMutatorComponentUtils").groupListChildren(a).forEach(function(t, n) {
			t.isList ? f.push(u.jsx("ul", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.ul, !_ && o("WDSMargins.stylex").wdsMargins.marginVer4, c.marginInlineStart18, m ? c.marginInlineStart18 : o("WDSMargins.stylex").wdsMargins.marginStart8), {
				dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
				children: t.children
			}), n)) : f.push(t.children);
		}), f;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

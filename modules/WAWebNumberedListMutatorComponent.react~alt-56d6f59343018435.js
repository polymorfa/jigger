__d("WAWebNumberedListMutatorComponent.react", [
	"WAWebL10N",
	"WAWebTextMutatorComponentUtils",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { marginInlineStart30: {
		marginInlineStart: "xymharo",
		$$css: !0
	} }, d = { ol: {
		wordBreak: "x13faqbe",
		whiteSpace: "xeaf4i8",
		position: "x1n2onr6",
		listStyleType: "x3yw8vx",
		$$css: !0
	} };
	function m(t) {
		var n = t.children, a = n === void 0 ? "" : n, i = t.inline, l = i === void 0 ? !1 : i, s = t.largerIndentation, m = s === void 0 ? !1 : s, p = t.quoted, _ = p === void 0 ? !1 : p;
		if (l) return a;
		var f = [];
		return o("WAWebTextMutatorComponentUtils").groupListChildren(a).forEach(function(t, n) {
			t.isList ? f.push(u.jsx("ol", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.ol, c.marginInlineStart30, !_ && o("WDSMargins.stylex").wdsMargins.marginVer4, m ? c.marginInlineStart30 : o("WDSMargins.stylex").wdsMargins.marginStart20), {
				dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
				children: t.children
			}), n)) : f.push(t.children);
		}), f;
	}
	m.displayName = m.name + " [from " + i.id + "]", m.displayName = "NumberedList", l.default = m;
}), 98);

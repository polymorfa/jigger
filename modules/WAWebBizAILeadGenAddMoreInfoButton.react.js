__d("WAWebBizAILeadGenAddMoreInfoButton.react", [
	"fbt",
	"WDSIconIcAdd.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 40, d = { icon: {
		color: "xo1mcw5",
		flexShrink: "x2lah0s",
		height: "x1qx5ct2",
		width: "xw4jnvo",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.label, a = e.onPress, i = e.testid, l = i === void 0 ? "lead-gen-add-more-info-btn" : i, c;
		t[0] !== a ? (c = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a());
		}, t[0] = a, t[1] = c) : c = t[1];
		var m, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x6s0dn4 xo1mcw5 x1ypdohk x3nfvp2 x1qvou4u x1s70e7g x1ba4aug x4m7ku4 x16ovd2e x12xbjc7 xvtqlqk x1phvje8 xbvygy2 xx87wu9 xt0b8zv x7v4iwh" }, p = u.jsx(r("WDSIconIcAdd.react"), { iconXstyle: d.icon }), t[2] = m, t[3] = p) : (m = t[2], p = t[3]);
		var _;
		t[4] !== n ? (_ = n != null ? n : s._(
			/*BTDS*/
			""
		), t[4] = n, t[5] = _) : _ = t[5];
		var f;
		t[6] !== _ ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentActionEmphasized",
			type: "Body2Emphasized",
			children: _
		}), t[6] = _, t[7] = f) : f = t[7];
		var g;
		return t[8] !== a || t[9] !== c || t[10] !== f || t[11] !== l ? (g = u.jsxs("div", babelHelpers.extends({
			role: "button",
			tabIndex: 0,
			onClick: a,
			onKeyDown: c,
			"data-testid": l
		}, m, { children: [p, f] })), t[8] = a, t[9] = c, t[10] = f, t[11] = l, t[12] = g) : g = t[12], g;
	}
	l.default = m;
}), 226);

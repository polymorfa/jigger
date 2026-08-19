__d("WAWebBizAITextLinkButton.react", [
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(10), n = e.label, a = e.onPress, i = e.testid, l = i === void 0 ? "biz-ai-text-link-btn" : i, u;
		t[0] !== a ? (u = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a());
		}, t[0] = a, t[1] = u) : u = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x6s0dn4 xo1mcw5 x1ypdohk x3nfvp2 x1qvou4u x1s70e7g x1ba4aug x4m7ku4 x16ovd2e x12xbjc7 xvtqlqk xf7dkkf xx87wu9 x1f2jko9 x7v4iwh x1sur9pj" }, t[2] = c) : c = t[2];
		var d;
		t[3] !== n ? (d = s.jsx(r("WDSText.react"), {
			colorName: "contentActionEmphasized",
			type: "Body2Emphasized",
			children: n
		}), t[3] = n, t[4] = d) : d = t[4];
		var m;
		return t[5] !== a || t[6] !== u || t[7] !== d || t[8] !== l ? (m = s.jsx("div", babelHelpers.extends({
			role: "button",
			tabIndex: 0,
			onClick: a,
			onKeyDown: u,
			"data-testid": l
		}, c, { children: d })), t[5] = a, t[6] = u, t[7] = d, t[8] = l, t[9] = m) : m = t[9], m;
	}
	l.default = u;
}), 98);

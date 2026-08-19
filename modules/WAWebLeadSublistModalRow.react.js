__d("WAWebLeadSublistModalRow.react", [
	"WAWebLeadStageColors",
	"WAWebLeadStageNames",
	"WAWebListIcon.react",
	"WAWebNoop",
	"WDSBaseRadio.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 56, c = 56;
	function d(e) {
		var t = o("react-compiler-runtime").c(32), n = e.checked, a = e.groupName, i = e.leadListName, l = e.onSelectStage, u = e.stage, c;
		t[0] !== i || t[1] !== u ? (c = o("WAWebLeadStageNames").getLeadSublistRowLabel(i, u), t[0] = i, t[1] = u, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== l || t[4] !== u ? (m = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), l(u));
		}, t[3] = l, t[4] = u, t[5] = m) : m = t[5];
		var p = m, _ = "lead_sublist_modal_row_" + String(u), f;
		t[6] !== l || t[7] !== u ? (f = function() {
			return l(u);
		}, t[6] = l, t[7] = u, t[8] = f) : f = t[8];
		var g = n ? 0 : -1, h, y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x6s0dn4 x9f619 x1ypdohk x78zum5 xnnlda6 xh8yej3 xvtqlqk x1onydzz" }, y = { className: "x6s0dn4 x78zum5 xdl72j9 x1c4vz4f x2lah0s x1evaxtz" }, t[9] = h, t[10] = y) : (h = t[9], y = t[10]);
		var C;
		t[11] !== u ? (C = o("WAWebLeadStageColors").getLeadStageDotColor(u), t[11] = u, t[12] = C) : C = t[12];
		var b;
		t[13] !== C ? (b = s.jsx("div", babelHelpers.extends({}, y, { children: s.jsx(r("WAWebListIcon.react"), { color: C }) })), t[13] = C, t[14] = b) : b = t[14];
		var v;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x1t1x2f9 x1iyjqo2 xs83m0k x6ikm8r x10wlt62" }, t[15] = v) : v = t[15];
		var S;
		t[16] !== d ? (S = s.jsx("div", babelHelpers.extends({}, v, { children: s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: d
		}) })), t[16] = d, t[17] = S) : S = t[17];
		var R = "lead_sublist_modal_radio_" + String(u), L;
		t[18] !== n || t[19] !== a || t[20] !== u || t[21] !== R ? (L = s.jsx("span", {
			"aria-hidden": !0,
			children: s.jsx(r("WDSBaseRadio.react"), {
				checked: n,
				name: a,
				onChange: r("WAWebNoop"),
				tabIndex: -1,
				testid: R,
				value: u
			})
		}), t[18] = n, t[19] = a, t[20] = u, t[21] = R, t[22] = L) : L = t[22];
		var E;
		return t[23] !== n || t[24] !== p || t[25] !== S || t[26] !== L || t[27] !== _ || t[28] !== f || t[29] !== g || t[30] !== b ? (E = s.jsxs("div", babelHelpers.extends({
			"aria-checked": n,
			"data-testid": _,
			onClick: f,
			onKeyDown: p,
			role: "radio",
			tabIndex: g
		}, h, { children: [
			b,
			S,
			L
		] })), t[23] = n, t[24] = p, t[25] = S, t[26] = L, t[27] = _, t[28] = f, t[29] = g, t[30] = b, t[31] = E) : E = t[31], E;
	}
	l.default = d;
}), 98);

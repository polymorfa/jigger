__d("WAWebPipelineColumnHeader.react", [
	"fbt",
	"WAWebLeadStageNames",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { separator: {
		marginInlineStart: "x1e9n31h",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(26), n = e.count, a = e.stage, i, l, d, m, p;
		t[0] !== n || t[1] !== a ? (i = o("WAWebLeadStageNames").getLeadStageName(a), t[7] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x78zum5 x6s0dn4 x1qughib x1p57kb1 xvpt6g3 xdx6fka xvtqlqk" }, t[7] = l) : l = t[7], d = "heading", m = 3, p = s._(
			/*BTDS*/
			"",
			[s._plural(n, "number"), s._param("lead stage name", i)]
		), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = d, t[5] = m, t[6] = p) : (i = t[2], l = t[3], d = t[4], m = t[5], p = t[6]);
		var _ = "pipeline-column-header-" + String(a), f;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x78zum5 x6s0dn4 x1s70e7g" }, t[8] = f) : f = t[8];
		var g;
		t[9] !== i ? (g = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: i
		}), t[9] = i, t[10] = g) : g = t[10];
		var h;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: c.separator,
			children: " · "
		}), t[11] = h) : h = t[11];
		var y = String(n), C;
		t[12] !== y ? (C = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: y
		}), t[12] = y, t[13] = C) : C = t[13];
		var b;
		t[14] !== C || t[15] !== g ? (b = u.jsxs("div", babelHelpers.extends({}, f, {
			"aria-hidden": !0,
			children: [
				g,
				h,
				C
			]
		})), t[14] = C, t[15] = g, t[16] = b) : b = t[16];
		var v;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "xuzhngd xt0e3qv" }, t[17] = v) : v = t[17];
		var S;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx("div", babelHelpers.extends({}, v, {
			"aria-hidden": !0,
			children: u.jsx(r("WDSIconIcMoreVert.react"), {})
		})), t[18] = S) : S = t[18];
		var R;
		return t[19] !== l || t[20] !== b || t[21] !== d || t[22] !== m || t[23] !== p || t[24] !== _ ? (R = u.jsxs("div", babelHelpers.extends({}, l, {
			role: d,
			"aria-level": m,
			"aria-label": p,
			"data-testid": _,
			children: [b, S]
		})), t[19] = l, t[20] = b, t[21] = d, t[22] = m, t[23] = p, t[24] = _, t[25] = R) : R = t[25], R;
	}
	l.default = d;
}), 226);

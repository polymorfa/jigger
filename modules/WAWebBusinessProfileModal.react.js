__d("WAWebBusinessProfileModal.react", [
	"fbt",
	"WAWebModal.react",
	"WAWebRichTextInput.react",
	"WAWebSavePopup.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcSearch.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { iconSearch: {
		alignItems: "x6s0dn4",
		color: "xhslqc4",
		display: "x78zum5",
		height: "x1vqgdyp",
		justifyContent: "xl56j7k",
		width: "x1useyqa",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(22), n = e.afterSave, a = e.children, i = e.description, l = e.doSave, d = e.isValid, m = e.onCancel, p = e.onSearchChange, _ = e.searchLabel, f = e.title, g;
		t[0] !== p ? (g = function(t) {
			var e, n = (e = t.text) != null ? e : "";
			p == null || p(n);
		}, t[0] = p, t[1] = g) : g = t[1];
		var h = g, y = d != null ? d : !0, C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = { type: o("WAWebModal.react").ModalTheme.BusinessProfile }, t[2] = C) : C = t[2];
		var b, v;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (b = { surface: "smb-business-profile-edit-categories" }, v = { className: "xvpt6g3 xb0esv5 xyo0t3i" }, t[3] = b, t[4] = v) : (b = t[3], v = t[4]);
		var S;
		t[5] !== i ? (S = u.jsx("div", babelHelpers.extends({}, v, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: i
		}) })), t[5] = i, t[6] = S) : S = t[6];
		var R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x6s0dn4 x4wrhlh xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1ua1l7f xyxtwap x7vsco6 x12w63v0 x1nzty39" }, t[7] = R) : R = t[7];
		var L, E;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: c.iconSearch,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSIconIcSearch.react"), {})
		}), E = { className: "x1iyjqo2 x16ovd2e x12xbjc7" }, t[8] = L, t[9] = E) : (L = t[8], E = t[9]);
		var k;
		t[10] !== h || t[11] !== _ ? (k = u.jsxs("div", babelHelpers.extends({}, R, { children: [L, u.jsx("div", babelHelpers.extends({}, E, { children: u.jsx(r("WAWebRichTextInput.react"), {
			editorName: "business-category-search",
			lineWrap: !1,
			placeholder: _,
			onChange: h
		}) }))] })), t[10] = h, t[11] = _, t[12] = k) : k = t[12];
		var I;
		return t[13] !== n || t[14] !== a || t[15] !== l || t[16] !== m || t[17] !== k || t[18] !== y || t[19] !== S || t[20] !== f ? (I = u.jsxs(r("WAWebSavePopup.react"), {
			title: f,
			doSave: l,
			isValid: y,
			modalConfig: C,
			onCancel: m,
			afterSave: n,
			tsNavigationData: b,
			children: [
				S,
				k,
				a
			]
		}), t[13] = n, t[14] = a, t[15] = l, t[16] = m, t[17] = k, t[18] = y, t[19] = S, t[20] = f, t[21] = I) : I = t[21], I;
	}
	l.default = d;
}), 226);

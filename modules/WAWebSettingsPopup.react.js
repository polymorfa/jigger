__d("WAWebSettingsPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebRadio.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { explanation: {
		marginBottom: "x1c436fg",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(20), n = e.explanation, r = e.onSelect, a = e.options, i = c(e.initialValue), l = i[0], m = i[1], p;
		t[0] !== r || t[1] !== l ? (p = function() {
			l != null && r(l);
		}, t[0] = r, t[1] = l, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = function(t) {
			m(t);
		}, t[3] = f) : f = t[3];
		var g = f, h;
		if (t[4] !== a || t[5] !== l) {
			var y;
			t[7] !== l ? (y = function(t) {
				var e = t.label, n = t.secondaryLabel, r = t.testid, a = t.value;
				return u.jsx("li", {
					"data-testid": "option-" + a,
					children: u.jsx(o("WAWebRadio.react").RadioWithLabel, {
						tabIndex: 0,
						name: "settings",
						value: a,
						label: e,
						checked: a === l,
						onChange: function() {
							return g(a);
						},
						secondaryLabel: n,
						testid: r
					})
				}, "setting-" + a);
			}, t[7] = l, t[8] = y) : y = t[8], h = a.map(y), t[4] = a, t[5] = l, t[6] = h;
		} else h = t[6];
		var C = h, b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = {
			surface: "unknown",
			viewName: "settings"
		}, t[9] = b) : b = t[9];
		var v = e.title, S;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[10] = S) : S = t[10];
		var R;
		t[11] !== n ? (R = n != null ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: d.explanation,
			children: n
		}) : null, t[11] = n, t[12] = R) : R = t[12];
		var L;
		t[13] !== C ? (L = u.jsx("form", { children: u.jsx("ol", { children: C }) }), t[13] = C, t[14] = L) : L = t[14];
		var E;
		return t[15] !== _ || t[16] !== e.title || t[17] !== R || t[18] !== L ? (E = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: b,
			title: v,
			okText: S,
			onOK: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			testid: "settings-popup",
			children: [R, L]
		}), t[15] = _, t[16] = e.title, t[17] = R, t[18] = L, t[19] = E) : E = t[19], E;
	}
	l.default = m;
}), 226);

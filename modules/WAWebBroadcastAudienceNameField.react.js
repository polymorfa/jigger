__d("WAWebBroadcastAudienceNameField.react", [
	"fbt",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(13), n = e.defaultValue, a = e.floatingLabel, i = e.onFocus, l = e.onValueChange, d = e.testid, m = e.value, p = c(null), _ = p[0], f = p[1], g;
		t[0] !== _ || t[1] !== l ? (g = function(t) {
			l(t), _ != null && f(null), t.trim() === "" && f(s._(
				/*BTDS*/
				""
			));
		}, t[0] = _, t[1] = l, t[2] = g) : g = t[2];
		var h = g, y = _ != null, C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebBizBroadcastsAudienceSelectionStrings").getAudienceNameInputLabel(), t[3] = C) : C = t[3];
		var b;
		return t[4] !== n || t[5] !== a || t[6] !== h || t[7] !== _ || t[8] !== i || t[9] !== y || t[10] !== d || t[11] !== m ? (b = u.jsx(r("WDSTextField.react"), {
			defaultValue: n,
			error: y,
			errorText: _,
			floatingLabel: a,
			label: C,
			onFocus: i,
			onValueChange: h,
			testid: d,
			value: m
		}), t[4] = n, t[5] = a, t[6] = h, t[7] = _, t[8] = i, t[9] = y, t[10] = d, t[11] = m, t[12] = b) : b = t[12], b;
	}
	l.default = d;
}), 226);

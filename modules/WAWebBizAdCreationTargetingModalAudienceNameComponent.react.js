__d("WAWebBizAdCreationTargetingModalAudienceNameComponent.react", [
	"fbt",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.audienceName, a = e.onAudienceNameChange, i = c(!1), l = i[0], d = i[1], m;
		t[0] !== n ? (m = n.trim(), t[0] = n, t[1] = m) : m = t[1];
		var p = m, _ = l && p.length === 0, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			d(!0);
		}, t[2] = f) : f = t[2];
		var g = f, h;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "xvpt6g3 xh8yej3" }, t[3] = h) : h = t[3];
		var y;
		t[4] !== _ ? (y = _ ? s._(
			/*BTDS*/
			""
		) : void 0, t[4] = _, t[5] = y) : y = t[5];
		var C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[6] = C) : C = t[6];
		var b;
		return t[7] !== n || t[8] !== _ || t[9] !== a || t[10] !== y ? (b = u.jsx("div", babelHelpers.extends({}, h, { children: u.jsx(r("WDSTextField.react"), {
			error: _,
			errorText: y,
			label: C,
			onBlur: g,
			onValueChange: a,
			testid: "biz_native_ads_audience_name_textfield",
			value: n
		}) })), t[7] = n, t[8] = _, t[9] = a, t[10] = y, t[11] = b) : b = t[11], b;
	}
	l.default = d;
}), 226);

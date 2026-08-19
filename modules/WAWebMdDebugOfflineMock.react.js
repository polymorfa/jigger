__d("WAWebMdDebugOfflineMock.react", [
	"WAWebCheckBox.react",
	"WAWebMdDebugSettingStyles",
	"WAWebMdDebugSettingTitle",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMultiDeviceDebug",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d() {
		var t = o("react-compiler-runtime").c(10), n = c(o("WAWebUserPrefsMultiDeviceDebug").getDebugEnableOfflineMock), a = n[0], i = n[1], l;
		t[0] !== a ? (l = function() {
			var e = !a;
			o("WAWebUserPrefsMultiDeviceDebug").setDebugEnableOfflineMock(e), i(e), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: "Offline Traffic Simulator " + (e ? "Enabled" : "Disabled") }));
		}, t[0] = a, t[1] = l) : l = t[1];
		var s = l, d, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), m = u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Offline Simulator" }), t[2] = d, t[3] = m) : (d = t[2], m = t[3]);
		var p;
		t[4] !== s || t[5] !== a ? (p = u.jsx(o("WAWebCheckBox.react").CheckBox, {
			onChange: s,
			checked: a
		}), t[4] = s, t[5] = a, t[6] = p) : p = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: o("WAWebMdDebugSettingStyles").styles.checkboxLabel,
			children: "Enable Offline Traffic Simulator"
		}), t[7] = _) : _ = t[7];
		var f;
		return t[8] !== p ? (f = u.jsxs("div", babelHelpers.extends({}, d, { children: [m, u.jsxs("div", { children: [p, _] })] })), t[8] = p, t[9] = f) : f = t[9], f;
	}
	l.default = d;
}), 98);

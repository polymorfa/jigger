__d("WAWebMdDebugMessages.react", [
	"WAWebCheckBox.react",
	"WAWebDebugMsg",
	"WAWebMdDebugSettingStyles",
	"WAWebMdDebugSettingTitle",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsDebugMsgs",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d() {
		var t = o("react-compiler-runtime").c(12), n = c(o("WAWebUserPrefsDebugMsgs").getDebugShownMsgs), a = n[0], i = n[1], l;
		t[0] !== a ? (l = function(t) {
			var e = babelHelpers.extends({}, a);
			e[t] = !e[t], o("WAWebUserPrefsDebugMsgs").setDebugShownMsgs(e), i(e);
			var n = (a[t] ? "Show" : "Hide") + " " + t;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: n }));
		}, t[0] = a, t[1] = l) : l = t[1];
		var s = l, d;
		t[2] !== a || t[3] !== s ? (d = function(t) {
			return u.jsxs("div", { children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return s(t);
				},
				checked: a[t]
			}), u.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: o("WAWebMdDebugSettingStyles").styles.checkboxLabel,
				children: t
			})] }, t);
		}, t[2] = a, t[3] = s, t[4] = d) : d = t[4];
		var m = d, p, _, f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), _ = u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Debug Messages" }), f = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: "Show and hide messages for events in chats. Takes effect on reload." }), t[5] = p, t[6] = _, t[7] = f) : (p = t[5], _ = t[6], f = t[7]);
		var g;
		t[8] !== m ? (g = o("WAWebDebugMsg").DebugMessageMembers.map(m), t[8] = m, t[9] = g) : g = t[9];
		var h;
		return t[10] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, p, { children: [
			_,
			f,
			g
		] })), t[10] = g, t[11] = h) : h = t[11], h;
	}
	l.default = d;
}), 98);

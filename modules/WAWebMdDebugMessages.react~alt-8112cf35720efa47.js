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
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d() {
		var t = c(o("WAWebUserPrefsDebugMsgs").getDebugShownMsgs), n = t[0], a = t[1], i = function(t) {
			var e = babelHelpers.extends({}, n);
			e[t] = !e[t], o("WAWebUserPrefsDebugMsgs").setDebugShownMsgs(e), a(e);
			var r = (n[t] ? "Show" : "Hide") + " " + t;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: r }));
		}, l = function(t) {
			return u.jsxs("div", { children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return i(t);
				},
				checked: n[t]
			}), u.jsx(o("WAWebText.react").WAWebTextSmall, {
				as: "span",
				xstyle: o("WAWebMdDebugSettingStyles").styles.checkboxLabel,
				children: t
			})] }, t);
		};
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), { children: [
			u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Debug Messages" }),
			u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: "Show and hide messages for events in chats. Takes effect on reload." }),
			o("WAWebDebugMsg").DebugMessageMembers.map(l)
		] }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

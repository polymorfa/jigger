__d("WAWebMdDebugNewUsernameChat.react", [
	"WAWebButton.react",
	"WAWebMdDebugSettingStyles",
	"WAWebMdDebugSettingTitle",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d() {
		var t = c(""), n = t[0], a = t[1], i = c(""), l = i[0], s = i[1], d = async function(t) {
			try {
				await window.Debug.startUsernameChat(l, n), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: "New username Chat " + n + " : " + l }));
			} catch (t) {
				var e = r("getErrorSafe")(t);
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: "StartUsernameChat failed: " + e.message }));
			}
		}, m = function(t) {
			var e = t.target;
			e instanceof HTMLInputElement && s(e.value);
		}, p = function(t) {
			var e = t.target;
			e instanceof HTMLInputElement && a(e.value);
		};
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), { children: [
			u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Create username chat" }),
			u.jsxs("label", {
				style: { display: "inline" },
				children: [u.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					children: "Lid"
				}), u.jsx("input", babelHelpers.extends({ onChange: m }, e.props(o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput), {
					value: l,
					name: "lid",
					type: "text"
				}))]
			}),
			u.jsxs("label", {
				style: { display: "inline" },
				children: [u.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					children: "Username"
				}), u.jsx("input", babelHelpers.extends({ onChange: p }, e.props(o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput), {
					value: n,
					name: "username",
					type: "text"
				}))]
			}),
			u.jsx(o("WAWebButton.react").Button, {
				type: "primary",
				onClick: d,
				children: "Create Chat"
			})
		] }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

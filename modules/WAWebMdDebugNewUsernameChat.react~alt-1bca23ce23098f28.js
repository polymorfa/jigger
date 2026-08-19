__d("WAWebMdDebugNewUsernameChat.react", [
	"WAWebButton.react",
	"WAWebMdDebugSettingStyles",
	"WAWebMdDebugSettingTitle",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d() {
		var t = o("react-compiler-runtime").c(23), n = c(""), a = n[0], i = n[1], l = c(""), s = l[0], d = l[1], m;
		t[0] !== s || t[1] !== a ? (m = async function(t) {
			try {
				await window.Debug.startUsernameChat(s, a), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: "New username Chat " + a + " : " + s }));
			} catch (t) {
				var e = t, n = r("getErrorSafe")(e);
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: "StartUsernameChat failed: " + n.message }));
			}
		}, t[0] = s, t[1] = a, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(t) {
			var e = t.target;
			e instanceof HTMLInputElement && d(e.value);
		}, t[3] = _) : _ = t[3];
		var f = _, g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			var e = t.target;
			e instanceof HTMLInputElement && i(e.value);
		}, t[4] = g) : g = t[4];
		var h = g, y, C, b, v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.settingItem), C = u.jsx(r("WAWebMdDebugSettingTitle"), { title: "Create username chat" }), b = { display: "inline" }, v = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "span",
			children: "Lid"
		}), t[5] = y, t[6] = C, t[7] = b, t[8] = v) : (y = t[5], C = t[6], b = t[7], v = t[8]);
		var S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput), t[9] = S) : S = t[9];
		var R;
		t[10] !== s ? (R = u.jsxs("label", {
			style: b,
			children: [v, u.jsx("input", babelHelpers.extends({ onChange: f }, S, {
				value: s,
				name: "lid",
				type: "text"
			}))]
		}), t[10] = s, t[11] = R) : R = t[11];
		var L, E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = { display: "inline" }, L = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "span",
			children: "Username"
		}), t[12] = L, t[13] = E) : (L = t[12], E = t[13]);
		var k;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (k = (e || (e = r("stylex"))).props(o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput), t[14] = k) : k = t[14];
		var I;
		t[15] !== a ? (I = u.jsxs("label", {
			style: E,
			children: [L, u.jsx("input", babelHelpers.extends({ onChange: h }, k, {
				value: a,
				name: "username",
				type: "text"
			}))]
		}), t[15] = a, t[16] = I) : I = t[16];
		var T;
		t[17] !== p ? (T = u.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: p,
			children: "Create Chat"
		}), t[17] = p, t[18] = T) : T = t[18];
		var D;
		return t[19] !== I || t[20] !== T || t[21] !== R ? (D = u.jsxs("div", babelHelpers.extends({}, y, { children: [
			C,
			R,
			I,
			T
		] })), t[19] = I, t[20] = T, t[21] = R, t[22] = D) : D = t[22], D;
	}
	l.default = d;
}), 98);

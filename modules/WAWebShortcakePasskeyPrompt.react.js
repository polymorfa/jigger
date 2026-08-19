__d("WAWebShortcakePasskeyPrompt.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WAWebWdsPictoPasskeyIcon.react",
	"WDSIconIcArrowForward.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		textSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1kb72lq",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		buttonSpacing: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		spinnerStroke: {
			stroke: "xscos2w",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(19), n = e.errorMessage, a = e.isDisabled, i = e.onContinue, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9" }, t[0] = l) : l = t[0];
		var d, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx("span", {
			className: "xngnso2 xo1l8bm x1mqxbix",
			children: s._(
				/*BTDS*/
				""
			)
		}), m = u.jsx("span", {
			className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[1] = d, t[2] = m) : (d = t[1], m = t[2]);
		var p;
		t[3] !== n ? (p = n != null && u.jsx("span", {
			className: "x1f6kntn x1e2nbdu",
			role: "alert",
			children: n
		}), t[3] = n, t[4] = p) : p = t[4];
		var _ = !a, f;
		t[5] !== a ? (f = a ? u.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 2,
			color: c.spinnerStroke
		}) : u.jsx(r("WDSIconIcArrowForward.react"), {}), t[5] = a, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h;
		t[8] !== a || t[9] !== i || t[10] !== _ || t[11] !== f ? (h = u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			animate: _,
			disabled: a,
			icon: f,
			onClick: i,
			testId: "shortcake_passkey_continue_button",
			text: g,
			xstyle: c.buttonSpacing
		}), t[8] = a, t[9] = i, t[10] = _, t[11] = f, t[12] = h) : h = t[12];
		var y;
		t[13] !== p || t[14] !== h ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.textSection,
			children: [
				d,
				m,
				p,
				h
			]
		}), t[13] = p, t[14] = h, t[15] = y) : y = t[15];
		var C;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
			children: u.jsx(o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon, {
				height: 88,
				width: 88
			})
		}), t[16] = C) : C = t[16];
		var b;
		return t[17] !== y ? (b = u.jsxs("div", babelHelpers.extends({}, l, {
			"data-testid": "shortcake_passkey_prompt_card",
			children: [y, C]
		})), t[17] = y, t[18] = b) : b = t[18], b;
	}
	l.default = d;
}), 226);

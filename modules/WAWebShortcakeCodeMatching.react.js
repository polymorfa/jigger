__d("WAWebShortcakeCodeMatching.react", [
	"fbt",
	"WALogger",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WDSIconIcArrowForward.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState, _ = 4, f = {
		textSection: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1kb72lq",
			$$css: !0
		},
		buttonSpacing: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		spinnerStroke: {
			stroke: "xscos2w",
			$$css: !0
		},
		codeRow: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			columnGap: "xmixu3c",
			$$css: !0
		}
	};
	function g(t) {
		var a = o("react-compiler-runtime").c(47), i = t.autoConfirming, l = t.onConfirm, u = t.verificationCode, d = i === void 0 ? !1 : i, m = p(!1), _ = m[0], g = m[1], y = _ || d, C;
		a[0] !== l ? (C = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				g(!0), l().catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: code confirmation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("shortcake-code-confirm-fail"), g(!1);
				});
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), a[0] = l, a[1] = C) : C = a[1];
		var b = C, v, S, R, L, E, k, I, T, D, x, $, P;
		if (a[2] !== u) {
			var N = u.split("");
			S = o("WAWebFlex.react").FlexColumn, P = f.textSection, R = "shortcake_code_matching_card", a[15] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx("span", {
				className: "xngnso2 xo1l8bm x1mqxbix",
				children: s._(
					/*BTDS*/
					""
				)
			}), E = c.jsx("span", {
				className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
				children: s._(
					/*BTDS*/
					""
				)
			}), T = { className: "xh8yej3 xf39lq1 xlr9sxt xvvg52n xwd4zgb xq8v1ta xz9dl7a xsag5q8" }, a[15] = L, a[16] = E, a[17] = T) : (L = a[15], E = a[16], T = a[17]), D = "shortcake_verification_code_display", x = "status", $ = s._(
				/*BTDS*/
				"",
				[s._param("code", u.split("").join(" "))]
			), v = o("WAWebFlex.react").FlexRow, k = f.codeRow, I = N.map(h), a[2] = u, a[3] = v, a[4] = S, a[5] = R, a[6] = L, a[7] = E, a[8] = k, a[9] = I, a[10] = T, a[11] = D, a[12] = x, a[13] = $, a[14] = P;
		} else v = a[3], S = a[4], R = a[5], L = a[6], E = a[7], k = a[8], I = a[9], T = a[10], D = a[11], x = a[12], $ = a[13], P = a[14];
		var M;
		a[18] !== v || a[19] !== k || a[20] !== I ? (M = c.jsx(v, {
			xstyle: k,
			children: I
		}), a[18] = v, a[19] = k, a[20] = I, a[21] = M) : M = a[21];
		var w;
		a[22] !== M || a[23] !== T || a[24] !== D || a[25] !== x || a[26] !== $ ? (w = c.jsx("div", babelHelpers.extends({}, T, {
			"data-testid": D,
			role: x,
			"aria-label": $,
			children: M
		})), a[22] = M, a[23] = T, a[24] = D, a[25] = x, a[26] = $, a[27] = w) : w = a[27];
		var A;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx("span", {
			className: "x1nxh6w3 x1v8dydz xd4r4e8",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[28] = A) : A = a[28];
		var F = !y, O;
		a[29] !== y ? (O = y ? c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 2,
			color: f.spinnerStroke
		}) : c.jsx(r("WDSIconIcArrowForward.react"), {}), a[29] = y, a[30] = O) : O = a[30];
		var B;
		a[31] !== y ? (B = y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[31] = y, a[32] = B) : B = a[32];
		var W;
		a[33] !== b || a[34] !== y || a[35] !== F || a[36] !== O || a[37] !== B ? (W = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			animate: F,
			disabled: y,
			icon: O,
			onClick: b,
			testId: "shortcake_code_confirm_button",
			text: B,
			xstyle: f.buttonSpacing
		}), a[33] = b, a[34] = y, a[35] = F, a[36] = O, a[37] = B, a[38] = W) : W = a[38];
		var q;
		return a[39] !== S || a[40] !== R || a[41] !== L || a[42] !== E || a[43] !== w || a[44] !== W || a[45] !== P ? (q = c.jsxs(S, {
			xstyle: P,
			testid: R,
			children: [
				L,
				E,
				w,
				A,
				W
			]
		}), a[39] = S, a[40] = R, a[41] = L, a[42] = E, a[43] = w, a[44] = W, a[45] = P, a[46] = q) : q = a[46], q;
	}
	function h(e, t) {
		return c.jsxs(c.Fragment, { children: [t === _ && c.jsx("span", {
			className: "x78zum5 x6s0dn4 xl56j7k x579bpy xk50ysn x1618xya x1djpfga x1im30kd",
			"aria-hidden": "true",
			children: "-"
		}), c.jsx("span", {
			className: "x78zum5 x6s0dn4 xl56j7k x10h3iyq xsdox4t x12peec7 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xkf4vw5 xwfngxx xoop1me x1lylb4u xyi3aci xwf5gio x1p453bz x1suzm8a x1aueamr xk50ysn x1jzgpr8 x1618xya",
			"aria-hidden": "true",
			children: e
		})] }, t);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);

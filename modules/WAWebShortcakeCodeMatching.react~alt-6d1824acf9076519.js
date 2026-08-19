__d("WAWebShortcakeCodeMatching.react", [
	"fbt",
	"WALogger",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebSpinner.react",
	"WDSIconIcArrowForward.react",
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
		var n = o("react-compiler-runtime").c(47), a = t.autoConfirming, i = t.onConfirm, l = t.verificationCode, u = a === void 0 ? !1 : a, d = p(!1), m = d[0], _ = d[1], g = m || u, y;
		n[0] !== i ? (y = async function() {
			_(!0), i().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Shortcake UI: code confirmation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("shortcake-code-confirm-fail"), _(!1);
			});
		}, n[0] = i, n[1] = y) : y = n[1];
		var C = y, b, v, S, R, L, E, k, I, T, D, x, $;
		if (n[2] !== l) {
			var P = l.split("");
			v = o("WAWebFlex.react").FlexColumn, $ = f.textSection, S = "shortcake_code_matching_card", n[15] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx("span", {
				className: "xngnso2 xo1l8bm x1mqxbix",
				children: s._(
					/*BTDS*/
					""
				)
			}), L = c.jsx("span", {
				className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
				children: s._(
					/*BTDS*/
					""
				)
			}), I = { className: "xh8yej3 xf39lq1 xlr9sxt xvvg52n xwd4zgb xq8v1ta xz9dl7a xsag5q8" }, n[15] = R, n[16] = L, n[17] = I) : (R = n[15], L = n[16], I = n[17]), T = "shortcake_verification_code_display", D = "status", x = s._(
				/*BTDS*/
				"",
				[s._param("code", l.split("").join(" "))]
			), b = o("WAWebFlex.react").FlexRow, E = f.codeRow, k = P.map(h), n[2] = l, n[3] = b, n[4] = v, n[5] = S, n[6] = R, n[7] = L, n[8] = E, n[9] = k, n[10] = I, n[11] = T, n[12] = D, n[13] = x, n[14] = $;
		} else b = n[3], v = n[4], S = n[5], R = n[6], L = n[7], E = n[8], k = n[9], I = n[10], T = n[11], D = n[12], x = n[13], $ = n[14];
		var N;
		n[18] !== b || n[19] !== E || n[20] !== k ? (N = c.jsx(b, {
			xstyle: E,
			children: k
		}), n[18] = b, n[19] = E, n[20] = k, n[21] = N) : N = n[21];
		var M;
		n[22] !== N || n[23] !== I || n[24] !== T || n[25] !== D || n[26] !== x ? (M = c.jsx("div", babelHelpers.extends({}, I, {
			"data-testid": T,
			role: D,
			"aria-label": x,
			children: N
		})), n[22] = N, n[23] = I, n[24] = T, n[25] = D, n[26] = x, n[27] = M) : M = n[27];
		var w;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx("span", {
			className: "x1nxh6w3 x1v8dydz xd4r4e8",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[28] = w) : w = n[28];
		var A = !g, F;
		n[29] !== g ? (F = g ? c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 2,
			color: f.spinnerStroke
		}) : c.jsx(r("WDSIconIcArrowForward.react"), {}), n[29] = g, n[30] = F) : F = n[30];
		var O;
		n[31] !== g ? (O = g ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[31] = g, n[32] = O) : O = n[32];
		var B;
		n[33] !== C || n[34] !== g || n[35] !== A || n[36] !== F || n[37] !== O ? (B = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			animate: A,
			disabled: g,
			icon: F,
			onClick: C,
			testId: "shortcake_code_confirm_button",
			text: O,
			xstyle: f.buttonSpacing
		}), n[33] = C, n[34] = g, n[35] = A, n[36] = F, n[37] = O, n[38] = B) : B = n[38];
		var W;
		return n[39] !== v || n[40] !== S || n[41] !== R || n[42] !== L || n[43] !== M || n[44] !== B || n[45] !== $ ? (W = c.jsxs(v, {
			xstyle: $,
			testid: S,
			children: [
				R,
				L,
				M,
				w,
				B
			]
		}), n[39] = v, n[40] = S, n[41] = R, n[42] = L, n[43] = M, n[44] = B, n[45] = $, n[46] = W) : W = n[46], W;
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

__d("WAWebPasskeyCheckpoint.react", [
	"fbt",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebIntegrityChallengeUtils",
	"WAWebLandingHeader.react",
	"WAWebWdsPictoPasskeyIcon.react",
	"WDSIconIcArrowForward.react",
	"WDSIconIcLogout.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		wrapper: {
			position: "xixxii4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xn9wirt",
			height: "x1dr59a3",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xu7uy1i",
			paddingInlineEnd: "x1t7qo4d",
			boxSizing: "x9f619",
			zIndex: "xfo81ep",
			$$css: !0
		},
		wrapperWeb: {
			background: "xe4h88v",
			$$css: !0
		},
		wrapperWindows: {
			background: "xp8kixx",
			$$css: !0
		},
		headerContainer: {
			width: "xh8yej3",
			height: "xwzfr38",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(33), a = e.onLogout, i = e.onPasskeyComplete, l = e.onPasskeyError, c = e.passkeyChallenge, d = m("idle"), _ = d[0], f = d[1], g;
		t[0] !== i || t[1] !== l || t[2] !== c ? (g = function() {
			f("pending"), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebIntegrityChallengeUtils").performPasskeyAssertion(c);
					f("success"), yield i(e);
				} catch (e) {
					var t = e, n = t instanceof Error ? t.message : "Unknown error";
					f("idle"), l(n);
				}
			})();
		}, t[0] = i, t[1] = l, t[2] = c, t[3] = g) : g = t[3];
		var h = g, y = _ === "pending" || _ === "success", C;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (C = [p.wrapper, r("WAWebEnvironment").isWeb ? p.wrapperWeb : p.wrapperWindows], t[4] = C) : C = t[4];
		var b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: p.headerContainer,
			shrink: 0,
			children: u.jsx(r("WAWebLandingHeader.react"), {
				showAppDownloadButton: !1,
				surface: "lock-screen"
			})
		}), t[5] = b) : b = t[5];
		var v, S, R, L, E;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "xewp6mh x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn xb1i3fl xdounpk" }, S = { className: "x78zum5 x1q0g3np x6s0dn4 x1qgv0r9" }, R = { className: "x78zum5 xdt5ytf x1cy8zhl xfkdz6z x1iyjqo2" }, L = u.jsx("span", {
			className: "xngnso2 xo1l8bm x1mqxbix",
			children: s._(
				/*BTDS*/
				""
			)
		}), E = u.jsx("span", {
			className: "x1f6kntn xo1l8bm x1mqxbix x1fc57z9",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[6] = v, t[7] = S, t[8] = R, t[9] = L, t[10] = E) : (v = t[6], S = t[7], R = t[8], L = t[9], E = t[10]);
		var k;
		t[11] !== y ? (k = {
			0: { className: "x78zum5 x1q0g3np x6s0dn4 xfex06f xq4q3us x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z x1ypdohk xjb2p0i x1f6kntn" },
			1: { className: "x78zum5 x1q0g3np x6s0dn4 xfex06f xq4q3us x1mqxbix x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1g83kfv x3qq2k7 x2x8art x1qor8vf x16ovd2e x12xbjc7 x1phvje8 xcldk2z xjb2p0i x1f6kntn x197sbye x1h6gzvc" }
		}[!!y << 0], t[11] = y, t[12] = k) : k = t[12];
		var I, T;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), T = u.jsx(r("WDSIconIcArrowForward.react"), {
			height: 16,
			width: 16
		}), t[13] = I, t[14] = T) : (I = t[13], T = t[14]);
		var D;
		t[15] !== h || t[16] !== y || t[17] !== k ? (D = u.jsxs("div", babelHelpers.extends({}, R, { children: [
			L,
			E,
			u.jsxs("button", babelHelpers.extends({}, k, {
				disabled: y,
				onClick: h,
				type: "button",
				children: [I, T]
			}))
		] })), t[15] = h, t[16] = y, t[17] = k, t[18] = D) : D = t[18];
		var x;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x2lah0s",
			children: u.jsx(o("WAWebWdsPictoPasskeyIcon.react").WdsPictoPasskeyIcon, {
				height: 88,
				width: 88
			})
		}), t[19] = x) : x = t[19];
		var $;
		t[20] !== D ? ($ = u.jsx("div", babelHelpers.extends({}, v, { children: u.jsxs("div", babelHelpers.extends({}, S, { children: [D, x] })) })), t[20] = D, t[21] = $) : $ = t[21];
		var P;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x78zum5 x6s0dn4 xl56j7k xfex06f x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk xexx8yu xyri2b x18d9i69 x1c1uobl xqui205" }, t[22] = P) : P = t[22];
		var N, M;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx("span", {
			className: "x1f6kntn xk50ysn x1mqxbix x1bvjpef xlkh4gg xdounpk",
			children: s._(
				/*BTDS*/
				""
			)
		}), M = u.jsx(r("WDSIconIcLogout.react"), {
			height: 16,
			width: 16
		}), t[23] = N, t[24] = M) : (N = t[23], M = t[24]);
		var w;
		t[25] !== a ? (w = u.jsxs("button", babelHelpers.extends({}, P, {
			onClick: a,
			type: "button",
			children: [N, M]
		})), t[25] = a, t[26] = w) : w = t[26];
		var A;
		t[27] !== $ || t[28] !== w ? (A = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			grow: 1,
			shrink: 0,
			children: [$, w]
		}), t[27] = $, t[28] = w, t[29] = A) : A = t[29];
		var F;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: p.headerContainer }), t[30] = F) : F = t[30];
		var O;
		return t[31] !== A ? (O = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: C,
			children: [
				b,
				A,
				F
			]
		}), t[31] = A, t[32] = O) : O = t[32], O;
	}
	l.default = _;
}), 226);

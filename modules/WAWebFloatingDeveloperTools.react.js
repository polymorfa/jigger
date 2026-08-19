__d("WAWebFloatingDeveloperTools.react", [
	"WAWebActionMenuItem.react",
	"WAWebClock",
	"WAWebCommandPalette.react",
	"WAWebDebug",
	"WAWebDebugWWWSettings.react",
	"WAWebDevIcon.react",
	"WAWebDeveloperMenuDeveloperFlowLoadable.react",
	"WAWebDeveloperMenuDeveloperMenuIcons.react",
	"WAWebDeveloperMenuPromotedDebugCommands.react",
	"WAWebDeveloperToolNub.react",
	"WAWebDeveloperToolsDBViewerNub.react",
	"WAWebDeveloperToolsDevmateCanvasNub.react",
	"WAWebDeveloperToolsHatchPayloadsNub.react",
	"WAWebDeveloperToolsModelInspectorNub.react",
	"WAWebDeveloperToolsSignalSessionDiffNub.react",
	"WAWebDeveloperToolsTEEPlaygroundNub.react",
	"WAWebDraggableItemIcon.react",
	"WAWebDrawerManager",
	"WAWebDropdownV2.react",
	"WAWebLocalStorage",
	"WAWebLocaleCommandPalettePlugin",
	"WAWebMenuItems.react",
	"WAWebModalManager",
	"WAWebReactScan",
	"WAWebRerenderAppMenuItem.react",
	"WAWebSearchWorldIcon.react",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState, m = { paddingInline5: {
		paddingInlineStart: "xaso8d8",
		paddingInlineEnd: "x1gabggj",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, p = { dragBtn: {
		width: "xq14iec",
		display: "x78zum5",
		justifyContent: "xl56j7k",
		alignItems: "x6s0dn4",
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		cursor: "x1jm3nie",
		$$css: !0
	} };
	function _() {
		var e = o("react-compiler-runtime").c(24), t = d(!1), n = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return a(!0);
		}, e[0] = i) : i = e[0];
		var l = i, u;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (u = function() {
			return a(!1);
		}, e[1] = u) : u = e[1];
		var _ = u, f = c(null), g = d(!1), h = g[0], v = g[1], S;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			if (f.current != null) {
				var e = f.current.offsetHeight, n = t.clientY;
				n + e > window.innerHeight || n < 25 || (f.current.style.transform = "translateY(" + (n - e + 25) + "px)");
			}
		}, e[2] = S) : S = e[2];
		var R = S, L;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			v(!0), window.addEventListener("mousemove", R);
		}, e[3] = L) : L = e[3];
		var E = L, k;
		if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
			var I = function() {
				v(!1), window.removeEventListener("mousemove", R);
			}, T = function() {
				I(), window.removeEventListener("mouseup", T);
			};
			k = function() {
				E(), window.addEventListener("mouseup", T);
			}, e[4] = k;
		} else k = e[4];
		var D = k, x = c(null), $;
		e[5] !== h || e[6] !== n ? ($ = {
			0: { className: "xixxii4 xceh6e4 xzi7r1p x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x1od0jb8 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8" },
			2: { className: "xixxii4 xceh6e4 x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x1od0jb8 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x1n4l27d" },
			1: { className: "xixxii4 xceh6e4 xzi7r1p x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x4wrhlh" },
			3: { className: "xixxii4 xceh6e4 x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x1n4l27d x4wrhlh" }
		}[!!n << 1 | !!h << 0], e[5] = h, e[6] = n, e[7] = $) : $ = e[7];
		var P;
		e[8] !== h || e[9] !== n ? (P = (n || h) && s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: [
				p.dragBtn,
				m.paddingInline5,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer4
			],
			onMouseDown: D,
			children: s.jsx(o("WAWebDraggableItemIcon.react").DraggableItemIcon, {})
		}), e[8] = h, e[9] = n, e[10] = P) : P = e[10];
		var N, M, w, A, F;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (w = s.jsx("div", {
			ref: x,
			children: s.jsx(r("WAWebDeveloperToolNub.react"), {
				testID: "dev-menu-nub",
				icon: s.jsx(o("WAWebDevIcon.react").DevIcon, { height: 22 }),
				title: "Developer Menu",
				onClick: C
			})
		}), A = s.jsx(r("WAWebDeveloperToolsModelInspectorNub.react"), {}), F = s.jsx(o("WAWebDeveloperToolsDBViewerNub.react").DBViewerNub, {}), N = s.jsx(y, { nubRef: x }), M = s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "www-settings-nub",
			icon: "🚀",
			title: "Canonical",
			onClick: b
		}), e[11] = N, e[12] = M, e[13] = w, e[14] = A, e[15] = F) : (N = e[11], M = e[12], w = e[13], A = e[14], F = e[15]);
		var O, B, W, q, U;
		e[16] === Symbol.for("react.memo_cache_sentinel") ? (O = s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "react-scan-menu-nub",
			icon: s.jsx(o("WAWebSearchWorldIcon.react").SearchWorldIcon, { height: 22 }),
			title: "React Scan",
			onClick: o("WAWebReactScan").initReactScan
		}), B = s.jsx(r("WAWebDeveloperToolsDevmateCanvasNub.react"), {}), W = s.jsx(r("WAWebDeveloperToolsSignalSessionDiffNub.react"), {}), q = s.jsx(r("WAWebDeveloperToolsTEEPlaygroundNub.react"), {}), U = s.jsx(r("WAWebDeveloperToolsHatchPayloadsNub.react"), {}), e[16] = O, e[17] = B, e[18] = W, e[19] = q, e[20] = U) : (O = e[16], B = e[17], W = e[18], q = e[19], U = e[20]);
		var V;
		return e[21] !== $ || e[22] !== P ? (V = s.jsxs("aside", babelHelpers.extends({ ref: f }, $, {
			onMouseEnter: l,
			onMouseLeave: _,
			children: [
				P,
				w,
				A,
				F,
				N,
				M,
				O,
				B,
				W,
				q,
				U
			]
		})), e[21] = $, e[22] = P, e[23] = V) : V = e[23], V;
	}
	function f() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem("last_fast_refresh"), e[0] = t) : t = e[0];
		var n = parseFloat(t), a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = n != null && !Number.isNaN(n) && s.jsxs(o("WAWebText.react").WAWebTextSmall, {
			padding: [
				16,
				8,
				8,
				8
			],
			title: new Date(n).toLocaleString(),
			children: [
				"Last fast refresh:",
				" ",
				o("WAWebClock").Clock.timePassedFromNowMoment(n / 1e3, { omitSuffix: !1 })
			]
		}), e[1] = a) : a = e[1], a;
	}
	function g() {
		var e = o("react-compiler-runtime").c(2), t = h, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").MarkTranslationsIcon, {}), e[0] = n) : n = e[0];
		var a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
			optionId: "locale",
			detailLeft: n,
			primary: "Change locale",
			primaryRight: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: r("WAWebDebug").l10n.getLocale() }),
			onSelect: t
		}), e[1] = a) : a = e[1], a;
	}
	function h() {
		o("WAWebCommandPalette.react").openCommandPaletteV2Modal({ defaultPlugin: o("WAWebLocaleCommandPalettePlugin").LocaleCommandPalettePlugin.plugin });
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(8), n = e.nubRef, a, i, l, u, c, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Quick Actions" }), i = s.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").RTL, {}), l = s.jsx(g, {}), u = s.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").DarkMode, {}), c = s.jsx(r("WAWebRerenderAppMenuItem.react"), {}), d = s.jsx(f, {}), t[0] = a, t[1] = i, t[2] = l, t[3] = u, t[4] = c, t[5] = d) : (a = t[0], i = t[1], l = t[2], u = t[3], c = t[4], d = t[5]);
		var m;
		return t[6] !== n ? (m = s.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
			openingDelay: 500,
			buffer: 8,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
			position: o("WAWebDropdownV2.react").PopoverPosition.Start,
			minWidth: 240,
			initHandling: "hover-popover",
			target: n,
			children: [
				a,
				i,
				l,
				u,
				c,
				d
			]
		}), t[6] = n, t[7] = m) : m = t[7], m;
	}
	function C() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(r("WAWebDeveloperMenuDeveloperFlowLoadable.react"), { onCancel: o("WAWebDrawerManager").closeDrawerLeft }));
	}
	function b() {
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebDebugWWWSettings.react"), {}));
	}
	l.default = _;
}), 98);

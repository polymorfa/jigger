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
	"react"
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
		var e = d(!1), t = e[0], n = e[1], a = function() {
			return n(!0);
		}, i = function() {
			return n(!1);
		}, l = c(null), u = d(!1), _ = u[0], f = u[1], g = function(t) {
			if (l.current != null) {
				var e = l.current.offsetHeight, n = t.clientY, r = 25;
				n + e > window.innerHeight || n < r || (l.current.style.transform = "translateY(" + (n - e + r) + "px)");
			}
		}, b = function() {
			f(!0), window.addEventListener("mousemove", g);
		}, v = function() {
			f(!1), window.removeEventListener("mousemove", g);
		}, S = function() {
			v(), window.removeEventListener("mouseup", S);
		}, R = function() {
			b(), window.addEventListener("mouseup", S);
		}, L = c(null);
		return s.jsxs("aside", babelHelpers.extends({ ref: l }, {
			0: { className: "xixxii4 xceh6e4 xzi7r1p x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x1od0jb8 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8" },
			2: { className: "xixxii4 xceh6e4 x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x1od0jb8 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x1n4l27d" },
			1: { className: "xixxii4 xceh6e4 xzi7r1p x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x4wrhlh" },
			3: { className: "xixxii4 xceh6e4 x16uhe5s x78zum5 xdt5ytf x6ikm8r x10wlt62 x17m9png x91sizk x1vva9xg x1jfkl46 x83ex68 x1wpep30 x123j3cw x1gabggj xs9asl8 xaso8d8 x1n4l27d x4wrhlh" }
		}[!!t << 1 | !!_ << 0], {
			onMouseEnter: a,
			onMouseLeave: i,
			children: [
				(t || _) && s.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: [
						p.dragBtn,
						m.paddingInline5,
						o("WDSPaddings.stylex").wdsPaddings.paddingVer4
					],
					onMouseDown: R,
					children: s.jsx(o("WAWebDraggableItemIcon.react").DraggableItemIcon, {})
				}),
				s.jsx("div", {
					ref: L,
					children: s.jsx(r("WAWebDeveloperToolNub.react"), {
						testID: "dev-menu-nub",
						icon: s.jsx(o("WAWebDevIcon.react").DevIcon, { height: 22 }),
						title: "Developer Menu",
						onClick: y
					})
				}),
				s.jsx(r("WAWebDeveloperToolsModelInspectorNub.react"), {}),
				s.jsx(o("WAWebDeveloperToolsDBViewerNub.react").DBViewerNub, {}),
				s.jsx(h, { nubRef: L }),
				s.jsx(r("WAWebDeveloperToolNub.react"), {
					testID: "www-settings-nub",
					icon: "🚀",
					title: "Canonical",
					onClick: C
				}),
				s.jsx(r("WAWebDeveloperToolNub.react"), {
					testID: "react-scan-menu-nub",
					icon: s.jsx(o("WAWebSearchWorldIcon.react").SearchWorldIcon, { height: 22 }),
					title: "React Scan",
					onClick: o("WAWebReactScan").initReactScan
				}),
				s.jsx(r("WAWebDeveloperToolsDevmateCanvasNub.react"), {}),
				s.jsx(r("WAWebDeveloperToolsSignalSessionDiffNub.react"), {}),
				s.jsx(r("WAWebDeveloperToolsTEEPlaygroundNub.react"), {}),
				s.jsx(r("WAWebDeveloperToolsHatchPayloadsNub.react"), {})
			]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = parseFloat(r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem("last_fast_refresh"));
		return e != null && !Number.isNaN(e) && s.jsxs(o("WAWebText.react").WAWebTextSmall, {
			padding: [
				16,
				8,
				8,
				8
			],
			title: new Date(e).toLocaleString(),
			children: [
				"Last fast refresh:",
				" ",
				o("WAWebClock").Clock.timePassedFromNowMoment(e / 1e3, { omitSuffix: !1 })
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		var e = function() {
			o("WAWebCommandPalette.react").openCommandPaletteV2Modal({ defaultPlugin: o("WAWebLocaleCommandPalettePlugin").LocaleCommandPalettePlugin.plugin });
		};
		return s.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
			optionId: "locale",
			detailLeft: s.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").MarkTranslationsIcon, {}),
			primary: "Change locale",
			primaryRight: s.jsx(o("WAWebText.react").WAWebTextMuted, { children: r("WAWebDebug").l10n.getLocale() }),
			onSelect: e
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.nubRef;
		return s.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
			openingDelay: 500,
			buffer: 8,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
			position: o("WAWebDropdownV2.react").PopoverPosition.Start,
			minWidth: 240,
			initHandling: "hover-popover",
			target: t,
			children: [
				s.jsx(o("WAWebMenuItems.react").MenuHeading, { children: "Quick Actions" }),
				s.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").RTL, {}),
				s.jsx(g, {}),
				s.jsx(o("WAWebDeveloperMenuPromotedDebugCommands.react").DarkMode, {}),
				s.jsx(r("WAWebRerenderAppMenuItem.react"), {}),
				s.jsx(f, {})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(r("WAWebDeveloperMenuDeveloperFlowLoadable.react"), { onCancel: o("WAWebDrawerManager").closeDrawerLeft }));
	}
	function C() {
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebDebugWWWSettings.react"), {}));
	}
	l.default = _;
}), 98);

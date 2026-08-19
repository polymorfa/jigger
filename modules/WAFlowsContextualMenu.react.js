__d("WAFlowsContextualMenu.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLocalization",
	"WAFlowsSelectOptionList.react",
	"WAFlowsShoppingNavigationUtils",
	"WAFlowsStateProvider.react",
	"WAFlowsWELJActionCreators",
	"WDSNativeFocusTrap.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useImperativeHandle, _ = u.useRef, f = u.useState, g = "x1xkg3e2-B", h = "x19sgl0g-B", y = {
		contextualMenu: {
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			boxShadow: "xh019qd",
			borderStartStartRadius: "xi5386f",
			borderStartEndRadius: "x1rt123f",
			borderEndEndRadius: "x1mwwvk4",
			borderEndStartRadius: "x1co322k",
			width: "xl6bkxh",
			top: "x1nat15",
			$$css: !0
		},
		contextualMenuRefresh: {
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			boxShadow: "x15xraoi",
			borderStartStartRadius: "xi5386f",
			borderStartEndRadius: "x1rt123f",
			borderEndEndRadius: "x1mwwvk4",
			borderEndStartRadius: "x1co322k",
			width: "xl6bkxh",
			top: "x1nat15",
			backdropFilter: "xlnqpxj",
			$$css: !0
		},
		contextualMenuPositionLTR: {
			right: "xgvigy7",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		contextualMenuPositionRTL: {
			left: "x1jnvtdb",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		}
	}, C = {}, b = {
		contextualMenuULStyleOverride: {
			borderStartStartRadius: "xi5386f",
			borderStartEndRadius: "x1rt123f",
			borderEndEndRadius: "x1mwwvk4",
			borderEndStartRadius: "x1co322k",
			$$css: !0
		},
		contextualMenu: {
			paddingTop: "x1q57ora",
			paddingBottom: "xsaxbkt",
			backgroundColor: "x16w0wmm",
			$$css: !0
		}
	}, v = {
		contextualMenuULStyleOverride: {
			borderStartStartRadius: "xi5386f",
			borderStartEndRadius: "x1rt123f",
			borderEndEndRadius: "x1mwwvk4",
			borderEndStartRadius: "x1co322k",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		contextualMenu: {
			backgroundColor: "x16w0wmm",
			$$css: !0
		}
	};
	function S() {
		var e = o("WAFlowsEnvContext.react").useWAFlowsEnv(), t = e.env, n = t.hostPlatform === "web_tooling" ? { enabled: !1 } : void 0;
		return [{
			id: "HELP",
			title: o("WAFlowsLocalization").getNavBarContextualMenuHelp().toString(),
			iconID: "waf_info_icon"
		}].concat(o("WAFlowsShoppingNavigationUtils").useFlowsShoppingContextualMenuItems(), [babelHelpers.extends({
			id: "REPORT",
			title: o("WAFlowsLocalization").getNavBarContextualMenuReport().toString(),
			iconID: "waf_report_icon"
		}, n)]);
	}
	function R(e) {
		var t = e.isOpen, n = e.menuRef, a = e.onClose, i = e.onOptionSelect, l = e.onVisibilityChange, u = _(null);
		p(n, function() {
			return u.current;
		});
		var g = f(!1), h = g[0], C = g[1], b = o("WAFlowsEnvContext.react").useWAFlowsEnv(), v = b.env, R = S(), E = v.platform === "ios", k = L(v.platform), I = o("WAFlowsStateProvider.react").useWAFlowsState(), T = I.internal, D = T.isNavBarContextMenuVisible, x = D === void 0 ? !1 : D, $ = T.status, P = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext);
		m(function() {
			var e = u.current;
			e != null && (e.focus(), e.addEventListener("animationend", function() {
				!t && C(!1);
			}), e.addEventListener("animationstart", function() {
				C(!0);
			}));
		}, [t]);
		var N = c(function(e) {
			$ === o("WAFlowsStateProvider.react").flowJSONLoadState.READY && P(o("WAFlowsWELJActionCreators").createToggleNavBarContextMenuAction(e));
		}, [P, $]);
		return m(function() {
			!x && l(x);
		}, [l, x]), m(function() {
			N(t);
		}, [t, N]), !t && !h ? null : s.jsx("div", babelHelpers.extends({
			ref: u,
			"aria-modal": "true"
		}, {
			0: { className: "x1n2onr6 xhtitgo xsz6t5k x10e4vud xy9na11 x1hc1fzr x6my1t9 x1y7gdqz" },
			1: { className: "x1n2onr6 xhtitgo xsz6t5k x10e4vud xy9na11 x1hc1fzr x6my1t9 x1wpzwpe" }
		}[!!t << 0], { children: s.jsx(r("WDSNativeFocusTrap.react"), { children: s.jsx(r("WAFlowsSelectOptionList.react"), {
			dataSource: R,
			name: "contextual_menu",
			onChange: function(t) {
				i(t), a();
			},
			showSelectedTickIcon: !1,
			xstyle: [
				E ? y.contextualMenuRefresh : y.contextualMenu,
				k.contextualMenu,
				v.isRTL ? y.contextualMenuPositionRTL : y.contextualMenuPositionLTR
			],
			ulXstyle: [k.contextualMenuULStyleOverride],
			isContextualMenu: !0
		}) }) }));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = {
			android: b,
			ios: C,
			wa_web: v
		};
		return t[e];
	}
	l.WAFContextualMenu = R;
}), 98);

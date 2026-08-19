__d("WAFlowsOverlay.react", [
	"WAFlowsContainerElementIDs",
	"WAFlowsEnvContext.react",
	"WAFlowsPanelAnimation.react",
	"WAFlowsReactPortal.react",
	"WAFlowsScrollable.react",
	"WAFlowsStateProvider.react",
	"WAFlowsWELJActionCreators",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useState, f = {
		childrenContainer: {
			backgroundColor: "xs1q97v",
			$$css: !0
		},
		overlay: {
			"::after_backgroundColor": "x27z2yp",
			$$css: !0
		}
	}, g = {
		childrenContainer: {
			backgroundColor: "xw6alqk",
			$$css: !0
		},
		overlay: {
			"::after_backgroundColor": "x1ogilay",
			$$css: !0
		}
	}, h = {
		childrenContainer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		noPaddingChildrenContainer: {
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		overlay: {
			"::after_backgroundColor": "x1pen64o",
			$$css: !0
		}
	}, y = {
		overlay: {
			position: "x10l6tqk",
			height: "x5yr21d",
			top: "x13vifvy",
			right: "x3m8u43",
			bottom: "x1ey2m1c",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			zIndex: "x1vjfegm",
			animationDuration: "xy9na11",
			animationTimingFunction: "xsz6t5k",
			animationFillMode: "x10e4vud",
			willChange: "x1so62im",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "xglvzh1",
			"::after_bottom": "x1vktuzn",
			"::after_left": "x17cx49",
			"::after_right": "xnbfe2x",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_zIndex": "xi4xitw",
			$$css: !0
		},
		childrenContainer: {
			minHeight: "x1us19tq",
			boxSizing: "x9f619",
			flexGrow: "x1iyjqo2",
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "x193vv82",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x1d8cgvq",
			$$css: !0
		},
		flexColumn: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		flexGrow: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.children, a = t.isPanelVisible, i = t.noPadding, l = i === void 0 ? !1 : i, s = t.onVisibilityChange, c = o("WAFlowsStateProvider.react").useWAFlowsState(), f = c.internal.isOverlayVisible, g = f === void 0 ? !1 : f, h = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), C = o("WAFlowsEnvContext.react").useWAFlowsEnv(), v = C.env, S = _(!1), R = S[0], L = S[1], E = b(v.platform), k = d(function(e) {
			h(o("WAFlowsWELJActionCreators").createToggleOverlayAction(e));
		}, [h]);
		return p(function() {
			!g && s(g);
		}, [s, g]), p(function() {
			k(a);
		}, [a, k]), !a && !R ? null : u.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: "wae-portal-overlay",
			children: u.jsx(r("WAFlowsPanelAnimation.react"), {
				fullPage: !0,
				isPanelVisible: a,
				xstyle: [
					y.flexColumn,
					y.flexGrow,
					y.overlay,
					E.overlay
				],
				onAnimatingChange: L,
				onClose: function() {
					return s(!1);
				},
				children: u.jsx(r("WAFlowsScrollable.react"), {
					nativeDraggingControl: !0,
					nativeDraggingOnOverscroll: !0,
					id: r("WAFlowsContainerElementIDs").OVERLAY_CONTENT_CONTAINER_ID,
					isScrollDisabled: !g,
					children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.childrenContainer, E.childrenContainer, l && E.noPaddingChildrenContainer), { children: n }))
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = {
			android: g,
			ios: f,
			wa_web: h
		};
		return t[e];
	}
	l.default = C;
}), 98);

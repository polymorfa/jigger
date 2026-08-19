__d("WAFlowsTemplate.react", [
	"invariant",
	"ReactRouterDOM",
	"WAFlowsBranding.react",
	"WAFlowsContainerElementIDs",
	"WAFlowsDraftBanner.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsGlobalLoader.react",
	"WAFlowsHandleNavigation",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLayoutTemplate.react",
	"WAFlowsNativeDraggingController",
	"WAFlowsNativeState",
	"WAFlowsNavbar.react",
	"WAFlowsProgressIndicatorUtils",
	"WAFlowsReactPortal.react",
	"WAFlowsRemoveTrailingCommas",
	"WAFlowsResponseHandler",
	"WAFlowsScreenAnimation.react",
	"WAFlowsScreenError.react",
	"WAFlowsScreenTemplate.react",
	"WAFlowsScrollable.react",
	"WAFlowsStateProvider.react",
	"WAFlowsSwipeable.react",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"manageScreenAnimation",
	"react",
	"resetScreenAnimation",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState;
	function h(e, t, n) {
		var r = e.animationRef, a = e.nodeRef, i = e.screenErrorRef, l = i.current.exists;
		if (t && !l) o("resetScreenAnimation").resetScreenAnimation(a.current);
		else if (r.current.enabled || n === !0) {
			r.current.enabled = !0;
			var s = n === !0 ? "exit" : "enter", u = n === !0 ? "push" : "pop";
			o("manageScreenAnimation").manageScreenAnimation(a.current, s, u);
		}
		i.current.exists = t;
	}
	var y = {
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			height: "x5yr21d",
			position: "x1n2onr6",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		screen: {
			display: "x78zum5",
			top: "x13vifvy",
			bottom: "x1ey2m1c",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "xh8yej3",
			boxSizing: "x9f619",
			boxShadow: "x1ib143r",
			animationTimingFunction: "xsz6t5k",
			animationFillMode: "x10e4vud",
			animationDuration: "xy9na11",
			willChange: "x1so62im",
			overscrollBehavior: "x8du1vd",
			$$css: !0
		},
		screenResponse: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		screenContent: {
			width: "xh8yej3",
			$$css: !0
		},
		screenTemplatePadding: {
			paddingTop: "xhd15vd",
			paddingInlineEnd: "x193vv82",
			paddingInlineStart: "x1d8cgvq",
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		screenErrorPadding: {
			paddingTop: "xhd15vd",
			paddingInlineEnd: "x193vv82",
			paddingBottom: "xdhoqf5",
			paddingInlineStart: "x1d8cgvq",
			$$css: !0
		},
		draftBannerSticky: {
			paddingTop: "x1q57ora",
			paddingInlineStart: "x1d8cgvq",
			paddingInlineEnd: "x193vv82",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		screenTemplatePortalTarget: {
			position: "x10l6tqk",
			top: "x13vifvy",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		}
	}, C = "xekv6nw-B", b = {
		screenDefault: {
			backgroundColor: "xs1q97v",
			$$css: !0
		},
		screen: {
			position: "x10l6tqk",
			$$css: !0
		},
		loader: {
			paddingTop: "x1y1aw1k",
			animationName: "x127lhb5",
			animationDuration: "xxkxylk",
			animationFillMode: "x10e4vud",
			$$css: !0
		}
	}, v = {
		screenDefault: {
			backgroundColor: "xw6alqk",
			$$css: !0
		},
		screen: {
			position: "x10l6tqk",
			$$css: !0
		},
		loader: {
			marginTop: "xafmxuu",
			$$css: !0
		}
	}, S = {
		screenDefault: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		screen: {
			position: "x10l6tqk",
			$$css: !0
		},
		loader: {
			marginTop: "xafmxuu",
			$$css: !0
		}
	};
	function R(t) {
		var n, a = t.draft, i = t.flowJSON, l = g("100%"), s = l[0], u = l[1], d = _(function() {
			return JSON.parse(r("WAFlowsRemoveTrailingCommas")(i));
		}, [i]), f = o("WAFlowsStateProvider.react").useWAFlowsState(), h = f.internal, C = h.screenError, b = h.status, v = o("WAFlowsEnvContext.react").useWAFlowsEnv(), S = v.env, R = o("WAFlowsStateProvider.react").useWAFlowsMeta().getIsShoppingFlow(), L = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), I = L.flowInitData, T = I[0], D = (n = T == null ? void 0 : T.environment.is_flow_interactive) != null ? n : !1, x = o("WAFlowsStateProvider.react").useWAFlowsMeta().isCreatedByLeadGenAI(), $ = o("WAFlowsProgressIndicatorUtils").isProgressIndicatorSupported(R, D), P = m(o("WAFlowsNativeState").NativeContext), N = P.keyboardState.change, M = k(S.platform), w = d.screens.map(function(e) {
			return c.jsx(o("ReactRouterDOM").Route, {
				exact: !0,
				path: "/" + e.id.toLowerCase(),
				render: function() {
					return c.jsxs(c.Fragment, { children: [c.jsx(E, {
						screen: e,
						draft: a,
						xstyle: M.screen
					}), c.jsx(o("WAFlowsReactPortal.react").WAFlowsPortalTarget, { id: "wae-portal-overlay" })] });
				}
			}, e.id);
		}).concat(c.jsx(o("ReactRouterDOM").Route, {
			path: "/",
			children: C != null && String(C).length > 0 ? c.jsx(r("WAFlowsScreenError.react"), {
				message: C.message,
				retryDataExchangeAction: C.retryDataExchangeAction,
				error: C.error
			}) : null
		}, "empty_screen")), A = a && S.hostPlatform !== "web_tooling" && !$ ? c.jsx(r("WAFlowsDraftBanner.react"), { xstyle: y.draftBannerSticky }) : null;
		return p(function() {
			function e(e) {
				var t = Array.from(document.querySelectorAll("[data-scrollable]")), n = e.target, r = n instanceof Node && t.some(function(e) {
					return e.contains(n);
				});
				r || e.preventDefault();
			}
			function t() {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}
			var n = { passive: !1 };
			return window.addEventListener("touchmove", e, n), S.platform === "ios" && window.addEventListener("touchend", t, n), function() {
				window.removeEventListener("touchmove", e), S.platform === "ios" && window.removeEventListener("touchend", t, n);
			};
		}, [S.platform]), p(function() {
			u(N === "didShow" ? window.innerHeight : "100%");
		}, [N]), c.jsxs("div", {
			className: (e || (e = r("stylex")))(y.root, M.screenDefault),
			style: { height: s },
			children: [
				c.jsx(r("WAFlowsNavbar.react"), {
					isLoading: b === o("WAFlowsStateProvider.react").flowJSONLoadState.LOADING,
					isLeadGenAIFlow: x,
					isShoppingFlow: R
				}, "navbar"),
				A,
				b === o("WAFlowsStateProvider.react").flowJSONLoadState.INITIALIZING ? c.jsx(r("WAFlowsGlobalLoader.react"), { xstyle: M.loader }, "loader") : c.jsx(r("WAFlowsScreenAnimation.react"), { children: w }),
				c.jsx(o("WAFlowsReactPortal.react").WAFlowsPortalTarget, { id: r("WAFlowsContainerElementIDs").FOOTER_CONTAINER_ID }),
				c.jsx(r("WAFlowsBranding.react"), {}),
				c.jsx(o("WAFlowsReactPortal.react").WAFlowsPortalTarget, { id: r("WAFlowsContainerElementIDs").DATEPICKER_WHEEL_PORTAL_CONTAINER_ID })
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e, t) {
		var n, a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env.platform, l = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABProps(), u = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().invoke;
		p(function() {
			var n, o;
			if (!(i !== "android" && ((l == null || (n = l.extensions_webview_full_screen_drag_dismiss_enabled) == null ? void 0 : n.boolValue) == null || (l == null || (o = l.extensions_webview_full_screen_drag_dismiss_enabled) == null ? void 0 : o.boolValue) === !1))) {
				var a = { passive: !0 }, c = new MutationObserver(function(e) {
					var n = e[0];
					if (n.addedNodes.length > 0) {
						var o = n.target;
						if (o instanceof HTMLElement && t.has(o.id)) {
							var i = t.get(o.id);
							i != null || s(0, 75897);
							var l = document.getElementById(i);
							l == null || l.removeEventListener("touchstart", function() {
								return r("WAFlowsNativeDraggingController").disableNativeDragging(u);
							}), l == null || l.addEventListener("touchstart", function() {
								return r("WAFlowsNativeDraggingController").disableNativeDragging(u);
							}, a);
						}
					}
				});
				for (var d of t.keys()) {
					var m = document.getElementById(d);
					m != null && c.observe(m, {
						childList: !0,
						subtree: !0
					});
				}
				var p = e.map(function(e) {
					var t = e.draggbable, n = e.id, o = document.getElementById(n), a = function(t) {
						t.stopPropagation(), t.preventDefault(), r("WAFlowsNativeDraggingController").enableNativeDragging(u);
					}, i = function(t) {
						t.stopPropagation(), t.preventDefault(), r("WAFlowsNativeDraggingController").disableNativeDragging(u);
					};
					return [o, t ? a : i];
				});
				return p.forEach(function(e) {
					var t = e[0], n = e[1];
					t == null || t.addEventListener("touchstart", n, a);
				}), function() {
					c.disconnect(), p.forEach(function(e) {
						var t = e[0], n = e[1];
						t == null || t.removeEventListener("touchstart", n);
					});
				};
			}
		}, [
			l == null || (n = l.extensions_webview_full_screen_drag_dismiss_enabled) == null ? void 0 : n.boolValue,
			e,
			t,
			u,
			i
		]);
	}
	function E(e) {
		var t, n = e.draft, a = e.screen, i = e.xstyle, l = o("WAFlowsStateProvider.react").useWAFlowsState(), u = l.internal, d = u.isOverlayVisible, g = u.screenError, C = u.screenHistory, b = m(o("WAFlowsStateProvider.react").FlowMetaContext), v = m(o("WAFlowsStateProvider.react").FlowStateDispatchContext), S = o("WAFlowsEnvContext.react").useWAFlowsEnv(), R = S.env, E = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), I = E.actionOverrides, T = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), D = T.flowInstanceId, x = o("ReactRouterDOM").useHistory(), $ = f(), P = f({ enabled: !1 }), N = f({ exists: !1 }), M = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABProps(), w = (b == null ? void 0 : b.getIsShoppingFlow()) !== !0;
		p(function() {
			h({
				nodeRef: $,
				animationRef: P,
				screenErrorRef: N
			}, !!g, d);
		}, [d, g]);
		var A = function() {
			if (R.hostPlatform === "ios") {
				var e = C.length < 2;
				!e && d !== !0 && (b != null || s(0, 74025), r("WAFlowsHandleNavigation")(v, x, b, C, R, I));
			}
		};
		L(_(function() {
			var e;
			return [
				{
					id: D((e = r("WAFlowsContainerElementIDs")).NAVBAR_CONTAINER_ID),
					draggbable: !0
				},
				{
					id: D(e.FOOTER_WRAPPER_CONTAINER_ID),
					draggbable: !0
				},
				{
					id: D(e.BRANDING_CONTAINER_ID),
					draggbable: !0
				},
				{
					id: D(e.DRAFT_MODE_CONTAINER_ID),
					draggbable: !0
				}
			];
		}, [D]), _(function() {
			return new Map([[D(r("WAFlowsContainerElementIDs").DATEPICKER_WHEEL_PORTAL_CONTAINER_ID), D(r("WAFlowsContainerElementIDs").DATEPICKER_WHEELS_WRAPPER_ID)]]);
		}, [D]));
		var F = g != null && String(g).length > 0, O = n && R.hostPlatform !== "web_tooling" && w ? c.jsx(r("WAFlowsDraftBanner.react"), {}) : null, B = E.flowInitData, W = B[0], q = o("WAFlowsResponseHandler").isResponseFlow(W) && (M == null ? void 0 : M.flows_response_flat_list_enabled.boolValue) === !0, U = k(R.platform);
		return c.jsx(r("WAFlowsScrollable.react"), {
			nativeDraggingControl: !0,
			nativeDraggingOnOverscroll: !0,
			id: r("WAFlowsContainerElementIDs").SCREEN_CONTENT_CONTAINER_ID,
			xstyle: [
				y.screen,
				F ? y.screenErrorPadding : y.screenTemplatePadding,
				q ? y.screenResponse : U.screenDefault,
				i
			],
			ref: $,
			"aria-hidden": d,
			children: c.jsx(r("WAFlowsSwipeable.react"), {
				onSwipeRight: A,
				xstyle: y.screenContent,
				children: g != null && F ? c.jsxs("div", {
					className: "x5yr21d x78zum5 xdt5ytf",
					children: [O, c.jsx("div", {
						className: "x1iyjqo2",
						children: c.jsx(r("WAFlowsScreenError.react"), {
							message: g.message,
							retryDataExchangeAction: g.retryDataExchangeAction,
							error: g.error
						})
					})]
				}) : c.jsx(r("WAFlowsScreenTemplate.react"), {
					id: a.id,
					isOverlayVisible: d === !0,
					children: c.jsxs(c.Fragment, { children: [
						O,
						c.jsx(r("WAFlowsLayoutTemplate.react"), {
							screenID: a.id,
							layout: (t = a.layout) != null ? t : null
						}),
						c.jsx(o("WAFlowsReactPortal.react").WAFlowsPortalTarget, {
							id: "wae-portal-screen-template",
							xstyle: y.screenTemplatePortalTarget
						})
					] })
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = {
			android: v,
			ios: b,
			wa_web: S
		};
		return t[e];
	}
	l.default = R;
}), 98);

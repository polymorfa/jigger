__d("WAFlowsProgressIndicator.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLocalization",
	"WAFlowsProgressIndicatorUtils",
	"WAFlowsScreenUtils",
	"WAFlowsStateProvider.react",
	"WDSFlex.stylex",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useRef, _ = c.useState, f = 3, g = {
		android: 2.5,
		wa_web: 2.5,
		ios: 3
	}, h = {
		android: 1,
		wa_web: 1,
		ios: -2
	}, y = {
		transitionProperty: "transform",
		transitionDuration: "var(--waf-wds-animation-duration)",
		transitionTimingFunction: "ease-in-out",
		willChange: "transform"
	}, C = {
		root: {
			position: "x1n2onr6",
			height: "xmll18r",
			boxSizing: "x9f619",
			marginInlineStart: "x1bhhk8w",
			marginInlineEnd: "x1tr8zrs",
			$$css: !0
		},
		progress: {
			height: "xqu0tyb",
			zIndex: "x1vjfegm",
			width: "xh8yej3",
			position: "x10l6tqk",
			$$css: !0
		},
		progressDone: {
			transitionProperty: "x11xpdln",
			transitionDuration: "xq7dr57",
			transitionTimingFunction: "xz4gly6",
			willChange: "x1so62im",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		progressRemaining: {
			transitionProperty: "x11xpdln",
			transitionDuration: "xq7dr57",
			transitionTimingFunction: "xz4gly6",
			willChange: "x1so62im",
			zIndex: "x1ja2u2z",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		progressAlignLeft: {
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			transformOrigin: "x19w6rv",
			$$css: !0
		},
		progressAlignRight: {
			right: "x3m8u43",
			insetInlineStart: null,
			insetInlineEnd: null,
			transformOrigin: "xee5nap",
			$$css: !0
		}
	}, b = {
		progressDone: {
			minWidth: "xrwsje7",
			$$css: !0
		},
		progressRemaining: {
			marginLeft: "x1uoezyy",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	}, v = { progressDone: {
		minWidth: "x1p574vv",
		$$css: !0
	} }, S = 1.2;
	function R() {
		var t = _(0), n = t[0], a = t[1], i = p({
			transitionDuration: 0,
			isTransitioning: !1,
			transitionQueue: []
		}), l = o("WAFlowsStateProvider.react").useWAFlowsMeta(), s = l.screenMeta, c = l.templateMeta.routing_model, y = o("WAFlowsStateProvider.react").useWAFlowsState(), b = y.internal, v = b.isCalendarPickerDialogVisible, R = v === void 0 ? !1 : v, E = b.isOverlayVisible, k = E === void 0 ? !1 : E, I = b.screenError, T = b.screenHistory, D = b.status, x = o("WAFlowsEnvContext.react").useWAFlowsEnv(), $ = x.env, P = $.isRTL, N = $.platform, M = L(N);
		d(function() {
			var e = function(r) {
				r && r !== n && (i.current.isTransitioning ? i.current.transitionQueue.unshift(r) : (i.current.isTransitioning = !0, a(r), window.setTimeout(function() {
					i.current.isTransitioning = !1;
					var t = i.current.transitionQueue.pop();
					t != null && e(t);
				}, S * i.current.transitionDuration)));
			}, t = o("WAFlowsProgressIndicatorUtils").getProgress(T, c, s);
			e(t);
		}, [
			n,
			T,
			c,
			s
		]);
		var w = m(function() {
			return o("WAFlowsProgressIndicatorUtils").getProgressDoneScale(n, g[N]);
		}, [N, n]), A = m(function() {
			return o("WAFlowsProgressIndicatorUtils").getProgressRemainingScale(n, g[N], h[N]);
		}, [N, n]);
		if (!o("WAFlowsProgressIndicatorUtils").isProgressPermanentlyHidden(n, T, s)) return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.root, o("WDSFlex.stylex").wdsFlex.flexRowCenter), {
			"aria-hidden": k,
			role: "progressbar",
			"aria-valuetext": o("WAFlowsLocalization").getProgressIndicatorVoiceOver(n),
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": n,
			ref: function(t) {
				i.current.transitionDuration = o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", t));
			},
			children: !o("WAFlowsProgressIndicatorUtils").isProgressTemporarilyHidden(k, R, D, I) && u.jsxs(u.Fragment, { children: [u.jsx("div", {
				className: (e || (e = r("stylex")))(C.progress, C.progressDone, M.progressDone, P ? C.progressAlignRight : C.progressAlignLeft),
				style: {
					transform: "scaleX(" + w + ")",
					borderRadius: f / w + "px / " + f + "px"
				}
			}), u.jsx("div", {
				className: (e || (e = r("stylex")))(C.progress, C.progressRemaining, M.progressRemaining, P ? C.progressAlignLeft : C.progressAlignRight),
				style: {
					transform: "scaleX(" + A + ")",
					borderRadius: f / A + "px / " + f + "px"
				}
			})] })
		}));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return e === "ios" ? v : b;
	}
	l.default = R;
}), 98);

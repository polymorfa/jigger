__d("WAWebBotPluginCarouselWrapper.react", [
	"invariant",
	"WAWebCarouselNavigationButton",
	"WAWebChevronButton.react",
	"WAWebCmd",
	"WAWebDisplayType",
	"WAWebDomScroll",
	"WAWebErrorBoundary.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebMsgGetters",
	"WAWebProtobufsAICommon.pb",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperListeners.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebCarouselScrollUtils",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useImperativeHandle, f = d.useRef, g = d.useState, h = {
		botPluginCarouselControlContainer: {
			position: "x1n2onr6",
			$$css: !0
		},
		botPluginCarouselControlContainerClosed: {
			marginTop: "x1aawmmo",
			$$css: !0
		},
		wrapperProfilePictureDisplayed: {
			paddingInlineStart: "x1cqvox x14o1pq7",
			paddingInlineEnd: "xu7zf0c x1rzuvji",
			$$css: !0
		},
		wrapperAdjustedOneOnOneChat: {
			paddingInlineStart: "x1wxbj4f xds8fti",
			paddingInlineEnd: "xh1vicy x1rzuvji",
			$$css: !0
		}
	}, y = 100;
	function C(t) {
		var n, a = o("react-compiler-runtime").c(51), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var u = f(null), d = i, m = d.botPluginCarouselId, y = d.isFocused, C = d.msgs, S = (n = C[0]) == null || (n = n.id) == null || (n = n.remote) == null ? void 0 : n.isUser(), R = f(null), L;
		a[3] !== C[0] ? (L = o("WAWebMsgGetters").getBotPluginType(C[0]), a[3] = C[0], a[4] = L) : L = a[4];
		var E = L === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS, k = g(!0), I = k[0], T = k[1], D = g(null), x = D[0], $ = D[1], P = g(!1), N = P[0], M = P[1], w;
		if (a[5] !== C[0]) {
			var A;
			w = (A = o("WAWebMsgGetters").getBotResponseTargetId(C[0])) != null ? A : "NULL_MSG_BOT_PLUGIN_TARGET_ID", a[5] = C[0], a[6] = w;
		} else w = a[6];
		var F = w, O;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (O = function(t) {
			var e = t === void 0 ? !0 : t;
			T(e), self.setTimeout(v);
		}, a[7] = O) : O = a[7], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "bot_toggle_plugin_search_details_for_target_id_" + F, O);
		var B;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (B = function(t, n) {
			var e = R.current;
			if (e) {
				var r = e.offsetParent;
				r && (r instanceof HTMLElement || s(0, 56542), o("WAWebDomScroll").scrollAt(e, r, n).then(t));
			}
		}, a[8] = B) : B = a[8];
		var W = B, q;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			return u.current;
		}, a[9] = q) : q = a[9];
		var U = q, V;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			return r("nullthrows")(R.current);
		}, a[10] = V) : V = a[10];
		var H = V, G;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (G = function() {
			return {
				getElement: U,
				getContainerElement: H
			};
		}, a[11] = G) : G = a[11], _(l, G);
		var z;
		a[12] !== C.length || a[13] !== x ? (z = function() {
			x == null && C.length > 1 && $(!0);
		}, a[12] = C.length, a[13] = x, a[14] = z) : z = a[14];
		var j;
		a[15] !== C || a[16] !== x ? (j = [C, x], a[15] = C, a[16] = x, a[17] = j) : j = a[17], p(z, j);
		var K = r("useWAWebCarouselScrollUtils")(u, M, $, C), Q = K[0], X = K[1], Y;
		if (a[18] !== E || a[19] !== C) {
			var J;
			a[21] !== E ? (J = function(t) {
				return c.jsx("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "x1e03a83 x1vd4hg5" }
				}[!!E << 0], { children: c.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
					msg: t.unsafe(),
					displayType: E ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
					theme: "bot_plugin_link"
				}) }), t.id.id);
			}, a[21] = E, a[22] = J) : J = a[22], Y = C.toSorted(b).map(J), a[18] = E, a[19] = C, a[20] = Y;
		} else Y = a[20];
		var Z = Y, ee;
		a[23] !== E || a[24] !== X || a[25] !== N ? (ee = N === !0 ? c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
			onButtonClick: function() {
				return X(!1);
			},
			displayType: E ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel
		}) : null, a[23] = E, a[24] = X, a[25] = N, a[26] = ee) : ee = a[26];
		var te = ee, ne;
		a[27] !== E || a[28] !== X || a[29] !== x ? (ne = x === !0 ? c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Next,
			onButtonClick: function() {
				return X(!0);
			},
			displayType: E ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel
		}) : null, a[27] = E, a[28] = X, a[29] = x, a[30] = ne) : ne = a[30];
		var re = ne, oe;
		a[31] !== y ? (oe = y ? c.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, { parent: { scrollMsg: W } }) : null, a[31] = y, a[32] = oe) : oe = a[32];
		var ae = oe, ie = S ? h.wrapperAdjustedOneOnOneChat : h.wrapperProfilePictureDisplayed, le = !I && h.botPluginCarouselControlContainerClosed, se;
		a[33] !== ie || a[34] !== le ? (se = [
			ie,
			h.botPluginCarouselControlContainer,
			le
		], a[33] = ie, a[34] = le, a[35] = se) : se = a[35];
		var ue;
		a[36] !== m || a[37] !== Z || a[38] !== Q || a[39] !== E || a[40] !== C.length || a[41] !== re || a[42] !== te || a[43] !== I ? (ue = I ? c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6" },
			4: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1uo4jdz" },
			2: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi" },
			6: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi" },
			1: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
			5: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
			3: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
			7: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" }
		}[!!(E && C.length === 1) << 2 | !!(E && C.length === 2) << 1 | !!(E && C.length === 3) << 0], { children: [
			te,
			c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3" },
				1: { className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3 x1rohswg" }
			}[(C.length === 1) << 0], {
				onScroll: Q,
				ref: u,
				children: c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot" },
					8: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xeq5yr9" },
					4: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x15x72sd" },
					12: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc x15x72sd" },
					2: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n" },
					10: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xwv353n" },
					6: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x15x72sd xwv353n" },
					14: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x15x72sd xwv353n" },
					1: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot xgqtt45" },
					9: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xeq5yr9 xgqtt45" },
					5: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xgqtt45" },
					13: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc xgqtt45" },
					3: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45" },
					11: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45" },
					7: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45" },
					15: { className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45" }
				}[!!E << 3 | (C.length === 1) << 2 | (C.length === 2) << 1 | (C.length === 4) << 0], {
					"data-id": m,
					children: Z
				}))
			})),
			re
		] })) : null, a[36] = m, a[37] = Z, a[38] = Q, a[39] = E, a[40] = C.length, a[41] = re, a[42] = te, a[43] = I, a[44] = ue) : ue = a[44];
		var ce;
		a[45] !== ue ? (ce = c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "bot-plugin-carousel",
			children: ue
		}), a[45] = ue, a[46] = ce) : ce = a[46];
		var de;
		return a[47] !== se || a[48] !== ce || a[49] !== ae ? (de = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "bot-plugin-carousel",
			children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				xstyle: se,
				ref: R,
				tabIndex: -1,
				children: [ce, ae]
			})
		}), a[47] = se, a[48] = ce, a[49] = ae, a[50] = de) : de = a[50], de;
	}
	function b(e, t) {
		var n = e.botPluginReferenceIndex, r = t.botPluginReferenceIndex;
		return n != null && r != null ? n > r ? 1 : -1 : 0;
	}
	function v() {
		o("WAWebCmd").Cmd.scrollChatHeight(y);
	}
	l.default = C;
}), 98);

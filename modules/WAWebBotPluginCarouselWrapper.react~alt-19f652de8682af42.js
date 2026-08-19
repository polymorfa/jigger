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
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = f(null), d = l.botPluginCarouselId, C = l.isFocused, b = l.msgs, v = (n = b[0]) == null || (n = n.id) == null || (n = n.remote) == null ? void 0 : n.isUser(), S = f(null), R = o("WAWebMsgGetters").getBotPluginType(b[0]) === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS, L = g(!0), E = L[0], k = L[1], I = g(null), T = I[0], D = I[1], x = g(!1), $ = x[0], P = x[1], N = (a = o("WAWebMsgGetters").getBotResponseTargetId(b[0])) != null ? a : "NULL_MSG_BOT_PLUGIN_TARGET_ID";
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "bot_toggle_plugin_search_details_for_target_id_" + N, function(e) {
			e === void 0 && (e = !0), k(e), self.setTimeout(function() {
				o("WAWebCmd").Cmd.scrollChatHeight(y);
			});
		});
		var M = m(function(e, t) {
			var n = S.current;
			if (n) {
				var r = n.offsetParent;
				r && (r instanceof HTMLElement || s(0, 56542), o("WAWebDomScroll").scrollAt(n, r, t).then(e));
			}
		}, []), w = function() {
			return u.current;
		}, A = function() {
			return r("nullthrows")(S.current);
		};
		_(i, function() {
			return {
				getElement: w,
				getContainerElement: A
			};
		}), p(function() {
			T == null && b.length > 1 && D(!0);
		}, [b, T]);
		var F = r("useWAWebCarouselScrollUtils")(u, P, D, b), O = F[0], B = F[1], W = b.toSorted(function(e, t) {
			var n = e.botPluginReferenceIndex, r = t.botPluginReferenceIndex;
			return n != null && r != null ? n > r ? 1 : -1 : 0;
		}).map(function(e) {
			return c.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "x1e03a83 x1vd4hg5" }
			}[!!R << 0], { children: c.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
				msg: e.unsafe(),
				displayType: R ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
				theme: "bot_plugin_link"
			}) }), e.id.id);
		}), q = $ === !0 ? c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
			onButtonClick: function() {
				return B(!1);
			},
			displayType: R ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel
		}) : null, U = T === !0 ? c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Next,
			onButtonClick: function() {
				return B(!0);
			},
			displayType: R ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel
		}) : null, V = C ? c.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, { parent: { scrollMsg: M } }) : null;
		return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "bot-plugin-carousel",
			children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				xstyle: [
					v ? h.wrapperAdjustedOneOnOneChat : h.wrapperProfilePictureDisplayed,
					h.botPluginCarouselControlContainer,
					!E && h.botPluginCarouselControlContainerClosed
				],
				ref: S,
				tabIndex: -1,
				children: [c.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "bot-plugin-carousel",
					children: E ? c.jsxs("div", babelHelpers.extends({}, {
						0: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6" },
						4: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1uo4jdz" },
						2: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi" },
						6: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi" },
						1: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
						5: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
						3: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" },
						7: { className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b" }
					}[!!(R && b.length === 1) << 2 | !!(R && b.length === 2) << 1 | !!(R && b.length === 3) << 0], { children: [
						q,
						c.jsx("div", babelHelpers.extends({}, {
							0: { className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3" },
							1: { className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3 x1rohswg" }
						}[(b.length === 1) << 0], {
							onScroll: O,
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
							}[!!R << 3 | (b.length === 1) << 2 | (b.length === 2) << 1 | (b.length === 4) << 0], {
								"data-id": d,
								children: W
							}))
						})),
						U
					] })) : null
				}), V]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);

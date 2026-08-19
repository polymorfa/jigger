__d("WAWebPinnedMessagesBanner.react", [
	"fbt",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebConversationBanner.react",
	"WAWebDashes.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebMsgCollection",
	"WAWebPinInChatCollection",
	"WAWebPinInChatMetricUtils",
	"WAWebPinnedMessagesBannerBody.react",
	"WAWebPinnedMessagesUserJourneyLogger",
	"WAWebProtobufsE2E.pb",
	"WAWebSendPinMessageAction",
	"WAWebUimUie.react",
	"WDSHoverStateStyles",
	"WDSIconIcArrowForward.react",
	"WDSIconIcPushPin.react",
	"WDSIconWdsIcPushPinSlash.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener",
	"useWAWebPinnedMessages"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d, _ = p.useMemo, f = p.useState, g = {
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInlineStart14: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		}
	}, h = {
		banner: {
			minHeight: "xuwdbiy",
			$$css: !0
		},
		bannerUiRefresh: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		iconWrapper: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		icon: {
			display: "x1rg5ohu",
			color: "xhslqc4",
			$$css: !0
		},
		bannerBody: {
			height: "xsdox4t",
			width: "xh8yej3",
			$$css: !0
		},
		clearMinWidth: {
			minWidth: "xaaagfd",
			$$css: !0
		},
		dashContainer: {
			width: "xfo62xy",
			$$css: !0
		}
	};
	function y() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.iconWrapper, g.paddingInlineStart6, o("WDSPaddings.stylex").wdsPaddings.paddingEnd8), { children: m.jsx(r("WDSIconIcPushPin.react"), {
			xstyle: h.icon,
			"aria-hidden": !0,
			testid: "pin-refreshed"
		}) })), e[0] = t) : t = e[0], t;
	}
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.chat, l = r("useWAWebPinnedMessages")(i), c = f(function() {
			return l.length > 0 ? l.length - 1 : null;
		}), d = c[0], p = c[1], C = f(!1), b = C[0], v = C[1];
		d != null && d > l.length - 1 && l.length > 0 && p(l.length - 1);
		var S = d == null ? null : l[d];
		o("useWAWebListener").useListener(o("WAWebPinInChatCollection").PinInChatCollection, [
			"add",
			"remove",
			"change"
		], function() {
			l.length > 0 && p(l.length - 1);
		});
		var R = _(function() {
			if (l.length > 0 && S != null) {
				var e = S == null ? void 0 : S.parentMsgKey;
				if (e) return o("WAWebMsgCollection").MsgCollection.get(e);
			}
		}, [l, S]), L = function() {
			var e = l.length, t = e - 1 - (d != null ? d : 0);
			o("WAWebPinInChatMetricUtils").logPinInChatTapOnBanner({
				msg: R,
				chat: i,
				pin: S,
				pinCount: e,
				pinIndex: t
			});
		}, E = function() {
			l.length > 0 && p(function(e) {
				return e == null ? l.length - 1 : (e + 1) % l.length;
			});
		}, k = function() {
			if (S != null) {
				var e, t = S.parentMsgKey, n = o("WAWebChatMessageSearch").getSearchContext({
					chat: i,
					msgKey: (e = R == null ? void 0 : R.id) != null ? e : t,
					rootMsg: null
				});
				n && (n.slideToMsg = !0), o("WAWebCmd").Cmd.openChatAt({
					chat: i,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage,
					msgContext: n,
					onSuccess: { mediaMsgToOpenInMediaViewer: R }
				});
			}
		}, I = function() {
			if (E(), S != null) {
				var t = o("WAWebMsgCollection").MsgCollection.get(S.parentMsgKey);
				t && (new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(i).pinBannerClickUnpin(t, S), o("WAWebSendPinMessageAction").sendPinInChatMsg(t, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error while unpinning a message: ", ""])), t);
				}));
			}
		}, T = m.jsxs(r("WDSMenu.react"), { children: [m.jsx(r("WDSMenuItem.react"), {
			testid: "pinned-message-menu-unpin",
			Icon: r("WDSIconWdsIcPushPinSlash.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: I
		}), m.jsx(r("WDSMenuItem.react"), {
			testid: "pinned-message-menu-go-to-message",
			Icon: r("WDSIconIcArrowForward.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: k
		})] }), D = function(t) {
			t.stopPropagation(), k(), E(), L();
		}, x = l.length > 1, $ = m.jsx(r("WAWebFlexItem.react"), {
			xstyle: h.dashContainer,
			children: x ? m.jsx(r("WAWebDashes.react"), {
				count: l.length,
				activeIndex: d != null ? d : 0
			}) : null
		});
		return S == null ? null : m.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "PinnedMessagesBanner",
			children: m.jsx(r("WAWebConversationBanner.react"), {
				ref: n,
				xstyle: [
					h.banner,
					h.bannerUiRefresh,
					o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
					o("WDSPaddings.stylex").wdsPaddings.paddingVer0,
					o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
					b && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent
				],
				onClick: D,
				onHoverChange: v,
				wdsMenuContent: T,
				children: m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					grow: 1,
					children: [
						m.jsx(r("WAWebFlexItem.react"), { "aria-label": s._(
							/*BTDS*/
							""
						) }),
						$,
						m.jsx(r("WAWebFlexItem.react"), {
							xstyle: h.clearMinWidth,
							align: "center",
							justify: "center",
							children: m.jsx(y, {})
						}),
						m.jsx(r("WAWebFlexItem.react"), {
							xstyle: [g.paddingInlineStart14, h.bannerBody],
							children: m.jsx(r("WAWebPinnedMessagesBannerBody.react"), { pinInChat: S })
						})
					]
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = r("useWAWebPinnedMessages")(e);
		return t.length > 0;
	}
	l.PinnedMessagesBanner = C, l.useWAWebPinnedMessagesBanner = b;
}), 226);

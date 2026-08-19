__d("WAWebViewRepliesThreadsModal.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeValue",
	"WAWebConversationBackground.react",
	"WAWebConversationMsgs.react",
	"WAWebDomScroll",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlexBox.react",
	"WAWebIsInThreadsViewContext",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMultiSelection",
	"WAWebNoop",
	"WAWebThemeContext",
	"WAWebThreadModelResolver",
	"WAWebThreadsViewAutoQuoteContext",
	"WAWebThreadsViewFocusMsgContext",
	"WDSText.react",
	"react",
	"useWAWebConversationPanelFiller.react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = { body: {
		position: "x1n2onr6",
		flex: "x1cqoux5",
		zIndex: "x1vjfegm",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function h(e) {
		var t, n = e.chat, a = e.focusMsgId, i = e.threadId, l = o("useWAWebModelValues").useModelValues(n, ["name"]), c = r("WAWebChatPreferenceCollection").getDefault(), h = o("useWAWebModelValues").useModelValues(c, ["wallpaperValue"]), y = o("WAWebThemeContext").useIsDarkTheme(), C = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(h.wallpaperValue, y ? "dark" : "light"), b = C.showDoodle, v = C.wallpaper, S = f(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), R = S[0], L = p(function() {
			return o("WAWebThreadModelResolver").resolveThreadOrChat(n, i);
		}, [n, i]), E = L !== n ? L : null, k = (t = E == null ? void 0 : E.msgs) != null ? t : n.msgs, I = p(function() {
			var e;
			return (e = k.get(i.key)) != null ? e : null;
		}, [k, i.key]), T = _(null), D = r("useWAWebConversationPanelFiller.react")({
			canCompose: !1,
			selectable: !1,
			setScrollBottom: function(t) {
				var e;
				return (e = T.current) == null ? void 0 : e.setScrollBottom(t);
			},
			getScrollBottom: function() {
				var e;
				return (e = T.current) == null ? void 0 : e.getScrollBottom();
			},
			onComposeHeightChange: function(t) {
				var e;
				return (e = T.current) == null ? void 0 : e.onComposeHeightChange(t);
			}
		}), x = D.filler, $ = D.msgPanelRef;
		m(function() {
			if (a == null) {
				var e = window.requestAnimationFrame(function() {
					var e;
					(e = T.current) == null || e.setScrollBottom(0);
				});
				return function() {
					return window.cancelAnimationFrame(e);
				};
			}
		}, [a]);
		var P = f(null), N = P[0], M = P[1], w = d(function(e) {
			var t = k.findFirst(function(t) {
				return t.id.id === e;
			});
			return t == null ? !1 : (M({
				msg: t,
				highlightMsg: !0
			}), !0);
		}, [k]), A = _(!1);
		return m(function() {
			a == null || A.current || w(a) && (A.current = !0);
		}, [a, w]), m(function() {
			if (!(N == null || N.msg == null)) {
				var e = N.msg.id.id, t = window.requestAnimationFrame(function() {
					var t = document.querySelector("[data-testid=\"threads-view-messages\"]"), n = t == null ? void 0 : t.querySelector("[data-id=\"" + CSS.escape(e) + "\"]");
					if (n instanceof HTMLElement) {
						o("WAWebDomScroll").scrollAt(n);
						var r = getComputedStyle(n).getPropertyValue("--WDS-accent-RGB").trim();
						r !== "" && n.animate([
							{
								backgroundColor: "transparent",
								offset: 0
							},
							{
								backgroundColor: "rgba(" + r + ", 0.35)",
								offset: .5
							},
							{
								backgroundColor: "transparent",
								offset: 1
							}
						], { duration: 580 });
					}
				});
				return function() {
					return window.cancelAnimationFrame(t);
				};
			}
		}, [N]), u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			children: u.jsxs(r("WAWebDrawer.react"), { children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
					title: s._(
						/*BTDS*/
						""
					),
					onCancel: o("WAWebModalManager").closeModalManager
				}),
				u.jsx("div", {
					className: "x1phvje8 x1nbhmlj",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: l.name
					})
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					overflow: "hidden",
					children: u.jsx(r("WAWebIsInThreadsViewContext").Provider, {
						value: !0,
						children: u.jsx(r("WAWebThreadsViewAutoQuoteContext").Provider, {
							value: I,
							children: u.jsxs(r("WAWebThreadsViewFocusMsgContext").Provider, {
								value: w,
								children: [u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
									ref: $,
									testid: "threads-view-messages",
									xstyle: g.body,
									children: [u.jsx(r("WAWebConversationBackground.react"), {
										wallpaper: v,
										showDoodle: b
									}), u.jsx(r("WAWebConversationMsgs.react"), {
										ref: T,
										chat: n,
										msgCollection: k,
										threadId: i,
										selectable: !1,
										focusCtx: N,
										selectedMessages: R,
										onMessageSelect: r("WAWebNoop"),
										onSelectMessages: r("WAWebNoop"),
										onCancelSelectMessages: r("WAWebNoop"),
										notifyChatRendered: r("WAWebNoop"),
										updateOpenedChatInfo: r("WAWebNoop"),
										updateCanShowSpamPanel: r("WAWebNoop"),
										bottomBanners: null
									})]
								}), x]
							})
						})
					})
				})
			] })
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

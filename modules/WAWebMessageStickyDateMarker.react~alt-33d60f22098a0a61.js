__d("WAWebMessageStickyDateMarker.react", [
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebCoreActionsODS",
	"WAWebDatePickerContainer.react",
	"WAWebDropdown.react",
	"WAWebMsgCollection",
	"WAWebSearchByDateUtils",
	"WAWebSearchByTypeAndDateGatingUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperSystemBubble.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useImperativeHandle, _ = c.useRef, f = c.useState;
	function g(e) {
		return e == null ? 0 : e.offsetWidth - (e.clientWidth + e.clientLeft * 2);
	}
	var h = {
		position: "x10l6tqk",
		zIndex: "x8k05lb",
		boxSizing: "x9f619",
		display: "x78zum5",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		paddingTop: "x12mz7nx",
		paddingInlineEnd: "x120eax6",
		pointerEvents: "x47corl",
		$$css: !0
	}, y = {
		stickyRefreshed: function(t) {
			return [h, { "--x-paddingInlineEnd": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t + "px") }];
		},
		interactable: {
			pointerEvents: "x67bb7w",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.chat, a = t.ref, i = t.scrollContainerRef, l, s = f(void 0), c = s[0], h = s[1], C = f(void 0), b = C[0], v = C[1], S = f(!0), R = S[0], L = S[1], E = f(0), k = E[0], I = E[1], T = f(null), D = T[0], x = T[1], $ = _(null), P = _(!1), N = _(!1), M = _(!1), w = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled(), A = d(function() {
			M.current && !P.current && !N.current && (M.current = !1, L(!1));
		}, []);
		m(function() {
			if (i != null) {
				var e = g(i);
				e !== k && I(e);
			}
		}, [i, k]);
		var F = function(t, n) {
			h(t), v(n);
		}, O = function(t) {
			t ? (M.current = !1, L(!0)) : w && (P.current || N.current) ? M.current = !0 : (M.current = !1, L(!1));
		};
		p(a, function() {
			return {
				updateDateMarkerText: F,
				setVisibility: O
			};
		});
		var B = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled() && n != null && b != null, W = function() {
			N.current = !1, x(null), A();
		}, q = async function(t) {
			if (o("WAWebCoreActionsODS").logCalendarDateSelectedFromStickyDateMarker(), n != null) {
				var e = await o("WAWebSearchByDateUtils").getClosestMessageFromDate(n.id.toString(), t);
				if (W(), e) {
					var r, a = o("WAWebMsgCollection").MsgCollection.get(e.toString()), i = o("WAWebChatMessageSearch").getSearchContext({
						chat: n,
						msgKey: (r = a == null ? void 0 : a.id) != null ? r : e
					});
					i ? (i.highlightMentionMsg = !0, i.enableAnimation = !1, o("WAWebCmd").Cmd.openChatAt({
						chat: n,
						msgContext: i,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					})) : o("WAWebCmd").Cmd.openChatBottom({
						chat: n,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					});
				} else o("WAWebCmd").Cmd.openChatBottom({
					chat: n,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
				});
			}
		}, U = function() {
			!B || b == null || (N.current = !0, o("WAWebCoreActionsODS").logCalendarOpenFromStickyDateMarker(), x({
				dirY: o("WAWebDropdown.react").DirY.BOTTOM,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				type: o("WAWebDropdown.react").MenuType.DatePicker,
				menu: u.jsx(r("WAWebDatePickerContainer.react"), {
					chatId: n == null ? void 0 : n.id,
					defaultActiveStartDate: new Date(b * 1e3),
					onDateSelected: function(t) {
						q(t);
					}
				}),
				anchor: $.current
			}));
		}, V = function() {
			P.current = !0;
		}, H = function() {
			P.current = !1, A();
		};
		if (c != null && R) {
			var G = u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				dir: "auto",
				children: c
			}), z = D ? u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "StickyDateMarkerDatePicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: W,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
			}) : null;
			l = u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.stickyRefreshed(k), w && y.interactable), { children: [B ? u.jsx("div", {
				ref: $,
				onClick: U,
				onMouseEnter: V,
				onMouseLeave: H,
				role: "button",
				tabIndex: 0,
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), U());
				},
				className: "x1ypdohk",
				children: u.jsx(r("WAWebWrapperSystemBubble.react"), {
					theme: "sticky",
					children: G
				})
			}) : u.jsx(r("WAWebWrapperSystemBubble.react"), {
				theme: "sticky",
				children: G
			}), z] }));
		}
		return u.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-down-date",
			children: l
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);

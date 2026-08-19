__d("WAWebMessageDateMarker.react", [
	"WALogger",
	"WAWeb-moment",
	"WAWebChatEntryPoint",
	"WAWebChatMessageSearch",
	"WAWebClock",
	"WAWebCmd",
	"WAWebCoreActionsODS",
	"WAWebDatePickerContainer.react",
	"WAWebDropdown.react",
	"WAWebMsgCollection",
	"WAWebSearchByDateUtils",
	"WAWebSearchByTypeAndDateGatingUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWrapperSystemBubble.react",
	"WDSText.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useImperativeHandle, _ = m.useMemo, f = m.useRef, g = m.useState;
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.chat, l = a.isFocusable, c = a.isGroupHistoryMessage, m = a.timestamp, h = g(null), y = h[0], C = h[1];
		function b() {
			try {
				return o("WAWebClock").Clock.relativeDateStr(m);
			} catch (t) {
				return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Clock.relativeDateStr(", ")"])), m), o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Clock.relativeDateStr failed: ", ""])), t).sendLogs("relative-date-str-error", { sampling: .001 }), "";
			}
		}
		var v = g(b()), S = v[0], R = v[1], L = f(null), E = f(null), k = g(!1), I = k[0], T = k[1], D = _(function() {
			return m >= r("WAWeb-moment")().startOf("day").subtract(7, "day").unix();
		}, [m]);
		function x() {
			R(b());
		}
		o("useWAWebListener").useListener(D ? o("WAWebCmd").Cmd : null, "midnight", x);
		var $ = function() {
			return m;
		}, P = function() {
			I && T(!1);
		}, N = function() {
			I || T(!0);
		}, M = function() {
			return L.current;
		};
		p(n, function() {
			return {
				getTimestamp: $,
				show: P,
				hide: N,
				getElement: M
			};
		});
		var w = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled() && i != null, A = function() {
			C(null);
		}, F = async function(t) {
			if (o("WAWebCoreActionsODS").logCalendarDateSelectedFromDateMarker(), i != null) {
				var e = await o("WAWebSearchByDateUtils").getClosestMessageFromDate(i.id.toString(), t);
				if (A(), e) {
					var n, r = o("WAWebMsgCollection").MsgCollection.get(e.toString()), a = o("WAWebChatMessageSearch").getSearchContext({
						chat: i,
						msgKey: (n = r == null ? void 0 : r.id) != null ? n : e
					});
					a ? (a.highlightMentionMsg = !0, a.enableAnimation = !1, o("WAWebCmd").Cmd.openChatAt({
						chat: i,
						msgContext: a,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					})) : o("WAWebCmd").Cmd.openChatBottom({
						chat: i,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					});
				} else o("WAWebCmd").Cmd.openChatBottom({
					chat: i,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
				});
			}
		}, O = function() {
			w && (o("WAWebCoreActionsODS").logCalendarOpenFromDateMarker(), C({
				dirY: o("WAWebDropdown.react").DirY.BOTTOM,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				type: o("WAWebDropdown.react").MenuType.DatePicker,
				menu: d.jsx(r("WAWebDatePickerContainer.react"), {
					chatId: i == null ? void 0 : i.id,
					defaultActiveStartDate: new Date(m * 1e3),
					onDateSelected: function(t) {
						F(t);
					}
				}),
				anchor: E.current
			}));
		};
		if (I) return null;
		var B = y ? d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "DateMarkerDatePicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: A,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: y })
		}) : null, W = d.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			dir: "auto",
			children: S.toString()
		});
		return d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebWrapperSystemBubble.react"), {
			ref: L,
			hidden: I,
			isFocusable: l,
			groupHistoryBackground: c === !0,
			children: w ? d.jsx("div", {
				ref: E,
				onClick: O,
				role: "button",
				tabIndex: 0,
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), O());
				},
				className: "x1ypdohk x4qlk2n x93d46o x14ba6vc xrw3huk x1tiyuxx x1nbhmlj x1iw51ew xde1mab x1fmog5m xu25z0z x140muxe xo1y3bh",
				children: W
			}) : W
		}), B] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);

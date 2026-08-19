__d("WAWebSearchZeroState.react", [
	"fbt",
	"Keys",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebSearchZeroStateRecentSearchItem.react",
	"WAWebTabOrder",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"setTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useImperativeHandle, p = c.useRef, _ = c.useState, f = {
		wrapper: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		clearButton: {
			fontSize: "x1f6kntn",
			fontWeight: "x1s688f",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			height: "x10w6t97",
			$$css: !0
		}
	}, g = { gridTemplateColumns: "repeat(4, minmax(0, 100px))" };
	function h(e) {
		var t = e.onBlur, n = e.onChatClick, a = e.onClearAll, i = e.onKeyDown, l = e.onSearchFocus, c = e.onSetShowingClearConfirmation, h = e.recentChats, y = e.ref, C = p([]), b = p(0), v = _(0), S = v[0], R = v[1], L = p(null), E = p(null), k = p(!1), I = d(function(e) {
			b.current = e, R(e);
		}, []), T = function() {
			var e;
			I(0), (e = C.current[0]) == null || e.focus();
		};
		if (m(y, function() {
			return {
				focus: T,
				getElement: function() {
					return L.current;
				}
			};
		}), h.length === 0) return null;
		var D = function(t, n) {
			C.current[n] = t;
		}, x = 4, $ = function(t) {
			var e, n = b.current + 1;
			if (n >= h.length) {
				i == null || i(t);
				return;
			}
			I(n), (e = C.current[n]) == null || e.focus();
		}, P = function() {
			var e, t = b.current - 1;
			if (t < 0) {
				l();
				return;
			}
			I(t), (e = C.current[t]) == null || e.focus();
		}, N = function(t) {
			var e, n = b.current + x;
			if (n >= h.length) {
				i == null || i(t);
				return;
			}
			I(n), (e = C.current[n]) == null || e.focus();
		}, M = function() {
			var e, t = b.current - x;
			if (t < 0) {
				l();
				return;
			}
			I(t), (e = C.current[t]) == null || e.focus();
		}, w = function() {
			var e = L.current;
			if (e != null) {
				var t = document.querySelectorAll("[data-tab]"), n = !1;
				for (var r of t) {
					if (e.contains(r)) {
						n = !0;
						continue;
					}
					if (n && r instanceof HTMLElement && r.tabIndex !== -1) {
						r.focus();
						return;
					}
				}
			}
		}, A = function(t) {
			switch (t.keyCode) {
				case r("Keys").TAB:
					if (!t.shiftKey) E.current != null && t.target instanceof Node && E.current.contains(t.target) ? (t.preventDefault(), t.stopPropagation(), T()) : (t.preventDefault(), t.stopPropagation(), w());
					else {
						var e = E.current;
						e != null && t.target instanceof Node && !e.contains(t.target) && (t.preventDefault(), t.stopPropagation(), e.focus());
					}
					break;
				case r("Keys").RIGHT:
					t.preventDefault(), $(t);
					break;
				case r("Keys").LEFT:
					t.preventDefault(), P();
					break;
				case r("Keys").DOWN:
					t.preventDefault(), N(t);
					break;
				case r("Keys").UP:
					t.preventDefault(), M();
					break;
				default: break;
			}
		}, F = function(t) {
			var e = t.target;
			e instanceof HTMLElement && e.closest("button, a, [role=\"button\"]") == null && (t.preventDefault(), l());
		}, O = function(n) {
			var e = L.current, o = n.relatedTarget;
			r("setTimeout")(function() {
				k.current || e != null && o instanceof Node && e.contains(o) || t == null || t();
			}, 0);
		}, B = async function() {
			k.current = !0, c == null || c(!0);
			var e = function() {
				k.current = !1, c == null || c(!1);
			};
			try {
				var t = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
					title: s._(
						/*BTDS*/
						""
					),
					okText: s._(
						/*BTDS*/
						""
					),
					cancelText: r("WAWebFbtCommon")("Cancel"),
					children: u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					onOK: e,
					onCancel: e,
					onOverlayClick: e
				});
				t && a();
			} finally {
				e();
				var n = L.current;
				(n == null || !n.contains(document.activeElement)) && l();
			}
		};
		return u.jsx("div", {
			ref: L,
			role: "group",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onBlur: O,
			onKeyDown: A,
			onMouseDown: F,
			className: "xscbp6u",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.wrapper,
				children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "all",
					marginBottom: 12,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(r("WDSButton.react"), {
						ref: E,
						onPress: function() {
							return void B();
						},
						tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
						xstyle: f.clearButton,
						variant: "filled",
						type: "media",
						label: s._(
							/*BTDS*/
							""
						)
					})]
				}), u.jsx("div", {
					className: "xrvj5dj x1qughib x3pnbk8",
					style: g,
					children: h.map(function(e, t) {
						return u.jsx(r("WAWebSearchZeroStateRecentSearchItem.react"), {
							ref: function(n) {
								return D(n, t);
							},
							chat: e,
							onClick: function() {
								return n(e, t);
							},
							onFocus: function() {
								return I(t);
							},
							tabIndex: t === S ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH : -1
						}, e.id.toString());
					})
				})]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(38), a = t.chat, i = t.ref, l = t.scrollContainerRef, s, c = f(void 0), d = c[0], h = c[1], C = f(void 0), b = C[0], v = C[1], S = f(!0), R = S[0], L = S[1], E = f(0), k = E[0], I = E[1], T = f(null), D = T[0], x = T[1], $ = _(null), P = _(!1), N = _(!1), M = _(!1), w;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled(), n[0] = w) : w = n[0];
		var A = w, F;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			M.current && !P.current && !N.current && (M.current = !1, L(!1));
		}, n[1] = F) : F = n[1];
		var O = F, B, W;
		n[2] !== l || n[3] !== k ? (B = function() {
			if (l != null) {
				var e = g(l);
				e !== k && I(e);
			}
		}, W = [l, k], n[2] = l, n[3] = k, n[4] = B, n[5] = W) : (B = n[4], W = n[5]), m(B, W);
		var q;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t, n) {
			h(t), v(n);
		}, n[6] = q) : q = n[6];
		var U = q, V;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			t ? (M.current = !1, L(!0)) : A && (P.current || N.current) ? M.current = !0 : (M.current = !1, L(!1));
		}, n[7] = V) : V = n[7];
		var H = V, G;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (G = function() {
			return {
				updateDateMarkerText: U,
				setVisibility: H
			};
		}, n[8] = G) : G = n[8], p(i, G);
		var z;
		n[9] !== a || n[10] !== b ? (z = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled() && a != null && b != null, n[9] = a, n[10] = b, n[11] = z) : z = n[11];
		var j = z, K;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (K = function() {
			N.current = !1, x(null), O();
		}, n[12] = K) : K = n[12];
		var Q = K, X;
		n[13] !== a ? (X = async function(t) {
			if (o("WAWebCoreActionsODS").logCalendarDateSelectedFromStickyDateMarker(), a != null) {
				var e = await o("WAWebSearchByDateUtils").getClosestMessageFromDate(a.id.toString(), t);
				if (Q(), e) {
					var n, r = o("WAWebMsgCollection").MsgCollection.get(e.toString()), i = o("WAWebChatMessageSearch").getSearchContext({
						chat: a,
						msgKey: (n = r == null ? void 0 : r.id) != null ? n : e
					});
					i ? (i.highlightMentionMsg = !0, i.enableAnimation = !1, o("WAWebCmd").Cmd.openChatAt({
						chat: a,
						msgContext: i,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					})) : o("WAWebCmd").Cmd.openChatBottom({
						chat: a,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
					});
				} else o("WAWebCmd").Cmd.openChatBottom({
					chat: a,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
				});
			}
		}, n[13] = a, n[14] = X) : X = n[14];
		var Y = X, J;
		n[15] !== (a == null ? void 0 : a.id) || n[16] !== Y || n[17] !== j || n[18] !== b ? (J = function() {
			!j || b == null || (N.current = !0, o("WAWebCoreActionsODS").logCalendarOpenFromStickyDateMarker(), x({
				dirY: o("WAWebDropdown.react").DirY.BOTTOM,
				dirX: o("WAWebDropdown.react").DirX.CENTER,
				type: o("WAWebDropdown.react").MenuType.DatePicker,
				menu: u.jsx(r("WAWebDatePickerContainer.react"), {
					chatId: a == null ? void 0 : a.id,
					defaultActiveStartDate: new Date(b * 1e3),
					onDateSelected: function(t) {
						Y(t);
					}
				}),
				anchor: $.current
			}));
		}, n[15] = a == null ? void 0 : a.id, n[16] = Y, n[17] = j, n[18] = b, n[19] = J) : J = n[19];
		var Z = J, ee;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (ee = function() {
			P.current = !0;
		}, n[20] = ee) : ee = n[20];
		var te = ee, ne;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (ne = function() {
			P.current = !1, O();
		}, n[21] = ne) : ne = n[21];
		var re = ne;
		if (d != null && R) {
			var oe;
			n[22] !== d ? (oe = u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				dir: "auto",
				children: d
			}), n[22] = d, n[23] = oe) : oe = n[23];
			var ae = oe, ie;
			n[24] !== D ? (ie = D ? u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "StickyDateMarkerDatePicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: Q,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
			}) : null, n[24] = D, n[25] = ie) : ie = n[25];
			var le = ie, se;
			n[26] !== k ? (se = (e || (e = r("stylex"))).props(y.stickyRefreshed(k), A && y.interactable), n[26] = k, n[27] = se) : se = n[27];
			var ue;
			n[28] !== Z || n[29] !== j || n[30] !== ae ? (ue = j ? u.jsx("div", {
				ref: $,
				onClick: Z,
				onMouseEnter: te,
				onMouseLeave: re,
				role: "button",
				tabIndex: 0,
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), Z());
				},
				className: "x1ypdohk",
				children: u.jsx(r("WAWebWrapperSystemBubble.react"), {
					theme: "sticky",
					children: ae
				})
			}) : u.jsx(r("WAWebWrapperSystemBubble.react"), {
				theme: "sticky",
				children: ae
			}), n[28] = Z, n[29] = j, n[30] = ae, n[31] = ue) : ue = n[31];
			var ce;
			n[32] !== le || n[33] !== se || n[34] !== ue ? (ce = u.jsxs("div", babelHelpers.extends({}, se, { children: [ue, le] })), n[32] = le, n[33] = se, n[34] = ue, n[35] = ce) : ce = n[35], s = ce;
		}
		var de;
		return n[36] !== s ? (de = u.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-down-date",
			children: s
		}), n[36] = s, n[37] = de) : de = n[37], de;
	}
	l.default = C;
}), 98);

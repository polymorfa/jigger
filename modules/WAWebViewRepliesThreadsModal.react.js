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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(52), a = e.chat, i = e.focusMsgId, l = e.threadId, c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = ["name"], n[0] = c) : c = n[0];
		var d = o("useWAWebModelValues").useModelValues(a, c), p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = r("WAWebChatPreferenceCollection").getDefault(), n[1] = p) : p = n[1];
		var h = p, C;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (C = ["wallpaperValue"], n[2] = C) : C = n[2];
		var b = o("useWAWebModelValues").useModelValues(h, C), v = o("WAWebThemeContext").useIsDarkTheme(), S = v ? "dark" : "light", R;
		n[3] !== b.wallpaperValue || n[4] !== S ? (R = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(b.wallpaperValue, S), n[3] = b.wallpaperValue, n[4] = S, n[5] = R) : R = n[5];
		var L = R, E = L.showDoodle, k = L.wallpaper, I = f(y), T = I[0], D;
		n[6] !== a || n[7] !== l ? (D = o("WAWebThreadModelResolver").resolveThreadOrChat(a, l), n[6] = a, n[7] = l, n[8] = D) : D = n[8];
		var x = D, $ = x !== a ? x : null, P = (t = $ == null ? void 0 : $.msgs) != null ? t : a.msgs, N;
		if (n[9] !== P || n[10] !== l.key) {
			var M;
			N = (M = P.get(l.key)) != null ? M : null, n[9] = P, n[10] = l.key, n[11] = N;
		} else N = n[11];
		var w = N, A = _(null), F;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (F = {
			canCompose: !1,
			selectable: !1,
			setScrollBottom: function(t) {
				var e;
				return (e = A.current) == null ? void 0 : e.setScrollBottom(t);
			},
			getScrollBottom: function() {
				var e;
				return (e = A.current) == null ? void 0 : e.getScrollBottom();
			},
			onComposeHeightChange: function(t) {
				var e;
				return (e = A.current) == null ? void 0 : e.onComposeHeightChange(t);
			}
		}, n[12] = F) : F = n[12];
		var O = r("useWAWebConversationPanelFiller.react")(F), B = O.filler, W = O.msgPanelRef, q, U;
		n[13] !== i ? (U = function() {
			if (i == null) {
				var e = window.requestAnimationFrame(function() {
					var e;
					(e = A.current) == null || e.setScrollBottom(0);
				});
				return (function() {
					return window.cancelAnimationFrame(e);
				});
			}
		}, q = [i], n[13] = i, n[14] = q, n[15] = U) : (q = n[14], U = n[15]), m(U, q);
		var V = f(null), H = V[0], G = V[1], z;
		n[16] !== P ? (z = function(t) {
			var e = P.findFirst(function(e) {
				return e.id.id === t;
			});
			return e == null ? !1 : (G({
				msg: e,
				highlightMsg: !0
			}), !0);
		}, n[16] = P, n[17] = z) : z = n[17];
		var j = z, K = _(!1), Q, X;
		n[18] !== i || n[19] !== j ? (Q = function() {
			i == null || K.current || j(i) && (K.current = !0);
		}, X = [i, j], n[18] = i, n[19] = j, n[20] = Q, n[21] = X) : (Q = n[20], X = n[21]), m(Q, X);
		var Y, J;
		n[22] !== H ? (Y = function() {
			if (!(H == null || H.msg == null)) {
				var e = H.msg.id.id, t = window.requestAnimationFrame(function() {
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
				return (function() {
					return window.cancelAnimationFrame(t);
				});
			}
		}, J = [H], n[22] = H, n[23] = Y, n[24] = J) : (Y = n[23], J = n[24]), m(Y, J);
		var Z, ee;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (Z = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager
		}), ee = { className: "x1phvje8 x1nbhmlj" }, n[25] = Z, n[26] = ee) : (Z = n[25], ee = n[26]);
		var te;
		n[27] !== d.name ? (te = u.jsx("div", babelHelpers.extends({}, ee, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: d.name
		}) })), n[27] = d.name, n[28] = te) : te = n[28];
		var ne;
		n[29] !== E || n[30] !== k ? (ne = u.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: k,
			showDoodle: E
		}), n[29] = E, n[30] = k, n[31] = ne) : ne = n[31];
		var re;
		if (n[32] !== a || n[33] !== P || n[34] !== T || n[35] !== H || n[36] !== l) {
			var oe;
			re = u.jsx(r("WAWebConversationMsgs.react"), {
				ref: A,
				chat: a,
				msgCollection: P,
				threadId: l,
				selectable: !1,
				focusCtx: H,
				selectedMessages: T,
				onMessageSelect: oe = r("WAWebNoop"),
				onSelectMessages: oe,
				onCancelSelectMessages: oe,
				notifyChatRendered: oe,
				updateOpenedChatInfo: oe,
				updateCanShowSpamPanel: oe,
				bottomBanners: null
			}), n[32] = a, n[33] = P, n[34] = T, n[35] = H, n[36] = l, n[37] = re;
		} else re = n[37];
		var ae;
		n[38] !== W || n[39] !== ne || n[40] !== re ? (ae = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			ref: W,
			testid: "threads-view-messages",
			xstyle: g.body,
			children: [ne, re]
		}), n[38] = W, n[39] = ne, n[40] = re, n[41] = ae) : ae = n[41];
		var ie;
		n[42] !== B || n[43] !== j || n[44] !== ae ? (ie = u.jsxs(r("WAWebThreadsViewFocusMsgContext").Provider, {
			value: j,
			children: [ae, B]
		}), n[42] = B, n[43] = j, n[44] = ae, n[45] = ie) : ie = n[45];
		var le;
		n[46] !== w || n[47] !== ie ? (le = u.jsx(r("WAWebDrawerBody.react"), {
			overflow: "hidden",
			children: u.jsx(r("WAWebIsInThreadsViewContext").Provider, {
				value: !0,
				children: u.jsx(r("WAWebThreadsViewAutoQuoteContext").Provider, {
					value: w,
					children: ie
				})
			})
		}), n[46] = w, n[47] = ie, n[48] = le) : le = n[48];
		var se;
		return n[49] !== te || n[50] !== le ? (se = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			children: u.jsxs(r("WAWebDrawer.react"), { children: [
				Z,
				te,
				le
			] })
		}), n[49] = te, n[50] = le, n[51] = se) : se = n[51], se;
	}
	function y() {
		return new (r("WAWebMultiSelection"))([], C);
	}
	function C(e) {
		return e.id.toString();
	}
	l.default = h;
}), 226);

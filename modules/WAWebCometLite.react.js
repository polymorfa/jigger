__d("WAWebCometLite.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallNotificationBus",
	"WAWebCometLiteContactData",
	"WAWebCometLiteContactDetail.react",
	"WAWebCometLiteContactsRow.react",
	"WAWebCometLiteE2EFooter.react",
	"WAWebCometLiteInCall.react",
	"WAWebCometLiteIncomingCall.react",
	"WAWebCometLiteProfileButton.react",
	"WAWebCometLiteRecentCalls.react",
	"WAWebCometLiteTabButton.react",
	"WAWebFlex.react",
	"WAWebModalManagerImplWrapper.react",
	"WAWebThemeContext",
	"WAWebUserPrefsGeneral",
	"WAWebVoipEventConstants",
	"WAWebWaLogoIcon.react",
	"WDSContextualLayer.react",
	"WDSIconIcContacts.react",
	"WDSIconIcHistory.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = {
		root: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			paddingInlineStart: "xu7uy1i",
			paddingInlineEnd: "x1t7qo4d",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x14a8spa",
			paddingBottom: "x1c76a8b",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		headerLogo: {
			color: "x1r8hjv8",
			$$css: !0
		},
		headerActions: {
			justifySelf: "x7v7x1q",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		detailRoot: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		contactsTabBody: {
			flexGrow: "x1iyjqo2",
			width: "xh8yej3",
			$$css: !0
		},
		contactsRoot: {
			width: "xh8yej3",
			$$css: !0
		},
		width100: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = o("react-compiler-runtime").c(58), a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
			theme: "dark",
			systemThemeMode: !1,
			setTheme: o("WAWebThemeContext").setTheme,
			setSystemThemeMode: o("WAWebUserPrefsGeneral").setSystemThemeMode
		}, n[0] = a) : a = n[0];
		var i = a, l = m("contacts"), c = l[0], d = l[1], _ = m("list"), g = _[0], h = _[1], y = m(null), C = y[0], b = y[1], v;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), n[1] = v) : v = n[1];
		var S = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), v, f), R = m(null), L = R[0], E = R[1], k;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			t.isGroup || E({
				callId: t.msgId,
				isVideo: t.isVideo,
				wid: t.wid
			});
		}, n[2] = k) : k = n[2], o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "alert_call", k);
		var I;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			E(function(e) {
				return (e == null ? void 0 : e.callId) === t.msgId ? null : e;
			});
		}, n[3] = I) : I = n[3], o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "cancel_call", I);
		var T;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			E(function(e) {
				return (e == null ? void 0 : e.callId) === t.msgId ? null : e;
			});
		}, n[4] = T) : T = n[4], o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "missed_call", T);
		var D;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (D = function(t) {
			b(t), h("contact_detail");
		}, n[5] = D) : D = n[5];
		var x = D, $;
		n[6] !== c ? ($ = c === "contacts" ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.contactsRoot,
			grow: 1,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				xstyle: p.contactsTabBody,
				children: u.jsx(r("WAWebCometLiteContactsRow.react"), { onSelect: x })
			})
		}) : c === "recent_calls" ? u.jsx(r("WAWebCometLiteRecentCalls.react"), { onSelect: x }) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + c);
		})(), n[6] = c, n[7] = $) : $ = n[7];
		var P = $;
		if (L != null) {
			var N;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (N = [p.detailRoot, o("WDSThemes").WDSDarkTheme], n[8] = N) : N = n[8];
			var M;
			n[9] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
				return E(null);
			}, n[9] = M) : M = n[9];
			var w;
			n[10] !== L.callId || n[11] !== L.isVideo || n[12] !== L.wid ? (w = u.jsx(r("WAWebCometLiteIncomingCall.react"), {
				callId: L.callId,
				isVideo: L.isVideo,
				onDismiss: M,
				wid: L.wid
			}), n[10] = L.callId, n[11] = L.isVideo, n[12] = L.wid, n[13] = w) : w = n[13];
			var A;
			n[14] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" }), n[14] = A) : A = n[14];
			var F;
			return n[15] !== w ? (F = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
				value: i,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: N,
					grow: 1,
					children: [w, A]
				})
			}), n[15] = w, n[16] = F) : F = n[16], F;
		}
		var O = (t = S == null ? void 0 : S.peerJid) != null ? t : null;
		if (O != null) {
			var B;
			n[17] === Symbol.for("react.memo_cache_sentinel") ? (B = [p.detailRoot, o("WDSThemes").WDSDarkTheme], n[17] = B) : B = n[17];
			var W;
			n[18] === Symbol.for("react.memo_cache_sentinel") ? (W = o("WAWebCometLiteContactData").getMeUserOrNull(), n[18] = W) : W = n[18];
			var q;
			n[19] !== O ? (q = u.jsx(r("WAWebCometLiteInCall.react"), {
				wid: O,
				selfWid: W
			}), n[19] = O, n[20] = q) : q = n[20];
			var U;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" }), n[21] = U) : U = n[21];
			var V;
			return n[22] !== q ? (V = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
				value: i,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: B,
					grow: 1,
					children: [q, U]
				})
			}), n[22] = q, n[23] = V) : V = n[23], V;
		}
		if (g === "contact_detail" && C != null) {
			var H;
			n[24] === Symbol.for("react.memo_cache_sentinel") ? (H = [p.detailRoot, o("WDSThemes").WDSDarkTheme], n[24] = H) : H = n[24];
			var G, z;
			n[25] === Symbol.for("react.memo_cache_sentinel") ? (G = function() {
				return h("list");
			}, z = u.jsx(r("WAWebCometLiteProfileButton.react"), {}), n[25] = G, n[26] = z) : (G = n[25], z = n[26]);
			var j;
			n[27] !== C.chat || n[28] !== C.contact || n[29] !== C.wid ? (j = u.jsx(r("WAWebCometLiteContactDetail.react"), {
				wid: C.wid,
				contact: C.contact,
				chat: C.chat,
				onBack: G,
				headerEnd: z
			}), n[27] = C.chat, n[28] = C.contact, n[29] = C.wid, n[30] = j) : j = n[30];
			var K;
			n[31] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" }), n[31] = K) : K = n[31];
			var Q;
			return n[32] !== j ? (Q = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
				value: i,
				children: u.jsx(o("WDSContextualLayer.react").WDSContextualLayer, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: H,
					grow: 1,
					children: [j, K]
				}) })
			}), n[32] = j, n[33] = Q) : Q = n[33], Q;
		}
		var X;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (X = [p.root, o("WDSThemes").WDSDarkTheme], n[34] = X) : X = n[34];
		var Y;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "xrvj5dj xh8yej3 x134kloy x6s0dn4 xs2akgl xvpt6g3" }, n[35] = Y) : Y = n[35];
		var J;
		n[36] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "x1lqcxt8" }, n[36] = J) : J = n[36];
		var Z;
		n[37] === Symbol.for("react.memo_cache_sentinel") ? (Z = u.jsx("div", babelHelpers.extends({}, J, { children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
			height: 48,
			width: 48,
			iconXstyle: p.headerLogo,
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}) })), n[37] = Z) : Z = n[37];
		var ee = c === "contacts", te;
		n[38] === Symbol.for("react.memo_cache_sentinel") ? (te = function() {
			return d("contacts");
		}, n[38] = te) : te = n[38];
		var ne;
		n[39] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), n[39] = ne) : ne = n[39];
		var re;
		n[40] !== ee ? (re = u.jsx(r("WAWebCometLiteTabButton.react"), {
			isActive: ee,
			Icon: r("WDSIconIcContacts.react"),
			onPress: te,
			testid: "wa-web-lite-contacts-button",
			label: ne
		}), n[40] = ee, n[41] = re) : re = n[41];
		var oe = c === "recent_calls", ae;
		n[42] === Symbol.for("react.memo_cache_sentinel") ? (ae = function() {
			return d("recent_calls");
		}, n[42] = ae) : ae = n[42];
		var ie;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
			/*BTDS*/
			""
		), n[43] = ie) : ie = n[43];
		var le;
		n[44] !== oe ? (le = u.jsx(r("WAWebCometLiteTabButton.react"), {
			isActive: oe,
			Icon: r("WDSIconIcHistory.react"),
			onPress: ae,
			testid: "wa-web-lite-recent-calls-button",
			label: ie
		}), n[44] = oe, n[45] = le) : le = n[45];
		var se;
		n[46] !== re || n[47] !== le ? (se = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: p.headerActions,
			testid: "wa-web-lite-header-actions",
			children: [re, le]
		}), n[46] = re, n[47] = le, n[48] = se) : se = n[48];
		var ue;
		n[49] === Symbol.for("react.memo_cache_sentinel") ? (ue = u.jsx("div", {
			className: "x1qab1bc",
			children: u.jsx(r("WAWebCometLiteProfileButton.react"), {})
		}), n[49] = ue) : ue = n[49];
		var ce;
		n[50] !== se ? (ce = u.jsxs("header", babelHelpers.extends({}, Y, {
			"data-testid": "wa-web-lite-header",
			children: [
				Z,
				se,
				ue
			]
		})), n[50] = se, n[51] = ce) : ce = n[51];
		var de;
		n[52] !== P ? (de = u.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			justify: "center",
			align: "center",
			xstyle: p.width100,
			children: P
		}), n[52] = P, n[53] = de) : de = n[53];
		var me;
		n[54] === Symbol.for("react.memo_cache_sentinel") ? (me = u.jsx(r("WAWebCometLiteE2EFooter.react"), {}), n[54] = me) : me = n[54];
		var pe;
		return n[55] !== ce || n[56] !== de ? (pe = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: i,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: X,
				testid: "wa-web-lite-root",
				children: [
					ce,
					de,
					me
				]
			})
		}), n[55] = ce, n[56] = de, n[57] = pe) : pe = n[57], pe;
	}
	function f() {
		return r("WAWebCallCollection").activeCall;
	}
	l.default = _;
}), 226);

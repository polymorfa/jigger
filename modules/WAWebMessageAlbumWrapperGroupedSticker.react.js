__d("WAWebMessageAlbumWrapperGroupedSticker.react", [
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebMessageGroupedSticker.react",
	"WAWebMessageGroupedStickerCheckbox.react",
	"WAWebMessageUiUtils",
	"WAWebMsgSendFailIcon.react",
	"WAWebReactionsListeners.react",
	"WAWebReactionsUtils",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperListeners.react",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(100), n = e.albumId, a = e.albumWrapperClass, i = e.albumWrapperRef, l = e.author, c = e.containerClass, p = e.displayType, _ = e.focusedMsgIndex, f = e.groupProfilePicture, g = e.handleModalClosed, h = e.handleOpenDeleteFlow, y = e.handleOpenForwardFlow, C = e.handleReactionChange, b = e.handleSelectChange, v = e.handleSelectClick, S = e.isAlbumWrapperKeyboardFocused, R = e.isFocusedAlbum, L = e.isWide, E = e.leftStickerBubbleRef, k = e.menuTransition, I = e.msgs, T = e.rightStickerBubbleRef, D = e.scrollMsg, x = e.selectable, $ = e.selected, P = e.selectedMessages, N = e.setIsFocused, M = e.tail, w = u(null), A = u(null), F = I[0], O = I[1], B;
		if (t[0] !== b || t[1] !== I || t[2] !== P) {
			var W;
			t[4] !== b || t[5] !== P ? (W = function(t) {
				return s.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
					parent: { onSelectChange: b },
					msgId: t.id.toString(),
					selectedMessages: P
				}, t.id.toString());
			}, t[4] = b, t[5] = P, t[6] = W) : W = t[6], B = I.map(W), t[0] = b, t[1] = I, t[2] = P, t[3] = B;
		} else B = t[3];
		var q = B, U;
		if (t[7] !== F.mediaData || t[8] !== F.type) {
			var V;
			U = F.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(F.mediaData.accessibilityLabel, (V = F.mediaData.emojis) == null ? void 0 : V.join(" ")) : null, t[7] = F.mediaData, t[8] = F.type, t[9] = U;
		} else U = t[9];
		var H = U, G;
		if (t[10] !== O.mediaData || t[11] !== O.type) {
			var z;
			G = O.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(O.mediaData.accessibilityLabel, (z = O.mediaData.emojis) == null ? void 0 : z.join(" ")) : null, t[10] = O.mediaData, t[11] = O.type, t[12] = G;
		} else G = t[12];
		var j = G, K;
		t[13] !== F || t[14] !== H || t[15] !== v || t[16] !== x || t[17] !== P ? (K = x ? s.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
			checked: P.isSelected(o("WAWebStateUtils").unproxy(F.unsafe())),
			onClick: function(t) {
				v({ selectedMsg: F.unsafe() });
			},
			ariaLabel: H
		}) : null, t[13] = F, t[14] = H, t[15] = v, t[16] = x, t[17] = P, t[18] = K) : K = t[18];
		var Q = K, X;
		t[19] !== v || t[20] !== O || t[21] !== j || t[22] !== x || t[23] !== P ? (X = x ? s.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
			checked: P.isSelected(o("WAWebStateUtils").unproxy(O.unsafe())),
			onClick: function(t) {
				v({ selectedMsg: O.unsafe() });
			},
			ariaLabel: j
		}) : null, t[19] = v, t[20] = O, t[21] = j, t[22] = x, t[23] = P, t[24] = X) : X = t[24];
		var Y = X, J;
		t[25] !== I ? (J = I.some(m) ? s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
			msgs: I,
			showForMessages: !1,
			showForAddOns: !0,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
		}) : null, t[25] = I, t[26] = J) : J = t[26];
		var Z = J, ee;
		t[27] !== L ? (ee = {
			0: "x78zum5 x1q0g3np x1a02dak",
			1: "x78zum5 x1q0g3np x1a02dak xl56j7k"
		}[!!L << 0], t[27] = L, t[28] = ee) : ee = t[28];
		var te = ee, ne, re;
		t[29] !== N ? (ne = function() {
			N(!0);
		}, re = function() {
			N(!1);
		}, t[29] = N, t[30] = ne, t[31] = re) : (ne = t[30], re = t[31]);
		var oe;
		t[32] !== $ ? (oe = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "delay-leave",
			children: $
		}), t[32] = $, t[33] = oe) : oe = t[33];
		var ae;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (ae = function() {
			var e;
			return (e = w.current) == null ? void 0 : e.startAnimation();
		}, t[34] = ae) : ae = t[34];
		var ie;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "x1n2onr6" }, t[35] = ie) : ie = t[35];
		var le;
		t[36] !== Q ? (le = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "delay-leave",
			children: Q
		}), t[36] = Q, t[37] = le) : le = t[37];
		var se;
		t[38] !== F ? (se = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(F.unsafe())), t[38] = F, t[39] = se) : se = t[39];
		var ue = R && _ === 0, ce;
		t[40] !== p || t[41] !== g || t[42] !== h || t[43] !== y || t[44] !== S || t[45] !== k || t[46] !== D || t[47] !== se || t[48] !== ue ? (ce = s.jsx(r("WAWebMessageGroupedSticker.react"), {
			msg: se,
			menuTransition: k,
			onOpenForwardFlow: y,
			onOpenDeleteFlow: h,
			scrollMsg: D,
			isFocused: ue,
			forwardRef: w,
			displayType: p,
			rowIsKeyboardFocused: S,
			onModalClosed: g
		}), t[40] = p, t[41] = g, t[42] = h, t[43] = y, t[44] = S, t[45] = k, t[46] = D, t[47] = se, t[48] = ue, t[49] = ce) : ce = t[49];
		var de;
		t[50] !== E || t[51] !== le || t[52] !== ce ? (de = s.jsxs("div", babelHelpers.extends({
			onMouseEnter: ae,
			role: "img"
		}, ie, {
			ref: E,
			children: [le, ce]
		})), t[50] = E, t[51] = le, t[52] = ce, t[53] = de) : de = t[53];
		var me;
		t[54] === Symbol.for("react.memo_cache_sentinel") ? (me = function() {
			var e;
			return (e = A.current) == null ? void 0 : e.startAnimation();
		}, t[54] = me) : me = t[54];
		var pe;
		t[55] === Symbol.for("react.memo_cache_sentinel") ? (pe = { className: "x1n2onr6" }, t[55] = pe) : pe = t[55];
		var _e;
		t[56] !== Y ? (_e = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "delay-leave",
			children: Y
		}), t[56] = Y, t[57] = _e) : _e = t[57];
		var fe;
		t[58] !== O ? (fe = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(O.unsafe())), t[58] = O, t[59] = fe) : fe = t[59];
		var ge = R && _ === 1, he;
		t[60] !== p || t[61] !== g || t[62] !== h || t[63] !== y || t[64] !== S || t[65] !== k || t[66] !== D || t[67] !== fe || t[68] !== ge ? (he = s.jsx(r("WAWebMessageGroupedSticker.react"), {
			msg: fe,
			menuTransition: k,
			onOpenForwardFlow: y,
			onOpenDeleteFlow: h,
			scrollMsg: D,
			isFocused: ge,
			forwardRef: A,
			displayType: p,
			rowIsKeyboardFocused: S,
			onModalClosed: g
		}), t[60] = p, t[61] = g, t[62] = h, t[63] = y, t[64] = S, t[65] = k, t[66] = D, t[67] = fe, t[68] = ge, t[69] = he) : he = t[69];
		var ye;
		t[70] !== T || t[71] !== _e || t[72] !== he ? (ye = s.jsxs("div", babelHelpers.extends({
			onMouseEnter: me,
			role: "img"
		}, pe, {
			ref: T,
			children: [_e, he]
		})), t[70] = T, t[71] = _e, t[72] = he, t[73] = ye) : ye = t[73];
		var Ce;
		t[74] !== I ? (Ce = I.map(d), t[74] = I, t[75] = Ce) : Ce = t[75];
		var be;
		t[76] !== C || t[77] !== Ce ? (be = s.jsx(r("WAWebReactionsListeners.react"), {
			msgIds: Ce,
			onReactionChange: C
		}), t[76] = C, t[77] = Ce, t[78] = be) : be = t[78];
		var ve;
		t[79] !== te || t[80] !== de || t[81] !== ye || t[82] !== be ? (ve = s.jsxs("div", {
			className: te,
			children: [
				de,
				ye,
				be
			]
		}), t[79] = te, t[80] = de, t[81] = ye, t[82] = be, t[83] = ve) : ve = t[83];
		var Se;
		t[84] !== l || t[85] !== c || t[86] !== f || t[87] !== Z || t[88] !== ve || t[89] !== M ? (Se = s.jsxs("div", {
			className: c,
			role: "group",
			onContextMenu: o("WAWebStopEvent").stopPropagation,
			children: [
				M,
				f,
				l,
				ve,
				Z
			]
		}), t[84] = l, t[85] = c, t[86] = f, t[87] = Z, t[88] = ve, t[89] = M, t[90] = Se) : Se = t[90];
		var Re;
		if (t[91] !== n || t[92] !== a || t[93] !== i || t[94] !== q || t[95] !== Se || t[96] !== ne || t[97] !== re || t[98] !== oe) {
			var Le = s.jsxs("div", {
				className: a,
				"data-id": n,
				ref: i,
				onFocus: ne,
				onBlur: re,
				tabIndex: -1,
				children: [
					oe,
					Se,
					q
				]
			});
			Re = s.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
				role: "row",
				children: Le
			}), t[91] = n, t[92] = a, t[93] = i, t[94] = q, t[95] = Se, t[96] = ne, t[97] = re, t[98] = oe, t[99] = Re;
		} else Re = t[99];
		return Re;
	}
	function d(e) {
		return e.id.toString();
	}
	function m(e) {
		return o("WAWebReactionsUtils").canReactToMessage(e.unsafe());
	}
	l.default = c;
}), 98);

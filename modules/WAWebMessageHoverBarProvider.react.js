__d("WAWebMessageHoverBarProvider.react", [
	"fbt",
	"ReactDOM",
	"WALogger",
	"WAWebMessageHoverBarContainer.react",
	"WAWebMessageHoverBarContext",
	"WAWebNoop",
	"WAWebReactionGatingUtils",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebSendReactionMsgAction",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebOnUnmount",
	"useWAWebReactionEmojiPickerMenu",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = 50, y = .45, C = .4, b = .2, v = .4, S = 90, R = 500, L = 200, E = {
		canReact: !0,
		hasReply: !0,
		hasEdit: !1
	}, k = "xlcm4rn-B", I = "x17qceat-B";
	function T(e) {
		var t = o("react-compiler-runtime").c(126), n = e.children, a = g(null), i = a[0], l = a[1], u = g(!1), d = u[0], m = u[1], _ = g(null), k = _[0], I = _[1], T = g(E), $ = T[0], P = T[1], N = g(!1), M = N[0], w = N[1], A = g(null), F = A[0], O = A[1], B = g(!1), W = B[0], q = B[1], U = f(null), V = f(null), H = f(null), G = f(null), z = f(!1), j = f(!1), K = f(null), Q = f(r("WAWebNoop")), X = f(!1), Y = f(null), J = f(null), Z;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (Z = function() {
			K.current = null, l(null), I(null), P(E), w(!1), O(null), q(!1), X.current = !1, U.current = null, V.current = null, z.current = !1;
		}, t[0] = Z) : Z = t[0];
		var ee = Z, te;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (te = function() {
			X.current && ee();
		}, t[1] = te) : te = t[1];
		var ne = o("useWAWebTimeout").useManualTimeout(te), re = ne[0], oe = ne[1], ae;
		t[2] !== oe || t[3] !== re ? (ae = function() {
			if (!X.current) {
				var e = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled() && K.current != null;
				if (!e) {
					oe(), ee();
					return;
				}
				X.current = !0, q(!0), re(L);
			}
		}, t[2] = oe, t[3] = re, t[4] = ae) : ae = t[4];
		var ie = ae, le, se;
		t[5] !== i || t[6] !== ie ? (le = function() {
			if (i != null) {
				var e = U.current, t = e == null ? void 0 : e.closest("[data-testid=\"conversation-panel-messages\"]");
				if (!(e == null || t == null)) {
					var n = new IntersectionObserver(function(e) {
						var t = e[0];
						t != null && t.intersectionRatio === 0 && !j.current && ie();
					}, { root: t });
					return n.observe(e), (function() {
						n.disconnect();
					});
				}
			}
		}, se = [i, ie], t[5] = i, t[6] = ie, t[7] = le, t[8] = se) : (le = t[7], se = t[8]), p(le, se);
		var ue;
		t[9] !== ie ? (ue = function() {
			j.current || ie();
		}, t[9] = ie, t[10] = ue) : ue = t[10];
		var ce = o("useWAWebTimeout").useManualTimeout(ue), de = ce[0], me = ce[1], pe;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (pe = function() {
			z.current = !1;
		}, t[11] = pe) : pe = t[11];
		var _e = o("useWAWebTimeout").useManualTimeout(pe), fe = _e[0], ge;
		t[12] !== me || t[13] !== oe ? (ge = function(t, n, r, o) {
			me(), X.current && (oe(), X.current = !1, q(!1));
			var e = n.id.toString();
			if (!(K.current !== e && (j.current || z.current))) {
				if (K.current === e) {
					U.current = t, V.current = o;
					return;
				}
				K.current = e, U.current = t, V.current = o, O(t), l(n), m(r), I(o.menuContent), P(x(o)), w(!1);
			}
		}, t[12] = me, t[13] = oe, t[14] = ge) : ge = t[14];
		var he = ge, ye;
		t[15] !== he ? (ye = function() {
			var e = Y.current, t = J.current;
			t != null && (document.removeEventListener("mousemove", t, !0), J.current = null), Y.current = null, e != null && he(e.bubbleEl, e.msg, e.isSentByMe, e.actions);
		}, t[15] = he, t[16] = ye) : ye = t[16];
		var Ce = r("useWAWebStableCallback")(ye), be;
		t[17] !== Ce ? (be = function() {
			Ce();
		}, t[17] = Ce, t[18] = be) : be = t[18];
		var ve = o("useWAWebTimeout").useManualTimeout(be), Se = ve[0], Re = ve[1], Le;
		t[19] !== Re ? (Le = function() {
			var e = J.current;
			e != null && (document.removeEventListener("mousemove", e, !0), J.current = null), Re(), Y.current = null;
		}, t[19] = Re, t[20] = Le) : Le = t[20];
		var Ee = Le, ke;
		t[21] !== Ce || t[22] !== Re || t[23] !== Ee || t[24] !== Se ? (ke = function(t) {
			Ee(), Y.current = t;
			var e = {
				emaVelocity: -1,
				lastT: 0,
				lastX: 0,
				lastY: 0,
				peakVelocity: 0
			}, n = function(n) {
				Se(S);
				var t = n.timeStamp;
				if (e.lastT === 0) {
					e.lastT = t, e.lastX = n.clientX, e.lastY = n.clientY;
					return;
				}
				var r = t - e.lastT;
				if (!(r <= 0)) {
					var o = Math.hypot(n.clientX - e.lastX, n.clientY - e.lastY), a = o / r;
					e.lastT = t, e.lastX = n.clientX, e.lastY = n.clientY, e.emaVelocity = e.emaVelocity < 0 ? a : v * a + (1 - v) * e.emaVelocity, e.emaVelocity > e.peakVelocity && (e.peakVelocity = e.emaVelocity), e.peakVelocity >= C && e.emaVelocity < e.peakVelocity * y && e.emaVelocity < b && (Re(), Ce());
				}
			};
			J.current = n, document.addEventListener("mousemove", n, {
				capture: !0,
				passive: !0
			}), Se(S);
		}, t[21] = Ce, t[22] = Re, t[23] = Ee, t[24] = Se, t[25] = ke) : ke = t[25];
		var Ie = ke, Te;
		t[26] !== he || t[27] !== Ie ? (Te = function(t, n, r, o) {
			var e, a = n.id.toString();
			if (K.current === a) {
				he(t, n, r, o);
				return;
			}
			if (((e = Y.current) == null ? void 0 : e.msg.id.toString()) === a) {
				Y.current = {
					actions: o,
					bubbleEl: t,
					isSentByMe: r,
					msg: n
				};
				return;
			}
			Ie({
				actions: o,
				bubbleEl: t,
				isSentByMe: r,
				msg: n
			});
		}, t[26] = he, t[27] = Ie, t[28] = Te) : Te = t[28];
		var De = Te;
		r("useWAWebOnUnmount")(Ee);
		var xe;
		t[29] !== Ee || t[30] !== de ? (xe = function() {
			Ee(), de(h);
		}, t[29] = Ee, t[30] = de, t[31] = xe) : xe = t[31];
		var $e = xe, Pe;
		t[32] !== de ? (Pe = function() {
			j.current || z.current || de(h);
		}, t[32] = de, t[33] = Pe) : Pe = t[33];
		var Ne = Pe, Me;
		t[34] !== i ? (Me = function(t) {
			i != null && o("WAWebSendReactionMsgAction").sendReactionToMsg(i, t).then(function() {
				t === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT ? o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect() : o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
			}).catch(D);
		}, t[34] = i, t[35] = Me) : Me = t[35];
		var we = Me, Ae;
		t[36] !== me ? (Ae = function() {
			me();
		}, t[36] = me, t[37] = Ae) : Ae = t[37];
		var Fe = Ae, Oe;
		t[38] !== me ? (Oe = function() {
			me();
		}, t[38] = me, t[39] = Oe) : Oe = t[39];
		var Be = Oe, We;
		t[40] !== Ne ? (We = function(t) {
			var e = t.relatedTarget, n = H.current;
			e instanceof Node && (n == null ? void 0 : n.contains(e)) === !0 || Ne();
		}, t[40] = Ne, t[41] = We) : We = t[41];
		var qe = We, Ue;
		t[42] !== oe ? (Ue = function(t) {
			t.target === t.currentTarget && X.current && (oe(), ee());
		}, t[42] = oe, t[43] = Ue) : Ue = t[43];
		var Ve = Ue, He;
		t[44] !== ie ? (He = function() {
			var e;
			X.current || ((e = V.current) == null || e.onReply == null || e.onReply(), ie());
		}, t[44] = ie, t[45] = He) : He = t[45];
		var Ge = He, ze;
		t[46] !== ie ? (ze = function() {
			var e;
			X.current || ((e = V.current) == null || e.onEdit == null || e.onEdit(), ie());
		}, t[46] = ie, t[47] = ze) : ze = t[47];
		var je = ze, Ke;
		t[48] === Symbol.for("react.memo_cache_sentinel") ? (Ke = function() {
			var e;
			(e = V.current) == null || e.returnFocusToMessage == null || e.returnFocusToMessage();
		}, t[48] = Ke) : Ke = t[48];
		var Qe = Ke, Xe;
		t[49] !== we ? (Xe = function(t) {
			X.current || (we(t), ee(), Q.current());
		}, t[49] = we, t[50] = Xe) : Xe = t[50];
		var Ye = Xe, Je = k, Ze;
		if (t[51] !== (i == null ? void 0 : i.id)) {
			var et;
			Ze = (et = i == null ? void 0 : i.id.toString()) != null ? et : null, t[51] = i == null ? void 0 : i.id, t[52] = Ze;
		} else Ze = t[52];
		var tt;
		t[53] !== i || t[54] !== ie ? (tt = function() {
			if (i == null) ie();
			else {
				var e;
				(e = G.current) == null || e.focus();
			}
		}, t[53] = i, t[54] = ie, t[55] = tt) : tt = t[55];
		var nt;
		t[56] !== Ye || t[57] !== Ze || t[58] !== tt ? (nt = {
			targetRef: H,
			msgId: Ze,
			onSelection: Ye,
			align: "start",
			onClose: tt
		}, t[56] = Ye, t[57] = Ze, t[58] = tt, t[59] = nt) : nt = t[59];
		var rt = r("useWAWebReactionEmojiPickerMenu")(nt), ot = rt.closeMenu, at = rt.isMenuOpen, it = rt.menuPortal, lt = rt.openMenu, st, ut;
		t[60] !== ot ? (st = function() {
			Q.current = ot;
		}, ut = [ot], t[60] = ot, t[61] = st, t[62] = ut) : (st = t[61], ut = t[62]), p(st, ut);
		var ct;
		t[63] !== i || t[64] !== ie ? (ct = function() {
			i == null && ie();
		}, t[63] = i, t[64] = ie, t[65] = ct) : ct = t[65];
		var dt;
		t[66] !== Je || t[67] !== ct ? (dt = {
			targetRef: H,
			menu: Je,
			position: "below",
			align: "end",
			enableUIM: !0,
			onClose: ct
		}, t[66] = Je, t[67] = ct, t[68] = dt) : dt = t[68];
		var mt = r("useWDSMenu")(dt), pt = mt.isMenuOpen, _t = mt.menuPortal, ft = mt.openMenu, gt = at || pt, ht;
		t[69] !== me || t[70] !== ft || t[71] !== fe ? (ht = function() {
			var e, t;
			X.current || (I((e = (t = V.current) == null ? void 0 : t.menuContent) != null ? e : null), me(), z.current = !0, fe(R), ft());
		}, t[69] = me, t[70] = ft, t[71] = fe, t[72] = ht) : ht = t[72];
		var yt = ht, Ct, bt;
		t[73] !== gt ? (Ct = function() {
			j.current = gt, gt && (z.current = !1);
		}, bt = [gt], t[73] = gt, t[74] = Ct, t[75] = bt) : (Ct = t[74], bt = t[75]), p(Ct, bt);
		var vt;
		t[76] !== me || t[77] !== lt || t[78] !== fe ? (vt = function() {
			X.current || (me(), z.current = !0, fe(R), lt());
		}, t[76] = me, t[77] = lt, t[78] = fe, t[79] = vt) : vt = t[79];
		var St = vt, Rt;
		t[80] !== ot || t[81] !== we || t[82] !== at ? (Rt = function(t) {
			X.current || (we(t), ee(), at && ot());
		}, t[80] = ot, t[81] = we, t[82] = at, t[83] = Rt) : Rt = t[83];
		var Lt = Rt, Et = i != null || gt, kt;
		t[84] === Symbol.for("react.memo_cache_sentinel") ? (kt = function(t) {
			H.current = t;
			var e = U.current;
			t == null || e == null || w(t.offsetWidth > e.offsetWidth);
		}, t[84] = kt) : kt = t[84];
		var It = kt, Tt;
		if (t[85] !== (i == null ? void 0 : i.id)) {
			var Dt;
			Tt = (Dt = i == null ? void 0 : i.id.toString()) != null ? Dt : null, t[85] = i == null ? void 0 : i.id, t[86] = Tt;
		} else Tt = t[86];
		var xt = Tt, $t;
		t[87] !== xt || t[88] !== M ? ($t = function(t) {
			return xt === t && M;
		}, t[87] = xt, t[88] = M, t[89] = $t) : $t = t[89];
		var Pt = $t, Nt;
		t[90] !== he || t[91] !== me || t[92] !== Pt || t[93] !== Ne || t[94] !== $e || t[95] !== De ? (Nt = {
			onHoverStart: De,
			onHoverEnd: $e,
			onFocusStart: he,
			onFocusEnd: Ne,
			cancelDismiss: me,
			isBridgeActiveForMsg: Pt
		}, t[90] = he, t[91] = me, t[92] = Pt, t[93] = Ne, t[94] = $e, t[95] = De, t[96] = Nt) : Nt = t[96];
		var Mt = Nt, wt = d ? !M : M, At, Ft, Ot, Bt;
		if (t[97] !== $ || t[98] !== i || t[99] !== wt || t[100] !== n || t[101] !== Mt || t[102] !== je || t[103] !== Ve || t[104] !== qe || t[105] !== Be || t[106] !== Fe || t[107] !== yt || t[108] !== St || t[109] !== Lt || t[110] !== Ge || t[111] !== W || t[112] !== Et || t[113] !== $e || t[114] !== F) {
			var Wt = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled();
			At = r("WAWebMessageHoverBarContext").Provider, Ft = Mt, Ot = n, Bt = Et && i != null && F != null && o("ReactDOM").createPortal(c.jsx("div", babelHelpers.extends({ ref: It }, {
				0: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x" },
				8: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod" },
				4: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn" },
				12: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn" },
				2: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl" },
				10: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl" },
				6: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl" },
				14: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl" },
				1: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				9: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				5: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				13: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				3: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				11: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				7: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
				15: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" }
			}[!!wt << 3 | !!(Wt && W) << 2 | !!W << 1 | !!(Wt && !W) << 0], {
				"data-testid": "reactions_hover_bar_content",
				role: "group",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				onAnimationEnd: Wt ? Ve : void 0,
				onFocus: Be,
				onBlur: qe,
				onMouseEnter: Fe,
				onMouseLeave: $e,
				children: c.jsx(r("WAWebMessageHoverBarContainer.react"), {
					msg: i,
					canReact: $.canReact,
					onReaction: Lt,
					onOpenEmojiPicker: St,
					onReply: $.hasReply ? Ge : null,
					onEdit: $.hasEdit ? je : null,
					onMoreOptions: yt,
					onEscape: Qe,
					onMouseEnter: Fe,
					toggleButtonRef: G
				})
			}), i.id.toString()), F), t[97] = $, t[98] = i, t[99] = wt, t[100] = n, t[101] = Mt, t[102] = je, t[103] = Ve, t[104] = qe, t[105] = Be, t[106] = Fe, t[107] = yt, t[108] = St, t[109] = Lt, t[110] = Ge, t[111] = W, t[112] = Et, t[113] = $e, t[114] = F, t[115] = At, t[116] = Ft, t[117] = Ot, t[118] = Bt;
		} else At = t[115], Ft = t[116], Ot = t[117], Bt = t[118];
		var qt;
		return t[119] !== At || t[120] !== it || t[121] !== _t || t[122] !== Ft || t[123] !== Ot || t[124] !== Bt ? (qt = c.jsxs(At, {
			value: Ft,
			children: [
				Ot,
				Bt,
				it,
				_t
			]
		}), t[119] = At, t[120] = it, t[121] = _t, t[122] = Ft, t[123] = Ot, t[124] = Bt, t[125] = qt) : qt = t[125], qt;
	}
	function D(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to send reaction from hover bar"]))).catching(r("getErrorSafe")(t)).sendLogs("hover-bar-send-reaction-failed");
	}
	function x(e) {
		return {
			canReact: e.canReact !== !1,
			hasReply: e.onReply != null,
			hasEdit: e.onEdit != null
		};
	}
	l.default = T;
}), 226);

__d("WAWebReactionDetailsListItem.react", [
	"fbt",
	"WALogger",
	"WAWebBusinessProfileTypes",
	"WAWebCellFrame.react",
	"WAWebChatContactUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatParticipantColor",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFocusTracer",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebMsgGetters",
	"WAWebNoop",
	"WAWebReactionCellDetailThumb.react",
	"WAWebReactionEmoji.react",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"WAWebSendReactionMsgAction",
	"WAWebUnstyledButton.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebChatValues",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebContactValues",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useImperativeHandle, _ = m.useRef, f = m.useState, g = {
		tilded: {
			"::before_content": "xxayilr",
			$$css: !0
		},
		reactionAndMediaThumbContainer: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			marginInlineEnd: "xf6vk7d",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(92), n = e.isAggregated, a = e.onCloseDetailsPane, i = e.onItemBlur, l = e.onItemFocus, c = e.parentMsg, m = e.reaction, h = e.ref, b = n === void 0 ? !1 : n, v = _(null), S = f(!1), R = S[0], L = S[1], E;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			r("WAWebFocusTracer").focus(v.current), L(!0);
		}, t[0] = E) : E = t[0];
		var k = E, I = m.reactionText, T = m.senderObj, D = o("WAWebFrontendMsgGetters").getChat(c), x;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (x = [o("WAWebFrontendChatGetters").getGroupMetadata, o("WAWebChatGetters").getIsGroup], t[1] = x) : x = t[1], o("useWAWebChatValues").useChatValues(D.id, x);
		var $ = !o("WAWebReactionsUtils").isReactionsEnabledInCAG(D), P = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_reactions_2"), N;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			return { focus: k };
		}, t[2] = N) : N = t[2], p(h, N);
		var M;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (M = ["id", "phoneNumber"], t[3] = M) : M = t[3];
		var w = o("useWAWebModelValues").useModelValues(T, M), A = T;
		if (w.id.isLid() && w.phoneNumber) {
			var F;
			t[4] !== w.phoneNumber ? (F = o("WAWebContactCollection").ContactCollection.get(w.phoneNumber), t[4] = w.phoneNumber, t[5] = F) : F = t[5];
			var O = F;
			O && (A = O);
		}
		var B;
		if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
			var W;
			B = [
				(W = o("WAWebContactGetters")).getId,
				W.getIsMe,
				W.getName,
				o("WAWebFrontendContactGetters").getFormattedName,
				W.getNotifyName,
				o("WAWebFrontendContactGetters").getIsNonVerified,
				W.getIsBusiness,
				W.getVerifiedLevel
			], t[6] = B;
		} else B = t[6];
		var q = o("useWAWebContactValues").useContactValues(A.id, B), U = q[0], V = q[1], H = q[2], G = q[3], z = q[4], j = q[5], K = q[6], Q = q[7], X = o("WAWebChatParticipantColor").getAssignedColor(D, A.id), Y = r("useWAWebContactFormattedUsernameOrPhoneByChat")(D, T), J = Y.formattedUsernameOrPhone, Z = r("useWAWebUIM")(), ee;
		t[7] !== V || t[8] !== a || t[9] !== c || t[10] !== Z || t[11] !== P ? (ee = function(t) {
			t.preventDefault(), t.stopPropagation(), V && (o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect(), o("WAWebSendReactionMsgAction").sendReactionToMsg(c, o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT).then(P ? r("WAWebNoop") : a).catch(function(e) {
				Z && Z.requestDismiss();
			}));
		}, t[7] = V, t[8] = a, t[9] = c, t[10] = Z, t[11] = P, t[12] = ee) : ee = t[12];
		var te = ee, ne;
		t[13] !== D ? (ne = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(D), t[13] = D, t[14] = ne) : ne = t[14];
		var re = ne, oe = J != null && !j, ae;
		o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(A) && (re || oe) ? ae = J : ae = z != null ? "~" + z : null;
		var ie = null;
		if (!H && !r("isStringNullOrEmpty")(z)) {
			var le;
			t[15] !== re ? (le = (u || (u = r("stylex")))(!re && !g.tilded), t[15] = re, t[16] = le) : le = t[16];
			var se;
			t[17] !== ae || t[18] !== le ? (se = d.jsx(o("WAWebEmojiText.react").EmojiText, {
				className: le,
				direction: "auto",
				text: ae
			}), t[17] = ae, t[18] = le, t[19] = se) : se = t[19], ie = se;
		}
		var ue;
		t[20] !== re || t[21] !== G || t[22] !== K || t[23] !== z || t[24] !== A || t[25] !== oe || t[26] !== Q ? (ue = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(A) && (re || oe && (!K || Q === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)) ? o("WAWebChatContactUtils").getAccessibleNotifyName(z).toString() : G, t[20] = re, t[21] = G, t[22] = K, t[23] = z, t[24] = A, t[25] = oe, t[26] = Q, t[27] = ue) : ue = t[27];
		var ce = ue;
		ie != null && ae != null && (ce = ce + ", " + ae);
		var de;
		if (t[28] !== ce || t[29] !== V || t[30] !== I) {
			if (de = o("WAWebReactionsUtils").reactionBubbleAriaLabelOneReaction(ce, I), V) {
				var me = de.toString(), pe;
				t[32] === Symbol.for("react.memo_cache_sentinel") ? (pe = s._(
					/*BTDS*/
					""
				).toString(), t[32] = pe) : pe = t[32], de = me + " " + pe;
			}
			t[28] = ce, t[29] = V, t[30] = I, t[31] = de;
		} else de = t[31];
		var _e;
		t[33] !== b || t[34] !== c ? (_e = b && o("WAWebMsgGetters").getIsMedia(c), t[33] = b, t[34] = c, t[35] = _e) : _e = t[35];
		var fe = _e, ge;
		t[36] !== a || t[37] !== c || t[38] !== I || t[39] !== fe ? (ge = fe ? d.jsx(r("WAWebFlexItem.react"), {
			xstyle: g.reactionAndMediaThumbContainer,
			testid: "reaction-and-media-thumb",
			children: d.jsx(o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb, {
				msg: c,
				reactionText: I,
				onCloseDetailsPane: a
			})
		}) : null, t[36] = a, t[37] = c, t[38] = I, t[39] = fe, t[40] = ge) : ge = t[40];
		var he = ge, ye;
		t[41] !== $ || t[42] !== U || t[43] !== V || t[44] !== a || t[45] !== c ? (ye = $ ? function(e) {
			if (e.preventDefault(), e.stopPropagation(), !V) {
				a();
				var t = U;
				c.from.isGroup() && (t = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(U, "info_panel")), t != null && o("WAWebFindChatAction").findOrCreateLatestChat(t, "reactionDetailsPane").then(C).catch(y);
			}
		} : null, t[41] = $, t[42] = U, t[43] = V, t[44] = a, t[45] = c, t[46] = ye) : ye = t[46];
		var Ce = ye, be;
		if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(A) && (re || oe && (!K || Q === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH))) {
			var ve;
			t[47] !== z ? (ve = o("WAWebChatContactUtils").getFormattedNotifyName(z), t[47] = z, t[48] = ve) : ve = t[48], be = ve;
		} else be = G;
		var Se;
		t[49] !== $ || t[50] !== G || t[51] !== Ce || t[52] !== V || t[53] !== be ? (Se = V ? G : d.jsx(r("WAWebUnstyledButton.react"), {
			disabled: !$,
			onClick: Ce,
			title: s._(
				/*BTDS*/
				""
			),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "auto",
				text: be
			})
		}), t[49] = $, t[50] = G, t[51] = Ce, t[52] = V, t[53] = be, t[54] = Se) : Se = t[54];
		var Re = Se, Le;
		t[55] === Symbol.for("react.memo_cache_sentinel") ? (Le = s._(
			/*BTDS*/
			""
		), t[55] = Le) : Le = t[55];
		var Ee;
		t[56] !== te ? (Ee = d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: te,
			children: Le
		}), t[56] = te, t[57] = Ee) : Ee = t[57];
		var ke = Ee, Ie;
		t[58] !== i ? (Ie = function() {
			L(!1), i == null || i();
		}, t[58] = i, t[59] = Ie) : Ie = t[59];
		var Te = Ie, De;
		t[60] !== V || t[61] !== l ? (De = function() {
			V && L(!0), l == null || l();
		}, t[60] = V, t[61] = l, t[62] = De) : De = t[62];
		var xe = De, $e;
		t[63] !== te ? ($e = {
			enter: te,
			space: te
		}, t[63] = te, t[64] = $e) : $e = t[64];
		var Pe = $e, Ne = V ? "button" : "listitem", Me;
		t[65] !== Pe || t[66] !== V ? (Me = V ? Pe : {}, t[65] = Pe, t[66] = V, t[67] = Me) : Me = t[67];
		var we = V ? "reactions-details-cell-me" : "reactions-details-cell-not-me", Ae;
		t[68] !== X || t[69] !== Ce || t[70] !== U ? (Ae = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			onClick: Ce,
			id: U,
			size: 40,
			loadAnimation: !1,
			theme: "reaction_details",
			authorColor: X
		}), t[68] = X, t[69] = Ce, t[70] = U, t[71] = Ae) : Ae = t[71];
		var Fe = V ? ke : ie, Oe;
		t[72] !== he || t[73] !== I || t[74] !== fe ? (Oe = fe ? he : d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
			scale: "list",
			size: "large",
			reaction: I
		}), t[72] = he, t[73] = I, t[74] = fe, t[75] = Oe) : Oe = t[75];
		var Be = V ? "reaction-by-me" : "reaction-by-others", We;
		t[76] !== te || t[77] !== R || t[78] !== Re || t[79] !== we || t[80] !== Ae || t[81] !== Fe || t[82] !== Oe || t[83] !== Be ? (We = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: d.jsx(r("WAWebFlexItem.react"), {
				grow: 2,
				children: d.jsx(r("WAWebCellFrame.react"), {
					testid: we,
					image: Ae,
					primary: Re,
					onClick: te,
					secondary: Fe,
					detail: Oe,
					theme: Be,
					active: R
				})
			})
		}), t[76] = te, t[77] = R, t[78] = Re, t[79] = we, t[80] = Ae, t[81] = Fe, t[82] = Oe, t[83] = Be, t[84] = We) : We = t[84];
		var qe;
		return t[85] !== Te || t[86] !== xe || t[87] !== de || t[88] !== Ne || t[89] !== Me || t[90] !== We ? (qe = d.jsx(r("WAWebKeyboardRotateFocusArrows.react"), { children: d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: Ne,
			"aria-label": de,
			handlers: Me,
			ref: v,
			onBlur: Te,
			onFocus: xe,
			children: We
		}) }), t[85] = Te, t[86] = xe, t[87] = de, t[88] = Ne, t[89] = Me, t[90] = We, t[91] = qe) : qe = t[91], qe;
	}
	function y() {
		return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[reactions details] failed to find or create latest chat"]))).sendLogs("reactions-failed-to-find-or-create-latest-chat");
	}
	function C(e) {
		var t = e.chat;
		o("WAWebCmd").Cmd.chatInfoDrawer(t), o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.selectProfile();
	}
	l.default = h;
}), 226);

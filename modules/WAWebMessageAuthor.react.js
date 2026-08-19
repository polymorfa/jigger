__d("WAWebMessageAuthor.react", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatParticipantColor",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebContactGetters",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupChatProfilePicture.react",
	"WAWebGroupHoverCardGatingUtils",
	"WAWebGroupHoverCardLoadable",
	"WAWebKeyboardIsKeyActivation",
	"WAWebLidMigrationUtils",
	"WAWebMemberLabelRenderer.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebMessageUiUtils",
	"WAWebMiscGatingUtils",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterAdminProfileDetailsDrawer.react",
	"WAWebNewsletterAdminProfilePicture.react",
	"WAWebNewsletterGatingUtils",
	"WAWebPopover.react",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebStylesEnv",
	"WAWebUnknownUserDisplayEnricher",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WAWebWid",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"isStringNullOrEmpty",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useRef, p = { marginBlock3: {
		marginTop: "x7r5mf7",
		marginBottom: "xahult9",
		$$css: !0
	} };
	function _(e) {
		var t = e.groupWid, n = e.isStatus, r = e.msg, a = e.name;
		if (o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(r)) return s._(
			/*BTDS*/
			""
		).toString();
		if (n) return a + " · " + s._(
			/*BTDS*/
			""
		).toString();
		if (t) {
			var i = o("WAWebChatCollection").ChatCollection.get(t), l = i ? i.formattedTitle : s._(
				/*BTDS*/
				""
			).toString();
			return l ? a + " · " + l : a;
		}
		return a;
	}
	var f = {
		author: {
			display: "x3nfvp2",
			maxWidth: "x193iq5w",
			fontSize: "xj9w6cj",
			lineHeight: "x19v9tvf",
			fontWeight: "xk50ysn",
			$$css: !0
		},
		name: {
			flex: "xkz0k9k",
			paddingInlineStart: "xyiysdx",
			marginInlineStart: "xe9ewy2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		psaName: {
			color: "x1v5yvga",
			$$css: !0
		},
		number: {
			flex: "x3psx0u",
			direction: "xzt5al7",
			$$css: !0
		},
		screenName: {
			marginInlineStart: "x13fj5qh",
			fontWeight: "x1fcty0u",
			color: "xhslqc4",
			"::before_content": "x1knvif",
			$$css: !0
		},
		screenNameMac: {
			WebkitFontSmoothing: "xvmahel",
			MozOsxFontSmoothing: "xlh3980",
			$$css: !0
		},
		screenNameElevatedPushNames: {
			display: "x1lliihq",
			minWidth: "x12tqqkd",
			paddingInlineEnd: "x11lfxj5",
			flex: "x98rzlu",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			"::before_content": "x7edwua",
			textDecoration: "xt0b8zv",
			$$css: !0
		},
		numberElevatedPushNames: {
			fontSize: "x1ncwhqj",
			display: "x1lliihq",
			whiteSpace: "xuxw1ft",
			marginInlineEnd: "x11t971q",
			flex: "x1okw0bk",
			fontWeight: "x1fcty0u",
			color: "xhslqc4",
			$$css: !0
		},
		numberElevatedPushNamesMac: {
			WebkitFontSmoothing: "xvmahel",
			MozOsxFontSmoothing: "xlh3980",
			$$css: !0
		},
		picInBubble: {
			position: "x1n2onr6",
			$$css: !0
		},
		authorElevatedPushNames: {
			display: "x78zum5",
			$$css: !0
		},
		authorLabel: {
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		label: {
			color: "x1bvqhpb",
			lineHeight: "x1d3mw78",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		groupHistoryMessage: {
			filter: "x1olsc1v",
			$$css: !0
		},
		hoverableUnderline: {
			textDecoration: "xt0b8zv",
			$$css: !0
		},
		focusableRounding: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		}
	}, g = { verticalAlignTop: {
		verticalAlign: "x16dsc37",
		$$css: !0
	} };
	function h(t) {
		var n, a = o("react-compiler-runtime").c(180), i = t.albumId, l = t.chat, c = t.disableClick, h = t.displayType, b = t.msg, v = t.quotedRemoteJid, S = t.senderNameColorOverride, R = t.showMemberLabel, L = t.stopClickPropagation, E = R === void 0 ? !0 : R, k = L === void 0 ? !1 : L, I;
		if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
			var T;
			I = [
				(T = o("WAWebMsgGetters")).getSender,
				T.getType,
				T.getIsLive,
				T.getIsStatus,
				T.getId,
				T.getQuotedMsg,
				o("WAWebFrontendMsgGetters").getShouldDisplaySelf,
				T.getIsGroupHistoryMessageInOwnChat,
				T.getNewsletterAdminProfile
			], a[0] = I;
		} else I = a[0];
		var D = o("useWAWebMsgValues").useMsgValues(t.msg.id, I), x = D[0], $ = D[1], P = D[3], N = D[4], M = D[6], w = D[7], A = D[8], F;
		if (a[1] !== x) {
			var O;
			F = x == null ? x : (O = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(x)) != null ? O : x, a[1] = x, a[2] = F;
		} else F = a[2];
		var B = F, W;
		a[3] !== t.msg ? (W = o("WAWebFrontendMsgGetters").getMaybeChat(t.msg.unsafe()), a[3] = t.msg, a[4] = W) : W = a[4];
		var q = W, U;
		if (a[5] !== t.contact.id) {
			var V;
			U = (V = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(t.contact.id)) != null ? V : t.contact.id, a[5] = t.contact.id, a[6] = U;
		} else U = a[6];
		var H = U, G;
		if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
			var z;
			G = [
				(z = o("WAWebContactGetters")).getId,
				o("WAWebFrontendContactGetters").getFormattedNameAndType,
				z.getIsSupportAccount,
				z.getName,
				z.getNotifyName,
				z.getPushname,
				z.getVerifiedLevel,
				z.getVerifiedName
			], a[7] = G;
		} else G = a[7];
		var j = o("useWAWebContactValues").useContactValues(H, G), K = j[0], Q = j[1], X = j[2], Y = j[3], J = j[4], Z = j[5], ee = j[6], te = j[7], ne = r("useWAWebContactFormattedUsernameOrPhoneByChat")(q, t.contact), re = ne.formattedUsernameOrPhone, oe = ne.isPhoneNumberForceMasked, ae = ne.type, ie = Q.displayName, le = q != null && o("WAWebChatGetters").getIsGroup(q), se = function() {
			le && ae === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER && o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed("group_message", t.contact.id);
		}, ue = !!c || oe === !0, ce = m(null), de = m(null), me = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(q), pe = h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || h === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE || C(A), _e;
		a[8] !== q || a[9] !== B || a[10] !== k ? (_e = function(t) {
			var e = B;
			e != null && (q != null && o("WAWebChatGetters").getIsGroup(q) && (e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(e, "message_author_handle_click")), e != null && (k && t.stopPropagation(), o("WAWebFindChatAction").findOrCreateLatestChat(e, "messageAuthor").then(function(e) {
				var t = e.chat, n = q != null && (o("WAWebChatGetters").getIsGroup(q) || o("WAWebChatGetters").getIsNewsletter(q)) ? q : void 0;
				o("WAWebCmd").Cmd.chatInfoDrawer(t, { sourceGroupChatOrNewsletter: n });
			})));
		}, a[8] = q, a[9] = B, a[10] = k, a[11] = _e) : _e = a[11];
		var fe = _e, ge = l || q;
		ge || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("author-with-no-chat");
		var he;
		a[12] !== ue || a[13] !== fe || a[14] !== b ? (he = ue || o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(b) ? null : fe, a[12] = ue, a[13] = fe, a[14] = b, a[15] = he) : he = a[15];
		var ye = he, Ce;
		a[16] !== ye ? (Ce = function(t) {
			ye != null && r("WAWebKeyboardIsKeyActivation")(t) && (t.preventDefault(), ye(t));
		}, a[16] = ye, a[17] = Ce) : Ce = a[17];
		var be = Ce, ve = ye != null, Se = ve ? "0" : void 0, Re = ve ? "button" : void 0, Le;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (Le = o("WAWebGroupHoverCardGatingUtils").isGroupHoverCardEnabled(), a[18] = Le) : Le = a[18];
		var Ee = Le, ke = Ee && ye != null && !M && !pe && q != null && o("WAWebChatGetters").getIsGroup(q), Ie = ke ? "hover-popover" : "controllable", Te;
		a[19] !== t.contact || a[20] !== ke || a[21] !== (ge == null ? void 0 : ge.id) ? (Te = ke ? d.jsx(o("WAWebGroupHoverCardLoadable").GroupHoverCardLoadable, {
			contact: t.contact,
			chatWid: ge == null ? void 0 : ge.id,
			source: "messageAuthor"
		}) : d.jsx("div", {}), a[19] = t.contact, a[20] = ke, a[21] = ge == null ? void 0 : ge.id, a[22] = Te) : Te = a[22];
		var De;
		a[23] !== Ie || a[24] !== Te ? (De = {
			target: de,
			hoverTarget: ce,
			position: o("WAWebPopover.react").PopoverPosition.Top,
			alignment: o("WAWebPopover.react").PopoverAlignment.Start,
			initHandling: Ie,
			openingDelay: 300,
			transitionName: "fade-fast",
			element: Te,
			name: "MessageAuthorHoverCard",
			dismissable: !1
		}, a[23] = Ie, a[24] = Te, a[25] = De) : De = a[25];
		var xe = o("WAWebPopover.react").usePopoverElement(De), $e = xe.popover, Pe;
		a[26] !== fe || a[27] !== b || a[28] !== E ? (Pe = E && o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForMsg(b) ? d.jsx(r("WAWebMemberLabelRenderer.react"), {
			memberLabelArgs: {
				from: "message",
				message: b
			},
			onClick: fe
		}) : null, a[26] = fe, a[27] = b, a[28] = E, a[29] = Pe) : Pe = a[29];
		var Ne = Pe, Me;
		if (a[30] !== B || a[31] !== ge) {
			var we;
			Me = ge && B && !o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(B) ? o("WAWebChatParticipantColor").getAssignedColor(ge, B, "WAWebMessageAuthor-" + ((we = o("WAWebQuotedMessageUserJourneyLogger").getChatType(ge.id)) != null ? we : "")) : 1, a[30] = B, a[31] = ge, a[32] = Me;
		} else Me = a[32];
		var Ae = Me, Fe = o("useWAWebDefaultProfileColors").useDefaultProfileColors(B, A == null ? void 0 : A.name), Oe = Fe.foreground, Be = o("useWAWebGroupColors").useGroupsColorStyle(Ae, "color"), We = (u || (u = r("stylex")))(f.author, me && f.authorElevatedPushNames, ($ === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || $ === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT || $ === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) && o("WDSPaddings.stylex").wdsPaddings.paddingStart4, pe && f.picInBubble, (n = S != null ? S : Oe) != null ? n : Be, w && f.groupHistoryMessage, t.rootXstyle), qe;
		if (M) {
			var Ue;
			a[33] !== P || a[34] !== b || a[35] !== v ? (Ue = _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: r("fbs")._(
					/*BTDS*/
					""
				).toString()
			}), a[33] = P, a[34] = b, a[35] = v, a[36] = Ue) : Ue = a[36];
			var Ve;
			a[37] !== Ue ? (Ve = d.jsx(o("WAWebEmojiText.react").EmojiText, { text: Ue }), a[37] = Ue, a[38] = Ve) : Ve = a[38], qe = Ve;
		} else if (C(A)) {
			var He = A == null ? void 0 : A.name, Ge;
			a[39] !== P || a[40] !== b || a[41] !== v || a[42] !== He ? (Ge = _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: He
			}), a[39] = P, a[40] = b, a[41] = v, a[42] = He, a[43] = Ge) : Ge = a[43];
			var ze;
			a[44] === Symbol.for("react.memo_cache_sentinel") ? (ze = (u || (u = r("stylex")))(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f.focusableRounding), a[44] = ze) : ze = a[44];
			var je;
			a[45] !== A ? (je = function() {
				return o("WAWebDrawerManager").DrawerManager.openDrawerRight(d.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
					newsletterAdminProfile: A,
					onClose: o("WAWebDrawerManager").closeDrawerRight
				}));
			}, a[45] = A, a[46] = je) : je = a[46];
			var Ke;
			a[47] !== Ge || a[48] !== je ? (Ke = d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: Ge,
				className: ze,
				role: "button",
				onClick: je,
				tabIndex: "0"
			}), a[47] = Ge, a[48] = je, a[49] = Ke) : Ke = a[49], qe = Ke;
		} else if (Y || o("WAWebMsgGetters").getIsGroupStatus(b) || te && ee !== 0 || X) {
			var Qe = o("WAWebLidMigrationUtils").getShouldShowLidDebugUI(K), Xe = Y != null ? Y : te;
			o("WAWebMsgGetters").getIsGroupStatus(b) && (Xe = Z), Xe = Qe ? Xe + " [LID]" : Xe;
			var Ye = X ? ie : Xe, Je;
			a[50] !== P || a[51] !== b || a[52] !== v || a[53] !== Ye ? (Je = _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: Ye
			}), a[50] = P, a[51] = b, a[52] = v, a[53] = Ye, a[54] = Je) : Je = a[54];
			var Ze;
			a[55] !== ye ? (Ze = (u || (u = r("stylex")))(f.name, ye != null && f.hoverableUnderline, ye != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, ye != null && f.focusableRounding), a[55] = ye, a[56] = Ze) : Ze = a[56];
			var et;
			a[57] !== Re || a[58] !== Se || a[59] !== ye || a[60] !== Je || a[61] !== Ze ? (et = [d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: Je,
				className: Ze,
				emojiXstyle: g.verticalAlignTop,
				testid: "author",
				onClick: ye,
				tabIndex: Se,
				role: Re
			}, "author")], a[57] = Re, a[58] = Se, a[59] = ye, a[60] = Je, a[61] = Ze, a[62] = et) : et = a[62], qe = et;
		} else if (r("WAWebWid").isPSA(K)) {
			var tt;
			a[63] !== ye ? (tt = (u || (u = r("stylex")))(f.name, f.psaName, ye != null && f.hoverableUnderline, ye != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, ye != null && f.focusableRounding), a[63] = ye, a[64] = tt) : tt = a[64];
			var nt = tt, rt = o("WAWebConnModel").Conn.isSMB ? "WhatsApp Business" : "WhatsApp", ot;
			a[65] !== P || a[66] !== b || a[67] !== v ? (ot = _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: rt
			}), a[65] = P, a[66] = b, a[67] = v, a[68] = ot) : ot = a[68];
			var at;
			a[69] !== nt || a[70] !== Re || a[71] !== Se || a[72] !== ye || a[73] !== ot ? (at = d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: ot,
				className: nt,
				emojiXstyle: g.verticalAlignTop,
				testid: "author",
				onClick: ye,
				tabIndex: Se,
				role: Re
			}, "author"), a[69] = nt, a[70] = Re, a[71] = Se, a[72] = ye, a[73] = ot, a[74] = at) : at = a[74];
			var it;
			a[75] === Symbol.for("react.memo_cache_sentinel") ? (it = { className: "x1rg5ohu x3psx0u xwklpps xvijh9v xxymvpz" }, a[75] = it) : it = a[75];
			var lt;
			a[76] === Symbol.for("react.memo_cache_sentinel") ? (lt = d.createElement("div", babelHelpers.extends({}, it, { key: "authorCheckMark" }), o("WAWebMiscGatingUtils").isBlueEnabled() ? d.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {}) : d.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})), a[76] = lt) : lt = a[76];
			var st;
			a[77] !== at ? (st = [at, lt], a[77] = at, a[78] = st) : st = a[78], qe = st;
		} else if (me) {
			qe = [];
			var ut;
			a[79] !== K || a[80] !== J || a[81] !== Z ? (ut = (K == null ? void 0 : K.isBot()) === !0 ? s._(
				/*BTDS*/
				""
			).toString() : J != null ? J : Z, a[79] = K, a[80] = J, a[81] = Z, a[82] = ut) : ut = a[82];
			var ct = ut, dt;
			a[83] !== ct || a[84] !== P ? (dt = !P && !r("isStringNullOrEmpty")(ct), a[83] = ct, a[84] = P, a[85] = dt) : dt = a[85];
			var mt = dt, pt = y({
				handleKeyDown: be,
				nameRendered: mt,
				onClick: ye,
				tabbable: ve
			}), _t = pt.phoneInteractiveProps, ft = pt.phoneIsTheControl;
			if (mt) {
				var gt;
				a[86] !== i || a[87] !== N ? (gt = r("isStringNullOrEmpty")(i) ? N.toString() + "-push-name" : i + "-push-name", a[86] = i, a[87] = N, a[88] = gt) : gt = a[88];
				var ht = gt, yt;
				a[89] !== ye ? (yt = (u || (u = r("stylex")))(f.screenNameElevatedPushNames, ye != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, ye != null && f.focusableRounding), a[89] = ye, a[90] = yt) : yt = a[90];
				var Ct;
				a[91] !== ct ? (Ct = o("WAWebMessageUiUtils").getAriaLabelForMaybeName(ct), a[91] = ct, a[92] = Ct) : Ct = a[92];
				var bt;
				a[93] !== ct || a[94] !== Re || a[95] !== Se || a[96] !== ht || a[97] !== ye || a[98] !== yt || a[99] !== Ct ? (bt = d.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: yt,
					testid: "author",
					onClick: ye,
					tabIndex: Se,
					role: Re,
					direction: "auto",
					ellipsify: !0,
					text: ct,
					ariaLabel: Ct
				}, ht), a[93] = ct, a[94] = Re, a[95] = Se, a[96] = ht, a[97] = ye, a[98] = yt, a[99] = Ct, a[100] = bt) : bt = a[100], qe = [bt];
			}
			var vt;
			a[101] !== K || a[102] !== re || a[103] !== P || a[104] !== b || a[105] !== v ? (vt = K != null && K.isLid() ? re : _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: re
			}), a[101] = K, a[102] = re, a[103] = P, a[104] = b, a[105] = v, a[106] = vt) : vt = a[106];
			var St = vt;
			se();
			var Rt = (u || (u = r("stylex")))(f.numberElevatedPushNames, o("WAWebStylesEnv").isOSMac && f.numberElevatedPushNamesMac, ye != null && f.hoverableUnderline, ft && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, ft && f.focusableRounding), Lt;
			a[107] !== N ? (Lt = N.toString(), a[107] = N, a[108] = Lt) : Lt = a[108];
			var Et = Lt + "-number", kt;
			a[109] !== _t || a[110] !== St || a[111] !== Rt || a[112] !== Et ? (kt = d.jsx("span", babelHelpers.extends({
				className: Rt,
				"data-testid": "author"
			}, _t, { children: St }), Et), a[109] = _t, a[110] = St, a[111] = Rt, a[112] = Et, a[113] = kt) : kt = a[113];
			var It = kt;
			qe.push(It);
		} else {
			var Tt;
			a[114] !== K || a[115] !== re || a[116] !== P || a[117] !== b || a[118] !== v ? (Tt = K != null && K.isLid() ? re : _({
				groupWid: v,
				isStatus: P,
				msg: b,
				name: re
			}), a[114] = K, a[115] = re, a[116] = P, a[117] = b, a[118] = v, a[119] = Tt) : Tt = a[119];
			var Dt = Tt;
			se();
			var xt = null;
			if (!P) if ((K == null ? void 0 : K.isBot()) === !0) {
				var $t;
				a[120] === Symbol.for("react.memo_cache_sentinel") ? ($t = s._(
					/*BTDS*/
					""
				).toString(), a[120] = $t) : $t = a[120], xt = $t;
			} else r("isStringNullOrEmpty")(J) ? xt = Z : xt = J;
			var Pt;
			a[121] !== xt ? (Pt = r("isStringNullOrEmpty")(xt), a[121] = xt, a[122] = Pt) : Pt = a[122];
			var Nt = !Pt, Mt, wt;
			if (a[123] !== Nt || a[124] !== be || a[125] !== ye || a[126] !== ve) {
				var At = y({
					handleKeyDown: be,
					nameRendered: Nt,
					onClick: ye,
					tabbable: ve
				}), Ft = At.phoneInteractiveProps, Ot = At.phoneIsTheControl;
				Mt = Ft, wt = (u || (u = r("stylex")))(f.number, ye != null && f.hoverableUnderline, Ot && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, Ot && f.focusableRounding), a[123] = Nt, a[124] = be, a[125] = ye, a[126] = ve, a[127] = Mt, a[128] = wt;
			} else Mt = a[127], wt = a[128];
			var Bt;
			a[129] !== N ? (Bt = N.toString(), a[129] = N, a[130] = Bt) : Bt = a[130];
			var Wt = Bt + "-number", qt;
			a[131] !== Mt || a[132] !== Dt || a[133] !== wt || a[134] !== Wt ? (qt = d.jsx("span", babelHelpers.extends({
				className: wt,
				"data-testid": "author"
			}, Mt, { children: Dt }), Wt), a[131] = Mt, a[132] = Dt, a[133] = wt, a[134] = Wt, a[135] = qt) : qt = a[135];
			var Ut = qt;
			if (a[136] !== i || a[137] !== xt || a[138] !== Nt || a[139] !== N || a[140] !== Re || a[141] !== Se || a[142] !== ye || a[143] !== Ut) {
				qe = [Ut];
				var Vt = qe;
				if (Nt) {
					var Ht = r("isStringNullOrEmpty")(i) ? N.toString() + "-push-name" : i + "-push-name";
					Vt.push(d.jsx(o("WAWebEmojiText.react").EmojiText, {
						className: (u || (u = r("stylex")))(f.screenName, o("WAWebStylesEnv").isOSMac && f.screenNameMac, ye != null && f.hoverableUnderline, ye != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, ye != null && f.focusableRounding),
						testid: "author",
						onClick: ye,
						tabIndex: Se,
						role: Re,
						direction: "auto",
						ellipsify: !0,
						text: xt
					}, Ht));
				}
				a[136] = i, a[137] = xt, a[138] = Nt, a[139] = N, a[140] = Re, a[141] = Se, a[142] = ye, a[143] = Ut, a[144] = qe;
			} else qe = a[144];
		}
		if (pe) {
			var Gt, zt, jt;
			if (a[145] !== h || a[146] !== B || a[147] !== (ge == null || (Gt = ge.groupMetadata) == null ? void 0 : Gt.participants)) {
				var Kt, Qt;
				jt = h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT && B != null && !!(!(ge == null || (Kt = ge.groupMetadata) == null || (Kt = Kt.participants) == null || (Kt = Kt.get(B)) == null) && Kt.isAdmin), a[145] = h, a[146] = B, a[147] = ge == null || (Qt = ge.groupMetadata) == null ? void 0 : Qt.participants, a[148] = jt;
			} else jt = a[148];
			var Xt = jt;
			if (Xt) {
				var Yt;
				a[149] === Symbol.for("react.memo_cache_sentinel") ? (Yt = s._(
					/*BTDS*/
					""
				), a[149] = Yt) : Yt = a[149], zt = Yt;
			}
			var Jt;
			a[150] !== Xt || a[151] !== A ? (Jt = {
				0: { className: "x19dbzi3" },
				1: { className: "x19dbzi3 x1k70j0n xzueoph" }
			}[!!(Xt || C(A)) << 0], a[150] = Xt, a[151] = A, a[152] = Jt) : Jt = a[152];
			var Zt;
			a[153] !== ue || a[154] !== A || a[155] !== t.contact || a[156] !== ge ? (Zt = C(A) ? d.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, { newsletterAdminProfile: A }) : d.jsx(r("WAWebGroupChatProfilePicture.react"), {
				userContact: t.contact,
				chatWid: r("nullthrows")(ge).id,
				disableClick: ue,
				usePicInBubbleLayout: !0
			}), a[153] = ue, a[154] = A, a[155] = t.contact, a[156] = ge, a[157] = Zt) : Zt = a[157];
			var en;
			a[158] !== Jt || a[159] !== Zt ? (en = d.jsx("div", babelHelpers.extends({}, Jt, { children: Zt })), a[158] = Jt, a[159] = Zt, a[160] = en) : en = a[160];
			var tn;
			a[161] === Symbol.for("react.memo_cache_sentinel") ? (tn = { className: "x78zum5 xdt5ytf x1cy8zhl xl56j7k x6ikm8r x10wlt62" }, a[161] = tn) : tn = a[161];
			var nn;
			return a[162] !== zt ? (nn = zt && d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.label, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginBottom4), { children: zt })), a[162] = zt, a[163] = nn) : nn = a[163], d.jsxs("div", {
				className: We,
				role: t.role || "",
				children: [en, d.jsxs("div", babelHelpers.extends({}, tn, { children: [
					d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.authorLabel, me && f.authorElevatedPushNames, C(A) ? p.marginBlock3 : o("WDSMargins.stylex").wdsMargins.marginTop4, !C(A) && o("WDSMargins.stylex").wdsMargins.marginBottom2), { children: qe })),
					nn,
					Ne
				] }))]
			});
		}
		var rn;
		a[164] !== ke ? (rn = ke && d.jsx("div", {
			ref: de,
			className: "xk2xgvr x16hy4bp xifccgj xeawwkn xqtp20y x6ikm8r x10wlt62"
		}), a[164] = ke, a[165] = rn) : rn = a[165];
		var on = t.role || "", an;
		a[166] !== qe || a[167] !== ke ? (an = ke ? d.jsx("span", {
			ref: ce,
			className: "x78zum5 x98rzlu xeuugli",
			children: qe
		}) : qe, a[166] = qe, a[167] = ke, a[168] = an) : an = a[168];
		var ln;
		a[169] !== We || a[170] !== on || a[171] !== an ? (ln = d.jsx("div", {
			className: We,
			role: on,
			children: an
		}), a[169] = We, a[170] = on, a[171] = an, a[172] = ln) : ln = a[172];
		var sn;
		a[173] !== Ne ? (sn = d.jsx("div", { children: Ne }), a[173] = Ne, a[174] = sn) : sn = a[174];
		var un = ke && $e, cn;
		return a[175] !== rn || a[176] !== ln || a[177] !== sn || a[178] !== un ? (cn = d.jsxs(d.Fragment, { children: [
			rn,
			ln,
			sn,
			un
		] }), a[175] = rn, a[176] = ln, a[177] = sn, a[178] = un, a[179] = cn) : cn = a[179], cn;
	}
	function y(e) {
		var t = e.handleKeyDown, n = e.nameRendered, r = e.onClick, o = e.tabbable, a = o && !n, i = r != null ? {
			onClick: r,
			onKeyDown: a ? t : void 0,
			role: a ? "button" : void 0,
			tabIndex: a ? 0 : void 0
		} : {};
		return {
			phoneInteractiveProps: i,
			phoneIsTheControl: a
		};
	}
	function C(e) {
		return e != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled();
	}
	l.default = h;
}), 226);

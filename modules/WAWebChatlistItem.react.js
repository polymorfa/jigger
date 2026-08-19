__d("WAWebChatlistItem.react", [
	"fbt",
	"CometPlaceholder.react",
	"WALogger",
	"WAWebABProps",
	"WAWebAddFavoriteButton.react",
	"WAWebCallLogEntryCell.react",
	"WAWebCallLogJoinOngoingCell.react",
	"WAWebChat.react",
	"WAWebChatAction.react",
	"WAWebChatContact.react",
	"WAWebChatMessage.react",
	"WAWebChatSetting.react",
	"WAWebChatlistPanelMode",
	"WAWebChatlistTypes",
	"WAWebChatlistWrappedItem.react",
	"WAWebCmd",
	"WAWebCommonGroupSubtitle.react",
	"WAWebCommunityCells.react",
	"WAWebContactCallButtons.react",
	"WAWebContactGetters",
	"WAWebFavoriteCell.react",
	"WAWebFlatList.react",
	"WAWebFocusTracer",
	"WAWebFrontendMsgGetters",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebOutContactCell.react",
	"WAWebPreCallUserJourneyLogger",
	"WAWebSectionHeader.react",
	"WAWebTabOrder",
	"WAWebUpcomingEventCell.react",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumCompanionInviteOriginType",
	"WAWebWamEnumSubSurface",
	"WDSButton.react",
	"WDSSectionDivider.react",
	"cr:104",
	"cr:5736",
	"deferredLoadComponent",
	"gkx",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"requireDeferredForDisplay",
	"useWAWebActiveChatStyle",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["chat", "createPreventAutoReadProps"], d, m = d || (d = o("react")), p = d, _ = p.memo, f = p.useRef, g = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebCallLogIncomingCell.react").__setRef("WAWebChatlistItem.react")), h = o("WAWebChat.react").ChatFactory(), y = o("WAWebChatContact.react").ContactFactory();
	function C(e) {
		var t = o("react-compiler-runtime").c(14), n, a, i;
		t[0] !== e ? (n = e.chat, i = e.createPreventAutoReadProps, a = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebABProps").getABPropConfigValue("wa_web_chatlist_render_chat_open"), t[4] = l) : l = t[4];
		var s = l, u = r("useWAWebActiveChatStyle")(n, s), d;
		t[5] !== n || t[6] !== i ? (d = i(n), t[5] = n, t[6] = i, t[7] = d) : d = t[7];
		var p = d, _ = p.forceActive, f = p.activeStyleType;
		if (s) {
			var g = u.forceActive === !0, y = p.activeStyleType === "BORDER";
			g && y ? (_ = !0, f = "BOTH") : g ? (_ = !0, f = "DEFAULT") : y && (f = "BORDER");
		}
		var C;
		return t[8] !== f || t[9] !== n || t[10] !== a || t[11] !== _ || t[12] !== p.onContextMenuChange ? (C = m.jsx(h, babelHelpers.extends({ chat: n }, a, {
			forceActive: _,
			activeStyleType: f,
			onContextMenuChange: p.onContextMenuChange
		})), t[8] = f, t[9] = n, t[10] = a, t[11] = _, t[12] = p.onContextMenuChange, t[13] = C) : C = t[13], C;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(2), n = e.active, a = f(null), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function(t) {
			t === "focus" && r("WAWebFocusTracer").focus(a.current);
		}, t[0] = i) : i = t[0];
		var l = i;
		o("useWAWebListener").useListener(n, o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ID, l);
		var s;
		return t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = m.jsx(r("WAWebAddFavoriteButton.react"), { ref: a }), t[1] = s) : s = t[1], s;
	}
	function v(t) {
		var a = o("react-compiler-runtime").c(257), i = t.data, l = t.filterPreset, c = t.getDetailImageSize, d = t.handlers, p = t.mode, _ = t.multiSelection, f = t.mutedChats, v = t.mutedChatsCollapsed, R = t.searchMatch, E = t.searchQuery, I = t.selectableState, T = t.selection, D = d.createPreventAutoReadProps, x = d.handleArrowKeyInChatItem, $ = d.handleChatClick, P = d.handleContactItemClick, N = d.handleKeptMessageClick, M = d.handleMultiSelect, w = d.handleMutedChatsBarClick, A = d.onItemClick, F = d.onStartMultiSelect, O = d.setCheckboxWrapperRef, B;
		a[0] !== x || a[1] !== M || a[2] !== p || a[3] !== _ || a[4] !== I || a[5] !== O ? (B = {
			mode: p,
			selectableState: I,
			multiSelection: _,
			onSelect: M,
			onArrowKeyInChatItem: x,
			setCheckboxWrapperRef: O
		}, a[0] = x, a[1] = M, a[2] = p, a[3] = _, a[4] = I, a[5] = O, a[6] = B) : B = a[6];
		var W = B;
		switch (i.type) {
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS: {
				var q;
				return a[7] === Symbol.for("react.memo_cache_sentinel") ? (q = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[7] = q) : q = a[7], q;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS: {
				var U;
				return a[8] === Symbol.for("react.memo_cache_sentinel") ? (U = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[8] = U) : U = a[8], U;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS: {
				var V;
				return a[9] === Symbol.for("react.memo_cache_sentinel") ? (V = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[9] = V) : V = a[9], V;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS: {
				var H;
				return a[10] === Symbol.for("react.memo_cache_sentinel") ? (H = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[10] = H) : H = a[10], H;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS: {
				var G;
				return a[11] === Symbol.for("react.memo_cache_sentinel") ? (G = m.jsx(k, { header: "Debug Commands" }), a[11] = G) : G = a[11], G;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES: {
				var z;
				return a[12] === Symbol.for("react.memo_cache_sentinel") ? (z = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[12] = z) : z = a[12], z;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS: {
				var j;
				return a[13] === Symbol.for("react.memo_cache_sentinel") ? (j = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[13] = j) : j = a[13], j;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS: {
				var K;
				return a[14] === Symbol.for("react.memo_cache_sentinel") ? (K = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[14] = K) : K = a[14], K;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME: {
				var Q;
				return a[15] === Symbol.for("react.memo_cache_sentinel") ? (Q = m.jsx(k, { header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader() }), a[15] = Q) : Q = a[15], Q;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED: {
				var X;
				return a[16] === Symbol.for("react.memo_cache_sentinel") ? (X = m.jsx(k, {
					testid: "starred-messages-header",
					header: s._(
						/*BTDS*/
						""
					)
				}), a[16] = X) : X = a[16], X;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT: {
				var Y;
				return a[17] === Symbol.for("react.memo_cache_sentinel") ? (Y = m.jsx(k, {
					testid: "kept-messages-header",
					header: s._(
						/*BTDS*/
						""
					)
				}), a[17] = Y) : Y = a[17], Y;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG: {
				var J;
				return a[18] === Symbol.for("react.memo_cache_sentinel") ? (J = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[18] = J) : J = a[18], J;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES: {
				var Z;
				a[19] !== i.showViewAllFavorites ? (Z = i.showViewAllFavorites === !0 ? m.jsx(S, {}) : null, a[19] = i.showViewAllFavorites, a[20] = Z) : Z = a[20];
				var ee;
				a[21] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
					/*BTDS*/
					""
				), a[21] = ee) : ee = a[21];
				var te;
				return a[22] !== Z ? (te = m.jsx(r("WDSSectionDivider.react"), { header: {
					action: Z,
					title: ee,
					type: "emphasized"
				} }), a[22] = Z, a[23] = te) : te = a[23], te;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS: {
				var ne;
				a[24] !== i.showViewAllUpcomingEvents ? (ne = i.showViewAllUpcomingEvents === !0 ? m.jsx(L, {}) : null, a[24] = i.showViewAllUpcomingEvents, a[25] = ne) : ne = a[25];
				var re;
				a[26] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
					/*BTDS*/
					""
				), a[26] = re) : re = a[26];
				var oe;
				return a[27] !== ne ? (oe = m.jsx(r("WDSSectionDivider.react"), { header: {
					action: ne,
					title: re,
					type: "emphasized"
				} }), a[27] = ne, a[28] = oe) : oe = a[28], oe;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING: {
				var ae;
				return a[29] === Symbol.for("react.memo_cache_sentinel") ? (ae = m.jsx(r("WDSSectionDivider.react"), { header: {
					title: s._(
						/*BTDS*/
						""
					),
					type: "emphasized"
				} }), a[29] = ae) : ae = a[29], ae;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING: {
				var ie;
				return a[30] === Symbol.for("react.memo_cache_sentinel") ? (ie = m.jsx(r("WDSSectionDivider.react"), { header: {
					title: s._(
						/*BTDS*/
						""
					),
					type: "emphasized"
				} }), a[30] = ie) : ie = a[30], ie;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT: {
				var le;
				return a[31] === Symbol.for("react.memo_cache_sentinel") ? (le = m.jsx(r("WDSSectionDivider.react"), { header: {
					title: s._(
						/*BTDS*/
						""
					),
					type: "emphasized"
				} }), a[31] = le) : le = a[31], le;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_GROUPS: {
				var se;
				return a[32] === Symbol.for("react.memo_cache_sentinel") ? (se = m.jsx(r("WAWebSectionHeader.react"), { header: s._(
					/*BTDS*/
					""
				) }), a[32] = se) : se = a[32], se;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS: {
				var ue;
				return a[33] === Symbol.for("react.memo_cache_sentinel") ? (ue = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[33] = ue) : ue = a[33], ue;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS: {
				var ce;
				return a[34] !== w || a[35] !== f || a[36] !== v ? (ce = n("cr:5736") != null ? m.jsx(n("cr:5736"), {
					mutedChats: f,
					mutedChatsCollapsed: v,
					onClick: w
				}) : null, a[34] = w, a[35] = f, a[36] = v, a[37] = ce) : ce = a[37], ce;
			}
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU: {
				var de;
				return a[38] === Symbol.for("react.memo_cache_sentinel") ? (de = m.jsx(k, { header: s._(
					/*BTDS*/
					""
				) }), a[38] = de) : de = a[38], de;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS: {
				var me = i.data, pe = i.index, _e;
				a[39] !== c ? (_e = c(), a[39] = c, a[40] = _e) : _e = a[40];
				var fe;
				a[41] !== me || a[42] !== D || a[43] !== l || a[44] !== x || a[45] !== $ || a[46] !== pe || a[47] !== _ || a[48] !== F || a[49] !== R || a[50] !== E || a[51] !== I || a[52] !== T || a[53] !== _e ? (fe = m.jsx(C, {
					chat: me,
					createPreventAutoReadProps: D,
					mode: o("WAWebChat.react").Mode.LAST,
					searchQuery: E,
					searchMatch: R,
					filterPreset: l,
					onClick: $,
					mouseDownAsClick: !0,
					selectableState: I,
					multiSelection: _,
					onStartMultiSelect: F,
					active: T,
					ephemeralIcon: "chat-list",
					showStatusRingAroundProfilePhoto: !0,
					index: pe,
					photoSize: _e,
					showCommunityInfo: !0,
					skipCheckMark: !0,
					handleArrowKeyInChatItem: x
				}), a[41] = me, a[42] = D, a[43] = l, a[44] = x, a[45] = $, a[46] = pe, a[47] = _, a[48] = F, a[49] = R, a[50] = E, a[51] = I, a[52] = T, a[53] = _e, a[54] = fe) : fe = a[54];
				var ge;
				return a[55] !== me || a[56] !== fe || a[57] !== W ? (ge = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: me,
					children: fe
				})), a[55] = me, a[56] = fe, a[57] = W, a[58] = ge) : ge = a[58], ge;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS: {
				var he = i.data, ye;
				a[59] !== he || a[60] !== p ? (ye = p === r("WAWebChatlistPanelMode").CallsTab && o("WAWebVoipGatingUtils").isCallingEnabled() && !o("WAWebContactGetters").getIsMe(he), a[59] = he, a[60] = p, a[61] = ye) : ye = a[61];
				var Ce = ye, be;
				a[62] !== c ? (be = c(), a[62] = c, a[63] = be) : be = a[63];
				var ve;
				a[64] !== he ? (ve = o("WAWebContactGetters").getIsMe(he), a[64] = he, a[65] = ve) : ve = a[65];
				var Se;
				a[66] !== he ? (Se = o("WAWebContactGetters").getIsMe(he), a[66] = he, a[67] = Se) : Se = a[67];
				var Re;
				a[68] !== he || a[69] !== Ce ? (Re = Ce ? m.jsx(r("WAWebContactCallButtons.react"), { contact: he }) : null, a[68] = he, a[69] = Ce, a[70] = Re) : Re = a[70];
				var Le;
				a[71] !== he || a[72] !== P || a[73] !== R || a[74] !== E || a[75] !== T || a[76] !== be || a[77] !== ve || a[78] !== Se || a[79] !== Re ? (Le = m.jsx(y, {
					contact: he,
					active: T,
					searchQuery: E,
					searchMatch: R,
					onClick: P,
					mouseDownAsClick: !0,
					waitIdle: !0,
					showStatusRingAroundProfilePhoto: !0,
					photoSize: be,
					hideStatus: ve,
					showMessageYourselfName: Se,
					detail: Re
				}), a[71] = he, a[72] = P, a[73] = R, a[74] = E, a[75] = T, a[76] = be, a[77] = ve, a[78] = Se, a[79] = Re, a[80] = Le) : Le = a[80];
				var Ee;
				return a[81] !== he || a[82] !== Le || a[83] !== W ? (Ee = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: he,
					children: Le
				})), a[81] = he, a[82] = Le, a[83] = W, a[84] = Ee) : Ee = a[84], Ee;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS: {
				var ke = i.data, Ie;
				a[85] !== ke || a[86] !== R ? (Ie = m.jsx(r("WAWebOutContactCell.react"), {
					contact: ke,
					entryPoint: o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CHATLIST_SEARCH,
					isSearchResult: !0,
					searchMatch: R
				}), a[85] = ke, a[86] = R, a[87] = Ie) : Ie = a[87];
				var Te;
				return a[88] !== ke || a[89] !== Ie || a[90] !== W ? (Te = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: ke,
					children: Ie
				})), a[88] = ke, a[89] = Ie, a[90] = W, a[91] = Te) : Te = a[91], Te;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME: {
				var De = i.data, xe;
				a[92] !== c ? (xe = c(), a[92] = c, a[93] = xe) : xe = a[93];
				var $e;
				a[94] !== De || a[95] !== P || a[96] !== E || a[97] !== T || a[98] !== xe ? ($e = m.jsx(y, {
					contact: De,
					active: T,
					searchQuery: E,
					onClick: P,
					mouseDownAsClick: !0,
					waitIdle: !0,
					showStatusRingAroundProfilePhoto: !0,
					photoSize: xe
				}), a[94] = De, a[95] = P, a[96] = E, a[97] = T, a[98] = xe, a[99] = $e) : $e = a[99];
				var Pe;
				return a[100] !== De || a[101] !== $e || a[102] !== W ? (Pe = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: De,
					children: $e
				})), a[100] = De, a[101] = $e, a[102] = W, a[103] = Pe) : Pe = a[103], Pe;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS: {
				var Ne = i.data, Me;
				a[104] !== Ne || a[105] !== A || a[106] !== E || a[107] !== T ? (Me = m.jsx(r("WAWebChatAction.react"), {
					action: Ne,
					active: T,
					onClick: A,
					searchQuery: E
				}), a[104] = Ne, a[105] = A, a[106] = E, a[107] = T, a[108] = Me) : Me = a[108];
				var we;
				return a[109] !== Ne || a[110] !== Me || a[111] !== W ? (we = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Ne,
					children: Me
				})), a[109] = Ne, a[110] = Me, a[111] = W, a[112] = we) : we = a[112], we;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS: {
				var Ae = i.data;
				if (!r("gkx")("26258") && n("cr:104") != null) {
					var Fe;
					a[113] !== Ae || a[114] !== A || a[115] !== E || a[116] !== T ? (Fe = m.jsx(n("cr:104"), {
						active: T,
						debugCommand: Ae,
						onClick: A,
						searchQuery: E
					}), a[113] = Ae, a[114] = A, a[115] = E, a[116] = T, a[117] = Fe) : Fe = a[117];
					var Oe;
					return a[118] !== Ae || a[119] !== Fe || a[120] !== W ? (Oe = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
						model: Ae,
						children: Fe
					})), a[118] = Ae, a[119] = Fe, a[120] = W, a[121] = Oe) : Oe = a[121], Oe;
				}
				throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebChatlistItem] UnknownDataError: ROW_DEBUG_COMMANDS"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES: {
				var Be = i.data, We;
				a[122] !== Be.groupMetadata ? (We = r("nullthrows")(Be.groupMetadata), a[122] = Be.groupMetadata, a[123] = We) : We = a[123];
				var qe;
				a[124] !== Be || a[125] !== A ? (qe = function(t) {
					return A == null ? void 0 : A(t, Be);
				}, a[124] = Be, a[125] = A, a[126] = qe) : qe = a[126];
				var Ue;
				a[127] !== Be || a[128] !== T || a[129] !== We || a[130] !== qe ? (Ue = m.jsx(o("WAWebCommunityCells.react").CommunityCell, {
					active: T,
					parentGroupMetadata: We,
					parentGroupChat: Be,
					onClick: qe,
					inCommandPalette: !0
				}), a[127] = Be, a[128] = T, a[129] = We, a[130] = qe, a[131] = Ue) : Ue = a[131];
				var Ve;
				return a[132] !== Be || a[133] !== Ue || a[134] !== W ? (Ve = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Be,
					children: Ue
				})), a[132] = Be, a[133] = Ue, a[134] = W, a[135] = Ve) : Ve = a[135], Ve;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS: {
				var He = i.data, Ge;
				a[136] !== A || a[137] !== E || a[138] !== T || a[139] !== He ? (Ge = m.jsx(r("WAWebChatSetting.react"), {
					active: T,
					onClick: A,
					searchQuery: E,
					setting: He
				}), a[136] = A, a[137] = E, a[138] = T, a[139] = He, a[140] = Ge) : Ge = a[140];
				var ze;
				return a[141] !== He || a[142] !== Ge || a[143] !== W ? (ze = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: He,
					children: Ge
				})), a[141] = He, a[142] = Ge, a[143] = W, a[144] = ze) : ze = a[144], ze;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS: {
				var je = i.data, Ke = je[0], Qe;
				a[145] !== je || a[146] !== E ? (Qe = m.jsx(r("WAWebCommonGroupSubtitle.react"), {
					commonGroup: je,
					searchQuery: E
				}), a[145] = je, a[146] = E, a[147] = Qe) : Qe = a[147];
				var Xe = Qe, Ye;
				a[148] !== D || a[149] !== Ke ? (Ye = D(Ke), a[148] = D, a[149] = Ke, a[150] = Ye) : Ye = a[150];
				var Je;
				a[151] !== l || a[152] !== Ke || a[153] !== _ || a[154] !== A || a[155] !== F || a[156] !== E || a[157] !== Xe || a[158] !== I || a[159] !== T || a[160] !== Ye ? (Je = m.jsx(h, babelHelpers.extends({
					chat: Ke,
					secondary: Xe,
					mode: o("WAWebChat.react").Mode.LAST,
					searchQuery: E,
					filterPreset: l,
					onClick: A,
					mouseDownAsClick: !0,
					selectableState: I,
					multiSelection: _,
					onStartMultiSelect: F,
					active: T
				}, Ye)), a[151] = l, a[152] = Ke, a[153] = _, a[154] = A, a[155] = F, a[156] = E, a[157] = Xe, a[158] = I, a[159] = T, a[160] = Ye, a[161] = Je) : Je = a[161];
				var Ze;
				return a[162] !== Ke || a[163] !== Je || a[164] !== W ? (Ze = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Ke,
					children: Je
				})), a[162] = Ke, a[163] = Je, a[164] = W, a[165] = Ze) : Ze = a[165], Ze;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED: {
				var et = i.data, tt;
				a[166] !== et ? (tt = o("WAWebFrontendMsgGetters").getChat(et), a[166] = et, a[167] = tt) : tt = a[167];
				var nt = "chatlist-starred-message-" + et.id.id, rt;
				a[168] !== l || a[169] !== A || a[170] !== E || a[171] !== T || a[172] !== et || a[173] !== tt || a[174] !== nt ? (rt = m.jsx(r("WAWebChatMessage.react"), {
					msg: et,
					chat: tt,
					searchQuery: E,
					filterPreset: l,
					onClick: A,
					active: T,
					testid: nt
				}), a[168] = l, a[169] = A, a[170] = E, a[171] = T, a[172] = et, a[173] = tt, a[174] = nt, a[175] = rt) : rt = a[175];
				var ot;
				return a[176] !== et || a[177] !== rt || a[178] !== W ? (ot = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: et,
					children: rt
				})), a[176] = et, a[177] = rt, a[178] = W, a[179] = ot) : ot = a[179], ot;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT: {
				var at = i.data, it;
				a[180] !== at ? (it = o("WAWebFrontendMsgGetters").getChat(at), a[180] = at, a[181] = it) : it = a[181];
				var lt = "chatlist-kept-message-" + at.id.id, st;
				a[182] !== l || a[183] !== N || a[184] !== at || a[185] !== E || a[186] !== T || a[187] !== it || a[188] !== lt ? (st = m.jsx(r("WAWebChatMessage.react"), {
					msg: at,
					chat: it,
					searchQuery: E,
					filterPreset: l,
					onClick: N,
					active: T,
					testid: lt
				}), a[182] = l, a[183] = N, a[184] = at, a[185] = E, a[186] = T, a[187] = it, a[188] = lt, a[189] = st) : st = a[189];
				var ut;
				return a[190] !== at || a[191] !== st || a[192] !== W ? (ut = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: at,
					children: st
				})), a[190] = at, a[191] = st, a[192] = W, a[193] = ut) : ut = a[193], ut;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG: {
				var ct = i.data, dt;
				a[194] !== ct ? (dt = o("WAWebFrontendMsgGetters").getChat(ct), a[194] = ct, a[195] = dt) : dt = a[195];
				var mt = "chatlist-message-" + ct.id.id, pt;
				a[196] !== l || a[197] !== ct || a[198] !== A || a[199] !== E || a[200] !== T || a[201] !== dt || a[202] !== mt ? (pt = m.jsx(r("WAWebChatMessage.react"), {
					msg: ct,
					chat: dt,
					searchQuery: E,
					filterPreset: l,
					onClick: A,
					active: T,
					testid: mt
				}), a[196] = l, a[197] = ct, a[198] = A, a[199] = E, a[200] = T, a[201] = dt, a[202] = mt, a[203] = pt) : pt = a[203];
				var _t;
				return a[204] !== ct || a[205] !== pt || a[206] !== W ? (_t = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: ct,
					children: pt
				})), a[204] = ct, a[205] = pt, a[206] = W, a[207] = _t) : _t = a[207], _t;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING: {
				var ft = i.data, gt;
				a[208] === Symbol.for("react.memo_cache_sentinel") ? (gt = m.jsx("div", { style: { minHeight: 72 } }), a[208] = gt) : gt = a[208];
				var ht;
				return a[209] !== ft ? (ht = m.jsx(r("CometPlaceholder.react"), {
					fallback: gt,
					name: "WAWebCallLogIncomingCell",
					children: m.jsx(g, { call: ft })
				}), a[209] = ft, a[210] = ht) : ht = a[210], ht;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING: {
				var yt = i.data, Ct;
				a[211] !== yt || a[212] !== T ? (Ct = function() {
					return T == null ? void 0 : T.setVal(yt);
				}, a[211] = yt, a[212] = T, a[213] = Ct) : Ct = a[213];
				var bt;
				a[214] !== yt || a[215] !== T || a[216] !== Ct ? (bt = m.jsx(r("WAWebCallLogJoinOngoingCell.react"), {
					callLogMsg: yt,
					active: T,
					onClick: Ct
				}), a[214] = yt, a[215] = T, a[216] = Ct, a[217] = bt) : bt = a[217];
				var vt;
				return a[218] !== yt || a[219] !== bt || a[220] !== W ? (vt = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: yt,
					children: bt
				})), a[218] = yt, a[219] = bt, a[220] = W, a[221] = vt) : vt = a[221], vt;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG: {
				var St = i.data, Rt = St[St.length - 1], Lt;
				a[222] !== Rt || a[223] !== T ? (Lt = function() {
					return T == null ? void 0 : T.setVal(Rt);
				}, a[222] = Rt, a[223] = T, a[224] = Lt) : Lt = a[224];
				var Et;
				a[225] !== St || a[226] !== l || a[227] !== E || a[228] !== T || a[229] !== Lt ? (Et = m.jsx(o("WAWebCallLogEntryCell.react").CallLogEntryCell, {
					mergedMsgs: St,
					searchQuery: E,
					filterPreset: l,
					onClick: Lt,
					active: T,
					testidPrefix: "chatlist-message"
				}), a[225] = St, a[226] = l, a[227] = E, a[228] = T, a[229] = Lt, a[230] = Et) : Et = a[230];
				var kt;
				return a[231] !== Rt || a[232] !== Et || a[233] !== W ? (kt = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Rt,
					children: Et
				})), a[231] = Rt, a[232] = Et, a[233] = W, a[234] = kt) : kt = a[234], kt;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE: {
				var It, Tt = i.data, Dt = (It = Tt.chat) != null ? It : Tt.contact;
				if (Dt == null) return null;
				var xt;
				a[235] !== c ? (xt = c(), a[235] = c, a[236] = xt) : xt = a[236];
				var $t;
				a[237] !== Tt || a[238] !== T || a[239] !== xt ? ($t = m.jsx(r("WAWebFavoriteCell.react"), {
					active: T,
					favoriteItem: Tt,
					onClick: r("WAWebNoop"),
					photoSize: xt,
					testid: "chatlist-favorite"
				}), a[237] = Tt, a[238] = T, a[239] = xt, a[240] = $t) : $t = a[240];
				var Pt;
				return a[241] !== Dt || a[242] !== $t || a[243] !== W ? (Pt = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Dt,
					children: $t
				})), a[241] = Dt, a[242] = $t, a[243] = W, a[244] = Pt) : Pt = a[244], Pt;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE: {
				var Nt;
				return a[245] !== T ? (Nt = m.jsx(b, { active: T }), a[245] = T, a[246] = Nt) : Nt = a[246], Nt;
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT: {
				var Mt = i.data, wt;
				a[247] !== Mt ? (wt = function() {
					var e = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
					e.clickEventDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
					var t = o("WAWebFrontendMsgGetters").getChat(Mt), n = o("WAWebFrontendMsgGetters").getAsEventCreation(Mt);
					n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
				}, a[247] = Mt, a[248] = wt) : wt = a[248];
				var At = wt, Ft;
				a[249] !== Mt || a[250] !== At || a[251] !== T ? (Ft = m.jsx(r("WAWebUpcomingEventCell.react"), {
					eventMessage: Mt,
					active: T,
					onClick: At
				}), a[249] = Mt, a[250] = At, a[251] = T, a[252] = Ft) : Ft = a[252];
				var Ot;
				return a[253] !== Mt || a[254] !== Ft || a[255] !== W ? (Ot = m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, W, {
					model: Mt,
					children: Ft
				})), a[253] = Mt, a[254] = Ft, a[255] = W, a[256] = Ot) : Ot = a[256], Ot;
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebChatlistItem] UnknownDataError: default"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
		}
	}
	function S() {
		var e = o("react-compiler-runtime").c(1), t = R, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = m.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			size: "small",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			testid: "view-all-favorites-section-button",
			variant: "outline"
		}), e[0] = n) : n = e[0], n;
	}
	function R() {
		r("WAWebVoipCallsTabPanelManager").trigger("openFavoritesDrawer");
	}
	function L() {
		var e = o("react-compiler-runtime").c(1), t = E, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = m.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			size: "small",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			testid: "view-all-upcoming-events-section-button",
			variant: "outline"
		}), e[0] = n) : n = e[0], n;
	}
	function E() {
		r("WAWebVoipCallsTabPanelManager").trigger("openUpcomingEventsDrawer");
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(5), n = e.header, a = e.testid, i;
		t[0] !== n ? (i = {
			title: n,
			type: "default"
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = a != null ? a : "section-header", s;
		return t[2] !== i || t[3] !== l ? (s = m.jsx(r("WDSSectionDivider.react"), {
			header: i,
			testid: l
		}), t[2] = i, t[3] = l, t[4] = s) : s = t[4], s;
	}
	var I = _(v);
	l.default = I;
}), 226);

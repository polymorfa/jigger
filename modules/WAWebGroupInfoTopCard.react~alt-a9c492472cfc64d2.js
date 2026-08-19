__d("WAWebGroupInfoTopCard.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebCallCollection",
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebGroupInfoPhoto.react",
	"WAWebGroupInfoSubjectInput.react",
	"WAWebGroupType",
	"WAWebL10N",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebListsLabelGatingUtils",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebParticipantListUtils",
	"WAWebSetSubjectGroupAction",
	"WAWebShouldShowCallButtons",
	"WAWebTag.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSFlex.stylex",
	"WDSIconIcCall.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcSearch.react",
	"WDSIconIcVideocam.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebModelValues",
	"useWAWebUnmountSignal",
	"useWAWebVoipCanStartCall",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		}
	}, _ = { internalBadge: {
		borderStartStartRadius: "xbrszos",
		borderStartEndRadius: "xea3l6g",
		borderEndEndRadius: "x18isctg",
		borderEndStartRadius: "x2q3nzr",
		marginTop: "x1380le5",
		$$css: !0
	} };
	function f(e) {
		var t, n, a = o("react-compiler-runtime").c(46), i = e.chat, l = e.focusGroupSubjectOnMount, u = e.onAddParticipant, d = e.onClickParticipantsCount, f = e.onSearchMsgs, h = e.showHiddenSubgroupIcon, y;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (y = [o("WAWebChatGetters").getLabels], a[0] = y) : y = a[0];
		var b = o("useWAWebChatValues").useChatValues(i.id, y), v = b[0], S;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (S = [
			"size",
			"creation",
			"groupType",
			"participants",
			"hiddenSubgroup",
			"isInternal"
		], a[1] = S) : S = a[1];
		var R = o("useWAWebModelValues").useOptionalModelValues(i.groupMetadata, S), L = R == null ? void 0 : R.groupType, E = o("useWAWebABPropConfigValue").useABPropConfigValue("internal_group_indicator"), k = (R == null ? void 0 : R.isInternal) === !0, I = R == null ? void 0 : R.participants, T = (t = I == null ? void 0 : I.length) != null ? t : 0, D = (n = R == null ? void 0 : R.size) != null ? n : 0, x;
		a[2] !== I || a[3] !== T || a[4] !== D ? (x = I != null && I.iAmAdmin() ? T : D, a[2] = I, a[3] = T, a[4] = D, a[5] = x) : x = a[5];
		var $ = x, P;
		if (a[6] !== R || a[7] !== L) {
			var N = R == null ? void 0 : R.getParentGroupChat(), M;
			if (a[9] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
				/*BTDS*/
				""
			), a[9] = M) : M = a[9], P = M, L === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
				var w;
				a[10] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
					/*BTDS*/
					""
				), a[10] = w) : w = a[10], P = w;
			} else N != null && ((R == null ? void 0 : R.hiddenSubgroup) === !0 ? P = s._(
				/*BTDS*/
				"",
				[s._param("community-name", N == null ? void 0 : N.formattedTitle)]
			) : P = s._(
				/*BTDS*/
				"",
				[s._param("community-name", N == null ? void 0 : N.formattedTitle)]
			));
			a[6] = R, a[7] = L, a[8] = P;
		} else P = a[8];
		var A = L === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? $ : T, F;
		a[11] !== A ? (F = s._(
			/*BTDS*/
			"",
			[s._plural(A, "number")]
		), a[11] = A, a[12] = F) : F = a[12];
		var O = F, B;
		a[13] !== R || a[14] !== d || a[15] !== A || a[16] !== O ? (B = R != null && R.isSuspendedOrTerminated() || A === 0 ? null : m.jsxs(m.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", m.jsx(r("WDSTextualLink.react"), {
			onClick: d,
			children: O
		})] }), a[13] = R, a[14] = d, a[15] = A, a[16] = O, a[17] = B) : B = a[17];
		var W = B, q;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (q = (c || (c = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter), a[18] = q) : q = a[18];
		var U;
		a[19] !== i || a[20] !== h ? (U = m.jsx(r("WAWebGroupInfoPhoto.react"), {
			chat: i,
			xstyle: p.marginBottom10,
			showAddIconOverlay: !0,
			showHiddenSubgroupIcon: h
		}), a[19] = i, a[20] = h, a[21] = U) : U = a[21];
		var V;
		a[22] !== i || a[23] !== l ? (V = m.jsx(g, {
			chat: i,
			focusOnMount: l,
			xstyle: p.marginBottom6
		}), a[22] = i, a[23] = l, a[24] = V) : V = a[24];
		var H;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (H = { className: "x1evy7pa x1kgmq87 x2b8uid" }, a[25] = H) : H = a[25];
		var G;
		a[26] !== P || a[27] !== W ? (G = m.jsx("div", babelHelpers.extends({ "data-testid": "group-info-top-card-subtitle" }, H, { children: m.jsxs(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			selectable: !0,
			dir: "auto",
			children: [
				P,
				" ",
				W
			]
		}) })), a[26] = P, a[27] = W, a[28] = G) : G = a[28];
		var z;
		a[29] !== k || a[30] !== E ? (z = E === !0 && k && m.jsx(o("WAWebTag.react").Tag, {
			testid: "group-info-internal-badge",
			theme: o("WAWebTag.react").TagTheme.Secondary,
			xstyle: _.internalBadge,
			children: s._(
				/*BTDS*/
				""
			)
		}), a[29] = k, a[30] = E, a[31] = z) : z = a[31];
		var j;
		a[32] !== v ? (j = o("WAWebListsLabelGatingUtils").canDisplayLabel() && m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: v }), a[32] = v, a[33] = j) : j = a[33];
		var K;
		a[34] !== i || a[35] !== R || a[36] !== u || a[37] !== f ? (K = m.jsx(C, {
			chat: i,
			groupMetadata: R,
			onAddParticipant: u,
			onSearchMsgs: f
		}), a[34] = i, a[35] = R, a[36] = u, a[37] = f, a[38] = K) : K = a[38];
		var Q;
		return a[39] !== G || a[40] !== z || a[41] !== j || a[42] !== K || a[43] !== U || a[44] !== V ? (Q = m.jsx(r("WAWebDrawerSection.react"), {
			theme: "refresh-new",
			children: m.jsxs("div", babelHelpers.extends({}, q, { children: [
				U,
				V,
				G,
				z,
				j,
				K
			] }))
		}), a[39] = G, a[40] = z, a[41] = j, a[42] = K, a[43] = U, a[44] = V, a[45] = Q) : Q = a[45], Q;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(38), n = e.chat, a = e.focusOnMount, i = e.xstyle, l = a === void 0 ? !1 : a, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ["name"], t[0] = s) : s = t[0];
		var u = o("useWAWebModelValues").useModelValues(n.contact, s), d;
		t[1] !== n.groupMetadata ? (d = r("nullthrows")(n.groupMetadata), t[1] = n.groupMetadata, t[2] = d) : d = t[2];
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = [
			"creation",
			"restrict",
			"support",
			"isUnnamed",
			"participants"
		], t[3] = p) : p = t[3];
		var _ = o("useWAWebModelValues").useModelValues(d, p), f = r("useWAWebUnmountSignal")(), g;
		t[4] !== n || t[5] !== u.name || t[6] !== f ? (g = async function(t) {
			var e = t;
			e !== u.name && await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(n, e), f).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(y);
		}, t[4] = n, t[5] = u.name, t[6] = f, t[7] = g) : g = t[7];
		var C = g, b = h;
		if (!_.support) {
			if (_.isUnnamed) {
				var v;
				t[8] !== _ ? (v = o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(_).toLocaleString(), t[8] = _, t[9] = v) : v = t[9];
				var S;
				t[10] !== _ ? (S = _.canSetSubject(), t[10] = _, t[11] = S) : S = t[11];
				var R = _.restrict ? b : void 0, L;
				return t[12] !== l || t[13] !== C || t[14] !== v || t[15] !== S || t[16] !== R || t[17] !== i ? (L = m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
					subject: v,
					onSave: C,
					editable: S,
					editRestrictionInfo: R,
					focusOnMount: l,
					xstyle: i
				}), t[12] = l, t[13] = C, t[14] = v, t[15] = S, t[16] = R, t[17] = i, t[18] = L) : L = t[18], L;
			}
			var E = u.name || n.formattedTitle, k;
			t[19] !== _ ? (k = _.canSetSubject(), t[19] = _, t[20] = k) : k = t[20];
			var I = _.restrict ? b : void 0, T;
			return t[21] !== l || t[22] !== C || t[23] !== E || t[24] !== k || t[25] !== I || t[26] !== i ? (T = m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
				subject: E,
				onSave: C,
				editable: k,
				editRestrictionInfo: I,
				focusOnMount: l,
				xstyle: i
			}), t[21] = l, t[22] = C, t[23] = E, t[24] = k, t[25] = I, t[26] = i, t[27] = T) : T = t[27], T;
		}
		var D;
		t[28] !== n || t[29] !== _ ? (D = m.jsx(o("WAWebName.react").GroupName, {
			chat: n,
			groupMetadata: _,
			breakWord: !0,
			checkmarkLarge: !0
		}), t[28] = n, t[29] = _, t[30] = D) : D = t[30];
		var x = D, $;
		t[31] !== i ? ($ = (c || (c = r("stylex"))).props(i), t[31] = i, t[32] = $) : $ = t[32];
		var P;
		t[33] !== x ? (P = m.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			children: x
		}), t[33] = x, t[34] = P) : P = t[34];
		var N;
		return t[35] !== $ || t[36] !== P ? (N = m.jsx("div", babelHelpers.extends({}, $, { children: P })), t[35] = $, t[36] = P, t[37] = N) : N = t[37], N;
	}
	function h() {
		o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function y(t) {
		o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["group_info_drawer:onSetSubject failed"])));
	}
	function C(e) {
		var t, n, a, i = e.chat, l = e.groupMetadata, c = e.onAddParticipant, d = e.onSearchMsgs, p = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), _ = p.inited, f = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(i), g = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}), h = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByChat(i);
		}), y = h != null && o("WAWebMsgGetters").getIsCallLink(h) !== !0, C = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants"), b = l == null ? void 0 : l.participants.canAdd(), v = b === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), S = (t = (n = l == null ? void 0 : l.size) != null ? n : l == null || (a = l.participants) == null ? void 0 : a.length) != null ? t : 0, R = (r("WAWebEnvironment").isWindows || _) && o("WAWebShouldShowCallButtons").shouldShowCallButtons(i) && o("WAWebVoipGatingUtils").isGroupCallingEnabled() && S <= C, L = !f || y, E;
		g ? E = s._(
			/*BTDS*/
			""
		) : y && (E = s._(
			/*BTDS*/
			""
		));
		var k = function(t) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: group info: start group call, isVideo: ", ""])), t), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(i, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.GROUP_CHAT_INFO);
		};
		return m.jsx("div", {
			className: "xh8yej3 x1de0gy",
			children: m.jsxs(r("WDSActionTileGroup.react"), { children: [
				R && m.jsx(r("WDSActionTile.react"), {
					Icon: r("WDSIconIcCall.react"),
					testid: "group_info_voice_call_action_tile",
					disabled: L,
					tooltip: E,
					onPress: function() {
						return k(!1);
					},
					label: s._(
						/*BTDS*/
						""
					)
				}, "voice"),
				R && m.jsx(r("WDSActionTile.react"), {
					Icon: r("WDSIconIcVideocam.react"),
					testid: "group_info_video_call_action_tile",
					disabled: L,
					tooltip: E,
					onPress: function() {
						return k(!0);
					},
					label: s._(
						/*BTDS*/
						""
					)
				}, "video"),
				m.jsx(r("WDSActionTile.react"), {
					Icon: r("WDSIconIcPersonAdd.react"),
					tooltip: v,
					label: s._(
						/*BTDS*/
						""
					),
					disabled: b !== !0,
					onPress: c,
					testid: "group_info_add_action_tile"
				}, "add"),
				m.jsx(r("WDSActionTile.react"), {
					Icon: r("WDSIconIcSearch.react"),
					tooltip: s._(
						/*BTDS*/
						""
					),
					onPress: d,
					label: s._(
						/*BTDS*/
						""
					),
					testid: "group_info_search_action_tile"
				}, "search")
			] })
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = f;
}), 226);

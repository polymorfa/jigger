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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(38), a = e.chat, i = e.focusOnMount, l = e.xstyle, s = i === void 0 ? !1 : i, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = ["name"], t[0] = u) : u = t[0];
		var d = o("useWAWebModelValues").useModelValues(a.contact, u), p;
		t[1] !== a.groupMetadata ? (p = r("nullthrows")(a.groupMetadata), t[1] = a.groupMetadata, t[2] = p) : p = t[2];
		var _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = [
			"creation",
			"restrict",
			"support",
			"isUnnamed",
			"participants"
		], t[3] = _) : _ = t[3];
		var f = o("useWAWebModelValues").useModelValues(p, _), g = r("useWAWebUnmountSignal")(), C;
		t[4] !== a || t[5] !== d.name || t[6] !== g ? (C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = e;
				t !== d.name && (yield r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(a, t), g).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(y));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), t[4] = a, t[5] = d.name, t[6] = g, t[7] = C) : C = t[7];
		var b = C, v = h;
		if (!f.support) {
			if (f.isUnnamed) {
				var S;
				t[8] !== f ? (S = o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(f).toLocaleString(), t[8] = f, t[9] = S) : S = t[9];
				var R;
				t[10] !== f ? (R = f.canSetSubject(), t[10] = f, t[11] = R) : R = t[11];
				var L = f.restrict ? v : void 0, E;
				return t[12] !== s || t[13] !== b || t[14] !== S || t[15] !== R || t[16] !== L || t[17] !== l ? (E = m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
					subject: S,
					onSave: b,
					editable: R,
					editRestrictionInfo: L,
					focusOnMount: s,
					xstyle: l
				}), t[12] = s, t[13] = b, t[14] = S, t[15] = R, t[16] = L, t[17] = l, t[18] = E) : E = t[18], E;
			}
			var k = d.name || a.formattedTitle, I;
			t[19] !== f ? (I = f.canSetSubject(), t[19] = f, t[20] = I) : I = t[20];
			var T = f.restrict ? v : void 0, D;
			return t[21] !== s || t[22] !== b || t[23] !== k || t[24] !== I || t[25] !== T || t[26] !== l ? (D = m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
				subject: k,
				onSave: b,
				editable: I,
				editRestrictionInfo: T,
				focusOnMount: s,
				xstyle: l
			}), t[21] = s, t[22] = b, t[23] = k, t[24] = I, t[25] = T, t[26] = l, t[27] = D) : D = t[27], D;
		}
		var x;
		t[28] !== a || t[29] !== f ? (x = m.jsx(o("WAWebName.react").GroupName, {
			chat: a,
			groupMetadata: f,
			breakWord: !0,
			checkmarkLarge: !0
		}), t[28] = a, t[29] = f, t[30] = x) : x = t[30];
		var $ = x, P;
		t[31] !== l ? (P = (c || (c = r("stylex"))).props(l), t[31] = l, t[32] = P) : P = t[32];
		var N;
		t[33] !== $ ? (N = m.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			children: $
		}), t[33] = $, t[34] = N) : N = t[34];
		var M;
		return t[35] !== P || t[36] !== N ? (M = m.jsx("div", babelHelpers.extends({}, P, { children: N })), t[35] = P, t[36] = N, t[37] = M) : M = t[37], M;
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

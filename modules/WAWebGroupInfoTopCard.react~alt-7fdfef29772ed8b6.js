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
		var t, n, a = e.chat, i = e.focusGroupSubjectOnMount, l = e.onAddParticipant, u = e.onAdminSetting, d = e.onClickParticipantsCount, f = e.onSearchMsgs, y = e.showHiddenSubgroupIcon, C = o("useWAWebChatValues").useChatValues(a.id, [o("WAWebChatGetters").getLabels]), b = C[0], v = o("useWAWebModelValues").useOptionalModelValues(a.groupMetadata, [
			"size",
			"creation",
			"groupType",
			"participants",
			"hiddenSubgroup",
			"isInternal"
		]), S = v == null ? void 0 : v.groupType, R = o("useWAWebABPropConfigValue").useABPropConfigValue("internal_group_indicator"), L = (v == null ? void 0 : v.isInternal) === !0, E = v == null ? void 0 : v.participants, k = (t = E == null ? void 0 : E.length) != null ? t : 0, I = (n = v == null ? void 0 : v.size) != null ? n : 0, T = E != null && E.iAmAdmin() ? k : I, D = v == null ? void 0 : v.getParentGroupChat(), x = s._(
			/*BTDS*/
			""
		);
		S === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? x = s._(
			/*BTDS*/
			""
		) : D != null && ((v == null ? void 0 : v.hiddenSubgroup) === !0 ? x = s._(
			/*BTDS*/
			"",
			[s._param("community-name", D == null ? void 0 : D.formattedTitle)]
		) : x = s._(
			/*BTDS*/
			"",
			[s._param("community-name", D == null ? void 0 : D.formattedTitle)]
		));
		var $ = S === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? T : k, P = s._(
			/*BTDS*/
			"",
			[s._plural($, "number")]
		), N = v != null && v.isSuspendedOrTerminated() || $ === 0 ? null : m.jsxs(m.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", m.jsx(r("WDSTextualLink.react"), {
			onClick: d,
			children: P
		})] });
		return m.jsx(r("WAWebDrawerSection.react"), {
			theme: "refresh-new",
			children: m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter), { children: [
				m.jsx(r("WAWebGroupInfoPhoto.react"), {
					chat: a,
					xstyle: p.marginBottom10,
					showAddIconOverlay: !0,
					showHiddenSubgroupIcon: y
				}),
				m.jsx(g, {
					chat: a,
					focusOnMount: i,
					xstyle: p.marginBottom6
				}),
				m.jsx("div", {
					"data-testid": "group-info-top-card-subtitle",
					className: "x1evy7pa x1kgmq87 x2b8uid",
					children: m.jsxs(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						selectable: !0,
						dir: "auto",
						children: [
							x,
							" ",
							N
						]
					})
				}),
				R === !0 && L && m.jsx(o("WAWebTag.react").Tag, {
					testid: "group-info-internal-badge",
					theme: o("WAWebTag.react").TagTheme.Secondary,
					xstyle: _.internalBadge,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				o("WAWebListsLabelGatingUtils").canDisplayLabel() && m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: b }),
				m.jsx(h, {
					chat: a,
					groupMetadata: v,
					onAddParticipant: l,
					onSearchMsgs: f
				})
			] }))
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var a = t.chat, i = t.focusOnMount, l = i === void 0 ? !1 : i, u = t.xstyle, d = o("useWAWebModelValues").useModelValues(a.contact, ["name"]), p = o("useWAWebModelValues").useModelValues(r("nullthrows")(a.groupMetadata), [
			"creation",
			"restrict",
			"support",
			"isUnnamed",
			"participants"
		]), _ = r("useWAWebUnmountSignal")(), f = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t;
				n !== d.name && (yield r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(a, n), _).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["group_info_drawer:onSetSubject failed"])));
				}));
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), g = function() {
			o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		};
		if (!p.support) return p.isUnnamed ? m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
			subject: o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(p).toLocaleString(),
			onSave: f,
			editable: p.canSetSubject(),
			editRestrictionInfo: p.restrict ? g : void 0,
			focusOnMount: l,
			xstyle: u
		}) : m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
			subject: d.name || a.formattedTitle,
			onSave: f,
			editable: p.canSetSubject(),
			editRestrictionInfo: p.restrict ? g : void 0,
			focusOnMount: l,
			xstyle: u
		});
		var h = m.jsx(o("WAWebName.react").GroupName, {
			chat: a,
			groupMetadata: p,
			breakWord: !0,
			checkmarkLarge: !0
		});
		return m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(u), { children: m.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			children: h
		}) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
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
	h.displayName = h.name + " [from " + i.id + "]", l.default = f;
}), 226);

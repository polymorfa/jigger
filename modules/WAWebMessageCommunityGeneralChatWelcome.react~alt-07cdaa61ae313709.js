__d("WAWebMessageCommunityGeneralChatWelcome.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebFormatParticipantNames",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityGeneralChatWelcomeTitle.react",
	"WAWebModalManager",
	"WAWebOpenAddParticipantModalFlow",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebAddParticipantsSelectedContacts"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} };
	function m(t) {
		var n, a, i = t.author, l = t.subgroupChat, u = t.templateParams, m = u[0], p = u[1], _ = r("useWAWebAddParticipantsSelectedContacts")(), f = _.handleClearSelectedContacts, g = _.selectedContactsMap, h = _.updateSelectedContactsState;
		if (((n = l.groupMetadata) == null ? void 0 : n.parentGroup) == null) return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor12), { children: o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(l.formattedTitle) }));
		var y = l.groupMetadata.parentGroup, C = o("WAWebChatCollection").ChatCollection.get(y), b = C == null ? void 0 : C.formattedTitle, v = p != null ? p : l == null ? void 0 : l.formattedTitle, S = (a = C == null ? void 0 : C.iAmAdmin()) != null ? a : !1, R = function() {
			if (S) {
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
					o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
					groupMetadata: r("nullthrows")(l.groupMetadata),
					chat: l,
					communityName: b,
					selectedContactsMap: g,
					updateSelectedContactsState: h,
					reopenAddGroupFlowCallback: R,
					handleClearSelectedContacts: f
				});
			} else o("WAWebCmd").Cmd.openCommunityTabbedInfo(y);
		}, L;
		switch (m) {
			case "created": {
				L = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._(
					/*BTDS*/
					""
				);
				break;
			}
			case "subtype-general_chat_add": {
				L = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._(
					/*BTDS*/
					""
				);
				break;
			}
			case "accept":
			case "":
			case null: {
				var E = o("WAWebFormatParticipantNames").getFormattedNames(i);
				E != null && E !== "" ? L = s._(
					/*BTDS*/
					"",
					[s._param("admin_name", E)]
				) : L = s._(
					/*BTDS*/
					""
				);
				break;
			}
			case "invite":
			case "linked_group_join":
			default: {
				L = s._(
					/*BTDS*/
					""
				);
				break;
			}
		}
		var k = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), I = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && !L ? c.jsx(c.Fragment, { children: k }) : c.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: [c.jsx(c.Fragment, { children: L }), c.jsx(c.Fragment, { children: k })] }), T = S ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: y,
			subgroupId: l.id,
			title: o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(v),
			body: I,
			footer: T,
			onFooterClick: R
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

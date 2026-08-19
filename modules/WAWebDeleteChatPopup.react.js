__d("WAWebDeleteChatPopup.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebBlocklistUtils",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDeleteChatAction",
	"WAWebExitGroupAction",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebGroupExitModalLoggingUtils",
	"WAWebGroupType",
	"WAWebLeaveCommunityAnnouncementGroupPopup.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebUpdateDbForCommunityAction",
	"WAWebUpdateModelsForCommunityAction",
	"nullthrows",
	"react",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react"));
	function m(t) {
		var a, i = t.chat, l = t.onCancel, s = t.onDeleteOrExit, c = o("useWAWebChatValues").useChatValues(i.id, [
			(a = o("WAWebChatGetters")).getId,
			a.getIsPSA,
			a.getIsReadOnly,
			a.getIsGroup,
			a.getIsUser,
			a.getIsBroadcast,
			o("WAWebFrontendChatGetters").getContact,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			a.getArchive,
			a.getIsNewsletter,
			o("WAWebFrontendChatGetters").getFormattedTitle
		]), m = c[0], p = c[1], h = c[2], y = c[3], C = c[4], b = c[5], v = c[6], S = c[7], R = c[8], L = c[9], E = c[10], k = function() {
			o("WAWebModalManager").ModalManager.close(), l == null || l();
		}, I = function() {
			var t;
			if ((S == null ? void 0 : S.groupType) === o("WAWebGroupType").GroupType.COMMUNITY) {
				var a = r("nullthrows")(S), l = a.joinedSubgroups.map(function(e) {
					var t = o("WAWebChatCollection").ChatCollection.get(e);
					return {
						id: e,
						subject: r("nullthrows")(t).formattedTitle
					};
				});
				t = o("WAWebUpdateDbForCommunityAction").databaseUpdatesForSubgroupUnlink(m, l).then(function(e) {
					return (u || (u = n("Promise"))).all(e);
				}).then(function() {
					return o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(m, l), o("WAWebDeleteChatAction").sendDelete(i);
				});
			} else y ? h ? (t = o("WAWebDeleteChatAction").sendDelete(i), o("WAWebGroupExitModalLoggingUtils").logGroupDeleteFromDeletePopup({ groupJid: i.id.toJid() })) : (o("WAWebGroupExitModalLoggingUtils").logGroupExitFromLegacyExitPopup({ groupJid: i.id.toJid() }), t = o("WAWebExitGroupAction").sendExitGroup(i).then(r("WAWebNoop"))) : C || b ? t = o("WAWebDeleteChatAction").sendDelete(i) : o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["deleteChatPopup:onDelete Unsupported chat type"])));
			t && s(t), o("WAWebModalManager").ModalManager.close();
		}, T = function() {
			p ? o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
				archive: !0,
				chat: o("WAWebStateUtils").unproxy(i),
				entryPoint: 7
			}) : o("WAWebCmd").Cmd.archiveChat(i, !0), o("WAWebModalManager").ModalManager.close();
		}, D = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupArchiveFromLegacyExitPopup({ groupJid: i.id.toJid() }), T();
		}, x, $, P = C && v != null && v.isContactBlocked && !R, N = y && h && !R && o("WAWebBlocklistUtils").isRBIForGroupsEnabled();
		if (y && !h && !R ? x = {
			text: r("WAWebFbtCommon")("Archive instead"),
			onClick: D
		} : (P || N) && (x = {
			text: r("WAWebFbtCommon")("Archive"),
			onClick: T
		}, $ = "horizontal"), (S == null ? void 0 : S.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(i) && !o("WAWebChatGroupUtils").isTerminatedGroup(i) && S != null && S.participants.iAmMember()) {
			var M = !!(S != null && S.participants.iAmAdmin());
			return M ? d.jsx(o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupAdminPopup, {
				isCommunityCreator: !!(S != null && S.participants.iAmSuperAdmin()),
				isArchived: R,
				onArchive: T
			}) : d.jsx(o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupMemberPopup, {
				isArchived: R,
				onArchive: T
			});
		}
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
			tsNavigationData: {
				surface: "delete-chat",
				viewName: "delete-chat"
			},
			title: _(i),
			onOK: I,
			okText: g(i),
			onCancel: k,
			extraButtonProps: x,
			okButtonType: "solid-warning"
		}, $ != null ? { buttonsDirection: $ } : null, { children: d.jsx(o("WAWebText.react").WAWebTextMuted, { children: f(i) }) }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n, r = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
		return (r == null || (n = r.groupMetadata) == null ? void 0 : n.joinedSubgroups.length) === 1;
	}
	function _(e) {
		var t;
		if (((t = e.groupMetadata) == null ? void 0 : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsGroup(e)) return p(e) && !o("WAWebChatGetters").getIsReadOnly(e) ? s._(
			/*BTDS*/
			""
		) : o("WAWebChatGetters").getIsReadOnly(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("group_name", d.jsx(o("WAWebName.react").Name, {
				chat: e,
				titlify: !0
			}))]
		);
		if (o("WAWebChatGetters").getIsUser(e)) {
			var n = e.id.isAiHub() ? s._(
				/*BTDS*/
				""
			) : e.formattedTitle;
			return n ? s._(
				/*BTDS*/
				"",
				[s._param("contact_name", n)]
			) : s._(
				/*BTDS*/
				""
			);
		} else if (o("WAWebChatGetters").getIsBroadcast(e)) return e.formattedTitle ? s._(
			/*BTDS*/
			"",
			[s._param("contact_name", e.formattedTitle)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	function f(e) {
		if (h(e)) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsBroadcast(e)) return s._(
			/*BTDS*/
			""
		);
		if (p(e)) {
			var t, n, r = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
			if ((r == null ? void 0 : r.formattedTitle) != null) {
				var a;
				return ((a = e.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
					/*BTDS*/
					"",
					[s._param("community_name", d.jsx(o("WAWebName.react").Name, {
						chat: r,
						titlify: !0
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("group_name", d.jsx(o("WAWebName.react").Name, {
						chat: e,
						titlify: !0
					})), s._param("community_name", d.jsx(o("WAWebName.react").Name, {
						chat: r,
						titlify: !0
					}))]
				);
			}
			return ((n = e.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("group_name", d.jsx(o("WAWebName.react").Name, {
					chat: e,
					titlify: !0
				}))]
			);
		}
		return s._(
			/*BTDS*/
			""
		);
	}
	function g(e) {
		var t;
		if (((t = e.groupMetadata) == null ? void 0 : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsGroup(e)) return o("WAWebChatGetters").getIsReadOnly(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsUser(e) || o("WAWebChatGetters").getIsBroadcast(e)) return s._(
			/*BTDS*/
			""
		);
	}
	function h(e) {
		return o("WAWebChatGetters").getIsGroup(e) && o("WAWebChatGetters").getIsReadOnly(e) || o("WAWebChatGetters").getIsUser(e);
	}
	l.default = m;
}), 226);

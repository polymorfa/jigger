__d("WAWebDeleteChatDialogV2.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebBlocklistUtils",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebDeleteChatAction",
	"WAWebExitGroupAction",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebGroupExitModalLoggingUtils",
	"WAWebGroupType",
	"WAWebLeaveCommunityAnnouncementGroupPopup.react",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebUpdateDbForCommunityAction",
	"WAWebUpdateModelsForCommunityAction",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"nullthrows",
	"react",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = { inlineName: {
		display: "xt0psk2",
		$$css: !0
	} };
	function _(t) {
		var a, i = t.chat, l = t.onCancel, s = t.onDeleteOrExit, d = o("useWAWebChatValues").useChatValues(i.id, [
			(a = o("WAWebChatGetters")).getId,
			a.getIsPSA,
			a.getIsReadOnly,
			a.getIsGroup,
			a.getIsUser,
			a.getIsBroadcast,
			o("WAWebFrontendChatGetters").getContact,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			a.getArchive
		]), p = d[0], _ = d[1], f = d[2], C = d[3], b = d[4], v = d[5], S = d[6], R = d[7], L = d[8], E = function() {
			o("WDSDialogBridge").closeWDSDialog(), l == null || l();
		}, k = function() {
			_ ? o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
				archive: !0,
				chat: i,
				entryPoint: 7
			}) : o("WAWebCmd").Cmd.archiveChat(i, !0), o("WDSDialogBridge").closeWDSDialog();
		}, I = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupArchiveFromLegacyExitPopup({ groupJid: i.id.toJid() }), k();
		}, T = function() {
			var t;
			if ((R == null ? void 0 : R.groupType) === o("WAWebGroupType").GroupType.COMMUNITY) {
				var a = r("nullthrows")(R), l = a.joinedSubgroups.map(function(e) {
					var t = o("WAWebChatCollection").ChatCollection.get(e);
					return {
						id: e,
						subject: r("nullthrows")(t).formattedTitle
					};
				});
				t = o("WAWebUpdateDbForCommunityAction").databaseUpdatesForSubgroupUnlink(p, l).then(function(e) {
					return (c || (c = n("Promise"))).all(e);
				}).then(function() {
					return o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(p, l), o("WAWebDeleteChatAction").sendDelete(i);
				});
			} else C ? f ? (t = o("WAWebDeleteChatAction").sendDelete(i), o("WAWebGroupExitModalLoggingUtils").logGroupDeleteFromDeletePopup({ groupJid: i.id.toJid() })) : (o("WAWebGroupExitModalLoggingUtils").logGroupExitFromLegacyExitPopup({ groupJid: i.id.toJid() }), t = o("WAWebExitGroupAction").sendExitGroup(i).then(r("WAWebNoop"))) : b || v ? t = o("WAWebDeleteChatAction").sendDelete(i) : o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebDeleteChatDialogV2:onDelete Unsupported chat type"]))).sendLogs("delete-chat-dialog-unsupported-type");
			t && s(t), o("WDSDialogBridge").closeWDSDialog();
		};
		if ((R == null ? void 0 : R.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(i) && !o("WAWebChatGroupUtils").isTerminatedGroup(i) && R != null && R.participants.iAmMember()) {
			var D = !!(R != null && R.participants.iAmAdmin());
			return D ? m.jsx(o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupAdminPopup, {
				isCommunityCreator: !!(R != null && R.participants.iAmSuperAdmin()),
				isArchived: L,
				onArchive: k,
				onClose: o("WDSDialogBridge").closeWDSDialog
			}) : m.jsx(o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupMemberPopup, {
				isArchived: L,
				onArchive: k,
				onClose: o("WDSDialogBridge").closeWDSDialog
			});
		}
		var x = g(i), $ = h(i), P = y(i);
		if (x == null || $ == null || P == null) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebDeleteChatDialogV2: Unsupported chat type"]))).sendLogs("delete-chat-dialog-unsupported-title"), null;
		var N = b && S != null && S.isContactBlocked && !L, M = C && f && !L && o("WAWebBlocklistUtils").isRBIForGroupsEnabled(), w, A;
		return C && !f && !L ? (w = r("WAWebFbtCommon")("Archive instead"), A = I) : (N || M) && (w = r("WAWebFbtCommon")("Archive"), A = k), m.jsx(r("WDSConfirmDialog.react"), {
			title: x,
			description: $,
			confirmLabel: P,
			destructive: !0,
			onConfirm: T,
			onDismiss: E,
			secondaryLabel: w,
			onSecondary: A,
			open: !0
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n, r = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
		return (r == null || (n = r.groupMetadata) == null ? void 0 : n.joinedSubgroups.length) === 1;
	}
	function g(e) {
		var t;
		if (((t = e.groupMetadata) == null ? void 0 : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsGroup(e)) return f(e) && !o("WAWebChatGetters").getIsReadOnly(e) ? s._(
			/*BTDS*/
			""
		) : o("WAWebChatGetters").getIsReadOnly(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("group_name", m.jsx(o("WAWebName.react").Name, {
				chat: e,
				titlify: !0,
				xstyle: p.inlineName
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
	function h(e) {
		if (C(e)) return s._(
			/*BTDS*/
			""
		);
		if (o("WAWebChatGetters").getIsBroadcast(e)) return s._(
			/*BTDS*/
			""
		);
		if (f(e)) {
			var t, n, r = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
			if ((r == null ? void 0 : r.formattedTitle) != null) {
				var a;
				return ((a = e.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
					/*BTDS*/
					"",
					[s._param("community_name", m.jsx(o("WAWebName.react").Name, {
						chat: r,
						titlify: !0,
						xstyle: p.inlineName
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("group_name", m.jsx(o("WAWebName.react").Name, {
						chat: e,
						titlify: !0,
						xstyle: p.inlineName
					})), s._param("community_name", m.jsx(o("WAWebName.react").Name, {
						chat: r,
						titlify: !0,
						xstyle: p.inlineName
					}))]
				);
			}
			return ((n = e.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("group_name", m.jsx(o("WAWebName.react").Name, {
					chat: e,
					titlify: !0,
					xstyle: p.inlineName
				}))]
			);
		}
		return s._(
			/*BTDS*/
			""
		);
	}
	function y(e) {
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
	function C(e) {
		return o("WAWebChatGetters").getIsGroup(e) && o("WAWebChatGetters").getIsReadOnly(e) || o("WAWebChatGetters").getIsUser(e);
	}
	l.default = _;
}), 226);

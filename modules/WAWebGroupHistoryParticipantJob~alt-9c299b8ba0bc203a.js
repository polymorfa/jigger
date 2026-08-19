__d("WAWebGroupHistoryParticipantJob", [
	"WALogger",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryPostJoinTypes",
	"WAWebGroupType",
	"WAWebLidMigrationUtils",
	"WAWebModelStorageUtils",
	"WAWebSchemaGroupHistoryParticipant",
	"WAWebWidToJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n) {
		if (o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
			var r = n.filter(function(e) {
				return e.joinTime != null;
			});
			if (r.length !== 0) {
				var a;
				try {
					a = o("WAWebWidToJid").widToGroupJid(t);
				} catch (e) {
					return;
				}
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[group-history][M2] Storing join metadata for ", " participants"])), r.length), await o("WAWebModelStorageUtils").getStorage().lock(["group-history-participant"], async function(e) {
					var t, n = e[0], i = await n.get(a), l = (t = i == null ? void 0 : i.participantMetadataMap) != null ? t : new Map();
					for (var s of r) {
						var u, c, d, m, p, _ = (u = s.lid) != null ? u : s.id, f = o("WAWebLidMigrationUtils").toUserLid(_);
						if (f != null) {
							var g = o("WAWebWidToJid").userLidtoLidUserJid(f), h = l.get(g);
							l.set(g, {
								joinTime: (c = (d = s.joinTime) != null ? d : h == null ? void 0 : h.joinTime) != null ? c : null,
								groupHistorySentState: (m = (p = s.groupHistorySentState) != null ? p : h == null ? void 0 : h.groupHistorySentState) != null ? m : null
							});
						}
					}
					await n.createOrMerge(a, {
						chatId: a,
						participantMetadataMap: l
					});
				});
			}
		}
	}
	async function u(e, t) {
		if (o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) {
			var n;
			try {
				n = o("WAWebWidToJid").widToGroupJid(e);
			} catch (e) {
				return;
			}
			await o("WAWebModelStorageUtils").getStorage().lock(["group-history-participant"], async function(e) {
				var r = e[0], a = await r.get(n), i = a == null ? void 0 : a.participantMetadataMap;
				if (!(i == null || i.size === 0)) {
					var l = !1;
					for (var s of t) {
						var u, c = o("WAWebLidMigrationUtils").toUserLid((u = s.lid) != null ? u : s.id);
						c != null && i.delete(o("WAWebWidToJid").userLidtoLidUserJid(c)) && (l = !0);
					}
					l && (i.size === 0 ? await r.remove(n) : await r.merge(n, { participantMetadataMap: i }));
				}
			});
		}
	}
	async function c(e) {
		var t;
		try {
			t = o("WAWebWidToJid").widToGroupJid(e);
		} catch (e) {
			return;
		}
		await o("WAWebSchemaGroupHistoryParticipant").getGroupHistoryParticipantTable().remove(t);
	}
	async function d(e) {
		var t, n;
		try {
			n = o("WAWebWidToJid").widToGroupJid(e);
		} catch (e) {
			return null;
		}
		var r = await o("WAWebSchemaGroupHistoryParticipant").getGroupHistoryParticipantTable().get(n);
		return (t = r == null ? void 0 : r.participantMetadataMap) != null ? t : null;
	}
	async function m(e, t) {
		if (t.actionType !== o("WAWebGroupType").GROUP_ACTIONS.ADD || !o("WAWebGroupHistoryGating").isGroupHistoryAfterJoinPrerequisitesEnabled()) return t;
		var n = await d(e);
		if (n == null || n.size === 0) return t;
		var r = !1, a = t.participants.map(function(e) {
			var t, a;
			if (e.groupHistorySentState === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT || e.groupHistorySentState === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT) return e;
			var i = o("WAWebLidMigrationUtils").toUserLid((t = e.lid) != null ? t : e.id);
			if (i == null) return e;
			var l = (a = n.get(o("WAWebWidToJid").userLidtoLidUserJid(i))) == null ? void 0 : a.groupHistorySentState;
			return l !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT && l !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT ? e : (r = !0, babelHelpers.extends({}, e, { groupHistorySentState: l }));
		});
		return r ? babelHelpers.extends({}, t, { participants: a }) : t;
	}
	l.updateGroupHistoryParticipantMetadataOnJoin = s, l.clearGroupHistoryParticipantStateOnRemove = u, l.clearGroupHistoryParticipantStateForGroup = c, l.getGroupHistoryParticipantMetadataForGroup = d, l.enrichGroupActionWithStoredHistoryState = m;
}), 98);

__d("WAWebGroupHistoryParticipantStateHydration", [
	"WALogger",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryParticipantJob",
	"WAWebGroupHistoryPostJoinTypes",
	"WAWebGroupMetadataCollection",
	"WAWebLidMigrationUtils",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Set();
	function u(e) {
		if (!o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e)) return Promise.resolve();
		var t;
		try {
			t = o("WAWebWidFactory").asGroupWidOrThrow(e);
		} catch (e) {
			return Promise.resolve();
		}
		var n = t.toString();
		if (s.has(n)) return Promise.resolve();
		var a = r("WAWebGroupMetadataCollection").get(t);
		if (a == null) return Promise.resolve();
		s.add(n);
		var i = a.participants;
		return i.on("bulk_add", function() {
			c(t, i);
		}), c(t, i);
	}
	async function c(t, n) {
		try {
			var a = await o("WAWebGroupHistoryParticipantJob").getGroupHistoryParticipantMetadataForGroup(t);
			if (a == null || a.size === 0) return;
			for (var i of n.getModelsArray()) {
				var l = o("WAWebLidMigrationUtils").toUserLid(i.id);
				if (l != null) {
					var s = a.get(o("WAWebWidToJid").userLidtoLidUserJid(l));
					s != null && d(i, s);
				}
			}
		} catch (n) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[group-history] hydrate send state failed for ", ""])), t.toString()).catching(r("getErrorSafe")(n)).sendLogs("group-history-participant-state-hydrate-failed");
		}
	}
	function d(e, t) {
		p(t.groupHistorySentState) && !p(e.groupHistorySentState) && e.set({ groupHistorySentState: t.groupHistorySentState }), e.joinTime == null && t.joinTime != null && t.joinTime > 0 && e.set({ joinTime: t.joinTime });
	}
	function m(e, t) {
		var n, a = (n = r("WAWebGroupMetadataCollection").get(e)) == null ? void 0 : n.participants;
		return a == null ? t : t.map(function(e) {
			if (e.groupHistorySentState !== o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_NOT_SENT) return e;
			var t = a.get(e.id);
			return t != null && p(t.groupHistorySentState) ? babelHelpers.extends({}, e, { groupHistorySentState: void 0 }) : e;
		});
	}
	function p(e) {
		return e === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT || e === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT;
	}
	l.initializeGroupHistoryStateForChat = u, l.guardGroupHistorySentStateDowngrade = m;
}), 98);

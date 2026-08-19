__d("MAWParticipantManagementTxns", [
	"MAWDbParticipantTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWUserJidWrapper"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return o("MAWDbParticipantTxns").getParticipantsInThread(e, t).then(function(r) {
			if (n.length === 0 && r.length === 0) return {
				addedJids: [],
				participants: r,
				removedJids: [],
				typeUpdateJids: []
			};
			var a = new Map();
			r.forEach(function(e) {
				a.set(e.userJid, e);
			});
			var i = new Set(n.map(function(e) {
				return e.userJid;
			})), l = [], s = [], u = [], c = [];
			a.forEach(function(e, t) {
				i.has(t) || (e.type !== "invitedParticipant" ? l.push(t) : (c.push({
					type: e.type,
					userJid: e.userJid
				}), u.push(babelHelpers.extends({}, e))));
			}), n.forEach(function(e) {
				var t = a.get(e.userJid);
				t == null ? (s.push(e), e.type === "admin" && c.push({
					type: e.type,
					userJid: e.userJid
				})) : (t.type !== e.type && c.push({
					type: e.type,
					userJid: e.userJid
				}), u.push(babelHelpers.extends({}, t, e)));
			});
			var d = l.indexOf(o("MAWUserJidWrapper").getMyUserJid()) >= 0, m = function() {
				return [
					o("MAWDbParticipantTxns").bulkAddParticipants(e, t, s),
					o("MAWDbParticipantTxns").bulkUpdateParticipants(e, u),
					o("MAWDbParticipantTxns").bulkDeleteParticipantsInThread(e, t, l),
					d ? o("MAWDbThreadTxns").archiveThreads(e, [t], !0) : o("MAWDexieTable").dexieResolve()
				];
			};
			return o("MAWDexieTable").dexieAll(m()).then(function(e) {
				var t = e[0], n = e[1];
				return {
					addedJids: s.map(function(e) {
						return e.userJid;
					}),
					participants: [].concat(t, n),
					removedJids: l,
					typeUpdateJids: c
				};
			});
		});
	}
	l.syncParticipantList = e;
}), 98);

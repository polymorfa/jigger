__d("MAWDbGroupInfoTxns", [
	"MAWBridgeTypesCreators",
	"MAWInMemoryGroupInfoStore",
	"MAWIndexedDb",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = s(e.jid), n = e.participantVersion;
		t.success && t.value.participantVersion != null && e.participantVersion == null && (n = t.value.participantVersion);
		var r = e.subject.content;
		r != null && r.length === 0 && (r = void 0);
		var o = {
			creationTs: e.creationTs,
			creator: e.creator,
			groupJid: e.jid,
			inviter: e.inviter,
			memberAddMode: e.memberAddMode,
			name: r,
			nameOwner: e.subject.user,
			nameTs: e.subject.ts,
			participantVersion: n
		};
		return u(o), o;
	}
	function s(e) {
		var t = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e);
		return t == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(t);
	}
	function u(e) {
		o("MAWInMemoryGroupInfoStore").getReadwriteInMemoryGroupInfoStore().store(e), o("MAWIndexedDb").afterTransaction({
			tag: "GroupInfoUpdated",
			value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(e)
		});
	}
	function c(e) {
		return e.map(function(e) {
			return o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e);
		});
	}
	function d(e) {
		o("MAWInMemoryGroupInfoStore").getReadwriteInMemoryGroupInfoStore().delete(e);
	}
	l.putGroupInfo = e, l.getGroupInfo = s, l.getGroupInfos = c, l.deleteGroupInfo = d;
}), 98);

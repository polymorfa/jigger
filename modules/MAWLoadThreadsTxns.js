__d("MAWLoadThreadsTxns", [
	"FBLogger",
	"I64",
	"MAWBridgeThread",
	"MAWBridgeTypesCreators",
	"MAWDbGroupInfoTxns",
	"MAWDbParticipantTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWLoadGroupInvitesTxns",
	"MAWLoadOneToOneMessageRequestCapabilitiesTxn",
	"MAWMpsGating",
	"MAWThreadMappingQPL",
	"MAWTransactionMode",
	"MAWUserJidWrapper",
	"WAJids",
	"WALogger",
	"emptyFunction",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, r, a, i) {
		return i === void 0 && (i = "unknown"), n.forEach(function(t) {
			var n = o("MAWThreadMappingQPL").getInstanceKeyForJidInWorker(t.jid);
			o("MAWThreadMappingQPL").startInWorker({
				instanceKey: n,
				jid: t.jid,
				threadKey: t.optimisticThreadKey == null ? void 0 : (e || (e = o("I64"))).of_string(t.optimisticThreadKey),
				trigger: "loadContentsForThreads_" + i
			}), o("MAWIndexedDb").afterTransaction({
				tag: "VerifyThreadExists",
				value: o("MAWBridgeThread").createBridgeThread(t, a == null ? void 0 : a.get(t.jid), void 0, "loadContentsForThreads_" + i, n)
			});
		}), o("MAWMpsGating").isFullMpsEnabled() ? o("MAWDexieTable").dexieResolve(n) : o("MAWDexieTable").dexieAll([
			u(t, n),
			o("MAWLoadOneToOneMessageRequestCapabilitiesTxn").loadOneToOneMessageRequestCapabilities(n.map(function(e) {
				return e.jid;
			})),
			o("MAWLoadGroupInvitesTxns").loadGroupInvites(t, n)
		]).then(function() {
			return n;
		});
	}
	function u(e, t) {
		var n = [];
		return t.forEach(function(e) {
			return o("WAJids").switchOnMsgrChatJidType(e.jid, {
				group: function(t) {
					return n.push(t);
				},
				user: r("emptyFunction")
			});
		}), o("MAWDbGroupInfoTxns").getGroupInfos(n).forEach(function(e) {
			e != null && o("MAWIndexedDb").afterTransaction({
				tag: "GroupInfoUpdated",
				value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(e)
			});
		}), o("MAWDexieTable").dexieResolve();
	}
	var c = function(t) {
		var e = t.threadJid;
		return d(e);
	}, d = o("MAWIndexedDb").makeMsgrTransactor({ participants: o("MAWTransactionMode").READONLY }, "checkIfGroupParticipant", function(e) {
		return (function() {
			for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
			return m.apply(void 0, [e].concat(n));
		});
	});
	function m(e, t, n, a, i, l) {
		n === void 0 && (n = !0), a === void 0 && (a = !0);
		var s = o("MAWUserJidWrapper").getMyUserJid();
		return o("MAWDbParticipantTxns").getParticipant(e, t, s).then(function(u) {
			if (!u.success) return o("MAWDbParticipantTxns").hasAnyParticipantInThread(e, t).then(function(e) {
				if (!e) {
					r("FBLogger")("wmi", "checkIfParticipant").warn("Skipping VIEWER_NOT_SUBSCRIBED for thread %s: local participants not synced yet.", t.toString());
					return;
				}
				var c = n ? "group" : "one_to_one";
				if (o("WALogger").LOG(["[Occamadillo] User is not a participant of " + c + " thread\n        " + t.toString() + ", showing a VIEWER_NOT_SUBSCRIBED composer blocker"]), i == null) {
					var d;
					r("FBLogger")("maw_db", "checkIfParticipant").catching((d = u.payload) != null ? d : r("err")(u.error)).warn("[Occamadillo] User %s is not a participant of %s thread %s, occam: %s, archived: %s, cannotReplyReason null.", s, c, t.toString(), a, l);
				}
				r("FBLogger")("labyrinth_web", "checkIfParticipant").warn("[Occamadillo] User not a participant from checkIfParticipant");
				var m = {
					cannotReplyReason: "viewer_not_subscribed",
					threadJid: t
				};
				o("MAWIndexedDb").afterTransaction({
					tag: "ThreadUpdated",
					value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread(m)
				});
			});
		});
	}
	l.loadContentsForThreads = s, l.loadGroups = u, l.checkIfGroupParticipant = c;
}), 98);

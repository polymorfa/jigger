__d("MAWCreateGroupThread", [
	"fbt",
	"FBLogger",
	"I64",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"LSMessagingThreadAttributionType",
	"MAWBridgeSendAndReceive",
	"MAWJobDefinitions",
	"MAWODSProxy",
	"MAWTimedJob",
	"MWSharedS2SBaseAnnotations",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"promiseDone",
	"qex",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	async function u(t) {
		var n = t.db, a = t.deduplicationKey, l = t.isDualSend, u = l === void 0 ? !1 : l, c = t.offlineThreadingId, d = t.participantIds, m = t.threadName, p = c != null ? (e || (e = o("I64"))).to_string(c) : void 0, _ = "msgr", f = o("sendToSentQPLLogger").markSendToSentStart();
		o("sendToSentQPLLogger").addSendToSentAnnotations(f, await o("MWSharedS2SBaseAnnotations").getSendToSentBaseAnnotations(o("MWSharedS2SBaseAnnotations").getMessageTypeParams({ isGroupInvite: !0 }), r("LSMessagingThreadAttributionType").UNKNOWN));
		var g = null, h;
		r("qex")._("5854") === !0 ? (h = "direct", g = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "createGroup", {
			extras: {
				clientThreadKey: p,
				deduplicationKey: a,
				isDualSend: u,
				platform: _
			},
			instanceKey: f,
			key: p,
			subject: m,
			users: d
		})) : (h = "MAWJobManager", g = await o("MAWTimedJob").TimedUIJobStarters.waitUntilCompleted(o("MAWJobDefinitions").createStartJobInfo("createGroup", {
			extras: {
				clientThreadKey: p,
				deduplicationKey: a,
				isDualSend: u,
				platform: _
			},
			key: p,
			s2sInstanceKey: f,
			scheduleConfig: { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
			subject: m,
			uniqKey: p,
			users: d
		})));
		var y = g.error, C = g.value, b = y == null && C != null && C.type === _;
		if (o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "createGroup." + h + "." + (b ? "success" : "failure")
		}), y == null && C != null && C.type === _) return o("sendToSentQPLLogger").markSendToSentSuccess(f), {
			isCreated: !0,
			jid: C.chatJid
		};
		if (!u) {
			var v = s._(
				/*BTDS*/
				""
			).toString();
			r("promiseDone")(n.runInTransaction(function(e) {
				return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
					errorBodyText: v,
					errorTitleText: v
				});
			}, "readwrite", void 0, void 0, i.id + ":138"));
		}
		throw o("sendToSentQPLLogger").markSendToSentFail(f, "failed_to_send_group_invite"), r("FBLogger")("maw_threads").mustfixThrow("Unable to create group");
	}
	async function c(e) {
		var t = e.deduplicationKey;
		if (t == null) return u(e);
		var n = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getThreadIdByDeduplicationKey", { deduplicationKey: t });
		return n != null ? {
			isCreated: !1,
			jid: n.jid
		} : u(e);
	}
	l.default = c;
}), 226);

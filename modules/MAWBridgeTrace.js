__d("MAWBridgeTrace", ["WAJids"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a, i, l, s) {
		var u = e.ack, c = e.externalId, d = e.ts, m = e.type, p = o("WAJids").switchOnMsgrChatJidType(t, {
			group: function(t) {
				return "Group";
			},
			user: function(t) {
				return "User";
			}
		});
		return {
			ack: u,
			externalId: c,
			isFirstMsg: !!a,
			openMessageOtid: r,
			openMessageParticipantCount: i,
			participantCount: l,
			threadJid: t,
			threadKey: s,
			threadType: p,
			traceType: n,
			ts: d,
			type_: m
		};
	}
	function s(e, t, n, r) {
		return {
			errorMessage: r,
			event: t,
			externalIds: e,
			traceType: n
		};
	}
	l.createBridgeStartTraceData = e, l.createBridgeUpdateTraceData = s;
}), 98);

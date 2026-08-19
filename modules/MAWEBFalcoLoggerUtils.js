__d("MAWEBFalcoLoggerUtils", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e = r("requireDeferred"))("EncryptedBackupTaskFailureFalcoEvent").__setRef("MAWEBFalcoLoggerUtils"), u = e("EncryptedBackupTaskIssuedFalcoEvent").__setRef("MAWEBFalcoLoggerUtils"), c = e("EncryptedBackupTaskSkippedFalcoEvent").__setRef("MAWEBFalcoLoggerUtils"), d = e("EncryptedBackupUploadSuccessFalcoEvent").__setRef("MAWEBFalcoLoggerUtils"), m = {
		0: "unknown",
		1: "upsert_top_level",
		2: "upsert_supplemental",
		3: "delete_top_level",
		4: "delete_top_level_with_placeholder"
	};
	function p(e, t) {
		g(e, t);
	}
	function _(e, t, n) {
		g(e, t, n);
	}
	function f(e, t, n) {
		g(e, t, void 0, n);
	}
	function g(e, t, n, r) {
		n != null ? s.onReady(function(r) {
			r.log(function() {
				var r, o, a, i, l;
				return {
					backup_action: (r = m[(o = (a = e.protoMsg) == null ? void 0 : a.backupActionType) != null ? o : 0]) != null ? r : "unknown",
					backup_protocol: t,
					failure_reason: n,
					labyrinth_version: 0,
					message_id: (i = (l = e.protoMsg) == null || (l = l.msgId) == null ? void 0 : l.externalId) != null ? i : e.messageId,
					thread_id: e.threadId,
					trace_id: e.traceId
				};
			});
		}) : r != null ? c.onReady(function(n) {
			n.log(function() {
				var n, o, a, i, l;
				return {
					backup_action: (n = m[(o = (a = e.protoMsg) == null ? void 0 : a.backupActionType) != null ? o : 0]) != null ? n : "unknown",
					backup_protocol: t,
					labyrinth_version: 0,
					message_id: (i = (l = e.protoMsg) == null || (l = l.msgId) == null ? void 0 : l.externalId) != null ? i : e.messageId,
					skipped_reason: r,
					thread_id: e.threadId,
					trace_id: e.traceId
				};
			});
		}) : u.onReady(function(n) {
			n.log(function() {
				var n, r, o, a, i;
				return {
					backup_action: (n = m[(r = (o = e.protoMsg) == null ? void 0 : o.backupActionType) != null ? r : 0]) != null ? n : "unknown",
					backup_protocol: t,
					labyrinth_version: 0,
					message_id: (a = (i = e.protoMsg) == null || (i = i.msgId) == null ? void 0 : i.externalId) != null ? a : e.messageId,
					thread_id: e.threadId,
					trace_id: e.traceId
				};
			});
		});
	}
	function h(e) {
		d.onReady(function(t) {
			t.log(function() {
				var t, n;
				return {
					labyrinth_version: 0,
					message_id: (t = (n = e.protoMsg) == null || (n = n.msgId) == null ? void 0 : n.externalId) != null ? t : e.messageId,
					thread_id: e.threadId,
					trace_id: e.traceId
				};
			});
		});
	}
	l.logEBFalcoTaskIssued = p, l.logEBFalcoTaskFailure = _, l.logEBFalcoTaskSkipped = f, l.logEBFalcoEncryptedBackupUploadSuccess = h;
}), 98);

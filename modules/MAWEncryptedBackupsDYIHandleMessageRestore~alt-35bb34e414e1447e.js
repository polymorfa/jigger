__d("MAWEncryptedBackupsDYIHandleMessageRestore", [
	"EncryptedBackupsDYIHandleMessageRestore",
	"EncryptedBackupsDYISingleton",
	"I64",
	"LSDatabaseSingleton",
	"LSMEBTaskCreationSource",
	"MAWEBRestoreTrackingUtils",
	"MAWEncryptedBackupsDYIProcessProtobufMessages",
	"MAWJobDefinitions",
	"MpsOverBridge",
	"MpsTypes",
	"WAJids",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = r("justknobx")._("467"), f = 3, g = 20;
	function h(e) {
		return Math.min(1e3 * Math.pow(3, e), 3e4);
	}
	function y(e, t) {
		var n = Math.floor(e / Math.pow(2, t));
		return Math.max(n, g);
	}
	function C(e) {
		return new Promise(function(t) {
			self.setTimeout(t, e);
		});
	}
	var b = async function(n, a, i) {
		o("MAWEBRestoreTrackingUtils").markEBRestoreDYI(r("LSMEBTaskCreationSource").MSGR_DYI);
		for (var t = o("WAJids").createJidUtils({ platform: "msgr" }).toUserJid(i), l = o("MpsTypes").toTimestamp(Number(a)), p = o("EncryptedBackupsDYISingleton").getSingleton(), g = p.getLogger(), b = 0; b <= f; b++) {
			var S = y(_, b);
			b > 0 && g.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"Reducing batch size to ",
				" for retry attempt ",
				" (default: ",
				")"
			])), S, b, _);
			var R = await o("MpsOverBridge").mps().loadMessages({
				config: {
					persistToReverb: "no-persist",
					shouldFetchSupplementals: !0,
					shouldFetchTags: !1,
					strategy: "remote-only"
				},
				debug: { purpose: "dyi" },
				direction: "desc",
				from: [l, null],
				numMessages: S,
				source: r("LSMEBTaskCreationSource").MSGR_DYI,
				threadId: o("MpsTypes").toThreadId(t)
			});
			if (R.success) {
				var L = R.value, E = L.cursorInfo, k = L.messages, I = (E == null ? void 0 : E.endCursor) != null ? (m || (m = o("I64"))).of_float(E.endCursor[0]) : void 0;
				await v(i, k.filter(function(e) {
					return !o("MpsTypes").isVisibilityMetadataMessage(e);
				}).map(o("MAWJobDefinitions").mpsMessageToEncryptedBackupsMessage), E.hasNext, I);
				return;
			}
			if (R.error !== "runtime-error") {
				g.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"Message batch query failed for thread ",
					" with non-retryable error: ",
					""
				])), i, R.error);
				break;
			}
			if (b < f) {
				var T = h(b);
				g.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"Message batch query failed for thread ",
					": ",
					". Retrying in ",
					"ms (attempt ",
					"/",
					")"
				])), i, R.error, T, b + 1, f), await C(T);
			} else g.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"Message batch query failed for thread ",
				": ",
				". All ",
				" retries exhausted"
			])), i, R.error, f);
		}
		var D = p.getThreadKeyForThreadId(i);
		D != null ? (p.incrementThreadsFailed(), p.deleteThreadKeyFromThreadsRestoreInProgress(D)) : g.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Cannot find thread key for thread id ", " during error cleanup"])), i);
	};
	async function v(e, t, n, r) {
		var a = await (p || (p = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		await o("EncryptedBackupsDYIHandleMessageRestore").handleMessageRangeQueryRestore(a, e, t, n, r, o("MAWEncryptedBackupsDYIProcessProtobufMessages").processEBProtobufMessagesForDYI, b);
	}
	l.issueNextRangeQuery = b, l.handleMAWProtobufMessageRangeQueryRestore = v;
}), 98);

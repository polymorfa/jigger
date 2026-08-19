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
	"Promise",
	"WAJids",
	"asyncToGeneratorRuntime",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = r("justknobx")._("467"), g = 3, h = 20;
	function y(e) {
		return Math.min(1e3 * Math.pow(3, e), 3e4);
	}
	function C(e, t) {
		var n = Math.floor(e / Math.pow(2, t));
		return Math.max(n, h);
	}
	function b(e) {
		return new (_ || (_ = (n("Promise"))))(function(t) {
			self.setTimeout(t, e);
		});
	}
	var v = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			o("MAWEBRestoreTrackingUtils").markEBRestoreDYI(r("LSMEBTaskCreationSource").MSGR_DYI);
			for (var i = o("WAJids").createJidUtils({ platform: "msgr" }).toUserJid(a), l = o("MpsTypes").toTimestamp(Number(n)), p = o("EncryptedBackupsDYISingleton").getSingleton(), _ = p.getLogger(), h = 0; h <= g; h++) {
				var v = C(f, h);
				h > 0 && _.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Reducing batch size to ",
					" for retry attempt ",
					" (default: ",
					")"
				])), v, h, f);
				var R = yield o("MpsOverBridge").mps().loadMessages({
					config: {
						persistToReverb: "no-persist",
						shouldFetchSupplementals: !0,
						shouldFetchTags: !1,
						strategy: "remote-only"
					},
					debug: { purpose: "dyi" },
					direction: "desc",
					from: [l, null],
					numMessages: v,
					source: r("LSMEBTaskCreationSource").MSGR_DYI,
					threadId: o("MpsTypes").toThreadId(i)
				});
				if (R.success) {
					var L = R.value, E = L.cursorInfo, k = L.messages, I = (E == null ? void 0 : E.endCursor) != null ? (m || (m = o("I64"))).of_float(E.endCursor[0]) : void 0;
					yield S(a, k.filter(function(e) {
						return !o("MpsTypes").isVisibilityMetadataMessage(e);
					}).map(o("MAWJobDefinitions").mpsMessageToEncryptedBackupsMessage), E.hasNext, I);
					return;
				}
				if (R.error !== "runtime-error") {
					_.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"Message batch query failed for thread ",
						" with non-retryable error: ",
						""
					])), a, R.error);
					break;
				}
				if (h < g) {
					var T = y(h);
					_.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Message batch query failed for thread ",
						": ",
						". Retrying in ",
						"ms (attempt ",
						"/",
						")"
					])), a, R.error, T, h + 1, g), yield b(T);
				} else _.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"Message batch query failed for thread ",
					": ",
					". All ",
					" retries exhausted"
				])), a, R.error, g);
			}
			var D = p.getThreadKeyForThreadId(a);
			D != null ? (p.incrementThreadsFailed(), p.deleteThreadKeyFromThreadsRestoreInProgress(D)) : _.ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Cannot find thread key for thread id ", " during error cleanup"])), a);
		});
		return function(n, r, o) {
			return t.apply(this, arguments);
		};
	})();
	function S(e, t, n, r) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield (p || (p = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			yield o("EncryptedBackupsDYIHandleMessageRestore").handleMessageRangeQueryRestore(a, e, t, n, r, o("MAWEncryptedBackupsDYIProcessProtobufMessages").processEBProtobufMessagesForDYI, v);
		}), R.apply(this, arguments);
	}
	l.issueNextRangeQuery = v, l.handleMAWProtobufMessageRangeQueryRestore = S;
}), 98);

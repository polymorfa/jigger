__d("MAWProcessSpamMsgApi", [
	"ArmadilloDataTraceType",
	"MAWBridgeMsg",
	"MAWBridgeTrace",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWMsgType",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return o("MAWDbThreadTxns").getThread(e, t).then(function(t) {
			if (!t.success) return null;
			var n = t.value;
			return o("MAWDbMsgTxns").getThreadOldestMessageId(e, n.jid).then(function(e) {
				return {
					oldestMsgId: e,
					thread: n
				};
			});
		});
	}
	var c = o("MAWIndexedDb").makeMsgrTransactor({
		groupInfo: o("MAWTransactionMode").READONLY,
		messages: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "processSpamMsgs", function(t) {
		return function() {
			return o("MAWDbMsgTxns").getSpamMsgs(t).then(function(n) {
				o("MAWDexieTable").dexieAll(n.map(function(n) {
					var r = n.threadJid;
					return u(t, n.threadJid).then(function(a) {
						return a == null ? (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["processSpamMsgs thread for ", " no longer exists"])), r), [
							void 0,
							a,
							void 0
						]) : (o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose([
							"processSpamMsgs: ",
							" for thread ",
							""
						])), n.rowId, r), n.type === o("MAWMsgType").MSG_TYPE.FUTUREPROOF ? n.altIndex = o("MAWDbMsg").FUTUREPROOF_ALT_INDEX : n.altIndex = void 0, o("MAWDexieTable").dexieAll([t.messages.put(n), o("MAWDexieTable").dexieResolve(a)]));
					}).then(function(e) {
						var t = e[0], r = e[1];
						if (r != null) {
							var a = r.thread, i = a.jid;
							o("MAWIndexedDb").afterTransaction({
								tag: "StartTrace",
								value: o("MAWBridgeTrace").createBridgeStartTraceData(n, i, o("ArmadilloDataTraceType").armadilloMessageSend)
							}), o("MAWIndexedDb").afterTransaction({
								tag: "NewMsg",
								value: o("MAWBridgeMsg").createBridgeMsg(n)
							});
						}
					});
				}));
			});
		};
	});
	l.processSpamMsgs = c;
}), 98);

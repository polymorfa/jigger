__d("MAWBridgeEventTransmitter", [
	"EBAPI",
	"EBLogger",
	"LSIntEnum",
	"LSMEBTaskCreationSource",
	"MAWBridge",
	"MAWBridgeTrace",
	"MAWBridgeTypesCreators",
	"MAWBridgeUpload",
	"MAWIndexedDb",
	"MAWJobDefinitions",
	"MAWUploadThreadTxns",
	"MpsTypes",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WebMps"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, a) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Issuing point query for message: ", ""])), t), r("EBAPI").isEBEnabled() !== !1 && o("WebMps").mps().loadMessage({
			config: {
				shouldFetchSupplementals: !0,
				shouldFetchTags: !1,
				strategy: "full-fetch"
			},
			debug: { purpose: "issuePointQueryOutsideTxn" },
			messageId: o("MpsTypes").toMessageId(t),
			threadId: o("MpsTypes").toThreadId(a)
		}).then(function(e) {
			var t = e.value;
			t != null && o("MAWBridge").getBridge().sendAndReceive("event", "uiUpdate", { events: [{
				tag: "RestoreNativeOp",
				value: {
					chatJid: a,
					decryptedMessagesProtobufs: [o("MAWJobDefinitions").mpsMessageToEncryptedBackupsMessage(t)],
					isPointQuery: !0,
					taskSource: (s || (s = o("LSIntEnum"))).ofNumber(n != null ? n : r("LSMEBTaskCreationSource").UNKNOWN)
				}
			}] }).catch(function(e) {
				return o("EBLogger").EBLogger().tags(["eventTransmitter", "mps"]).catching(e).warn("failure while executing UI update");
			});
		});
	}
	function c(e, t) {
		o("MAWIndexedDb").afterTransaction({
			tag: "DeleteMessagesOfThread",
			value: o("MAWBridgeUpload").createBridgeDeleteMessagesOfThread(o("WAJids").threadIdForChatJid(e.jid), o("MAWUploadThreadTxns").getFolderTypeAsText(e.folder), "AdvancedCrypto", t != null ? t : o("WATimeUtils").castToMillisTime(1), null, 2)
		});
	}
	function d(e, t, n) {
		o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
			tag: "StartTrace",
			value: o("MAWBridgeTrace").createBridgeStartTraceData(e, t, n)
		}] });
	}
	function m(e, t, n) {
		o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
			tag: "ThreadUpdated",
			value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread({
				cannotReplyReason: e,
				folder: t,
				threadJid: n
			})
		}] });
	}
	l.issuePointQueryOutsideTxn = u, l.deleteMessagesOfThreadAfterTxn = c, l.startTraceOutsideTxn = d, l.updateThreadOutsideTxn = m;
}), 98);

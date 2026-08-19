__d("MAWAsyncEBIssueFetchAndIndexFTSQuery", [
	"I64",
	"MAWEBUnstoredDbMsgUtils",
	"MAWJobDefinitions",
	"MAWUserJidWrapper",
	"MpsOverBridge",
	"MpsTypes",
	"WAJids",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, a, i, l) {
		i === void 0 && (i = function() {});
		var s = o("WAJids").threadIdForChatJid(t), u = n == null ? Date.now() + 6e4 : Number(n);
		return i(), o("MpsOverBridge").mps().loadMessages({
			config: {
				persistToReverb: "no-persist",
				shouldFetchSupplementals: !1,
				shouldFetchTags: !1,
				shouldIgnoreLocalOnly: !0,
				strategy: "remote-only"
			},
			debug: { purpose: "MAWAsyncEBIssueFetchAndIndexFTSQuery_" + l },
			direction: "desc",
			from: [o("MpsTypes").toTimestamp(u), null],
			numMessages: (e || (e = o("I64"))).to_int32(a),
			threadId: o("MpsTypes").toThreadId(t)
		}).then(function(n) {
			var a;
			if (n.success === !1) throw n.payload || r("err")(n.error);
			var i = n.value.messages.filter(function(e) {
				return !o("MpsTypes").isVisibilityMetadataMessage(e);
			}).map(o("MAWJobDefinitions").mpsMessageToEncryptedBackupsMessage), l = n.value.cursorInfo.hasNext ? (a = n.value.cursorInfo.endCursor) == null ? void 0 : a[0] : 0;
			return {
				hasMoreAfter: n.value.cursorInfo.hasPrevious,
				hasMoreBefore: n.value.cursorInfo.hasNext,
				isPointQuery: !1,
				messages: o("MAWEBUnstoredDbMsgUtils").getUnstoredDbMsgFromProtobuf(i, void 0, t, o("MAWUserJidWrapper").getMyUserJid()),
				nextMessageTimestampMsBefore: l == null ? void 0 : (e || (e = o("I64"))).of_float(l),
				protobufMessages: i,
				referenceTimestamp: u.toString(),
				requestId: void 0,
				threadId: s
			};
		});
	}
	l.issueQueryAsPromise = s;
}), 98);

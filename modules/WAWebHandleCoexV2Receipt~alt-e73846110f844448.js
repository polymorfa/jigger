__d("WAWebHandleCoexV2Receipt", [
	"WALogger",
	"WAWebAck",
	"WAWebApiCoexV2RelayReceiptStore",
	"WAWebLidMigrationUtils",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t) {
		var n = t.ack, a = t.ackString, i = t.externalIds, l = t.participant, c = t.recipient, m = t.ts;
		if (c == null) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] receipt: missing recipient"]))).sendLogs("coexv2-relay-receipt-missing-recipient");
			return;
		}
		try {
			var p = d(a, l, c);
			if (p == null) {
				o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] receipt: unresolved represented LID for type ", ""])), String(a)).sendLogs("coexv2-relay-receipt-unresolved-lid");
				return;
			}
			await Promise.all(i.map(function(e) {
				return o("WAWebApiCoexV2RelayReceiptStore").addOrUpdateCoexV2RelayReceipt({
					ack: n,
					msgId: e,
					representedLid: p,
					ts: m
				});
			}));
		} catch (e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] receipt: failed to process for type ", ""])), String(a)).catching(r("getErrorSafe")(e)).sendLogs("coexv2-relay-receipt-process-failed");
		}
	}
	function d(e, t, n) {
		return e === o("WAWebAck").ACK_STRING.SENDER || e === o("WAWebAck").ACK_STRING.READ_SELF || e === o("WAWebAck").ACK_STRING.PLAYED_SELF ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : e === o("WAWebAck").ACK_STRING.READ || e === o("WAWebAck").ACK_STRING.PLAYED ? t != null ? o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").asUserWidOrThrow(t)) : null : e === null || e === o("WAWebAck").ACK_STRING.DELIVERY ? o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").asUserWidOrThrow(n)) : null;
	}
	l.handleCoexV2Receipt = c;
}), 98);

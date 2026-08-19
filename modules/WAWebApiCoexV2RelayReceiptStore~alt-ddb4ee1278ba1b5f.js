__d("WAWebApiCoexV2RelayReceiptStore", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebCoexV2BotWid",
	"WAWebSchemaCoexV2RelayReceipt"
], (function(t, n, r, o, a, i, l) {
	var e, s = 60 * o("WATimeUtils").DAY_SECONDS;
	async function u(e, t, n, r) {
		var a, i = o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable(), l = [e, t], s = r == null ? await i.get(l) : null;
		await i.createOrMerge(l, babelHelpers.extends({
			msgId: e,
			representedLid: t,
			createdAt: (a = r != null ? r : s == null ? void 0 : s.createdAt) != null ? a : o("WATimeUtils").unixTime(),
			botJid: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID.toString()
		}, n));
	}
	async function c(e, t, n) {
		n === void 0 && (n = o("WATimeUtils").unixTime()), t.length !== 0 && await Promise.all(t.map(function(t) {
			var r = t.toString();
			return u(e, r, {}, n);
		}));
	}
	function d(t) {
		var n = t.ack, r = t.msgId, a = t.representedLid, i = t.ts, l = a.toString(), s = n === o("WAWebAck").ACK.RECEIVED ? { delivered: i } : n === o("WAWebAck").ACK.READ ? { read: i } : n === o("WAWebAck").ACK.PLAYED ? { played: i } : null;
		return s == null ? (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] receipt store: unsupported ack ", ""])), n).sendLogs("coexv2-relay-receipt-unsupported-ack"), Promise.resolve()) : u(r, l, s);
	}
	async function m(e) {
		await p(o("WATimeUtils").unixTime() - s);
		var t = await o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().equals(["msgId"], e);
		return t.filter(function(e) {
			return e.delivered == null && e.read == null && e.played == null;
		}).map(function(e) {
			return e.representedLid;
		});
	}
	async function p(e) {
		await o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().bulkDeleteRange(["createdAt"], 0, e);
	}
	l.COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS = s, l.createOrMergeCoexV2RelayReceipts = c, l.addOrUpdateCoexV2RelayReceipt = d, l.getUndeliveredCoexV2Lids = m, l.purgeCoexV2RelayReceiptsBefore = p;
}), 98);

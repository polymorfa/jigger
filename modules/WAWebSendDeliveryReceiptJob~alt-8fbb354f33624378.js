__d("WAWebSendDeliveryReceiptJob", [
	"WADeprecatedSendIq",
	"WAJids",
	"WALogger",
	"WAWap",
	"WAWebCommsWapMd",
	"WAWebOnlineDanglingReceipts",
	"WAWebSendReceiptJobCommon",
	"WAWebUserPrefsMeUser",
	"WAWebWidToJid",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		var n = t.isPeerMsg, a = t.isStatusContext, i = t.msgId, l = t.participant, s = t.receiptModeBitmask, c = s === void 0 ? 0 : s, d = t.recipient, m = t.response, p = t.to, _ = p.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(p) || l != null && o("WAWebUserPrefsMeUser").isMeAccount(l), f = m.hasInactiveMsg === !0 && !_, g = !f;
		u({
			externalId: i,
			isActiveReceipt: g,
			isFromPeer: _,
			isPeerMsg: n,
			isStatusContext: a === !0,
			participant: l,
			recipient: d,
			to: p,
			receiptModeBitmask: c
		}).catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendDeliveryReceipt failed"]))).catching(r("getErrorSafe")(t)).sendLogs("send-delivery-receipt-error", { sampling: .01 });
		});
	}
	async function u(e) {
		var t = e.externalId, n = e.isActiveReceipt, r = e.isFromPeer, a = e.isPeerMsg, i = e.isStatusContext, l = e.participant, s = e.receiptModeBitmask, u = e.recipient, c = e.to, d = o("WAWap").DROP_ATTR;
		a ? d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG : r ? d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER : n || (d = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE);
		var m = i ? o("WAWap").CUSTOM_STRING("status") : o("WAWap").DROP_ATTR, p = o("WAJids").extractJidFromJidWithType(o("WAWebWidToJid").widToJidWithType(c)), _ = d === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER || d === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG, f = _ ? null : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(s), g = o("WAWap").wap("receipt", {
			id: o("WAWap").CUSTOM_STRING(t),
			to: o("WAWap").JID(p),
			participant: (c.isGroup() || c.isBroadcast()) && l ? o("WAWebCommsWapMd").DEVICE_JID(l) : o("WAWap").DROP_ATTR,
			recipient: !a && r && u ? o("WAWebCommsWapMd").USER_JID(u) : o("WAWap").DROP_ATTR,
			type: d,
			class: m
		}, f);
		o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts(c, l || c, t), o("WADeprecatedSendIq").deprecatedCastStanza(g);
	}
	l.sendDeliveryReceiptsAfterDecryption = s;
}), 98);

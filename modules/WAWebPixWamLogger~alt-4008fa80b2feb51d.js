__d("WAWebPixWamLogger", [
	"WAWebGetMessageChatTypeFromWid",
	"WAWebPaymentsUserActionWamEvent",
	"WAWebSyncdMdSyncFieldstatMeta",
	"WAWebWamEnumMessageChatType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "BR";
	async function s(t, n, r, a, i, l, s, u) {
		u === void 0 && (u = {});
		var c = await o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId();
		u.payment_method = "pix", l && (u.chat_type = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(l.id)].toLowerCase()), s && (u.key_type = String(s.key_type));
		var d = {
			actionTarget: t,
			paymentActionType: n,
			paymentsCountryCode: e,
			previousScreenName: r,
			queryParams: JSON.stringify(u),
			referral: a,
			screen: i,
			paymentsEventId: c
		}, m = new (o("WAWebPaymentsUserActionWamEvent")).PaymentsUserActionWamEvent(d);
		m.commit();
	}
	l.logPixSenderEvent = s;
}), 98);

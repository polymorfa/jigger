__d("WAWebDebugNewsletterReaction", [
	"WAAckLevel",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebDebugUtils",
	"WAWebFrontendStatusGetters",
	"WAWebMsgKey",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterGetMyAddOnsJob",
	"WAWebNewsletterGetStatusUpdatesJob",
	"WAWebNewsletterSendReactionAction",
	"WAWebNewsletterStatusProcessingUtils",
	"WAWebStatusCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"WAWebdbCRUDOperationsNewsletterReaction",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	async function c(t, n) {
		n && t.forEach(function(e) {
			e.parentMsgKey = n.id.toString(), e.serverTimestamp = Date.now();
		});
		try {
			await o("WAWebdbCRUDOperationsNewsletterReaction").createOrUpdateNewsletterReactions(t), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateNewsletterReactionsDebug: SUCCESS"])));
		} catch (e) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateNewsletterReactionsDebug: ", ""])), e);
		}
	}
	c.doc = "Create or update newsletter reactions";
	async function d(e) {
		var t = window.msg;
		try {
			await o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(t, e);
		} catch (e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sendReaction] Failed to send reaction: ", ""])), e);
		}
	}
	d.doc = "Send newsletter reaction";
	async function m(e) {
		var t = o("WAWebDebugUtils").getSelectedChat(), n = {
			msgKey: await r("WAWebMsgKey").newId(),
			parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(e, t.id).toString(),
			senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
			reactionText: "❤️",
			timestamp: o("WATimeUtils").unixTime() * 1e3,
			orphan: 1,
			read: !0,
			ack: o("WAAckLevel").ACK.SENT
		};
		await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([n]);
	}
	async function p() {
		await o("WAWebNewsletterGetMyAddOnsJob").getMyNewsletterAddOnsJob({ count: 5e3 });
	}
	function _(e) {
		var t = o("WAWebStatusCollection").StatusCollection.get(o("WAWebWidFactory").asNewsletterWidOrThrow(o("WAWebWidFactory").createWid(e))), n = t != null ? o("WAWebFrontendStatusGetters").getLastStatus(t) : null;
		if (n == null) throw r("err")("getLastChannelStatusServerId: no channel status found");
		var a = n.serverId;
		if (a == null) throw r("err")("getLastChannelStatusServerId: channel status has no serverId yet");
		return a;
	}
	_.doc = "E2E: get the server id of the latest own channel status";
	async function f(e) {
		var t = await o("WAWebNewsletterGetStatusUpdatesJob").fetchNewsletterStatusUpdates(o("WAJids").toNewsletterJid(e));
		t != null && await o("WAWebNewsletterStatusProcessingUtils").applyAndPersistInteractions(t.from, t.viewsByServerId, t.reactionsByServerId, t.serverTimestamp);
	}
	f.doc = "E2E: fetch + apply channel status updates (views/reactions) via the real job";
	var g = {
		createOrUpdateNewsletterReactionsDebug: c,
		sendReaction: d,
		createNewsletterOrphanReaction: m,
		getMyNewsletterAddOns: p,
		getLastChannelStatusServerId: _,
		fetchChannelStatusUpdates: f
	};
	l.default = g;
}), 98);

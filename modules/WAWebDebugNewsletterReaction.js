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
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			n && t.forEach(function(e) {
				e.parentMsgKey = n.id.toString(), e.serverTimestamp = Date.now();
			});
			try {
				yield o("WAWebdbCRUDOperationsNewsletterReaction").createOrUpdateNewsletterReactions(t), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateNewsletterReactionsDebug: SUCCESS"])));
			} catch (e) {
				o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["createOrUpdateNewsletterReactionsDebug: ", ""])), e);
			}
		}), d.apply(this, arguments);
	}
	c.doc = "Create or update newsletter reactions";
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = window.msg;
			try {
				yield o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(t, e);
			} catch (e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sendReaction] Failed to send reaction: ", ""])), e);
			}
		}), p.apply(this, arguments);
	}
	m.doc = "Send newsletter reaction";
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WAWebDebugUtils").getSelectedChat(), n = {
				msgKey: yield r("WAWebMsgKey").newId(),
				parentMsgKey: o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(e, t.id).toString(),
				senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
				reactionText: "❤️",
				timestamp: o("WATimeUtils").unixTime() * 1e3,
				orphan: 1,
				read: !0,
				ack: o("WAAckLevel").ACK.SENT
			};
			yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([n]);
		}), f.apply(this, arguments);
	}
	function g() {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield o("WAWebNewsletterGetMyAddOnsJob").getMyNewsletterAddOnsJob({ count: 5e3 });
		}), h.apply(this, arguments);
	}
	function y(e) {
		var t = o("WAWebStatusCollection").StatusCollection.get(o("WAWebWidFactory").asNewsletterWidOrThrow(o("WAWebWidFactory").createWid(e))), n = t != null ? o("WAWebFrontendStatusGetters").getLastStatus(t) : null;
		if (n == null) throw r("err")("getLastChannelStatusServerId: no channel status found");
		var a = n.serverId;
		if (a == null) throw r("err")("getLastChannelStatusServerId: channel status has no serverId yet");
		return a;
	}
	y.doc = "E2E: get the server id of the latest own channel status";
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WAWebNewsletterGetStatusUpdatesJob").fetchNewsletterStatusUpdates(o("WAJids").toNewsletterJid(e));
			t != null && (yield o("WAWebNewsletterStatusProcessingUtils").applyAndPersistInteractions(t.from, t.viewsByServerId, t.reactionsByServerId, t.serverTimestamp));
		}), b.apply(this, arguments);
	}
	C.doc = "E2E: fetch + apply channel status updates (views/reactions) via the real job";
	var v = {
		createOrUpdateNewsletterReactionsDebug: c,
		sendReaction: m,
		createNewsletterOrphanReaction: _,
		getMyNewsletterAddOns: g,
		getLastChannelStatusServerId: y,
		fetchChannelStatusUpdates: C
	};
	l.default = v;
}), 98);

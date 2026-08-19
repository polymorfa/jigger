__d("WAWebNewsletterGetStatusMyReactionsJob", [
	"WALogger",
	"WASmaxNewslettersStatusMyAddOnsRPC",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebNewsletterDBUtils",
	"WAWebUserPrefsMeUser",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s = 5e3;
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			try {
				var n = yield o("WASmaxNewslettersStatusMyAddOnsRPC").sendStatusMyAddOnsRPC({
					myAddonsLimit: s,
					myAddonsJid: t
				});
				if (n.name !== "StatusMyAddOnsResponseSuccess") return null;
				var r = n.value.myAddonsStatuses.flatMap(d);
				return r.length > 0 && (yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(r.map(function(e) {
					return e.row;
				}))), r.map(function(e) {
					var t = e.reactionText, n = e.serverId;
					return {
						serverId: n,
						reactionText: t
					};
				});
			} catch (t) {
				return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][my-reactions] fetch failed"]))).tags("newsletter", "status").sendLogs("newsletter-status-my-reactions-failed"), null;
			}
		}), c.apply(this, arguments);
	}
	function d(e) {
		var t = e.jid, n = e.status, r = [];
		for (var a of n) {
			var i = a.serverId, l = a.statusNewsletterMyReactionMixin, s = l == null ? void 0 : l.reactionCode, u = l == null ? void 0 : l.reactionT;
			if (!(s == null || u == null)) {
				var c = o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(i, t).toString();
				r.push({
					serverId: i,
					reactionText: s,
					row: {
						parentMsgKey: c,
						senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
						reactionText: s,
						timestamp: u * 1e3,
						orphan: 0,
						msgKey: c
					}
				});
			}
		}
		return r;
	}
	l.fetchNewsletterStatusMyReactions = u;
}), 98);

__d("WAWebNewsletterHydratePinnedMessagesAction", [
	"WALogger",
	"WAWebMsgModelFromData",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterPullMessagesFromServerAction",
	"WAWebNoop",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(e, t, n, r) {
		var a = new Set(n);
		if (r.aborted || e.msgs.msgLoadState.isLoadingEarlierMsgs) return a;
		var i = t.filter(function(e) {
			return !a.has(e);
		});
		if (i.length === 0) return a;
		var l = await u(e, i, r);
		for (var s of l) a.add(s);
		if (r.aborted) return a;
		var c = i.filter(function(e) {
			return !l.has(e);
		});
		for (var d of c) {
			if (r.aborted) return a;
			if (!(a.has(d) || e.msgs.msgLoadState.isLoadingEarlierMsgs)) {
				a.add(d);
				try {
					await o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(e, {
						messageCount: 1,
						cursor: { before: d + 1 },
						signal: r
					});
				} catch (e) {
					r.aborted && a.delete(d);
				}
			}
		}
		return a;
	}
	async function u(t, n, a) {
		var i;
		try {
			i = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(Array.from(n), t.id.toJid());
		} catch (t) {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[hydrateNewsletterPinnedMessages] pinned-message DB read failed"]))).catching(r("getErrorSafe")(t)).tags("NEWSLETTER", "PIN").sendLogs("newsletter-pin-db-read"), new Set();
		}
		if (a.aborted || i.size === 0) return new Set();
		var l = [];
		for (var s of i.values()) l.push(o("WAWebMsgModelFromData").msgModelFromMsgData(s));
		return await t.addQueue.enqueue(Promise.resolve().then(function() {
			t.msgs.add(l, { at: 0 });
		})).then(r("WAWebNoop"), r("WAWebNoop")), new Set(i.keys());
	}
	l.hydrateNewsletterPinnedMessages = s;
}), 98);

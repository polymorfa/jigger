__d("WAWebdbCRUDOperationsNewsletterReaction", ["WAWebModelStorageUtils", "WAWebSchemaNewsletterReactions"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = new Map();
		return e.forEach(function(e) {
			var n = e.parentMsgKey, r = n, o = t.get(r);
			o ? o.serverTimestamp <= e.serverTimestamp && t.set(r, e) : t.set(r, e);
		}), o("WAWebModelStorageUtils").getStorage().lock(["newsletter-reactions"], async function(e) {
			var n = e[0], r = Array.from(t.values()).map(function(e) {
				return e.parentMsgKey;
			}), o = await n.anyOf(["parentMsgKey"], r);
			o.forEach(function(e) {
				var n = e.parentMsgKey, r = t.get(n);
				r && r.serverTimestamp <= e.serverTimestamp && t.delete(n);
			}), await n.bulkCreateOrReplace(Array.from(t.values()));
		});
	}
	function s(e) {
		return o("WAWebModelStorageUtils").getStorage().lock(["newsletter-reactions"], async function(t) {
			var n = t[0], r = e.parentMsgKey, o = await d(r);
			if (o) await n.bulkCreateOrReplace([o]);
			else {
				var a = babelHelpers.extends({
					emojiCountMap: new Map(),
					serverTimestamp: 0
				}, e);
				await n.createOrReplace(a);
			}
		});
	}
	function u(e) {
		return o("WAWebSchemaNewsletterReactions").getTable().remove(e);
	}
	function c(e) {
		return o("WAWebSchemaNewsletterReactions").getTable().bulkRemove(e);
	}
	function d(e) {
		return o("WAWebSchemaNewsletterReactions").getTable().get(e);
	}
	l.createOrUpdateNewsletterReactions = e, l.createOrUpdateNewsletterReaction = s, l.removeNewsletterReactionsForParentMsg = u, l.bulkRemoveNewsletterReactionsForParentMsg = c, l.getNewsletterReaction = d;
}), 98);

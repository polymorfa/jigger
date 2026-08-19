__d("WAWebDBChangeOrphanStateReactions", ["WAWebModelStorageUtils", "WAWebSchemaReactions"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return o("WAWebModelStorageUtils").getStorage().lock(["reactions"], async function(t) {
			var n = t[0], r = e.map(function(e) {
				return [e, 1];
			}), a = await o("WAWebSchemaReactions").getReactionsTable().anyOf(["parentMsgKey", "orphan"], r);
			return a.forEach(function(e) {
				e.orphan = 0, e.orphanReason = void 0;
			}), await n.bulkCreateOrReplace(a), a;
		});
	}
	l.changeOrphanStateReactions = e;
}), 98);

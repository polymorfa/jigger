__d("WAWebCheckUpdateOrphanReactions", [
	"WALogger",
	"WAWebAddonProcessMsgs",
	"WAWebDBChangeOrphanStateReactions",
	"WAWebReactionDataUtils",
	"WAWebStoreOrphans"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		try {
			var n = await o("WAWebDBChangeOrphanStateReactions").changeOrphanStateReactions(t), r = await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(n.map(function(e) {
				return o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e);
			})), a = r.orphans;
			await o("WAWebStoreOrphans").storeOrphans(a);
		} catch (t) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["checkUpdateForOrphanReactions: error ", ""])), t);
		}
	}
	l.checkUpdateForOrphanReactions = s;
}), 98);

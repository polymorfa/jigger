__d("WAWebDBProcessReactionsMsgs", [
	"WAWebApiBulkUpdateChatLastAddOnPreview",
	"WAWebBackendApi",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebDBMarkFutureproofMessagesReparsed",
	"WAWebLastAddOnDBSerialization",
	"WAWebReactionsBEUtils",
	"WAWebShouldUpdateLastAddOnPreview"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		if (e.length > 0) {
			var t = await o("WAWebReactionsBEUtils").createReactionsRowFromMsg(e), n = await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(t);
			o("WAWebReactionsBEUtils").updateHasReactionFromParent(n);
			var r = e.map(function(e) {
				return e.id.toString();
			});
			await o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(r);
			var a = await o("WAWebShouldUpdateLastAddOnPreview").filterChatsWithAddOnPreviewUpdates(n.map(function(e) {
				return o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType(e);
			}));
			await o("WAWebApiBulkUpdateChatLastAddOnPreview").bulkUpdateChatLastAddOnPreview(a), o("WAWebBackendApi").frontendFireAndForget("updateChatLastAddOnPreview", { chatMap: a });
		}
	}
	l.processReactionMsgs = e;
}), 98);

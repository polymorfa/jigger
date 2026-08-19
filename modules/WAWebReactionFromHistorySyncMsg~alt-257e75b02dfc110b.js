__d("WAWebReactionFromHistorySyncMsg", ["WAWebReactionDataUtils", "WAWebReactionsParseWebMsgInfoReaction"], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		return o("WAWebReactionsParseWebMsgInfoReaction").parseWebMsgInfoReaction(e.webMsgInfo, e.parsedWebMsgInfo).map(function(e) {
			return o("WAWebReactionDataUtils").reactionRowToReactionMsgData(o("WAWebReactionDataUtils").webMsgInfoReactionTypeToReactionsRow(e));
		});
	}
	l.default = e;
}), 98);

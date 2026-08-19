__d("MAWArmadilloReactionsTableSchema.pb", ["WAProtoConst"], (function(t, n, r, o, a, i, l) {
	var e, s = {};
	s.name = "ReactionsTableSchemaProto", s.internalSpec = {
		ack: [1, (e = o("WAProtoConst")).TYPES.INT32],
		author: [2, e.TYPES.STRING],
		externalId: [3, e.TYPES.STRING],
		reactionId: [4, e.TYPES.STRING],
		reactToExternalId: [5, e.TYPES.STRING],
		reactToAuthor: [6, e.TYPES.STRING],
		reactToMsgId: [7, e.TYPES.STRING],
		threadJid: [8, e.TYPES.STRING],
		reaction: [9, e.TYPES.STRING],
		groupingKey: [10, e.TYPES.STRING],
		ts: [11, e.TYPES.INT64],
		rowId: [12, e.TYPES.INT32],
		senderTimestampMs: [13, e.TYPES.INT64]
	}, l.ReactionsTableSchemaProtoSpec = s;
}), 98);

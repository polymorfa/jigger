__d("WAWebAddonReactionTableMode", [
	"WAWebAddonConstants",
	"WAWebAddonInfraError",
	"WAWebCastToReactionMsg",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebReactionDataUtils",
	"WAWebSchemaReactions",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e = {
		mode: o("WAWebAddonConstants").AddonTableMode.Reaction,
		bulkUpsert: async function(t) {
			var e = t.map(function(e) {
				return o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(o("WAWebCastToReactionMsg").assertReactionMsgData(e));
			});
			await o("WAWebSchemaReactions").getReactionsTable().bulkCreateOrReplace(e);
		},
		bulkGetByParentAndSender: async function(t) {
			var e = await o("WAWebSchemaReactions").getReactionsTable().anyOf(["parentMsgKey", "senderUserJid"], t.map(function(e) {
				var t = e[0], n = e[1];
				return [t.toString(), n.toString()];
			}));
			return e.map(o("WAWebReactionDataUtils").reactionRowToReactionMsgData);
		},
		bulkGetByMsgKey: async function() {
			throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
		},
		bulkGetByParentMsgKey: async function(t) {
			var e = await o("WAWebSchemaReactions").getReactionsTable().anyOf(["parentMsgKey"], t.map(function(e) {
				return e.toString();
			}));
			return e.map(o("WAWebReactionDataUtils").reactionRowToReactionMsgData);
		},
		bulkGetByChatWid: async function() {
			throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
		},
		bulkRemoveByMsgKey: async function(t) {
			await o("WAWebSchemaReactions").getReactionsTable().bulkRemoveByIndex(["msgKey"], t.map(function(e) {
				return e.toString();
			}));
		},
		getByMsgKey: async function(t) {
			var e = (await o("WAWebSchemaReactions").getReactionsTable().equals(["msgKey"], t.toString()))[0];
			return e == null ? e : o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e);
		},
		updateAck: async function(t, n) {
			var e;
			if (t.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted) e = t.targetMessageKey;
			else if (t.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted) e = t.reactionParentKey;
			else throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType);
			await o("WAWebSchemaReactions").getReactionsTable().merge([e.toString(), r("nullthrows")(o("WAWebMsgGetters").getSender(t)).toString()], { ack: n });
		},
		markAsRead: async function(n) {
			var t = await e.getByMsgKey(n);
			if (t != null) return e.bulkUpsert([babelHelpers.extends({}, t, { read: !0 })]);
		},
		getTableSize: async function() {
			return o("WAWebSchemaReactions").getReactionsTable().count();
		}
	};
	l.reactionTableMode = e;
}), 98);

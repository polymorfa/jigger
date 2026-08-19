__d("WAWebReactionAddonMessageProcessor", [
	"WALogger",
	"WAWebAddonConstants",
	"WAWebAddonCreateMsgProcessor",
	"WAWebBackendApi",
	"WAWebBoolFunc",
	"WAWebDBMarkFutureproofMessagesReparsed",
	"WAWebLastAddOnDBSerialization",
	"WAWebLidStatusMigrationKeyUtils",
	"WAWebMsgType",
	"WAWebReactAddonMessageProcessorUtils",
	"WAWebReactionDataUtils",
	"WAWebReactionEncryptMsgData",
	"WAWebReactionFromHistorySyncMsg",
	"WAWebReactionsBEUtils",
	"WAWebReactionsEncryption",
	"WAWebShouldUpdateLastAddOnPreview",
	"WAWebStatusReactionCTLLogging"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = function(t) {
		return babelHelpers.extends({}, t, { reactionParentKey: o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(t.reactionParentKey) });
	}, d = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessorDualEncrypted({
		isEnabled: o("WAWebBoolFunc").returnTrue,
		convert: {
			fromHistorySyncMsg: r("WAWebReactionFromHistorySyncMsg"),
			toDualEncryptedMsgData: async function(t, n) {
				return t.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted ? t : o("WAWebReactionEncryptMsgData").encryptReactionMsgData(t, n);
			},
			toDualDecryptedMsgData: async function(t, n) {
				return t.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted ? t : o("WAWebReactionsEncryption").decryptReactionMsgData(t, n);
			}
		},
		updateCollection: async function(t, n) {
			await o("WAWebBackendApi").frontendSendAndReceive("updateReactionCollection", {
				msgs: t.add.map(c),
				removeReactions: t.remove.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert),
				allowNotifications: p(n)
			});
		},
		beforeUpsert: async function(n, r) {
			var t = r.parents, a = [], i = [];
			for (var l of n) l.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted ? i.push(l) : l.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted && a.push(l);
			await Promise.allSettled(i.map(function(e) {
				return o("WAWebReactionsEncryption").decryptReactionMsgData(e, t.getForAddon(e));
			})).then(function(t) {
				var n = 0, r = [];
				for (var i of t) i.status === "fulfilled" && i.value != null ? a.push(i.value) : (n++, r.length < 3 && i.status === "rejected" && r.push(i.reason));
				n > 0 && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Cannot decrypt ",
					" reactions: ",
					""
				])), n, r), t.some(function(e) {
					return e.status === "rejected";
				}) && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed decrypted enc reactions"]))).tags("messaging", "addons").sendLogs("decrypt-enc-reaction-failed", { sampling: .01 });
			});
			var c = a;
			try {
				c = await o("WAWebReactAddonMessageProcessorUtils").overrideExistingReactions(a);
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to override existing reactions: ", ""])), e).sendLogs("override-existing-reactions-failed");
			}
			var d = await o("WAWebReactAddonMessageProcessorUtils").createGetReactionTimestamp(c), m = c.filter(function(e) {
				var t = d(e);
				return t == null || t < e.reactionTimestamp;
			});
			return m;
		},
		afterUpsert: async function(t, n) {
			var e = n.processMode, r = t.map(o("WAWebReactionDataUtils").reactionMsgDataToReactionRow);
			await o("WAWebReactionsBEUtils").updateHasReactionFromParent(r), await o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(r.map(o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType)), e === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive && (await o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(t.map(function(e) {
				return e.id.toString();
			})), o("WAWebStatusReactionCTLLogging").logReceivedStatusReactionEngagement(t));
		},
		manageNotifications: async function(t, n) {
			var e = n.processMode;
			p(e) && o("WAWebBackendApi").frontendFireAndForget("handleReactionNotification", { reactions: t.add.map(c) });
		}
	}), m = d;
	function p(e) {
		return !new Set([o("WAWebAddonConstants").AddonProcessMode.HistorySync, o("WAWebAddonConstants").AddonProcessMode.Hydration]).has(e);
	}
	l.default = m;
}), 98);

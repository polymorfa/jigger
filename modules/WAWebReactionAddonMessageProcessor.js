__d("WAWebReactionAddonMessageProcessor", [
	"Promise",
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
	"WAWebStatusReactionCTLLogging",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = function(t) {
		return babelHelpers.extends({}, t, { reactionParentKey: o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(t.reactionParentKey) });
	}, m = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessorDualEncrypted({
		isEnabled: o("WAWebBoolFunc").returnTrue,
		convert: {
			fromHistorySyncMsg: r("WAWebReactionFromHistorySyncMsg"),
			toDualEncryptedMsgData: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					return e.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted ? e : o("WAWebReactionEncryptMsgData").encryptReactionMsgData(e, t);
				});
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			toDualDecryptedMsgData: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					return e.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted ? e : o("WAWebReactionsEncryption").decryptReactionMsgData(e, t);
				});
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			})()
		},
		updateCollection: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				yield o("WAWebBackendApi").frontendSendAndReceive("updateReactionCollection", {
					msgs: e.add.map(d),
					removeReactions: e.remove.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert),
					allowNotifications: _(t)
				});
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		beforeUpsert: (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
				var a = r.parents, i = [], l = [];
				for (var d of t) d.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted ? l.push(d) : d.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted && i.push(d);
				yield (c || (c = n("Promise"))).allSettled(l.map(function(e) {
					return o("WAWebReactionsEncryption").decryptReactionMsgData(e, a.getForAddon(e));
				})).then(function(t) {
					var n = 0, r = [];
					for (var a of t) a.status === "fulfilled" && a.value != null ? i.push(a.value) : (n++, r.length < 3 && a.status === "rejected" && r.push(a.reason));
					n > 0 && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Cannot decrypt ",
						" reactions: ",
						""
					])), n, r), t.some(function(e) {
						return e.status === "rejected";
					}) && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed decrypted enc reactions"]))).tags("messaging", "addons").sendLogs("decrypt-enc-reaction-failed", { sampling: .01 });
				});
				var m = i;
				try {
					m = yield o("WAWebReactAddonMessageProcessorUtils").overrideExistingReactions(i);
				} catch (e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to override existing reactions: ", ""])), e).sendLogs("override-existing-reactions-failed");
				}
				var p = yield o("WAWebReactAddonMessageProcessorUtils").createGetReactionTimestamp(m), _ = m.filter(function(e) {
					var t = p(e);
					return t == null || t < e.reactionTimestamp;
				});
				return _;
			});
			function r(e, n) {
				return t.apply(this, arguments);
			}
			return r;
		})(),
		afterUpsert: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = t.processMode, r = e.map(o("WAWebReactionDataUtils").reactionMsgDataToReactionRow);
				yield o("WAWebReactionsBEUtils").updateHasReactionFromParent(r), yield o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(r.map(o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType)), n === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive && (yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e.map(function(e) {
					return e.id.toString();
				})), o("WAWebStatusReactionCTLLogging").logReceivedStatusReactionEngagement(e));
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		manageNotifications: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = t.processMode;
				_(n) && o("WAWebBackendApi").frontendFireAndForget("handleReactionNotification", { reactions: e.add.map(d) });
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})()
	}), p = m;
	function _(e) {
		return !new Set([o("WAWebAddonConstants").AddonProcessMode.HistorySync, o("WAWebAddonConstants").AddonProcessMode.Hydration]).has(e);
	}
	l.default = p;
}), 98);

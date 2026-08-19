__d("WAWebChatAssignmentSync", [
	"WATimeUtils",
	"WAWebAgentCollection",
	"WAWebBizChatAssignmentAction",
	"WAWebChatAssignmentCollection",
	"WAWebProtobufsServerSync.pb",
	"WAWebSchemaChatAssignment",
	"WAWebSyncBootstrap",
	"WAWebSyncdAction",
	"WAWebSyncdActionUtils",
	"WAWebSyncdConst",
	"WAWebSyncdGetChat",
	"WAWebSyncdIndexUtils",
	"WAWebSyncdOrphan",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e = (function(e) {
		function t() {
			for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return t = e.call.apply(e, [this].concat(r)) || this, t.chatJidIndex = 1, t.collectionName = o("WAWebSyncdConst").CollectionName.Regular, babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.getVersion = function() {
			return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
		}, n.getAction = function() {
			return o("WAWebSyncdConst").Actions.ChatAssignment;
		}, n.createChatAssignmentMutations = async function(t) {
			var e = this, n = o("WATimeUtils").unixTimeMs(), r = await Promise.all(t.map(async function(t) {
				var r = t.agentId, a = t.chatId, i = { chatAssignment: { deviceAgentId: r } };
				return o("WAWebSyncdActionUtils").buildPendingMutation({
					timestamp: n,
					collection: e.collectionName,
					operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
					indexArgs: [await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(o("WAWebWidFactory").createWid(a), o("WAWebSyncdConst").Actions.ChatAssignment)],
					value: i,
					action: o("WAWebSyncdConst").Actions.ChatAssignment,
					version: o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION
				});
			}));
			return r;
		}, n.applyMutations = async function(t) {
			var e = this, n = [], a = [], i = [], l = await Promise.all(t.map(async function(t) {
				try {
					var l = t.indexParts, s = l[1];
					if (!s) return e.malformedActionIndex();
					if (t.operation === "set") {
						var u, c = t.value.chatAssignment;
						if (!c) return o("WAWebSyncdIndexUtils").malformedActionValue(e.collectionName);
						var d = (u = c.deviceAgentId) != null ? u : "", m = o("WAWebAgentCollection").AgentCollection.get(d);
						if (d !== "" && m == null) return {
							actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
							orphanModel: {
								modelId: d,
								modelType: o("WAWebSyncdConst").SyncModelType.Agent
							}
						};
						var p = await o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(s));
						if (!p.success) return {
							actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
							orphanModel: p.orphanModel
						};
						var _ = o("WAWebWidFactory").createWid(p.chat.id);
						return o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(_).filter(function(e) {
							return e.id !== d;
						}).forEach(function(e) {
							return a.push(_.toJid() + "_" + e.id);
						}), d !== "" && n.push({
							id: _.toJid() + "_" + d,
							chatId: _.toJid(),
							agentId: d,
							chatOpenedByAgent: !1
						}), r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() || i.push({
							chatId: _,
							agent: m,
							timestamp: Math.floor(t.timestamp / 1e3)
						}), { actionState: o("WAWebSyncdConst").SyncActionState.Success };
					}
					return { actionState: o("WAWebSyncdConst").SyncActionState.Unsupported };
				} catch (e) {
					return { actionState: o("WAWebSyncdConst").SyncActionState.Failed };
				}
			}));
			await o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkCreateOrMerge(n), o("WAWebChatAssignmentCollection").ChatAssignmentCollection.processChatAssignments(n), await o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkRemove(a), o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(a), o("WAWebBizChatAssignmentAction").createChatAssignmentSystemMsgs(i), o("WAWebBizChatAssignmentAction").triggerChatAssignmentNotification(n, t.map(function(e) {
				return e.timestamp;
			}).join("-"));
			var s = n.map(function(e) {
				return e.id.toString();
			});
			return o("WAWebSyncdOrphan").checkOrphanChatAssignments(s), l;
		}, t;
	})(o("WAWebSyncdAction").ChatSyncdActionBase), s = new e();
	l.default = s;
}), 98);

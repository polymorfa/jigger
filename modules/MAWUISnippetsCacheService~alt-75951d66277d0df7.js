__d("MAWUISnippetsCacheService", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"MAWChatJid",
	"MAWJids",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWUISnippetsMessagesMetadataMapObservable",
	"ReStoreVaulting",
	"WAJids",
	"getErrorSafe",
	"promiseDone",
	"updateMWLSThreadSnippet"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (function() {
		function t() {
			this.namespace = "snippets", this.$1 = new (o("MAWUISnippetsMessagesMetadataMapObservable")).MAWUISnippetsMessagesMetadataMapObservable();
		}
		var n = t.prototype;
		return n.onCacheChange = function(n, a) {
			r("promiseDone")((e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(function(e) {
				return e.runInTransaction(function(e) {
					return Promise.all(n.map(async function(t) {
						var n = t[0], i = t[1], l = o("WAJids").unsafeCoerceToChatJid(n), s;
						try {
							s = await o("MAWChatJid").toThreadMaybe(e, l);
						} catch (e) {
							var u = r("getErrorSafe")(e);
							d(l, a, i, u.message);
							return;
						}
						var c = s;
						if (c == null) {
							await m(e, l);
							return;
						}
						var _ = i.value.snippet, f = babelHelpers.extends({}, _.snippetParams, { strings: _.snippetParams.strings.map(function(e) {
							return o("ReStoreVaulting").maybeVault(e);
						}) });
						return o("updateMWLSThreadSnippet").updateMWLSThreadSnippet({
							thread: c,
							threadSnippet: babelHelpers.extends({}, _, { snippetParams: f }),
							txn: e
						}).then(function() {
							p(c.threadKey, a, i);
						});
					}));
				}, "readwrite", void 0, void 0, i.id + ":46");
			}));
		}, n.getNewestIncomingMessagesMetadata = function(t) {
			return this.$1.get(t);
		}, t;
	})(), c = "[SnippetsCacheService][UI]";
	function d(e, t, n, o) {
		r("FBLogger")("MAWCacheService").mustfix(c + " Snippet update failed due to unvault error. jid: %s, source: %s, msgId: %s, error: %s. Skipping snippet update to prevent transaction abort.", e, t, n.value.snippetMsgId, o);
	}
	async function m(e, t) {
		var n = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(e, o("MAWJids").convertChatJidToIntJid(t), "MAWUISnippetsCacheService");
		r("FBLogger")("MAWCacheService").mustfix(c + " Missing LSDBThread when updating snippet. jid: %s, thread state: %s", t, n.type);
	}
	function p(e, t, n) {
		r("FBLogger")("MAWCacheService").info(c + " Updated thread snippet. threadKey: %s, source: %s, msgId: %s, reactionId: %s, ack level %s", (s || (s = o("I64"))).to_string(e), t, n.value.snippetMsgId, n.value.snippetReactionId, n.value.snippetMsgAckLevel);
	}
	var _ = new u();
	function f() {
		return _;
	}
	l.getMAWUISnippetsCacheService = f;
}), 98);

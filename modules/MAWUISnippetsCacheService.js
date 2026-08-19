__d("MAWUISnippetsCacheService", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"MAWChatJid",
	"MAWJids",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWUISnippetsMessagesMetadataMapObservable",
	"Promise",
	"ReStoreVaulting",
	"WAJids",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone",
	"updateMWLSThreadSnippet"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (function() {
		function t() {
			this.namespace = "snippets", this.$1 = new (o("MAWUISnippetsMessagesMetadataMapObservable")).MAWUISnippetsMessagesMetadataMapObservable();
		}
		var a = t.prototype;
		return a.onCacheChange = function(a, l) {
			r("promiseDone")((u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(function(t) {
				return t.runInTransaction(function(t) {
					return (e || (e = n("Promise"))).all(a.map((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							var n = e[0], a = e[1], i = o("WAJids").unsafeCoerceToChatJid(n), s;
							try {
								s = yield o("MAWChatJid").toThreadMaybe(t, i);
							} catch (e) {
								var u = r("getErrorSafe")(e);
								m(i, l, a, u.message);
								return;
							}
							var c = s;
							if (c == null) {
								yield p(t, i);
								return;
							}
							var d = a.value.snippet, _ = babelHelpers.extends({}, d.snippetParams, { strings: d.snippetParams.strings.map(function(e) {
								return o("ReStoreVaulting").maybeVault(e);
							}) });
							return o("updateMWLSThreadSnippet").updateMWLSThreadSnippet({
								thread: c,
								threadSnippet: babelHelpers.extends({}, d, { snippetParams: _ }),
								txn: t
							}).then(function() {
								f(c.threadKey, l, a);
							});
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})()));
				}, "readwrite", void 0, void 0, i.id + ":46");
			}));
		}, a.getNewestIncomingMessagesMetadata = function(t) {
			return this.$1.get(t);
		}, t;
	})(), d = "[SnippetsCacheService][UI]";
	function m(e, t, n, o) {
		r("FBLogger")("MAWCacheService").mustfix(d + " Snippet update failed due to unvault error. jid: %s, source: %s, msgId: %s, error: %s. Skipping snippet update to prevent transaction abort.", e, t, n.value.snippetMsgId, o);
	}
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(e, o("MAWJids").convertChatJidToIntJid(t), "MAWUISnippetsCacheService");
			r("FBLogger")("MAWCacheService").mustfix(d + " Missing LSDBThread when updating snippet. jid: %s, thread state: %s", t, n.type);
		}), _.apply(this, arguments);
	}
	function f(e, t, n) {
		r("FBLogger")("MAWCacheService").info(d + " Updated thread snippet. threadKey: %s, source: %s, msgId: %s, reactionId: %s, ack level %s", (s || (s = o("I64"))).to_string(e), t, n.value.snippetMsgId, n.value.snippetReactionId, n.value.snippetMsgAckLevel);
	}
	var g = new c();
	function h() {
		return g;
	}
	l.getMAWUISnippetsCacheService = h;
}), 98);

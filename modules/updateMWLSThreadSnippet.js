__d("updateMWLSThreadSnippet", [
	"FBLogger",
	"I64",
	"MAWBridgeBuildThreadSnippet",
	"asyncToGeneratorRuntime",
	"getMAWLastMessageCtaType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n, a = t.thread, i = t.threadSnippet, l = t.txn, s = i.snippetParams, u = o("MAWBridgeBuildThreadSnippet").buildBridgeThreadSnippet({
				snippetContactIDs: s.contactIDs,
				snippetMentionJIDs: (n = s.mentionJIDs) != null ? n : [],
				snippetParams: s.strings,
				snippetSenderContactId: i.snippetSenderContactId,
				snippetType: i.snippetType
			});
			u == null && r("FBLogger")("messenger_web").warn("[updateMWLSThreadSnippet] null snippet is calculated for a thread, snippetType: %s, contactsIDs is null: %s, snippetParams is null: %s", i.snippetType, s.contactIDs == null, s.strings == null);
			var c = i.snippetSenderContactId != null ? (e || (e = o("I64"))).of_string(i.snippetSenderContactId) : (e || (e = o("I64"))).zero, d = r("getMAWLastMessageCtaType")(i.snippetType);
			yield l.threads.put(babelHelpers.extends({}, a, {
				lastMessageCtaType: d,
				snippet: u,
				snippetSenderContactId: c
			}));
		}), u.apply(this, arguments);
	}
	l.updateMWLSThreadSnippet = s;
}), 98);

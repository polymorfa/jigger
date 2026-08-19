__d("MAWFTSVersionsInformation", [
	"MAWFTSScheduler",
	"MAWMessageIndexerFtsIndexTableAdapter",
	"MAWMessageIndexerMessageSource",
	"MAWMessageSearchFTSKeyUtil",
	"MAWMessageSearchSignaller",
	"Promise",
	"WAFtsMultiLangTokenizer",
	"WAFtsV3Indexer",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new (o("MAWMessageIndexerMessageSource")).MAWMessageIndexerMessageSource(), u = {
		indexers: { "3.8": function(t) {
			return o("MAWMessageSearchFTSKeyUtil").fetchOrGenerateFTSCryptoKey().then(function(e) {
				var n = new (r("WAFtsV3Indexer"))(t, r("nullthrows")(s), new (r("MAWMessageIndexerFtsIndexTableAdapter"))(e), 6, 100, 1e3, 0, o("MAWFTSScheduler").ftsScheduler());
				return n.setSignaller(new (r("MAWMessageSearchSignaller"))()), n;
			});
		} },
		tokenizers: { 1: function() {
			return (e || (e = n("Promise"))).resolve(new (r("WAFtsMultiLangTokenizer"))());
		} }
	}, c = "3.8", d = !0, m = "1";
	l.VERSIONS_INFO = u, l.LATEST_INDEXER_VERSION = c, l.SHOULD_DROP_OLDER_VERSION = d, l.LATEST_TOKENIZER_VERSION = m;
}), 98);

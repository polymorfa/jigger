__d("MAWMessageSearchManifestReader", [
	"FBLogger",
	"MAWDbFTSManifest",
	"MAWFTSIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e() {}
		var t = e.prototype;
		return t.versions = function() {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsManifest: o("MAWTransactionMode").READONLY }, function(e) {
				return function() {
					return e.ftsManifest.toArray().then(function(e) {
						var t = new Map();
						for (var n of e) {
							var a = {
								isCurrent: n.key === o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
								isFullIndexingComplete: n.isFullIndexingComplete,
								lastMsgKeyViaFullIndexer: n.lastMsgKeyViaFullIndexer,
								schemaVersion: n.schemaVersion,
								tokenizerVersion: n.tokenizerVersion
							};
							t.set(n.key, a);
						}
						var i = t.get(o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION);
						if (i == null) throw r("FBLogger")("messenger_search_fts").info("current version is missing from manifest table");
						return {
							current: i,
							next: t.get(o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION),
							previous: t.get(o("MAWDbFTSManifest").ManifestKeys.PREV_VERSION)
						};
					});
				};
			})();
		}, e;
	})();
	l.default = e;
}), 98);

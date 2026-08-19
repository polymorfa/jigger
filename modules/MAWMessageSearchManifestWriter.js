__d("MAWMessageSearchManifestWriter", [
	"FBLogger",
	"MAWDbFTSManifest",
	"MAWFTSIndexedDb",
	"MAWTransactionMode",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { "3.1": ["3"] }, s = "-1";
	function u(t, n, r, o) {
		var a;
		return t !== r && !((a = e[r]) != null && a.includes(t)) || n !== o;
	}
	var c = function(t, n) {
		return t.ftsManifest.get(n).then(function(e) {
			return e == null ? t.ftsManifest.put({
				isCurrent: n === o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
				isFullIndexingComplete: !0,
				key: n,
				lastMsgKeyViaFullIndexer: s,
				schemaVersion: "",
				tokenizerVersion: ""
			}).then(r("emptyFunction")) : t.ftsManifest.update(n, {
				isCurrent: n === o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
				isFullIndexingComplete: !0
			}).then(r("emptyFunction"));
		});
	}, d = function(t) {
		return t.ftsManifest.bulkGet([o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION, o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION]).then(function(e) {
			var n = e[0], a = e[1], i = [];
			return n != null && i.push(babelHelpers.extends({}, n, {
				isCurrent: !1,
				key: o("MAWDbFTSManifest").ManifestKeys.PREV_VERSION
			})), a != null && i.push(babelHelpers.extends({}, a, {
				isCurrent: !0,
				key: o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION
			})), r("FBLogger")("fts_manifest_writer").info("Upgraded schema version from [%s, %s] to [%s, %s]", n == null ? void 0 : n.schemaVersion, n == null ? void 0 : n.tokenizerVersion, a == null ? void 0 : a.schemaVersion, a == null ? void 0 : a.tokenizerVersion), t.ftsManifest.bulkPut(i);
		}).then(function() {
			t.ftsManifest.delete(o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION);
		});
	}, m = function(t, n, a) {
		return t.ftsManifest.get(n).then(function(e) {
			return e == null ? t.ftsManifest.put({
				isCurrent: n === o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
				isFullIndexingComplete: !0,
				key: n,
				lastMsgKeyViaFullIndexer: a,
				schemaVersion: "",
				tokenizerVersion: ""
			}).then(r("emptyFunction")) : t.ftsManifest.update(n, {
				isCurrent: n === o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
				lastMsgKeyViaFullIndexer: a
			}).then(r("emptyFunction"));
		});
	}, p = function(t, n, a) {
		return t.ftsManifest.get(o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION).then(function(e) {
			if (e == null) return t.ftsManifest.put({
				isCurrent: !0,
				isFullIndexingComplete: !1,
				key: o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION,
				lastMsgKeyViaFullIndexer: s,
				schemaVersion: n,
				tokenizerVersion: a
			}).then(function() {
				r("FBLogger")("fts_manifest_writer").info("Set current version to [%s, %s]", n, a);
			});
			if (u(e.schemaVersion, e.tokenizerVersion, n, a)) return t.ftsManifest.get(o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION).then(function(e) {
				if (e == null || e.schemaVersion !== n || e.tokenizerVersion !== a) return t.ftsManifest.put({
					isCurrent: !1,
					isFullIndexingComplete: !1,
					key: o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION,
					lastMsgKeyViaFullIndexer: s,
					schemaVersion: n,
					tokenizerVersion: a
				}).then(function() {
					r("FBLogger")("fts_manifest_writer").info("Next version set to [%s, %s]", n, a);
				});
				r("FBLogger")("fts_manifest_writer").info("No changes made as next version is already set to [%s, %s]", n, a);
			});
			r("FBLogger")("fts_manifest_writer").info("FTS:Manifest Writer: No changes made, current:[%s, %s], latest:[%s, %s]", e.schemaVersion, e.tokenizerVersion, n, a);
		});
	}, _ = (function() {
		function e() {}
		var t = e.prototype;
		return t.setLatestVersion = function(t, n) {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsManifest: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return p(e, t, n);
				};
			})();
		}, t.upgradeVersion = function() {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsManifest: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return d(e);
				};
			})();
		}, t.markFullIndexingComplete = function(t) {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsManifest: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return c(e, t ? o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION : o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION);
				};
			})();
		}, t.updateLastFullIndexBatch = function(t, n) {
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsManifest: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return m(e, t ? o("MAWDbFTSManifest").ManifestKeys.CURR_VERSION : o("MAWDbFTSManifest").ManifestKeys.NEXT_VERSION, n);
				};
			})();
		}, e;
	})();
	l.default = _;
}), 98);

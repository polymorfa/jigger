__d("MAWDBMigrationTasks", [
	"MAWDBDedupeMsgsMigration",
	"MAWDBMigrationUtils",
	"MAWDbProtocolMsgIdMiddleware",
	"MAWDbXMA",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"Promise"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		execution: function(r) {
			return (e || (e = n("Promise"))).resolve();
		},
		label: "emptyMigration",
		type: "single"
	}, u = {
		batchSize: 5,
		execution: function(t, n, r, a) {
			return o("MAWIndexedDb").makeMsgrTransactor({
				media: o("MAWTransactionMode").READONLY,
				xma: o("MAWTransactionMode").READWRITE
			}, "migrateXMAToPlaintextHashes", function(e) {
				return function() {
					return e.xma.where("xmaId").aboveOrEqual(t).limit(n).toArray().then(function(r) {
						var a = r.length < n ? null : o("MAWDbXMA").convertNumberToXMAId(t + n), i = new Set(r.map(function(e) {
							return [
								e.defaultPreviewMediaId,
								e.headerMediaId,
								e.faviconMediaId
							];
						}).flat().filter(Boolean));
						return e.media.bulkGet(Array.from(i)).then(function(t) {
							var n = new Map((t != null ? t : []).filter(Boolean).map(function(e) {
								return [e.mediaId, e];
							}));
							return o("MAWDexieTable").dexieAll(r.map(function(t) {
								var r, o, a;
								if (t.defaultPreviewMediaId != null) {
									var i = n.get(t.defaultPreviewMediaId);
									i != null && (r = i.plaintextHash);
								}
								if (t.faviconMediaId != null) {
									var l = n.get(t.faviconMediaId);
									l != null && (o = l.plaintextHash);
								}
								if (t.headerMediaId != null) {
									var s = n.get(t.headerMediaId);
									s != null && (a = s.plaintextHash);
								}
								if (!(t.defaultPreviewMediaPlaintextHash === r && t.faviconPlaintextHash === o && t.headerMediaPlaintextHash === a)) {
									var u = babelHelpers.extends({}, t, {
										defaultPreviewMediaPlaintextHash: r,
										faviconPlaintextHash: o,
										headerMediaPlaintextHash: a
									});
									return e.xma.update(t.xmaId, u);
								}
							})).then(function() {
								return a;
							});
						});
					});
				};
			})();
		},
		label: "migrateXMAToPlaintextHashes",
		startCursor: o("MAWDbXMA").convertNumberToXMAId(0),
		type: "batched"
	}, c = {
		batchSize: 1e3,
		execution: function(t, n, r, a) {
			return o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READWRITE }, "backFillEmptyProtocolMsgIdLeftAfterDedupeMigration", function(e) {
				return function() {
					return e.messages.where("rowId").aboveOrEqual(t).limit(n).toArray().then(function(t) {
						var r = t.length === n, a = r ? t[t.length - 1].rowId : null, i = t.filter(function(e) {
							return e.protocolMsgId == null;
						});
						return i.length > 0 ? (i.forEach(function(e) {
							return o("MAWDbProtocolMsgIdMiddleware").appendProtocolMsgId(e);
						}), e.messages.bulkPut(i.reverse()).then(function() {
							return a;
						})) : a;
					});
				};
			})();
		},
		label: "backFillEmptyProtocolMsgIdLeftAfterDedupeMigration",
		startCursor: 0,
		type: "batched"
	}, d = new Map([
		[1, s],
		[2, s],
		[3, s],
		[4, u],
		[5, s],
		[o("MAWDBMigrationUtils").MAWDB_DEDUPE_MSGS_MIGRATION_VERSION, o("MAWDBDedupeMsgsMigration").dedupeMsgsMigration],
		[7, c]
	]);
	function m(e) {
		return d.get(e);
	}
	l.getMigrationByVersion = m;
}), 98);

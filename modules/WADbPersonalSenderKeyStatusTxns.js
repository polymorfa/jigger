__d("WADbPersonalSenderKeyStatusTxns", [
	"WASignalDB",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["groupJid", "senderKeyTs"], s = ["groupJid", "senderKeyTs"], u = {
		hasSenderKey: new Set(),
		rotateSenderKey: !0,
		senderKeyId: null,
		senderKeyTs: o("WATimeUtils").castToUnixTime(0)
	}, c = function(t) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", function(e) {
			return e.stores.personalSenderKeyStatuses.bulkPut(t.map(function(e) {
				return babelHelpers.extends({}, u, { groupJid: e });
			}));
		}, o("WASignalDB").signalOp("bulkPutNewPersonalSenderKeyStatus")).then(function() {});
	}, d = function(t, r, a) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = yield e.stores.personalSenderKeyStatuses.get(t);
				yield e.stores.personalSenderKeyStatuses.bulkPut([babelHelpers.extends({}, n || u, {
					groupJid: t,
					rotateSenderKey: !1,
					senderKeyId: r,
					senderKeyTs: a
				})]);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("markSenderKeyAsRotated"));
	}, m = function(r) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = yield t.stores.personalSenderKeyStatuses.get(r);
				if (n != null) {
					var o = n.groupJid, a = n.senderKeyTs, i = babelHelpers.objectWithoutPropertiesLoose(n, e);
					return babelHelpers.extends({}, i, { ts: a });
				}
				var l = babelHelpers.extends({}, u, { groupJid: r });
				yield t.stores.personalSenderKeyStatuses.bulkPut([l]);
				var c = l.groupJid, d = l.senderKeyTs, m = babelHelpers.objectWithoutPropertiesLoose(l, s);
				return babelHelpers.extends({}, m, { ts: d });
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), "Signal - getSenderKeyStatus");
	}, p = function(t) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = yield e.stores.personalSenderKeyStatuses.bulkGet(t);
				yield e.stores.personalSenderKeyStatuses.bulkPut(n.filter(function(e) {
					return e != null;
				}).map(function(e) {
					return babelHelpers.extends({}, e, { rotateSenderKey: !0 });
				}));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("bulkSetRotateSenderKeyToTrue"));
	}, _ = function(t) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", function(e) {
			return e.stores.personalSenderKeyStatuses.bulkDelete(t);
		}, o("WASignalDB").signalOp("deletePersonalSenderKeyStatus"));
	};
	l.bulkPutNewPersonalSenderKeyStatus = c, l.markSenderKeyAsRotated = d, l.getSenderKeyStatus = m, l.bulkSetRotateSenderKeyToTrue = p, l.deletePersonalSenderKeyStatus = _;
}), 98);

__d("WAGetLocalPublicPrivateIdentityKeyApi", [
	"WADbSignal",
	"WALogger",
	"WASignalDB",
	"WASignalKeys",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n, a = yield t.stores.meta.get(o("WADbSignal").MetaKeysEnum.identityKeyPair);
				if ((a == null || (n = a.value) == null ? void 0 : n.identityKeyPair) == null) {
					var i = "[Remote Presence Error] Identity key pair was null";
					throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), i), r("err")(i);
				}
				return o("WASignalKeys").toSerializedKeyPair(a.value.identityKeyPair);
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getLocalPublicPrivateIdentityKey"));
	};
	l.getLocalPublicPrivateIdentityKey = s;
}), 98);

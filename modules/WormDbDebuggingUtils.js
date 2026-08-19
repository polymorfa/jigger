__d("WormDbDebuggingUtils", [
	"WAJids",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["identity"], "readonly", function(e) {
				return e.stores.identity.readAll();
			}, "debug-get-identities");
		}), s.apply(this, arguments);
	}
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["contacts"], "readonly", function(e) {
				return e.stores.contacts.readAll();
			}, "debug-get-contacts");
		}), c.apply(this, arguments);
	}
	function d() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["session"], "readonly", function(e) {
				return e.stores.session.readAll();
			}, "debug-get-sessions");
		}), m.apply(this, arguments);
	}
	function p() {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["senderKeySessions"], "readonly", function(e) {
				return e.stores.senderKeySessions.readAll();
			}, "debug-get-sender-key-sessions");
		}), _.apply(this, arguments);
	}
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["prekey"], "readonly", function(e) {
				return e.stores.prekey.readAll();
			}, "debug-get-prekeys");
		}), g.apply(this, arguments);
	}
	function h() {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["prekeyGeneration"], "readonly", function(e) {
				return e.stores.prekeyGeneration.readAll();
			}, "debug-get-prekey-generations");
		}), y.apply(this, arguments);
	}
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["signedPrekey"], "readonly", function(e) {
				return e.stores.signedPrekey.readAll();
			}, "debug-get-signed-prekeys");
		}), b.apply(this, arguments);
	}
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WASignalDB").getDbPromise();
			return e.runInTransaction(["meta"], "readonly", function(e) {
				return e.stores.meta.readAll();
			}, "debug-get-meta-rows");
		}), S.apply(this, arguments);
	}
	function R(t) {
		return e().then(function(e) {
			return e.filter(function(e) {
				return e.userJid === t;
			});
		});
	}
	function L(e) {
		return u().then(function(t) {
			return t.find(function(t) {
				return t.contactJid === e;
			});
		});
	}
	function E(e) {
		return d().then(function(t) {
			return t.filter(function(t) {
				return o("WAJids").extractUserJid(t.id) === e;
			});
		});
	}
	function k(e) {
		return p().then(function(t) {
			return t.filter(function(t) {
				return t.userJid === e;
			});
		});
	}
	l.getIdentities = e, l.getContacts = u, l.getSessions = d, l.getSenderKeySessions = p, l.getPrekeys = f, l.getPrekeyGenerations = h, l.getSignedPrekeys = C, l.getMetaRows = v, l.getIdentitiesForUser = R, l.getContact = L, l.getSessionsForUser = E, l.getSenderKeySessionsForUser = k;
}), 98);

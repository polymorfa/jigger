__d("MAWSecretConversationsLogout", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"Promise",
	"QPLUserFlow",
	"Random",
	"ReQL",
	"WAOdsEnums",
	"asyncTimeout",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"ifRequired",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		r("QPLUserFlow").start(r("qpl")._(25309731, "17"), {
			annotations: { bool: { userInitiated: e } },
			cancelOnUnload: !0,
			timeoutInMs: 3e3
		});
	}
	function u() {
		r("QPLUserFlow").endSuccess(r("qpl")._(25309731, "17"));
	}
	function c(t) {
		s(t), r("QPLUserFlow").endCancel(r("qpl")._(25310776, "6155"), { annotations: { string: { cancelReason: "logout" } } }), r("QPLUserFlow").endCancel(r("qpl")._(1056839232, "112"), { annotations: { string: { cancelReason: "logout" } } });
		var a = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					yield r("ifRequired")("MAWSetupWorker", function(e) {
						return e.terminateWorker("logout");
					}, function() {
						r("FBLogger")("messenger_web_account").mustfix("Logging out without correct messenger environment in place");
					});
				} catch (t) {
					var e = r("getErrorSafe")(t);
					r("FBLogger")("messenger_web_account").catching(e).mustfix("Error in removeCurrentDevice of the Armadillo logout flow");
				} finally {
					u();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), i = function(t, n, a) {
			if (o("Random").coinflip(r("justknobx")._("4263"))) {
				var e = t != null ? n != null ? "maw_db_deleted_user_eb_enrolled_and_device_restored" : "maw_db_not_deleted_user_eb_enrolled_and_device_not_restored" : a === !0 ? "maw_db_not_deleted_user_user_not_eb_enrolled_and_opted_out" : "maw_db_not_deleted_user_user_not_eb_enrolled";
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_DELETE_DB_ON_LOGOUT,
					key: "maw_logout." + e
				});
			}
		}, l = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (indexedDB.databases != null) {
					var e = yield indexedDB.databases(), t = o("MAWCurrentUser").getID(), n = o("MAWIndexedDbMetadata").dbName(t), r = e.find(function(e) {
						return e.name === n;
					});
					if (r != null) return r.name;
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), c = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield r("ifRequired")("LSDatabaseSingleton", (function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						try {
							var a = yield l();
							if (a == null) return;
							var s = yield t.LSDatabaseSingleton, u = yield (e || (e = n("Promise"))).all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(s.tables.encrypted_backups)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(s.tables.secure_encrypted_backups_client_state))]), c = u[0], d = u[1], m = (c == null ? void 0 : c.backupId) != null && (d == null ? void 0 : d.deviceId) != null;
							m && (yield o("MAWIndexedDBDeletion").deleteDB(a, "maw_v1")), i(d == null ? void 0 : d.backupId, d == null ? void 0 : d.deviceId, c == null ? void 0 : c.isUserOptedOut);
						} catch (e) {
							var p = r("getErrorSafe")(e);
							r("FBLogger")("messenger_e2ee_web").catching(p).mustfix("Error on logout while determining EB restore state or deleting msgr MAW db.");
						}
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})());
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		return (e || (e = n("Promise"))).race([c(), r("asyncTimeout")(3e3)]).then(function() {
			return (e || (e = n("Promise"))).race([a().catch(function(t) {
				return r("FBLogger")("messenger_web_account").catching(t).mustfix("Error in the Armadillo logout flow"), (e || (e = n("Promise"))).resolve();
			}), r("asyncTimeout")(3e3)]);
		});
	}
	l.default = c;
}), 98);

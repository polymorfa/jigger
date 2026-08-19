__d("MAWSecretConversationsLogout", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"QPLUserFlow",
	"Random",
	"ReQL",
	"WAOdsEnums",
	"asyncTimeout",
	"getErrorSafe",
	"ifRequired",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		r("QPLUserFlow").start(r("qpl")._(25309731, "17"), {
			annotations: { bool: { userInitiated: e } },
			cancelOnUnload: !0,
			timeoutInMs: 3e3
		});
	}
	function s() {
		r("QPLUserFlow").endSuccess(r("qpl")._(25309731, "17"));
	}
	function u(t) {
		e(t), r("QPLUserFlow").endCancel(r("qpl")._(25310776, "6155"), { annotations: { string: { cancelReason: "logout" } } }), r("QPLUserFlow").endCancel(r("qpl")._(1056839232, "112"), { annotations: { string: { cancelReason: "logout" } } });
		var n = async function() {
			try {
				await r("ifRequired")("MAWSetupWorker", function(e) {
					return e.terminateWorker("logout");
				}, function() {
					r("FBLogger")("messenger_web_account").mustfix("Logging out without correct messenger environment in place");
				});
			} catch (t) {
				var e = r("getErrorSafe")(t);
				r("FBLogger")("messenger_web_account").catching(e).mustfix("Error in removeCurrentDevice of the Armadillo logout flow");
			} finally {
				s();
			}
		}, a = function(t, n, a) {
			if (o("Random").coinflip(r("justknobx")._("4263"))) {
				var e = t != null ? n != null ? "maw_db_deleted_user_eb_enrolled_and_device_restored" : "maw_db_not_deleted_user_eb_enrolled_and_device_not_restored" : a === !0 ? "maw_db_not_deleted_user_user_not_eb_enrolled_and_opted_out" : "maw_db_not_deleted_user_user_not_eb_enrolled";
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_DELETE_DB_ON_LOGOUT,
					key: "maw_logout." + e
				});
			}
		}, i = async function() {
			if (indexedDB.databases != null) {
				var e = await indexedDB.databases(), t = o("MAWCurrentUser").getID(), n = o("MAWIndexedDbMetadata").dbName(t), r = e.find(function(e) {
					return e.name === n;
				});
				if (r != null) return r.name;
			}
		}, l = async function() {
			await r("ifRequired")("LSDatabaseSingleton", async function(e) {
				try {
					var t = await i();
					if (t == null) return;
					var n = await e.LSDatabaseSingleton, l = await Promise.all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.encrypted_backups)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.secure_encrypted_backups_client_state))]), s = l[0], u = l[1], c = (s == null ? void 0 : s.backupId) != null && (u == null ? void 0 : u.deviceId) != null;
					c && await o("MAWIndexedDBDeletion").deleteDB(t, "maw_v1"), a(u == null ? void 0 : u.backupId, u == null ? void 0 : u.deviceId, s == null ? void 0 : s.isUserOptedOut);
				} catch (e) {
					var d = r("getErrorSafe")(e);
					r("FBLogger")("messenger_e2ee_web").catching(d).mustfix("Error on logout while determining EB restore state or deleting msgr MAW db.");
				}
			});
		};
		return Promise.race([l(), r("asyncTimeout")(3e3)]).then(function() {
			return Promise.race([n().catch(function(e) {
				return r("FBLogger")("messenger_web_account").catching(e).mustfix("Error in the Armadillo logout flow"), Promise.resolve();
			}), r("asyncTimeout")(3e3)]);
		});
	}
	l.default = u;
}), 98);

__d("MAWCompareWorkerSetupArgs", [
	"BackendInitLoggingUtils",
	"FBLogger",
	"MAWCurrentUser",
	"MessengerWebInitData",
	"WACryptoUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		if (e.prefixAndSuffix !== t.prefixAndSuffix) return !1;
		var n = e.encryptionKey, a = t.encryptionKey;
		if (n == null && a == null) return !0;
		if (n == null && a != null || n != null && a == null) return !1;
		if (n == null || a == null) throw r("FBLogger")("messenger_web").mustfixThrow("encryptionKeyA and encryptionKeyB cannot be null at this point");
		return o("WACryptoUtils").arrayBuffersEqual(n, a);
	}
	function s(t, n) {
		if (r("MessengerWebInitData").sessionId === n.sessionId ? o("BackendInitLoggingUtils").MAWInitPoint("setup_args_session_ids_match") : o("BackendInitLoggingUtils").MAWInitPoint("setup_args_session_ids_mismatch"), n.sessionId !== r("MessengerWebInitData").sessionId) {
			var a = !0;
			if (r("MessengerWebInitData").createdAt != null && n.createdAt != null && (a = n.createdAt > r("MessengerWebInitData").createdAt), n.createdAt == null && r("MessengerWebInitData").createdAt != null && (a = !1), a) return o("BackendInitLoggingUtils").MAWInitPoint("setup_args_current_session_ids_mismatch"), {
				hasArgsChanged: !0,
				reason: "session_id_change"
			};
		}
		var i = o("MAWCurrentUser").getID();
		return n.fbId !== i ? (r("FBLogger")("messenger_web").mustfix("FBID mismatch during worker setup. %s:%s:%s:%s", i === "0", i.length, n.fbId === "0", n.fbId.length), {
			hasArgsChanged: !0,
			reason: "fbid_change"
		}) : (o("BackendInitLoggingUtils").MAWInitPoint("setup_args_fb_ids_match"), e(n.vaultMaterials, t.vaultMaterials) ? {
			hasArgsChanged: !1,
			reason: "args_ok"
		} : {
			hasArgsChanged: !0,
			reason: "vault_materials_change"
		});
	}
	l.didWorkerSetupArgsChange = s;
}), 98);

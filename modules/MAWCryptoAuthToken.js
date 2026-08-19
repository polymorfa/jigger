__d("MAWCryptoAuthToken", [
	"FBLogger",
	"MAWCatQuery",
	"relay-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e == null || e.secure_message_over_wa_cat_query == null || e.secure_message_over_wa_cat_query.encrypted_serialized_cat == null || e.secure_message_over_wa_cat_query.expiration_time_in_seconds == null) {
			var t, n;
			return r("FBLogger")("maw_device_reg").warn("Crypto Auth Token was null or incomplete %s:%s:%s:%s", e == null, (e == null ? void 0 : e.secure_message_over_wa_cat_query) == null, (e == null || (t = e.secure_message_over_wa_cat_query) == null ? void 0 : t.encrypted_serialized_cat) == null, e == null || (n = e.secure_message_over_wa_cat_query) == null ? void 0 : n.expiration_time_in_seconds), { error: "Crypto Auth Token was null or incomplete" };
		}
		return { success: {
			encrypted_serialized_cat: e.secure_message_over_wa_cat_query.encrypted_serialized_cat,
			expiration_time_in_seconds: e.secure_message_over_wa_cat_query.expiration_time_in_seconds
		} };
	}
	function s(t) {
		return o("relay-runtime").fetchQuery(t, r("MAWCatQuery"), {}).toPromise().then(e).then(function(e) {
			if (e.error != null) throw r("FBLogger")("maw_device_reg").mustfixThrow("[MAWCryptoAuthToken] Error while fetching CAT from GraphQL: %s", e.error);
			return e.success;
		});
	}
	l.processCatResponse = e, l.fetchFreshCAT = s;
}), 98);

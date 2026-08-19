__d("useMAWDecryptLiveLocationUpdateSubscription.react", [
	"CometRelay",
	"FBLogger",
	"decryptAESGCMData",
	"react",
	"react-compiler-runtime",
	"useMAWDecryptLiveLocationUpdateSubscription.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useMemo, c = e !== void 0 ? e : e = n("useMAWDecryptLiveLocationUpdateSubscription.graphql");
	function d(e, t, n, a) {
		var i = o("react-compiler-runtime").c(9), l;
		i[0] !== e || i[1] !== a ? (l = function(n) {
			if ((n == null ? void 0 : n.e2ee_live_location_update_subscribe) != null) {
				var t = n.e2ee_live_location_update_subscribe, o = t.creator_id, i = t.encrypted_coordinates;
				if (i != null && o != null) {
					var l = a[o];
					r("decryptAESGCMData")(i, l.encryptionKey).then(function(t) {
						if (t != null && t.success) {
							var n = new TextDecoder().decode(t.value), a = n.split(",").map(Number), i = a[0], l = a[1];
							e(o, [l, i]);
						} else r("FBLogger")("messenger_web_sharing_livelocation").mustfix("Failed to decrypt live location coordinates", t.error.toString());
					}).catch(m);
				}
			}
		}, i[0] = e, i[1] = a, i[2] = l) : l = i[2];
		var s;
		i[3] !== t || i[4] !== n ? (s = { data: {
			client_subscription_id: t,
			thread_key: n
		} }, i[3] = t, i[4] = n, i[5] = s) : s = i[5];
		var u = s, d;
		i[6] !== l || i[7] !== u ? (d = {
			onError: p,
			onNext: l,
			subscription: c,
			variables: u
		}, i[6] = l, i[7] = u, i[8] = d) : d = i[8];
		var _ = d;
		o("CometRelay").useSubscription(_);
	}
	function m(e) {
		r("FBLogger")("messenger_web_sharing_livelocation").mustfix("Error during decryption process", e.toString());
	}
	function p(e) {
		r("FBLogger")("messenger_web_sharing_livelocation").catching(e).mustfix("Failed to receive live location updates from subscription");
	}
	l.default = d;
}), 98);

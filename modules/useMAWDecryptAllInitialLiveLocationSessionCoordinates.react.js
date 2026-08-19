__d("useMAWDecryptAllInitialLiveLocationSessionCoordinates.react", [
	"FBLogger",
	"Promise",
	"decryptAESGCMData",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState;
	function m(t, a) {
		var i = o("react-compiler-runtime").c(4), l = d(null), s = l[0], u = l[1], m, _;
		return i[0] !== t || i[1] !== a ? (m = function() {
			var o = new Map(), i = t.map(function(e) {
				var t = e.creatorId, n = e.encryptedCoordinates, i = a[t];
				return r("decryptAESGCMData")(n, i.encryptionKey).then(function(e) {
					if (e != null && e.success) {
						var n = new TextDecoder().decode(e.value), a = n.split(",").map(Number), i = a[0], l = a[1];
						o.set(t, [l, i]);
					} else r("FBLogger")("messenger_web_sharing_livelocation").mustfix("Failed to decrypt live location coordinates", e.error.toString());
				});
			}).filter(Boolean);
			(e || (e = n("Promise"))).all(i).then(function() {
				return u(o);
			}).catch(p);
		}, _ = [t, a], i[0] = t, i[1] = a, i[2] = m, i[3] = _) : (m = i[2], _ = i[3]), c(m, _), s;
	}
	function p(e) {
		r("FBLogger")("messenger_web_sharing_livelocation").mustfix("Failed to decrypt live location coordinates", e);
	}
	l.default = m;
}), 98);

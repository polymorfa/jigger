__d("WACreateRetrier", [
	"WAComms",
	"WAGetMediaRoute",
	"WAMediaOperationsRetrier",
	"WAResultOrError",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t) {
		if (r("gkx")("1921")) return o("WAResultOrError").makeResult(o("WAMediaOperationsRetrier").createRouteIndependentUploadRetrier());
		var n = await o("WAGetMediaRoute").getMediaRoute({
			operation: "upload",
			serverMediaType: e
		}, t);
		if (!n.success) return n;
		var a = n.value, i = a.authToken, l = a.fallbackHost, s = a.selectedHost, u = new (o("WAMediaOperationsRetrier")).MediaOperationsRetrier("upload", {
			host: {
				domain: s.domain,
				class: s.class
			},
			fallbackHost: l && {
				domain: l.domain,
				class: l.class
			},
			authToken: i,
			timeElapsed: null
		}, o("WAComms").waitForConnection);
		return o("WAResultOrError").makeResult(u);
	}
	l.createUploadRetrier = e;
}), 98);

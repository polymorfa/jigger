__d("WACreateMediaDownloadRetrier", [
	"WAComms",
	"WAGetMediaRoute",
	"WAMediaOperationsRetrier",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.directPath, n = e.eventFlow, r = e.fileEncSha256, a = e.mediaTypeDetails, i = a.type === "regular" ? a.mediaType : "preview";
			n == null || n.addPoint("get_media_route_start");
			var l = yield o("WAGetMediaRoute").getMediaRoute({
				operation: "download",
				serverMediaType: i,
				fileEncSha256: r,
				directPath: t
			}, n);
			if (!l.success) return n == null || n.addPoint("get_media_route_fail"), l;
			n == null || n.addPoint("get_media_route_end");
			var s = l.value, u = s.authToken, c = s.fallbackHost, d = s.selectedHost, m = new (o("WAMediaOperationsRetrier")).MediaOperationsRetrier("download", {
				host: {
					domain: d.domain,
					class: d.class
				},
				fallbackHost: c && {
					domain: c.domain,
					class: c.class
				},
				authToken: u,
				timeElapsed: null
			}, o("WAComms").waitForConnection);
			return o("WAResultOrError").makeResult({
				retrier: m,
				mediaRouteDetails: l.value
			});
		}), s.apply(this, arguments);
	}
	l.createMediaDownloadRetrier = e;
}), 98);

__d("WADownloadProgressiveJpegPlaintextStreamer", [
	"WAAssertUnreachable",
	"WACreateMediaDownloadRetrier",
	"WADownloadProgressiveJpegPlaintextStreamerWithoutRetry",
	"WAMediaUrl",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("WATagsLogger").TAGS(["WADownloadProgressiveJpegPlaintextStreamer"]);
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.abortSignal, i = t.directPath, l = t.eventFlow, u = t.fileEncSha256, c = t.mediaKey, d = t.progressiveJpegDetails, m = t.serverMediaType, p = yield o("WACreateMediaDownloadRetrier").createMediaDownloadRetrier({
				directPath: i,
				eventFlow: l,
				fileEncSha256: u,
				mediaTypeDetails: {
					type: "regular",
					mediaType: m
				}
			});
			if (!p.success) return p;
			var _ = p.value, f = _.mediaRouteDetails, g = _.retrier, h = f.bucket, y = yield g.run((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
					var s = e.domain, p = o("WAMediaUrl").buildDownloadUrl(i, u, s, "manual", h), _ = yield o("WADownloadProgressiveJpegPlaintextStreamerWithoutRetry").downloadProgressiveJpegPlaintextUsingStreamsWithoutRetry({
						abortSignal: a,
						downloadUrl: p,
						eventFlow: l,
						mediaKey: c,
						progressiveJpegDetails: d,
						serverMediaType: m,
						cachePolicy: n > 0 ? "no-store" : "force-cache"
					});
					if (_.success === !0) return o("WAResultOrError").makeResult(_);
					var f = _.error;
					switch (f) {
						case "http-fetch-exception":
						case "server-timeout":
						case "unspecified-http-error":
						case "invalid-content-length-header":
						case "missing-content-length-header": return o("WAResultOrError").makeError({ progressMade: !0 });
						case "access-expired": return o("WAResultOrError").makeResult(o("WAResultOrError").makeError("disconnected"));
						case "body-network-error": return o("WAResultOrError").makeResult(o("WAResultOrError").makeError("request-error"));
						case "media-not-found":
						case "request-error":
						case "download-throttled":
						case "signature-expired":
						case "http-fetch-aborted": return o("WAResultOrError").makeResult(o("WAResultOrError").makeError(f));
						case "missing-expected-hmacs":
						case "hmac-chiphertext-array-mismatch": return o("WAResultOrError").makeResult(o("WAResultOrError").makeError(f));
						default: throw r("WAAssertUnreachable")(f);
					}
				});
				return function(t, n, r) {
					return e.apply(this, arguments);
				};
			})());
			return y == null ? (s.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Download with stream given up"]))), o("WAResultOrError").makeError("max-attempts-exceeded")) : y;
		}), c.apply(this, arguments);
	}
	l.downloadProgressiveJpegPlaintextUsingStreams = u;
}), 98);

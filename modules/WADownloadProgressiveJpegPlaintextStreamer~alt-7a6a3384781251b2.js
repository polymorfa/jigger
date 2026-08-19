__d("WADownloadProgressiveJpegPlaintextStreamer", [
	"WAAssertUnreachable",
	"WACreateMediaDownloadRetrier",
	"WADownloadProgressiveJpegPlaintextStreamerWithoutRetry",
	"WAMediaUrl",
	"WAResultOrError",
	"WATagsLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("WATagsLogger").TAGS(["WADownloadProgressiveJpegPlaintextStreamer"]);
	async function u(t) {
		var n = t.abortSignal, a = t.directPath, i = t.eventFlow, l = t.fileEncSha256, u = t.mediaKey, c = t.progressiveJpegDetails, d = t.serverMediaType, m = await o("WACreateMediaDownloadRetrier").createMediaDownloadRetrier({
			directPath: a,
			eventFlow: i,
			fileEncSha256: l,
			mediaTypeDetails: {
				type: "regular",
				mediaType: d
			}
		});
		if (!m.success) return m;
		var p = m.value, _ = p.mediaRouteDetails, f = p.retrier, g = _.bucket, h = await f.run(async function(e, t, s) {
			var m = e.domain, p = o("WAMediaUrl").buildDownloadUrl(a, l, m, "manual", g), _ = await o("WADownloadProgressiveJpegPlaintextStreamerWithoutRetry").downloadProgressiveJpegPlaintextUsingStreamsWithoutRetry({
				abortSignal: n,
				downloadUrl: p,
				eventFlow: i,
				mediaKey: u,
				progressiveJpegDetails: c,
				serverMediaType: d,
				cachePolicy: s > 0 ? "no-store" : "force-cache"
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
		return h == null ? (s.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Download with stream given up"]))), o("WAResultOrError").makeError("max-attempts-exceeded")) : h;
	}
	l.downloadProgressiveJpegPlaintextUsingStreams = u;
}), 98);

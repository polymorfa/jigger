__d("WAHttpDownloadMedia", [
	"WAErrorMessage",
	"WALogger",
	"WAMediaQplHelper",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = "URL signature expired";
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = n != null ? n : {}, a = r.abortSignal, i = r.mediaMetrics;
			i == null || i.addPoint("http_fetch_start");
			var l = yield self.fetch(t, {
				method: "GET",
				mode: "cors",
				cache: "no-store",
				signal: a
			}).then(function(e) {
				return i == null || i.addPoint("http_fetch_end"), o("WAResultOrError").makeResult(e);
			}).catch(function(t) {
				var n = o("WAErrorMessage").maybeGetMessageFromError(t);
				return i == null || i.addPoint("http_fetch_fail", { string: { httpFetchError: n } }), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"HttpDownloadMedia: fail to initiate fetch: ",
					", message: ",
					""
				])), t, n), t.name === "AbortError" ? o("WAResultOrError").makeError("http-fetch-aborted") : o("WAResultOrError").makeError("http-fetch-exception");
			});
			if (l.success === !1) return l;
			var m = l.value, p = m.headers.get("content-length"), _ = m.status;
			switch (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Fetch Media HTTP status ", ""])), _), i == null || i.addAnnotations({
				string: { ciphertextMediaSizeBucket: p != null ? o("WAMediaQplHelper").convertIntegerSizeToStringBucket(Number(p)) : null },
				int: { httpStatus: _ }
			}), _) {
				case 200:
				case 206: return o("WAResultOrError").makeResult(m);
				case 401: return o("WAResultOrError").makeError("access-expired");
				case 403: return m.text().then(function(e) {
					return e === d ? o("WAResultOrError").makeError("signature-expired") : o("WAResultOrError").makeError("access-expired");
				}).catch(function(e) {
					return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["HttpDownloadMedia: fail to parse request body: ", ""])), e), o("WAResultOrError").makeError("access-expired");
				});
				case 404:
				case 410: return o("WAResultOrError").makeError("media-not-found");
				case 408: return o("WAResultOrError").makeError("server-timeout");
				case 416: return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Download Media Error: can not resume from offset"]))), o("WAResultOrError").makeError("request-error");
				case 429:
				case 507: return o("WAResultOrError").makeError("download-throttled");
				default: return _ >= 400 && _ < 500 ? o("WAResultOrError").makeError("request-error") : o("WAResultOrError").makeError("unspecified-http-error");
			}
		}), p.apply(this, arguments);
	}
	l.httpDownloadMedia = m;
}), 98);

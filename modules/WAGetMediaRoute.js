__d("WAGetMediaRoute", [
	"$InternalEnum",
	"Promise",
	"WACreateGetVcaEnabledBucket",
	"WAExtractNcHotTimestamp",
	"WAGatherMediaInfo",
	"WAMediaRouteSelection",
	"WAPromiseManagement",
	"WAResultOrError",
	"WATagsLogger",
	"WATimeUtils",
	"WAWaitForComms",
	"WAWorkerGlobalScope",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = o("WATagsLogger").TAGS(["GetMediaRoute"]), h = 86400, y = n("$InternalEnum")({
		Fresh: "fresh",
		Cached: "cached",
		Stale: "stale"
	}), C = null, b = !1, v = null;
	function S(e, t) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			t == null || t.addPoint("get_cached_or_fresh_media_access_start");
			var n = yield I();
			if (t == null || t.addPoint("get_cached_or_fresh_media_access_end"), !n.success) return g.ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Failed to get mediaAccess: ", ""])), n.error), t == null || t.addPoint("get_media_access_failed", { string: { mediaAccessStatus: n.error } }), n;
			t == null || t.addAnnotations({ string: { mediaAccessStatus: n.value.state } });
			var r = n.value.mediaAccess, a = r.authToken, i = r.hosts, l = r.maxBuckets, s = e.operation === "upload" ? o("WAMediaRouteSelection").mediaRouteSelection({
				operation: "upload",
				mediaType: e.serverMediaType,
				hosts: i
			}) : o("WAMediaRouteSelection").mediaRouteSelection({
				operation: "download",
				mediaType: e.serverMediaType,
				hosts: i,
				catHotTimespan: h,
				ncHot: o("WAExtractNcHotTimestamp").extractNcHotTimestamp(e.directPath),
				getVcaEnabledBucket: o("WACreateGetVcaEnabledBucket").msgrCreateGetVcaEnabledBucket(e.directPath, l)
			}), u = s.bucket, c = s.fallbackHost, d = s.selectedHost;
			return d == null ? (g.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Error: no media host"]))), o("WAResultOrError").makeError("no-host")) : o("WAResultOrError").makeResult({
				authToken: a,
				selectedHost: d,
				fallbackHost: c,
				bucket: u
			});
		}), R.apply(this, arguments);
	}
	function L() {
		var e = v;
		e != null && (o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(e), v = null);
	}
	function E(t) {
		L();
		var n = Math.max(t.authTokenExpiryTs - o("WATimeUtils").unixTime(), 0);
		if (!(n <= 300)) {
			var r = o("WATimeUtils").pastUnixTime(300, t.authTokenExpiryTs), a = o("WATimeUtils").pastUnixTime(Math.floor(n * .2), t.authTokenExpiryTs), i = r < a ? r : a, l = o("WATimeUtils").cappedMillisecondsUntil(i), u = Math.floor(Math.random() * o("WATimeUtils").MINUTE_MILLISECONDS), c = o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(function() {
				g.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["AuthTTL approaching expiry, refreshing MediaAccess routes"]))), k().catch(function(e) {
					g.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error occurred during authTTL automatic refresh: ", ""])), e);
				});
			}, l + u);
			v = c;
		}
	}
	var k = o("WAPromiseManagement").cacheWhilePending(function() {
		return "all";
	}, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
		if (b) return g.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["mediaAccess has gone, but we are still locked by backoff"]))), o("WAResultOrError").makeError("backoff");
		yield o("WAWaitForComms").waitForComms(), g.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["mediaAccess has gone, gather a new one"]))), L();
		var e = yield o("WAGatherMediaInfo").gatherMediaInfo();
		if (e.success) return C = e.value, E(e.value), o("WAResultOrError").makeResult({
			mediaAccess: e.value,
			state: y.Fresh
		});
		var t = e.error, n = t === "disconnected" ? "disconnected" : t.type;
		return g.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Can not get mediaAccess: ", ""])), n), t === "disconnected" || t.type === "client-error" ? o("WAResultOrError").makeError("disconnected") : (t.type, b = !0, o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(function() {
			b = !1, k().catch(function(e) {
				g.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Error occurred on gather after backoff expiry: ", ""])), e);
			});
		}, t.backoffMs), o("WAResultOrError").makeError("backoff"));
	})), I = function() {
		var e = C;
		if (e == null) return k();
		if (o("WATimeUtils").isInFuture(e.routesExpiryTs)) return (f || (f = n("Promise"))).resolve(o("WAResultOrError").makeResult({
			mediaAccess: e,
			state: y.Cached
		}));
		var t = k();
		return o("WATimeUtils").isInFuture(e.authTokenExpiryTs) ? (f || (f = n("Promise"))).resolve(o("WAResultOrError").makeResult({
			mediaAccess: e,
			state: y.Stale
		})) : t;
	};
	function T() {
		C = null, b = !1, L();
	}
	l.getMediaRoute = S, l.getCachedOrFreshMediaAccess = I, l.clearCachedMediaAccessForTest = T;
}), 98);

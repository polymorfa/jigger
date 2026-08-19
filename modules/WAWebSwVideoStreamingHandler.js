__d("WAWebSwVideoStreamingHandler", [
	"Promise",
	"WAWebBuildConstants",
	"WAWebSWBus",
	"WAWebSWBusActions",
	"WAWebSwFeature",
	"WAWebSwVideoStreamer",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video", u = (function(t) {
		function a() {
			for (var a, i = arguments.length, l = new Array(i), u = 0; u < i; u++) l[u] = arguments[u];
			return a = t.call.apply(t, [this].concat(l)) || this, a.matchFetch = function(e) {
				var t = e.request, n = o("WAWebSwFeature").SWFeature.parseUrl(t.url);
				return t.method === o("WAWebSwFeature").SWFeature.RequestType.GET && !!n && !!n.queryParams && !!n.queryParams.key && !!t.url.match(s);
			}, a.onFetch = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var a = t.clientId, i = t.request, l = o("WAWebSwFeature").SWFeature.parseUrl(i.url), s = a;
					if (s == null) return (e || (e = n("Promise"))).reject(r("err")("No client id found."));
					var u = yield r("WAWebSWBus").request(s, r("WAWebSWBusActions").REQUEST_STREAMING_INFO, { key: l.queryParams.key }), c = u.cryptoKeys, d = u.streamData, m = new (o("WAWebSwVideoStreamer")).VideoStreamer(s, c, d);
					return m.fetchAndDecrypt(i);
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), a.matchAction = function(e) {
				return e === r("WAWebSWBusActions").STREAMING_SUPPORTED;
			}, a.onAction = function(e, t) {
				return !!self.crypto && (!!self.crypto.subtle || !!self.crypto.webkitSubtle);
			}, babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
		}
		return babelHelpers.inheritsLoose(a, t), a;
	})(o("WAWebSwFeature").SWFeature);
	l.default = u;
}), 98);

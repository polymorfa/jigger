__d("WAWebSwVideoStreamingHandler", [
	"WAWebBuildConstants",
	"WAWebSWBus",
	"WAWebSWBusActions",
	"WAWebSwFeature",
	"WAWebSwVideoStreamer",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video", s = (function(t) {
		function n() {
			for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
			return n = t.call.apply(t, [this].concat(i)) || this, n.matchFetch = function(t) {
				var n = t.request, r = o("WAWebSwFeature").SWFeature.parseUrl(n.url);
				return n.method === o("WAWebSwFeature").SWFeature.RequestType.GET && !!r && !!r.queryParams && !!r.queryParams.key && !!n.url.match(e);
			}, n.onFetch = async function(e) {
				var t = e.clientId, n = e.request, a = o("WAWebSwFeature").SWFeature.parseUrl(n.url), i = t;
				if (i == null) return Promise.reject(r("err")("No client id found."));
				var l = await r("WAWebSWBus").request(i, r("WAWebSWBusActions").REQUEST_STREAMING_INFO, { key: a.queryParams.key }), s = l.cryptoKeys, u = l.streamData, c = new (o("WAWebSwVideoStreamer")).VideoStreamer(i, s, u);
				return c.fetchAndDecrypt(n);
			}, n.matchAction = function(e) {
				return e === r("WAWebSWBusActions").STREAMING_SUPPORTED;
			}, n.onAction = function(e, t) {
				return !!self.crypto && (!!self.crypto.subtle || !!self.crypto.webkitSubtle);
			}, babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
		}
		return babelHelpers.inheritsLoose(n, t), n;
	})(o("WAWebSwFeature").SWFeature);
	l.default = s;
}), 98);

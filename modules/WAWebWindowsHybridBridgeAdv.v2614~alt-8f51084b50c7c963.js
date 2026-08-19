__d("WAWebWindowsHybridBridgeAdv.v2614", ["WABase64", "WAWebODS"], (function(t, n, r, o, a, i, l) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.verifySignatureAsync = async function(t, n, a) {
			r("WAWebODS").incr("web.hybrid.bridge.adv.send.verify");
			var e = await this.$1.verify(o("WABase64").encodeB64(n), o("WABase64").encodeB64(a), o("WABase64").encodeB64(t));
			return e;
		}, e;
	})();
	l.WindowsHybridBridgeAdv_v2614 = e;
}), 98);

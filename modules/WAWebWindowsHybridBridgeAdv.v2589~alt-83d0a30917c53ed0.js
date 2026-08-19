__d("WAWebWindowsHybridBridgeAdv.v2589", ["WABase64"], (function(t, n, r, o, a, i, l) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.verifySignatureAsync = async function(t, n, r) {
			var e = await this.$1.verify(o("WABase64").encodeB64(n), o("WABase64").encodeB64(r), o("WABase64").encodeB64(t));
			return e;
		}, e;
	})();
	l.WindowsHybridBridgeAdv_v2589 = e;
}), 98);

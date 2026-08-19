__d("WAWebWindowsHybridBridgeLinksPreview.v2616", ["WAWebODS"], (function(t, n, r, o, a, i, l) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.getPreviewAsync = async function(t) {
			r("WAWebODS").incr("web.hybrid.bridge.links_preview.send.get_preview_async");
			var e = await this.$1.getPreviewAsync(t);
			return e == null || e === "" ? null : JSON.parse(e);
		}, e;
	})();
	l.WindowsHybridBridgeLinksPreview_v2616 = e;
}), 98);

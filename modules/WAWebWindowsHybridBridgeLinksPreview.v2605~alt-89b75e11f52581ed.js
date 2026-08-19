__d("WAWebWindowsHybridBridgeLinksPreview.v2605", [], (function(t, n, r, o, a, i) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.getPreviewAsync = async function(t) {
			var e = await this.$1.getPreviewAsync(t);
			return e == null || e === "" ? null : JSON.parse(e);
		}, e;
	})();
	i.WindowsHybridBridgeLinksPreview_v2605 = e;
}), 66);

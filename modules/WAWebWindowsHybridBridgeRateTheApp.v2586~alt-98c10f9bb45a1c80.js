__d("WAWebWindowsHybridBridgeRateTheApp.v2586", [], (function(t, n, r, o, a, i) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.getStoreProductForCurrentApp = function() {
			return this.$1.getStoreProductForCurrentAppAsync();
		}, t.requestRateAndApp = async function() {
			var e = await this.$1.requestRateAndReviewAppAsync();
			return JSON.parse(e);
		}, e;
	})();
	i.WAWebWindowsHybridBridgeRateTheApp_v2586 = e;
}), 66);

__d("WAWebWindowsHybridBridgeBrowserExtensions.v2587", [], (function(t, n, r, o, a, i) {
	var e = (function() {
		function e(e) {
			this.$1 = e;
		}
		var t = e.prototype;
		return t.getBrowserExtensionsInfoAsync = async function() {
			var e = await this.$1.getBrowserExtensionsInfoAsync();
			return JSON.parse(e);
		}, t.enableBrowserExtensionAsync = function(t, n) {
			return this.$1.enableBrowserExtensionAsync(t, n);
		}, t.removeBrowserExtensionAsync = function(t) {
			return this.$1.removeBrowserExtensionAsync(t);
		}, t.hasBootstrappedSuccessfully = function() {
			return this.$1.hasBootstrappedSuccessfully();
		}, t.getZoomBrowserExtensionInfoAsync = async function() {
			var e = await this.$1.getZoomBrowserExtensionInfoAsync();
			return JSON.parse(e);
		}, t.enableZoomBrowserExtensionAsync = function(t) {
			return this.$1.enableZoomBrowserExtensionAsync(t);
		}, t.removeZoomBrowserExtensionAsync = function() {
			return this.$1.removeZoomBrowserExtensionAsync();
		}, t.installZoomBrowserExtensionAsync = async function() {
			var e = await this.$1.installZoomBrowserExtensionAsync();
			return JSON.parse(e);
		}, e;
	})();
	i.WindowsHybridBridgeBrowserExtensions_v2587 = e;
}), 66);

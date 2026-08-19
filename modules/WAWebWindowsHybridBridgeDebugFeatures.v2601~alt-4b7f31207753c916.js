__d("WAWebWindowsHybridBridgeDebugFeatures.v2601", ["WALogger", "WAWebBackendApi"], (function(t, n, r, o, a, i, l) {
	var e, s = 1e3, u = (function() {
		function t(t) {
			var n = this, r, a, i;
			this.$2 = null, this.ping = function(t) {
				var r, a = self.performance.now(), i = (a - ((r = n.$2) != null ? r : a)).toFixed(0);
				n.$2 = a, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"WindowsHybridBridgeDebugFeatures:ping:",
					" diff:",
					"ms"
				])), t, i), n.$1.pong(t.valueOf());
			}, this.$1 = t, (r = this.$1) == null || r.addEventListener("jsLogs", function() {
				n.saveJSLogs();
			}), (a = this.$1) == null || a.addEventListener("requestWebLogStringEvent", function(e) {
				n.requestWebLogString(e);
			}), (i = this.$1) == null || i.addEventListener("pingEvent", this.ping), this.$1.subscribe(null);
		}
		var n = t.prototype;
		return n.startHangsMonitor = function() {
			this.$1.startHangsMonitor();
		}, n.saveNativeLogs = function() {
			this.$1.saveNativeLogs();
		}, n.sendAdminLogs = function() {
			this.$1.sendAdminRequestedLogs();
		}, n.requestNativeLogs = async function() {
			return this.$1.requestNativeLogs();
		}, n.saveJSLogs = function() {
			o("WAWebBackendApi").frontendFireAndForget("createDownloadDataForMdWebLogs");
		}, n.limitStringSize = function(t, n) {
			var e = new Blob([t], { type: "text/plain" });
			if (e.size > n) {
				var r = e.size - n;
				return t.substr(r);
			}
			return t;
		}, n.requestWebLogString = async function(t) {
			var e = await o("WAWebBackendApi").frontendSendAndReceive("getWebLogs"), n = this.limitStringSize(e, 30 * s);
			this.$1.sendWebLogString(t.toString(), n);
		}, t;
	})();
	l.WindowsHybridBridgeDebugFeatures_v2601 = u;
}), 98);

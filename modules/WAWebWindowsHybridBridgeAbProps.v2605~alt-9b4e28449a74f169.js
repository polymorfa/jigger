__d("WAWebWindowsHybridBridgeAbProps.v2605", [
	"WALogger",
	"WAWebABPropsCache",
	"WAWebABPropsLocalStorage",
	"WAWebBackendApi",
	"WAWebHybridABProps"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function() {
		function t(t) {
			var n = this;
			this.$2 = !1, this.$4 = async function(t) {
				var r;
				n.$3 == null && (n.$3 = o("WAWebHybridABProps").getAllHybridExpoKeys());
				var a = t.toString(), i = (r = n.$3) == null ? void 0 : r.get(a);
				if (i == null) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[abprops][windows hybrid] unknown exposure key: ", ""])), a);
					return;
				}
				o("WAWebABPropsCache").saveExposure(i), n.$1.acknowledgeExposure(a);
			}, this.$5 = function(e) {
				n.$3 = null;
				var t = o("WAWebABPropsLocalStorage").getABKey();
				if (e !== t) {
					var r = o("WAWebHybridABProps").getAllHybridAbProps(!1);
					n.$1.setConfigs(t, JSON.stringify(r));
				}
			}, this.$1 = t;
		}
		var n = t.prototype;
		return n.initialize = async function() {
			var e = this;
			if (!this.$2) {
				this.$2 = !0, await o("WAWebABPropsCache").waitForABPropConfigsReady(), this.$1.addEventListener("exposureLogged", this.$4), this.$1.subscribe(null);
				var t = await this.$1.getVersion();
				o("WAWebBackendApi").frontendFireAndForget("addAbPropsUpdateListener", function() {
					e.$5(null);
				}), this.$5(t);
			}
		}, t;
	})();
	l.WindowsHybridBridgeAbProps_v2605 = s;
}), 98);

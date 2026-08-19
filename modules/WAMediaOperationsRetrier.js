__d("WAMediaOperationsRetrier", [
	"WALogger",
	"WAPromiseBackoffs",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 4, u = {
		algo: {
			type: "constant",
			delay: 1e3
		},
		jitter: 0
	}, c = (function() {
		function t(e, t, n) {
			this.$1 = e, this.routesInfo = t, this.$2 = o("WAPromiseBackoffs").createPromiseTimer(u), this.$3 = 0, this.$4 = !1, this.$5 = n;
		}
		var r = t.prototype;
		return r.run = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				for (; this.$3 < s;) {
					yield this.$2();
					var r = void 0;
					if (this.$3 > 0) {
						var a;
						r = this.$3 >= s - 2 && !this.$4, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"MediaOperationsRetrier:",
							" wait for internet, attempt = ",
							""
						])), this.$1, this.$3), yield (a = this.$5) == null ? void 0 : a.call(this);
					} else r = !1;
					var i = this.routesInfo;
					if (!i) return null;
					var l = i.host;
					r && i.fallbackHost && (l = i.fallbackHost);
					var u = yield t(l, i.authToken, this.$3, n);
					if (u.success) return u.value;
					++this.$3, this.$4 = u.error.progressMade;
				}
				return null;
			});
			function r(e, n) {
				return t.apply(this, arguments);
			}
			return r;
		})(), t;
	})();
	function d() {
		return new c("upload", {
			authToken: "",
			fallbackHost: null,
			host: {
				class: null,
				domain: ""
			},
			timeElapsed: null
		});
	}
	l.MAX_ATTEMPTS = s, l.BACKOFF_OPTIONS = u, l.MediaOperationsRetrier = c, l.createRouteIndependentUploadRetrier = d;
}), 98);

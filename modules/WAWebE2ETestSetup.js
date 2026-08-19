__d("WAWebE2ETestSetup", [
	"Promise",
	"WAWebAltDeviceLinkingApi",
	"WAWebE2ETestPairingConstants",
	"WAWebLocalStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s = 1e4, u = 500, c = "[data-testid=\"link-device-qr-code\"]";
	function d() {
		window.readWebQrCode = (function() {
			function e() {
				return t.apply(this, arguments);
			}
			function t() {
				return t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e, t = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY);
					if (t != null) return t;
					var n = (e = yield m()) != null ? e : "";
					return r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY, n), n;
				}), t.apply(this, arguments);
			}
			return e;
		})(), window.readLinkCode = (function() {
			return (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking();
					var t = yield o("WAWebAltDeviceLinkingApi").startAltLinkingFlow(e, !1);
					return t;
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})();
		})();
	}
	function m() {
		return new (e || (e = (n("Promise"))))(function(e) {
			var t = Date.now(), n = function() {
				var r, o = document.querySelector(c), a = o == null || (r = o.dataset) == null ? void 0 : r.ref;
				if (a != null) {
					e(a);
					return;
				}
				if (Date.now() - t >= s) {
					e(null);
					return;
				}
				window.setTimeout(n, u);
			};
			n();
		});
	}
	l.default = d;
}), 98);

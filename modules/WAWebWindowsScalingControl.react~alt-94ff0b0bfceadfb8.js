__d("WAWebWindowsScalingControl.react", [
	"invariant",
	"$InternalEnum",
	"WALogger",
	"WAWebWindowsHybridBridgeFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"WAWebWindowsScalingControlActions",
	"WAWebWindowsScalingControlConstants",
	"WAWebWindowsScalingControlEventEmitter",
	"asyncToGeneratorRuntime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = n("$InternalEnum")({
		ZoomIn: "zoom-in",
		ZoomOut: "zoom-out",
		ZoomReset: "zoom-reset",
		GetZoom: "get-zoom",
		SetZoom: "set-zoom"
	}), m = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] sending message to the browser extension"])));
			var r = window == null || (n = window.chrome) == null ? void 0 : n.runtime;
			r == null && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] runtime unavailable in browser ext"]))), r != null || s(0, 92250);
			var a = yield r.sendMessage(o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID, t);
			return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] browser ext response=", ""])), JSON.stringify(a)), a;
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})(), p = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			t === void 0 && (t = {});
			var n = babelHelpers.extends({}, t, { type: e });
			return m(n);
		});
		return function(n, r) {
			return e.apply(this, arguments);
		};
	})(), _ = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a;
			t === void 0 && (t = {});
			var i = yield p(e, t);
			if (e === d.GetZoom) return i;
			if (i != null) return (a = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsScalingControl)) == null || (a = a.getScalingControl()) == null || a.showScalingControl(i.zoom), n(i), i;
		});
		return function(n, r, o) {
			return e.apply(this, arguments);
		};
	})(), f = (function() {
		function e() {
			this.sendZoomUpdateNotification = function(e) {
				r("WAWebWindowsScalingControlEventEmitter").trigger("zoomUpdate", e.zoom);
			};
		}
		var t = e.prototype;
		return t.getZoomLevel = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this, t = d.GetZoom, n = yield o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
					return _(t, void 0, e.sendZoomUpdateNotification);
				}, t);
				return n == null ? void 0 : n.zoom;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.setZoomLevel = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = this, n = d.SetZoom;
				return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
					return _(n, { zoom: e }, t.sendZoomUpdateNotification);
				}, n);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.zoomIn = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this, t = d.ZoomIn;
				return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
					return _(t, void 0, e.sendZoomUpdateNotification);
				}, t);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.zoomOut = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this, t = d.ZoomOut;
				return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
					return _(t, void 0, e.sendZoomUpdateNotification);
				}, t);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.zoomReset = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = this, t = d.ZoomReset;
				return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
					return _(t, void 0, e.sendZoomUpdateNotification);
				}, t);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(), e;
	})(), g = new f();
	function h() {
		var e, t;
		return (t = o("useWAWebListener")).useListener(e = r("WAWebWindowsScalingControlEventEmitter"), "requestZoomIn", function() {
			g.zoomIn();
		}), t.useListener(e, "requestZoomOut", function() {
			g.zoomOut();
		}), t.useListener(e, "requestZoomReset", function() {
			g.zoomReset();
		}), t.useListener(e, "requestSpecificZoom", function(e) {
			g.setZoomLevel(e);
		}), null;
	}
	l.WAWebScalingControlManager = g, l.WAWebWindowsScalingControl = h;
}), 98);

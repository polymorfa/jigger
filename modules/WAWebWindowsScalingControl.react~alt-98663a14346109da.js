__d("WAWebWindowsScalingControl.react", [
	"invariant",
	"$InternalEnum",
	"WALogger",
	"WAWebWindowsHybridBridgeFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"WAWebWindowsScalingControlActions",
	"WAWebWindowsScalingControlConstants",
	"WAWebWindowsScalingControlEventEmitter",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = n("$InternalEnum")({
		ZoomIn: "zoom-in",
		ZoomOut: "zoom-out",
		ZoomReset: "zoom-reset",
		GetZoom: "get-zoom",
		SetZoom: "set-zoom"
	}), m = async function(n) {
		var t;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] sending message to the browser extension"])));
		var r = window == null || (t = window.chrome) == null ? void 0 : t.runtime;
		r == null && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] runtime unavailable in browser ext"]))), r != null || s(0, 92250);
		var a = await r.sendMessage(o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID, n);
		return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] browser ext response=", ""])), JSON.stringify(a)), a;
	}, p = async function(t, n) {
		n === void 0 && (n = {});
		var e = babelHelpers.extends({}, n, { type: t });
		return m(e);
	}, _ = async function(t, n, a) {
		var e;
		n === void 0 && (n = {});
		var i = await p(t, n);
		if (t === d.GetZoom) return i;
		if (i != null) return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsScalingControl)) == null || (e = e.getScalingControl()) == null || e.showScalingControl(i.zoom), a(i), i;
	}, f = (function() {
		function e() {
			this.sendZoomUpdateNotification = function(e) {
				r("WAWebWindowsScalingControlEventEmitter").trigger("zoomUpdate", e.zoom);
			};
		}
		var t = e.prototype;
		return t.getZoomLevel = async function() {
			var e = this, t = d.GetZoom, n = await o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
				return _(t, void 0, e.sendZoomUpdateNotification);
			}, t);
			return n == null ? void 0 : n.zoom;
		}, t.setZoomLevel = async function(t) {
			var e = this, n = d.SetZoom;
			return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
				return _(n, { zoom: t }, e.sendZoomUpdateNotification);
			}, n);
		}, t.zoomIn = async function() {
			var e = this, t = d.ZoomIn;
			return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
				return _(t, void 0, e.sendZoomUpdateNotification);
			}, t);
		}, t.zoomOut = async function() {
			var e = this, t = d.ZoomOut;
			return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
				return _(t, void 0, e.sendZoomUpdateNotification);
			}, t);
		}, t.zoomReset = async function() {
			var e = this, t = d.ZoomReset;
			return o("WAWebWindowsScalingControlActions").doZoomOperationWithExtensionCheckAndRestart(function() {
				return _(t, void 0, e.sendZoomUpdateNotification);
			}, t);
		}, e;
	})(), g = new f();
	function h() {
		var e, t;
		return (t = o("useWAWebListener")).useListener(e = r("WAWebWindowsScalingControlEventEmitter"), "requestZoomIn", v), t.useListener(e, "requestZoomOut", b), t.useListener(e, "requestZoomReset", C), t.useListener(e, "requestSpecificZoom", y), null;
	}
	function y(e) {
		g.setZoomLevel(e);
	}
	function C() {
		g.zoomReset();
	}
	function b() {
		g.zoomOut();
	}
	function v() {
		g.zoomIn();
	}
	l.WAWebScalingControlManager = g, l.WAWebWindowsScalingControl = h;
}), 98);

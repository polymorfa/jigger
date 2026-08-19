__d("WAWebVoipBridgePerfSimulator", [
	"Promise",
	"WALogger",
	"WAWebVoipWaCallEnums",
	"WAWebWindowsHybridBridgeFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			for (var a, i = (a = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipBridgePerfSimulator)) == null ? void 0 : a.voip, l = Date.now(), s = [], u = 0; u < t; u++) s.push(i == null ? void 0 : i.requestCallInfo());
			var c = yield (d || (d = n("Promise"))).all(s), m = Date.now();
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[VoipBridgePerfSimulator] runTestGetCallInfoParallel: ",
				" took ",
				"ms"
			])), t, m - l);
		}), p.apply(this, arguments);
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			for (var t, n = (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipBridgePerfSimulator)) == null ? void 0 : t.voip, a = Date.now(), i = [], l = 0; l < e; l++) i.push(yield n == null ? void 0 : n.requestCallInfo());
			var u = Date.now();
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[VoipBridgePerfSimulator] runTestGetCallInfoSeq: ",
				" took ",
				"ms"
			])), e, u - a);
		}), f.apply(this, arguments);
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			for (var t, a = (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipBridgePerfSimulator)) == null ? void 0 : t.voip, i = Date.now(), l = [], s = 0; s < e; s++) {
				var c = a == null ? void 0 : a.requestDevicesCountAsync(o("WAWebVoipWaCallEnums").DeviceTypeEnum.AudioCapture);
				l.push(c);
			}
			var m = yield (d || (d = n("Promise"))).all(l), p = Date.now();
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[VoipBridgePerfSimulator] runTestGetDeviceCountParallel: ",
				" took ",
				"ms"
			])), e, p - i);
		}), h.apply(this, arguments);
	}
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			for (var t, n = (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipBridgePerfSimulator)) == null ? void 0 : t.voip, a = Date.now(), i = [], l = 0; l < e; l++) {
				var s = yield n == null ? void 0 : n.requestDevicesCountAsync(o("WAWebVoipWaCallEnums").DeviceTypeEnum.AudioCapture);
				i.push(s);
			}
			var u = Date.now();
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[VoipBridgePerfSimulator] runTestGetDeviceCountSeq: ",
				" took ",
				"ms"
			])), e, u - a);
		}), C.apply(this, arguments);
	}
	var b = {
		runTestGetCallInfoParallel: m,
		runTestGetCallInfoSeq: _,
		runTestGetDeviceCountParallel: g,
		runTestGetDeviceCountSeq: y
	};
	l.VoipBridgePerfSimulator = b;
}), 98);

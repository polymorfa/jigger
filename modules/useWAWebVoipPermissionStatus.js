__d("useWAWebVoipPermissionStatus", [
	"WALogger",
	"WAWebNoop",
	"WAWebVoipAcquireMediaStream",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useRef, m = u.useState;
	function p(t, a) {
		var i = o("react-compiler-runtime").c(14), l = m(0), s = l[0], u = l[1], p = d(null), f = d(null), g, h;
		i[0] !== t ? (g = function() {
			var n, a = !0, i = function() {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [PermissionStatus] permission changed, triggering re-query"]))), u(_);
			};
			if ((n = navigator.permissions) == null || n.query({ name: "microphone" }).then(function(e) {
				a && (p.current = e, e.addEventListener("change", i));
			}).catch(r("WAWebNoop")), t) {
				var l;
				(l = navigator.permissions) == null || l.query({ name: "camera" }).then(function(e) {
					a && (f.current = e, e.addEventListener("change", i));
				}).catch(r("WAWebNoop"));
			}
			return (function() {
				a = !1, p.current && (p.current.removeEventListener("change", i), p.current = null), f.current && (f.current.removeEventListener("change", i), f.current = null);
			});
		}, h = [t], i[0] = t, i[1] = g, i[2] = h) : (g = i[1], h = i[2]), c(g, h);
		var y;
		i[3] !== t ? (y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return o("WAWebVoipAcquireMediaStream").queryPermissionStatus(t);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), i[3] = t, i[4] = y) : y = i[4];
		var C;
		i[5] !== t || i[6] !== a || i[7] !== s ? (C = [
			t,
			a,
			s
		], i[5] = t, i[6] = a, i[7] = s, i[8] = C) : C = i[8];
		var b = r("useWAWebAsync")(y, C), v;
		i[9] === Symbol.for("react.memo_cache_sentinel") ? (v = {
			cameraPermission: "prompt",
			micPermission: "prompt"
		}, i[9] = v) : v = i[9];
		var S = m(v), R = S[0], L = S[1], E = b.value;
		E != null && (E.micPermission !== R.micPermission || E.cameraPermission !== R.cameraPermission) && L({
			cameraPermission: E.cameraPermission,
			micPermission: E.micPermission
		});
		var k;
		return i[10] !== b.loading || i[11] !== R.cameraPermission || i[12] !== R.micPermission ? (k = {
			micPermission: R.micPermission,
			cameraPermission: R.cameraPermission,
			isLoading: b.loading
		}, i[10] = b.loading, i[11] = R.cameraPermission, i[12] = R.micPermission, i[13] = k) : k = i[13], k;
	}
	function _(e) {
		return e + 1;
	}
	l.default = p;
}), 98);

__d("WAWebVoipWebWasmSampleWebGPUCamera.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleContainer.react",
	"WAWebWebGPURenderer.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useRef, y = _.useState;
	function C() {
		var t = h(null), a = h(null), i = h(null), l = y(!1), m = l[0], _ = l[1], C = y(!1), v = C[0], S = C[1], R = y(!1), L = R[0], E = R[1], k = y(null), I = k[0], T = k[1], D = y(null), x = D[0], $ = D[1], P = 640, N = 480, M = f(function() {
			E(!0), $(null);
		}, []), w = f(function() {
			var e;
			if (E(!1), S(!1), (e = t.current) != null && e.srcObject) {
				var n = t.current.srcObject, r = n.getTracks();
				r.forEach(function(e) {
					e.stop();
				}), t.current.srcObject = null;
			}
			i.current != null && (window.cancelAnimationFrame(i.current), i.current = null), T(null);
		}, []), A = f(function(e) {
			$(e);
		}, []), F = f(function() {
			_(!0);
		}, []);
		return g(function() {
			var r = (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						if (!m || !t.current || !L) return;
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting camera"])));
						var n = yield navigator.mediaDevices.getUserMedia({
							video: {
								width: { ideal: P },
								height: { ideal: N }
							},
							audio: !1
						});
						t.current && (t.current.srcObject = n, yield t.current.play(), S(!0), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Camera started successfully"]))));
					} catch (e) {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to start camera: ", ""])), e), $("Failed to access camera. Please grant camera permissions."), E(!1);
					}
				});
				return function() {
					return r.apply(this, arguments);
				};
			})();
			r();
		}, [m, L]), g(function() {
			if (v) {
				var e = function() {
					try {
						var n = t.current, r = a.current;
						if (!n || !r) {
							i.current = window.requestAnimationFrame(e);
							return;
						}
						var l = r.getContext("2d");
						if (!l) {
							i.current = window.requestAnimationFrame(e);
							return;
						}
						l.drawImage(n, 0, 0, P, N);
						var s = l.getImageData(0, 0, P, N), u = b(s.data, P, N);
						T(u);
					} catch (e) {
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error capturing frame: ", ""])), e);
					}
					i.current = window.requestAnimationFrame(e);
				};
				return i.current = window.requestAnimationFrame(e), function() {
					i.current != null && window.cancelAnimationFrame(i.current);
				};
			}
		}, [
			v,
			P,
			N
		]), p.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			p.jsx(r("WDSText.react"), {
				type: "Headline1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			p.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			p.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			x != null && p.jsx("div", {
				style: {
					color: "red",
					marginBottom: o("WDSVars.stylex").WDSVars.spacingSingle
				},
				children: p.jsxs("p", { children: ["⚠️ ", x] })
			}),
			p.jsx("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: o("WDSVars.stylex").WDSVars.spacingDoublePlus + " 0"
				},
				children: p.jsx("div", {
					style: {
						border: "2px solid blue",
						borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
						display: "block"
					},
					children: p.jsx(r("WAWebWebGPURenderer.react"), {
						height: N,
						nv12Data: I,
						onError: A,
						onInitialized: F,
						width: P
					})
				})
			}),
			p.jsx("video", {
				ref: function(n) {
					n && t.current !== n && (t.current = n);
				},
				style: { display: "none" },
				width: P,
				height: N
			}),
			p.jsx("canvas", {
				ref: function(t) {
					t && a.current !== t && (a.current = t);
				},
				style: { display: "none" },
				width: P,
				height: N
			}),
			p.jsx("div", {
				style: { marginTop: o("WDSVars.stylex").WDSVars.spacingSingle },
				children: p.jsxs("p", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					m ? v ? "Camera Active ✓" : "Ready to start camera" : "Initializing WebGPU..."
				] })
			}),
			p.jsxs("div", {
				style: {
					marginTop: o("WDSVars.stylex").WDSVars.spacingDouble,
					display: "flex",
					gap: o("WDSVars.stylex").WDSVars.spacingSingle
				},
				children: [p.jsx(r("WDSButton.react"), {
					disabled: !m || v,
					label: "Start camera",
					onPress: M
				}), p.jsx(r("WDSButton.react"), {
					disabled: !v,
					label: "Stop camera",
					onPress: w
				})]
			})
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t, n) {
		for (var r = t * n, o = t / 2 * (n / 2) * 2, a = new Uint8Array(r + o), i = 0; i < n; i++) for (var l = 0; l < t; l++) {
			var s = (i * t + l) * 4, u = e[s], c = e[s + 1], d = e[s + 2], m = .299 * u + .587 * c + .114 * d;
			a[i * t + l] = Math.round(m);
		}
		for (var p = r, _ = 0; _ < n / 2; _++) for (var f = 0; f < t / 2; f++) {
			for (var g = f * 2, h = _ * 2, y = 0, C = 0, b = 0, v = 0; v < 2; v++) for (var S = 0; S < 2; S++) {
				var R = ((h + v) * t + (g + S)) * 4;
				y += e[R], C += e[R + 1], b += e[R + 2];
			}
			var L = y / 4, E = C / 4, k = b / 4, I = -.169 * L - .331 * E + .5 * k + 128, T = .5 * L - .419 * E - .081 * k + 128, D = p + (_ * (t / 2) + f) * 2;
			a[D] = Math.round(I), a[D + 1] = Math.round(T);
		}
		return a;
	}
	l.default = C;
}), 226);

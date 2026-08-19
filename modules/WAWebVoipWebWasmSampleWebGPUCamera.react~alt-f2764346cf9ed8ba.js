__d("WAWebVoipWebWasmSampleWebGPUCamera.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleContainer.react",
	"WAWebWebGPURenderer.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSVars.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useRef, y = _.useState;
	function C() {
		var t = h(null), n = h(null), a = h(null), i = y(!1), l = i[0], m = i[1], _ = y(!1), C = _[0], v = _[1], S = y(!1), R = S[0], L = S[1], E = y(null), k = E[0], I = E[1], T = y(null), D = T[0], x = T[1], $ = 640, P = 480, N = f(function() {
			L(!0), x(null);
		}, []), M = f(function() {
			var e;
			if (L(!1), v(!1), (e = t.current) != null && e.srcObject) {
				var n = t.current.srcObject, r = n.getTracks();
				r.forEach(function(e) {
					e.stop();
				}), t.current.srcObject = null;
			}
			a.current != null && (window.cancelAnimationFrame(a.current), a.current = null), I(null);
		}, []), w = f(function(e) {
			x(e);
		}, []), A = f(function() {
			m(!0);
		}, []);
		return g(function() {
			var n = async function() {
				try {
					if (!l || !t.current || !R) return;
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting camera"])));
					var n = await navigator.mediaDevices.getUserMedia({
						video: {
							width: { ideal: $ },
							height: { ideal: P }
						},
						audio: !1
					});
					t.current && (t.current.srcObject = n, await t.current.play(), v(!0), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Camera started successfully"]))));
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to start camera: ", ""])), e), x("Failed to access camera. Please grant camera permissions."), L(!1);
				}
			};
			n();
		}, [l, R]), g(function() {
			if (C) {
				var e = function() {
					try {
						var r = t.current, i = n.current;
						if (!r || !i) {
							a.current = window.requestAnimationFrame(e);
							return;
						}
						var l = i.getContext("2d");
						if (!l) {
							a.current = window.requestAnimationFrame(e);
							return;
						}
						l.drawImage(r, 0, 0, $, P);
						var s = l.getImageData(0, 0, $, P), u = b(s.data, $, P);
						I(u);
					} catch (e) {
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error capturing frame: ", ""])), e);
					}
					a.current = window.requestAnimationFrame(e);
				};
				return a.current = window.requestAnimationFrame(e), function() {
					a.current != null && window.cancelAnimationFrame(a.current);
				};
			}
		}, [
			C,
			$,
			P
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
			D != null && p.jsx("div", {
				style: {
					color: "red",
					marginBottom: o("WDSVars.stylex").WDSVars.spacingSingle
				},
				children: p.jsxs("p", { children: ["⚠️ ", D] })
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
						height: P,
						nv12Data: k,
						onError: w,
						onInitialized: A,
						width: $
					})
				})
			}),
			p.jsx("video", {
				ref: function(n) {
					n && t.current !== n && (t.current = n);
				},
				style: { display: "none" },
				width: $,
				height: P
			}),
			p.jsx("canvas", {
				ref: function(t) {
					t && n.current !== t && (n.current = t);
				},
				style: { display: "none" },
				width: $,
				height: P
			}),
			p.jsx("div", {
				style: { marginTop: o("WDSVars.stylex").WDSVars.spacingSingle },
				children: p.jsxs("p", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					l ? C ? "Camera Active ✓" : "Ready to start camera" : "Initializing WebGPU..."
				] })
			}),
			p.jsxs("div", {
				style: {
					marginTop: o("WDSVars.stylex").WDSVars.spacingDouble,
					display: "flex",
					gap: o("WDSVars.stylex").WDSVars.spacingSingle
				},
				children: [p.jsx(r("WDSButton.react"), {
					disabled: !l || C,
					label: "Start camera",
					onPress: N
				}), p.jsx(r("WDSButton.react"), {
					disabled: !C,
					label: "Stop camera",
					onPress: M
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

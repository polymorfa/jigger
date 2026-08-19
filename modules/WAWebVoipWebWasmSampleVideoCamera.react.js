__d("WAWebVoipWebWasmSampleVideoCamera.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleVideoWebGL",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useRef, y = f.useState;
	function C() {
		var t = h(null), r = h(null), a = y(null), i = a[0], l = a[1], p = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					if (navigator !== void 0 && navigator.mediaDevices != null && typeof navigator.mediaDevices.getUserMedia == "function") {
						var n = yield navigator.mediaDevices.getUserMedia({
							video: !0,
							audio: !1
						});
						l(n), t.current != null && (t.current.srcObject = n, yield t.current.play());
					} else o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Camera API not available"])));
				} catch (e) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error accessing camera: ", ""])), e);
				}
			});
			return function() {
				return r.apply(this, arguments);
			};
		})(), f = function() {
			i != null && (i.getTracks().forEach(function(e) {
				return e.stop();
			}), l(null), t.current != null && (t.current.srcObject = null));
		};
		g(function() {
			var e = t.current, n = r.current, a, l;
			n != null ? (l = new (o("WAWebVoipWebWasmSampleVideoWebGL")).RGB24Renderer(n), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: RGB24 format renderer created"])))) : o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Failed to create RGB24 format renderer"])));
			var s = document.createElement("canvas");
			if (n != null && (s.width = n.width, s.height = n.height, a = s.getContext("2d"), a == null)) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Failed to create video canvas context"])));
				return;
			}
			var u, p = function() {
				if (e != null && n != null && e.videoWidth > 0 && e.videoHeight > 0) {
					var t;
					n.width = e.videoWidth, n.height = e.videoHeight, a.drawImage(e, 0, 0, n.width, n.height);
					var r = a.getImageData(0, 0, n.width, n.height), o = r.data, i = C(o, n.width, n.height);
					(t = l) == null || t.render(i, n.width, n.height, 0, 3);
				}
				u = window.requestAnimationFrame(p);
			};
			return i != null && e != null && (e.onloadedmetadata = function() {
				u = window.requestAnimationFrame(p);
			}), function() {
				window.cancelAnimationFrame(u);
			};
		}, [i]);
		var C = function(t, n, r) {
			for (var e = n * r, o = new Uint8Array(e * 3), a = 0; a < e; a++) {
				var i = a * 4, l = a * 3;
				o[l] = t[i], o[l + 1] = t[i + 1], o[l + 2] = t[i + 2];
			}
			return o;
		};
		return _.jsxs("div", { children: [
			_.jsx("h1", { children: s._(
				/*BTDS*/
				""
			) }),
			_.jsxs("div", {
				style: {
					display: "flex",
					gap: "10px",
					marginBottom: o("WDSVars.stylex").WDSVars.spacingDoublePlus
				},
				children: [_.jsx("button", {
					onClick: p,
					disabled: i != null,
					children: s._(
						/*BTDS*/
						""
					)
				}), _.jsx("button", {
					onClick: f,
					disabled: i == null,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			_.jsx("video", {
				ref: t,
				style: { display: "none" },
				playsInline: !0,
				autoPlay: !0,
				muted: !0
			}),
			_.jsx("canvas", {
				ref: r,
				style: { border: "2px solid green" },
				width: 640,
				height: 480
			})
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

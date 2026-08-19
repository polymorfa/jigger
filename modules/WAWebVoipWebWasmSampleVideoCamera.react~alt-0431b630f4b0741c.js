__d("WAWebVoipWebWasmSampleVideoCamera.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleVideoWebGL",
	"WDSVars.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useRef, y = f.useState;
	function C() {
		var t = h(null), n = h(null), r = y(null), a = r[0], i = r[1], l = async function() {
			try {
				if (navigator !== void 0 && navigator.mediaDevices != null && typeof navigator.mediaDevices.getUserMedia == "function") {
					var n = await navigator.mediaDevices.getUserMedia({
						video: !0,
						audio: !1
					});
					i(n), t.current != null && (t.current.srcObject = n, await t.current.play());
				} else o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Camera API not available"])));
			} catch (e) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error accessing camera: ", ""])), e);
			}
		}, p = function() {
			a != null && (a.getTracks().forEach(function(e) {
				return e.stop();
			}), i(null), t.current != null && (t.current.srcObject = null));
		};
		g(function() {
			var e = t.current, r = n.current, i, l;
			r != null ? (l = new (o("WAWebVoipWebWasmSampleVideoWebGL")).RGB24Renderer(r), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: RGB24 format renderer created"])))) : o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Failed to create RGB24 format renderer"])));
			var s = document.createElement("canvas");
			if (r != null && (s.width = r.width, s.height = r.height, i = s.getContext("2d"), i == null)) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Failed to create video canvas context"])));
				return;
			}
			var u, p = function() {
				if (e != null && r != null && e.videoWidth > 0 && e.videoHeight > 0) {
					var t;
					r.width = e.videoWidth, r.height = e.videoHeight, i.drawImage(e, 0, 0, r.width, r.height);
					var n = i.getImageData(0, 0, r.width, r.height), o = n.data, a = f(o, r.width, r.height);
					(t = l) == null || t.render(a, r.width, r.height, 0, 3);
				}
				u = window.requestAnimationFrame(p);
			};
			return a != null && e != null && (e.onloadedmetadata = function() {
				u = window.requestAnimationFrame(p);
			}), function() {
				window.cancelAnimationFrame(u);
			};
		}, [a]);
		var f = function(t, n, r) {
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
					onClick: l,
					disabled: a != null,
					children: s._(
						/*BTDS*/
						""
					)
				}), _.jsx("button", {
					onClick: p,
					disabled: a == null,
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
				ref: n,
				style: { border: "2px solid green" },
				width: 640,
				height: 480
			})
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

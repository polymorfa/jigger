__d("WAWebVideoAvatarContent.react", [
	"WAWebDetailImage.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useState, p = {
		media: {
			display: "x1lliihq",
			width: "xh8yej3",
			height: "x5yr21d",
			objectFit: "xl1xv1r",
			$$css: !0
		},
		circle: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		squircle: {
			clipPath: "x1f2iure",
			$$css: !0
		}
	};
	function _(e) {
		return e === o("WAWebDetailImage.react").DetailImageShape.Square ? null : e === o("WAWebDetailImage.react").DetailImageShape.Squircle ? p.squircle : p.circle;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(18), a = t.alt, i = t.imageUrl, l = t.onLoad, s = t.shape, c = t.videoUrl, d = m(null), f = d[0], g = d[1], h = f === c, y;
		n[0] !== c ? (y = function() {
			g(c);
		}, n[0] = c, n[1] = y) : y = n[1];
		var C = y, b;
		n[2] !== l ? (b = function() {
			l == null || l();
		}, n[2] = l, n[3] = b) : b = n[3];
		var v = b, S, R;
		if (n[4] !== a || n[5] !== v || n[6] !== i || n[7] !== s || n[8] !== h || n[9] !== c) {
			R = Symbol.for("react.early_return_sentinel");
			e: {
				var L = _(s);
				if (h || c === "") {
					if (i == null) {
						R = null;
						break e;
					}
					R = u.jsx("img", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.media, L), {
						alt: a != null ? a : "",
						draggable: !1,
						onLoad: v,
						src: i
					}));
					break e;
				}
				S = (e || (e = r("stylex"))).props(p.media, L);
			}
			n[4] = a, n[5] = v, n[6] = i, n[7] = s, n[8] = h, n[9] = c, n[10] = S, n[11] = R;
		} else S = n[10], R = n[11];
		if (R !== Symbol.for("react.early_return_sentinel")) return R;
		var E = i != null ? i : void 0, k;
		return n[12] !== C || n[13] !== v || n[14] !== S || n[15] !== E || n[16] !== c ? (k = u.jsx("video", babelHelpers.extends({}, S, {
			"aria-hidden": "true",
			autoPlay: !0,
			disablePictureInPicture: !0,
			loop: !0,
			muted: !0,
			onError: C,
			onLoadedData: v,
			playsInline: !0,
			poster: E,
			src: c
		})), n[12] = C, n[13] = v, n[14] = S, n[15] = E, n[16] = c, n[17] = k) : k = n[17], k;
	}
	l.default = f;
}), 98);

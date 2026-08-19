__d("WAWebVideoAvatarContent.react", [
	"WAWebDetailImage.react",
	"react",
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
		var n = t.alt, o = t.imageUrl, a = t.onLoad, i = t.shape, l = t.videoUrl, s = m(null), c = s[0], f = s[1], g = c === l, h = d(function() {
			f(l);
		}, [l]), y = d(function() {
			a == null || a();
		}, [a]), C = _(i);
		return g || l === "" ? o == null ? null : u.jsx("img", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.media, C), {
			alt: n != null ? n : "",
			draggable: !1,
			onLoad: y,
			src: o
		})) : u.jsx("video", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.media, C), {
			"aria-hidden": "true",
			autoPlay: !0,
			disablePictureInPicture: !0,
			loop: !0,
			muted: !0,
			onError: h,
			onLoadedData: y,
			playsInline: !0,
			poster: o != null ? o : void 0,
			src: l
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);

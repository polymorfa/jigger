__d("WAWebVerificationWebcam.react", [
	"fbt",
	"WAWebVideo.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"react",
	"useWAWebInterval",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = 200;
	function _(e) {
		var t = e.disposeStream, n = e.onCapture, a = e.stream, i = m(!1), l = m(null), c = m(null), _ = function() {
			var e = l.current;
			if (e != null) {
				var t = e.getVideoDimensions();
				if (t != null) {
					var r = document.createElement("canvas");
					r.width = t.width / 2, r.height = t.height / 2;
					var o = r.getContext("2d");
					if (o) {
						e.drawFrameToContext(o, r.width / 2, r.height / 2, r.width, r.height, 0, 0, r.width, r.height);
						var a = o.getImageData(0, 0, r.width, r.height);
						n(a);
					}
				}
			}
		}, f = r("useWAWebInterval")(_, p), g = f[0];
		d(function() {
			return function() {
				a && (t == null || t());
			};
		}, []);
		var h = function() {
			var e, t = (e = l.current) == null ? void 0 : e.getVideoElementDimensions(), n = c.current;
			if (!(!t || !n)) {
				var r = t.height, o = t.width, a = o / 3, i = a, s = (o - a) / 2, u = (r - i) / 2;
				n.style.width = a + "px", n.style.height = i + "px", n.style.margin = u + "px " + s + "px";
			}
		}, y = function() {
			i.current !== !0 && (h(), g());
		};
		o("useWAWebListener").useListener(window, "resize", h);
		var C = null;
		return e.stream && (C = u.jsxs("div", {
			className: "x1n2onr6 xh8yej3 xmgb6t1",
			children: [
				u.jsx("div", {
					className: "xpk2tj9 x1bndym7",
					children: u.jsx(r("WAWebVideo.react"), {
						autoPlay: !0,
						ref: l,
						onPlaying: y,
						srcObject: e.stream,
						width: "100%"
					})
				}),
				u.jsx("div", {
					className: "x10l6tqk x13vifvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vrjhu8",
					ref: c
				}),
				u.jsx("div", {
					className: "x10l6tqk x1eu8d0j xo2ifbc",
					children: u.jsx(r("WDSButton.react"), {
						variant: "borderless",
						size: "small",
						Icon: r("WDSIconIcClose.react"),
						onPress: e.onClose,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		})), C;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

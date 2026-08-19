__d("WAWebLottieWrapper.react", [
	"WAWebFlex.react",
	"WAWebLottieAnimationLoadable",
	"WAWebStickerLikeMsgPlaceholder.react",
	"WAWebUseForcePlaySync",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebIntersection",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = 3;
	function f(t) {
		var n, a = m(null), i = (n = t.maxLoopCount) != null ? n : _, l = m(i), s = m(!1), c = t.forcePlay === !0, f = o("WAWebUseForcePlaySync").useForcePlaySync(c, a, s), g = r("useWAWebIntersection")({
			root: null,
			rootMargin: "190px",
			threshold: 0
		}), h = g[0], y = g[1].isIntersecting, C = r("useWAWebIntersection")({
			root: null,
			rootMargin: "190px",
			threshold: .99
		}), b = C[0], v = C[1].isIntersecting, S = r("useMergeRefs")(h, b), R = p(y), L = R[0], E = R[1];
		y && !L && E(!0);
		var k = function() {
			return l.current = i;
		}, I = function() {
			var e, t;
			(e = a.current) == null || e.stop(), (t = a.current) == null || t.setLoop(!1), s.current = !1;
		}, T = function() {
			var e;
			f.current || ((e = a.current) == null || e.removeOnLoopCompleteHandler(), I());
		}, D = function() {
			var e;
			f.current || (e = a.current) == null || e.addOnLoopCompleteHandler(T);
		}, x = function() {
			if (!f.current) {
				var e = l.current - 1;
				if (e !== 0) {
					l.current = e;
					return;
				}
				T(), k();
			}
		}, $ = function(t) {
			var e, n, r;
			if ((e = a.current) == null || e.removeOnLoopCompleteHandler(), t.withLoopCount) {
				var o, i;
				(o = a.current) == null || o.stop(), k(), (i = a.current) == null || i.addOnLoopCompleteHandler(x);
			}
			s.current = !0, (n = a.current) == null || n.setLoop(!0), (r = a.current) == null || r.play();
		}, P = function() {
			var e, t;
			f.current || ((e = a.current) == null || e.removeOnLoopCompleteHandler(), (t = a.current) == null || t.addOnLoopCompleteHandler(T), k());
		}, N = function() {
			var e;
			(e = a.current) == null || e.removeOnLoopCompleteHandler(), I(), k();
		}, M = function() {
			var e = document.visibilityState === "visible";
			v && e ? $({ withLoopCount: !f.current }) : s.current && !f.current && N();
		};
		o("useWAWebListener").useListener(document, "visibilitychange", M), d(function() {
			v ? $({ withLoopCount: !f.current }) : s.current && P();
		}, [v]);
		var w = m(c);
		return d(function() {
			var e = w.current;
			w.current = c, e && !c && v && $({ withLoopCount: !0 });
		}, [c]), u.jsx("div", {
			className: "x78zum5 xl56j7k x5yr21d",
			onMouseEnter: $,
			onMouseLeave: D,
			ref: S,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				align: "center",
				xstyle: t.lottieWrapperXStyle,
				testid: "lottie-animated-emoji-container",
				children: L && u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
					autoplay: v,
					loop: t.maxLoopCount === 1 ? !1 : i,
					ref: a,
					xstyle: t.lottieSVGContainerXStyle,
					wrapperXstyle: t.lottieSVGContainerWrapperXStyle,
					path: t.path,
					data: t.data,
					fallback: u.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { className: (e || (e = r("stylex")))(t.placeholderContainerXStyle) }),
					placeholder: u.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { className: (e || (e = r("stylex")))(t.placeholderContainerXStyle) })
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = f;
	l.default = g;
}), 98);

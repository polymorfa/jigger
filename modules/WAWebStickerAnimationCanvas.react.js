__d("WAWebStickerAnimationCanvas.react", [
	"WALogger",
	"WAWebFileUtils",
	"WAWebStickerControlledAnimationCanvas.react",
	"WAWebWebpToAnimationFrames",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState;
	function p(t) {
		var n = t.blob, a = t.className, i = t.loopAnimation, l = t.maxLoops, s = t.onClick, c = t.renderPreview, p = t.startAnimation, _ = m(null), f = _[0], g = _[1];
		if (d(function() {
			o("WAWebFileUtils").blobToArrayBuffer(n).then(r("WAWebWebpToAnimationFrames")).then(function(e) {
				g(e);
			}).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["AnimationCanvas error: ", ""])), t);
			});
		}, []), !f) return c();
		var h = f.frames, y = f.height, C = f.width;
		return u.jsx(r("WAWebStickerControlledAnimationCanvas.react"), {
			className: a,
			width: C,
			height: y,
			animationFrames: h,
			startAnimation: !!(i || p),
			maxLoops: l,
			onClick: s
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

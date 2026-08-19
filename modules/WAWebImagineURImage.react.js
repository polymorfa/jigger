__d("WAWebImagineURImage.react", [
	"fbt",
	"WAWebImagineImageViewerModalLoadable",
	"WAWebImg.react",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(12), n = e.mediaUrl, a = m(null), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			return a.current;
		}, t[0] = i) : i = t[0];
		var l = i, c;
		t[1] !== n ? (c = function() {
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebImagineImageViewerModalLoadable").WAWebImagineImageViewerModalLoadable, {
				mediaUrl: n,
				getZoomNode: l
			}));
		}, t[1] = n, t[2] = c) : c = t[2];
		var d = c, p = r("useWAWebStaticButtonA11y")(d), _ = p[0], f = p[1], g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1i282gy xx9ypkp xd15eu0 x11ecxm0 x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x1ypdohk" }, t[3] = g) : g = t[3];
		var h, y;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		).toString(), y = "x1lliihq xh8yej3 xt7dq6l", t[4] = h, t[5] = y) : (h = t[4], y = t[5]);
		var C;
		t[6] !== n ? (C = u.jsx(r("WAWebImg.react"), {
			ref: a,
			src: n,
			alt: h,
			className: y,
			testid: "meta_ai_chat_imagine_image"
		}), t[6] = n, t[7] = C) : C = t[7];
		var b;
		return t[8] !== f || t[9] !== _ || t[10] !== C ? (b = u.jsx("div", babelHelpers.extends({ ref: _ }, f, g, {
			"data-testid": "meta_ai_chat_imagine_image_button",
			children: C
		})), t[8] = f, t[9] = _, t[10] = C, t[11] = b) : b = t[11], b;
	}
	l.default = p;
}), 226);

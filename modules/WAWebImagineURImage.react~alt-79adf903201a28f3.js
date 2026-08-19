__d("WAWebImagineURImage.react", [
	"fbt",
	"WAWebImagineImageViewerModalLoadable",
	"WAWebImg.react",
	"WAWebModalManager",
	"react",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = e.mediaUrl, n = m(null), a = d(function() {
			return n.current;
		}, []), i = d(function() {
			o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebImagineImageViewerModalLoadable").WAWebImagineImageViewerModalLoadable, {
				mediaUrl: t,
				getZoomNode: a
			}));
		}, [t, a]), l = r("useWAWebStaticButtonA11y")(i), c = l[0], p = l[1];
		return u.jsx("div", babelHelpers.extends({ ref: c }, p, {
			className: "x1i282gy xx9ypkp xd15eu0 x11ecxm0 x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x1ypdohk",
			"data-testid": "meta_ai_chat_imagine_image_button",
			children: u.jsx(r("WAWebImg.react"), {
				ref: n,
				src: t,
				alt: s._(
					/*BTDS*/
					""
				).toString(),
				className: "x1lliihq xh8yej3 xt7dq6l",
				testid: "meta_ai_chat_imagine_image"
			})
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);

__d("WAWebMediaEditorFilmstripAttachMediaThumb.react", [
	"fbt",
	"WAWebAudioFileIcon.react",
	"WAWebClickable.react",
	"WAWebDocumentFileIcon",
	"WAWebKeyboardIsKeyActivation",
	"WAWebMediaEditorFilmstripThumbAriaLabel",
	"WAWebMimeTypes",
	"WAWebMsgType",
	"WAWebStateUtils",
	"WAWebXAltIcon.react",
	"react",
	"useMergeRefs",
	"useWAWebHover",
	"useWAWebIsKeyboardUser",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		closeButton: {
			position: "x10l6tqk",
			top: "xnfr1j",
			insetInlineEnd: "x1h1655f",
			left: null,
			right: null,
			zIndex: "x16uhe5s",
			color: "x1u01il4",
			opacity: "xg01cxk",
			$$css: !0
		},
		closeButtonVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.previewUrl;
		return c.jsx("div", {
			className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf",
			children: c.jsx("img", {
				className: "xh8yej3 x5yr21d xl1xv1r x47corl",
				src: t,
				alt: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n = e.attachMedia, a = o("useWAWebModelValues").useModelValues(n, [
			"mimetype",
			"preview",
			"type",
			"fullPreview",
			"fullPreviewSize",
			"documentPageCount",
			"fileExt"
		]);
		if (a.type === o("WAWebMsgType").MSG_TYPE.IMAGE) return c.jsx(g, { previewUrl: a.preview });
		if (a.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
			var i = "data:image/jpeg;base64," + a.preview;
			return c.jsx(g, { previewUrl: i });
		} else if (o("WAWebMimeTypes").previewType(a.mimetype) === "pdf") {
			var l = a.fullPreview && a.fullPreviewSize && a.documentPageCount != null && a.documentPageCount > 0;
			if (l) return c.jsx(g, { previewUrl: a.fullPreview });
		}
		return a.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? c.jsx("div", {
			className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf",
			children: c.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {})
		}) : c.jsx("div", {
			className: "x1n2onr6 x13vifvy x1o0tod xhtitgo xvni27 xdd8jsf xiy17q3 x1lvsgvq x1eerg3b x78zum5 xl56j7k x6s0dn4",
			children: c.jsx(r("WAWebDocumentFileIcon"), {
				width: 26,
				mimeType: a.mimetype,
				ext: (t = a.fileExt) != null ? t : ""
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.attachMedia, l = a.index, u = a.onClick, d = a.onClose, g = a.totalCount, y = o("useWAWebModelValues").useModelValues(i, ["originalFilename"]), C = y.originalFilename, b = r("useWAWebIsKeyboardUser")(), v = b.isKeyboardUser, S = p(null), R = o("useWAWebHover").useWAWebHover(S), L = r("useMergeRefs")(n, S), E = _(!1), k = E[0], I = E[1], T = function() {
			return I(!0);
		}, D = m(function(e) {
			S.current != null && e.relatedTarget instanceof Node && S.current.contains(e.relatedTarget) || I(!1);
		}, []), x = R || v && k, $ = function(t) {
			u(o("WAWebStateUtils").unproxy(i), t);
		}, P = function(t) {
			t.target !== t.currentTarget && r("WAWebKeyboardIsKeyActivation")(t) && t.stopPropagation();
		}, N = function(t) {
			t.target === t.currentTarget && r("WAWebKeyboardIsKeyActivation")(t) && (t.stopPropagation(), t.preventDefault(), $(t));
		}, M = function(t) {
			t.stopPropagation(), t.preventDefault(), d(o("WAWebStateUtils").unproxy(i), t);
		};
		return c.jsxs("div", babelHelpers.extends({
			tabIndex: 0,
			role: "tab"
		}, {
			0: { className: "x1n2onr6 xupqr0c x9f619 x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1xmf6yo xyorhqc xpcyujq xf6vk7d x6ikm8r x10wlt62 xxymvpz x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xd2d216 x18rkx93 x1xqxb9d x1muwwg7 x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x1277o0a" },
			1: { className: "x1n2onr6 xupqr0c x9f619 x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x6ikm8r x10wlt62 xxymvpz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x1277o0a x1k70j0n x1e56ztr x7phf20 x1p8j9ns xmn4e3e x1if355w x2x41l1 xct1zlm x1whkhu0 x3emv5x x1ydeqjr xyg86qh" }
		}[!!a.active << 0], {
			onClick: $,
			onKeyDown: P,
			onKeyPress: N,
			onFocus: T,
			onBlur: D,
			"aria-label": o("WAWebMediaEditorFilmstripThumbAriaLabel").getThumbAriaLabel({
				filename: C,
				index: l,
				isGif: i.isGif,
				totalCount: g,
				type: i.type
			}),
			"aria-selected": a.active,
			"aria-posinset": l,
			"aria-setsize": g,
			ref: L,
			children: [
				c.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 xg01cxk x1vq37if x47corl x1pb5qga" },
					1: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 x1vq37if x47corl x1pb5qga x1hc1fzr" }
				}[!!x << 0])),
				c.jsx(o("WAWebClickable.react").Clickable, {
					onClick: M,
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					xstyle: [f.closeButton, x && f.closeButtonVisible],
					children: c.jsx(o("WAWebXAltIcon.react").XAltIcon, {})
				}),
				c.jsx("div", {
					className: "x6ikm8r x10wlt62 x1280gxy",
					children: c.jsx(h, { attachMedia: i })
				})
			]
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);

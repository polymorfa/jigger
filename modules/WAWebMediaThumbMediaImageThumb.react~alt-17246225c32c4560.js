__d("WAWebMediaThumbMediaImageThumb.react", [
	"WAWebMediaData",
	"WAWebMediaOpaqueData",
	"WAWebMediaTypes",
	"WAWebMediaUrlProvider",
	"WAWebUnstyledButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(e) {
		var t = e.ref, n = e.children, o = e.className, a = e.onClick, i = e.onDragStart, l = e.shade, s = e.tabIndex, c = e.testid, d = e.url, m = l === !0 ? u.jsx("div", { className: "xtc4mwu x1ey2m1c x1qx5ct2 xu96u03 x47corl x10l6tqk xh8yej3" }) : null, p = d != null && d !== "" ? { backgroundImage: "url(" + d + ")" } : null, _ = c != null ? "media-canvas-img " + c : "media-canvas-img";
		return u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: a,
			tabIndex: s != null ? s : 0,
			children: u.jsxs("div", {
				ref: t,
				style: p,
				className: o,
				"data-testid": _,
				onDragStart: i,
				draggable: i == null ? null : !0,
				children: [n, m]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.ref, n = e.isRefreshed, o = n === void 0 ? !1 : n, a = e.mediaData, i = e.onClick, l = e.onDragStart, s = e.shade, d = e.shouldApplyBlur, m = e.tabIndex, p = e.url, _ = !!d;
		return u.jsx(c, {
			ref: t,
			tabIndex: m != null ? m : 0,
			onClick: i,
			onDragStart: l,
			className: {
				0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
				2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
				1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
				3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x"
			}[!!o << 1 | !!_ << 0],
			shade: s,
			url: a.preview instanceof r("WAWebMediaOpaqueData") ? a.preview.url() : null,
			children: p != null ? u.jsx("div", {
				className: {
					0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
					1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm"
				}[!!o << 0],
				style: { backgroundImage: "url(" + p + ")" }
			}) : null
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.ref, n = e.isRefreshed, r = e.mediaData, o = e.onClick, a = e.onDragStart, i = e.shade, l = e.tabIndex;
		return r.preview != null ? u.jsx(d, {
			tabIndex: l,
			ref: t,
			onClick: o,
			onDragStart: a,
			mediaData: r,
			isRefreshed: n
		}) : u.jsx(c, {
			ref: t,
			tabIndex: l,
			onClick: o,
			onDragStart: a,
			className: {
				0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
				1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm"
			}[(n === !0) << 0],
			shade: i,
			isRefreshed: n
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.ref, n = e.downloadMedia, a = e.msg, i = e.onClick, l = e.onDragStart, s = e.preferPreview, p = e.tabIndex, _ = p === void 0 ? -1 : p, f = e.isRefreshed, g = f === void 0 ? !1 : f, h = a.mediaData, y = {
			onClick: i,
			onDragStart: l,
			ref: t,
			tabIndex: _
		};
		switch (h.type) {
			case r("WAWebMediaData").TYPE.AUDIO: return u.jsx(c, babelHelpers.extends({}, y, {
				className: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm x1epgcli",
				testid: "media-canvas-audio-thumb"
			}));
			case r("WAWebMediaData").TYPE.VIDEO: {
				var C, b = h.fullPreviewData == null && h.preview == null, v = (C = h.fullPreviewData) != null ? C : h.preview, S = h.isGif && !h.preview;
				return u.jsx(c, babelHelpers.extends({}, y, {
					className: {
						0: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm",
						4: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm",
						2: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x",
						6: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x",
						1: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xihcpt0",
						5: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xihcpt0",
						3: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm xhe8x8x xihcpt0",
						7: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm xhe8x8x xihcpt0"
					}[!!g << 2 | !!b << 1 | !!S << 0],
					testid: S ? "media-canvas-video-thumb" : null,
					shade: !0,
					url: v instanceof r("WAWebMediaOpaqueData") ? v.url() : null
				}));
			}
			case r("WAWebMediaData").TYPE.IMAGE: {
				var R = h.preview != null && h.mediaStage === o("WAWebMediaTypes").MediaDataStage.NEED_POKE;
				return s === !0 ? u.jsx(m, babelHelpers.extends({}, y, {
					mediaData: h,
					shade: a.star,
					shouldApplyBlur: R,
					isRefreshed: g
				})) : u.jsx(r("WAWebMediaUrlProvider"), {
					mediaData: h,
					placeholderRenderer: function() {
						return u.jsx(m, babelHelpers.extends({}, y, {
							mediaData: h,
							shade: a.star,
							shouldApplyBlur: R,
							isRefreshed: g
						}));
					},
					renderProgressively: !0,
					downloadMedia: n,
					children: function(t) {
						return u.jsx(d, babelHelpers.extends({}, y, {
							mediaData: h,
							shade: a.star,
							shouldApplyBlur: R,
							url: t,
							isRefreshed: g
						}));
					}
				});
			}
			default: return u.jsx(c, babelHelpers.extends({}, y, { shade: a.star }));
		}
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n, r = t.ref, o = babelHelpers.objectWithoutPropertiesLoose(t, e), a = (n = o.isRefreshed) != null ? n : !1;
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy x1djylrx xh8yej3 x1vjfegm" },
			1: { className: "x1xsqp64 x18d0r48 x9f619 x1ypdohk x5yr21d xu96u03 x10l6tqk x13vifvy xh8yej3 x1vjfegm" }
		}[!!a << 0], { children: u.jsx(p, babelHelpers.extends({ ref: r }, o)) }));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);

__d("WAWebImagineImageViewerModal.react", [
	"fbt",
	"WALogger",
	"WAWebFbtCommon",
	"WAWebImg.react",
	"WAWebModalManager",
	"WAWebObjectFit.react",
	"WAWebUimUie.react",
	"WAWebVelocityAnimate",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"getErrorSafe",
	"react",
	"useWAWebOnOutsideClick",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useLayoutEffect, f = p.useRef, g = p.useState, h = 500, y = 200, C = [
		.1,
		.82,
		.25,
		1
	], b = "x18re5ia-B";
	function v(t) {
		var n = t.getZoomNode, a = t.mediaUrl, i = g(null), l = i[0], d = i[1], p = g(!1), b = p[0], v = p[1], R = f(null), L = f(!1), E = f(!1);
		_(function() {
			if (!(n == null || l == null || E.current)) {
				var t = R.current, a = n();
				if (!(t == null || a == null || !(a instanceof HTMLElement))) {
					E.current = !0;
					var i = S(a, t), s = i.left, u = i.scale, c = i.top;
					t.style.opacity = "0", r("WAWebVelocityAnimate")(t, {
						opacity: [1, 0],
						translateX: [0, s],
						translateY: [0, c],
						scale: [1, u]
					}, {
						duration: h,
						easing: C
					}).catch(function(n) {
						t.style.opacity = "", o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["imagine image viewer open animation failed"]))).catching(r("getErrorSafe")(n)).sendLogs("imagine-image-viewer-open-animate-failed");
					});
				}
			}
		}, [l, n]);
		var k = r("useWAWebStableCallback")(function() {
			if (!L.current) {
				L.current = !0;
				var e = R.current, t = n != null ? n() : null;
				if (t == null || e == null || !(t instanceof HTMLElement)) {
					o("WAWebModalManager").ModalManager.closeMedia();
					return;
				}
				var a = S(t, e), i = a.left, l = a.scale, s = a.top;
				r("WAWebVelocityAnimate")(e, {
					translateX: [i, 0],
					translateY: [s, 0],
					scale: [l, 1]
				}, {
					duration: y,
					easing: C
				}).then(function() {
					o("WAWebModalManager").ModalManager.closeMedia();
				}).catch(function(e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["imagine image viewer close animation failed"]))).catching(r("getErrorSafe")(e)).sendLogs("imagine-image-viewer-close-animate-failed"), o("WAWebModalManager").ModalManager.closeMedia();
				});
			}
		});
		o("useWAWebOnOutsideClick").useOnOutsideClick(R, k);
		var I = function(t) {
			var e = t.currentTarget;
			d({
				width: e.naturalWidth,
				height: e.naturalHeight
			});
		}, T = function() {
			v(!0), o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["imagine image viewer failed to load image"]))).sendLogs("imagine-image-viewer-load-failed");
		}, D = function() {
			return m.jsx("span", {
				className: "xhslqc4",
				children: s._(
					/*BTDS*/
					""
				)
			});
		};
		return m.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ImagineImageViewer",
			escapable: !0,
			requestDismiss: k,
			children: m.jsxs("div", {
				className: "x9f619 xixxii4 x13vifvy x1o0tod xh8yej3 x5yr21d x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g xu90me3",
				role: "dialog",
				"aria-modal": !0,
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				"data-testid": "meta_ai_chat_imagine_viewer_wrapper",
				children: [m.jsx("div", {
					className: "x78zum5 x3psx0u x15zctf7 x6s0dn4 xng8ra x1x5flf6",
					children: m.jsx(r("WDSButton.react"), {
						variant: "borderless",
						type: "default",
						size: "medium",
						onPress: k,
						Icon: r("WDSIconIcClose.react"),
						testid: "meta_ai_chat_imagine_viewer_close_button",
						"aria-label": r("WAWebFbtCommon")("Close")
					})
				}), m.jsx("div", {
					className: "x9f619 x1n2onr6 x78zum5 xc8qplx x6s0dn4 xl56j7k x4t50tc xeuugli x1a8lsjc",
					children: b ? D() : m.jsx(r("WAWebObjectFit.react"), {
						type: "scaleDown",
						size: l,
						children: m.jsx("div", {
							className: "xh8yej3 x5yr21d xyyilfv",
							ref: R,
							children: m.jsx(r("WAWebImg.react"), {
								src: a,
								alt: s._(
									/*BTDS*/
									""
								).toString(),
								onLoad: I,
								onError: T,
								className: "x1lliihq xh8yej3 x5yr21d",
								testid: "meta_ai_chat_imagine_viewer_image"
							})
						})
					})
				})]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		var n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
		return {
			top: n.top - r.top,
			left: n.left - r.left,
			scale: t.clientWidth === 0 ? 1 : e.clientWidth / t.clientWidth
		};
	}
	l.default = v;
}), 226);

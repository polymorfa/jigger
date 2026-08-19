__d("WAWebCometLiteSelfPreview.react", [
	"fbt",
	"WALogger",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"react",
	"useWAWebVoipCanvasLifecycle"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = 64, g = { selfPreview: {
		position: "x10l6tqk",
		top: "x9awhp5",
		insetInlineEnd: "x1sedc12",
		left: null,
		right: null,
		width: "x1dz1jew",
		height: "x1b51vyi",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		backgroundColor: "x1od0jb8",
		$$css: !0
	} };
	function h(t) {
		var n = t.isVideoMuted, a = t.selfWid, i = _(null), l = r("useWAWebVoipCanvasLifecycle")(i, { isPortalMode: !1 }, {
			jid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
			mirror: !0
		}), c = l.canvasCallbackRef, m = l.isCanvasRegistered;
		return p(function() {
			var e = i.current;
			e != null && m && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.setCoverFit(e, !0);
		}, [m]), p(function() {
			m && o("WAWebVoipStackInterface").getVoipStackInterface().then(async function(t) {
				if ((t == null ? void 0 : t.type) === "web") {
					var n = await t.startVideoPreview("static-call-id", "self-preview-jid");
					n !== 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: lite: startVideoPreview failed ", ""])), n);
				}
			}).catch(function(e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: lite: startVideoPreview error: ", ""])), e);
			});
		}, [m]), d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: g.selfPreview,
			testid: "wa-web-lite-in-call-self-preview",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: n ? a != null && d.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a,
				size: f
			}) : d.jsx("canvas", {
				ref: c,
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d"
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

__d("MAWSecureGroupedImageAttachment.react", [
	"CometPhotoLayoutMediaOverlay.react",
	"CometPlaceholder.react",
	"FDSImageCover.react",
	"InteractionTracingMetrics",
	"MAWGetAttachmentThumbnailBlob",
	"MAWSecureImageAttachmentContent.react",
	"MWV2ImageGrid.react",
	"MWXPressable.react",
	"gkx",
	"hero-tracing-placeholder",
	"react",
	"useGetMediaGroupStyles",
	"useMWV2MediaViewerShowDialog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect;
	function p(e) {
		var t = e.attachment, n = e.mediaRenderQpl, a = c(function() {
			n == null || n.endFailAfterDelay("grid-load-image-error");
		}, [n]), i = c(function() {
			n == null || n.endSuccessAfterDelay();
		}, [n]), l = r("useMWV2MediaViewerShowDialog")(!1), u = l[0], d = l[1], m = c(function() {
			return u({ attachment: t }, function() {});
		}, [u, t]), p = o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense(t, "MAWSecureGroupedImageGridItem", n);
		if (p == null) return n == null || n.endFailAfterDelay("empty_preview_url"), null;
		var _ = o("MWV2ImageGrid.react").getMWV2ImageGridItemLabel(t);
		return s.jsx(r("MWXPressable.react"), {
			"aria-label": _,
			onHoverIn: d,
			onPress: m,
			overlayRadius: "compact",
			xstyle: function() {
				return [o("MWV2ImageGrid.react").MWV2ImageGridItemStyles.pressable];
			},
			children: s.jsx(r("FDSImageCover.react"), {
				alt: _,
				onError: a,
				onLoad: i,
				src: p
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return s.jsx("div", { className: "x1kpc9vs x5yr21d xh8yej3" });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.mediaGroupInfo, i = e.mediaRenderQpl, l = e.outgoing, u = a.groupSize, c = a.messagesAndAttachmentsShownInGroup, d = a.tileSize, m = Math.max(u - d, 0), f = c.length - 1;
		return s.jsx(o("MWV2ImageGrid.react").MWV2ImageGridContainer, {
			connectBottom: t,
			connectTop: n,
			outgoing: l,
			testid: void 0,
			children: c.map(function(e, t) {
				var n = e.attachment, o = n == null ? s.jsx(_, {}) : s.jsx(r("CometPlaceholder.react"), {
					fallback: s.jsx(_, {}),
					name: "MAWSecureGroupedImageGridItem.Suspense",
					children: s.jsx(p, {
						attachment: n,
						mediaRenderQpl: i
					})
				}), a = n != null ? t + "-" + n.attachmentFbid : "placeholder-" + t, l = t === f && m > 0;
				return l ? s.jsxs("div", {
					className: "x5yr21d x1n2onr6 xh8yej3",
					children: [o, s.jsx(r("CometPhotoLayoutMediaOverlay.react"), { numItemsNotShown: m })]
				}, a) : s.jsx(s.Fragment, { children: o }, a);
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.mediaGroupInfo, n = e.mediaRenderQpl, a = e.outgoing, i = t.messagesAndAttachmentsShownInGroup, l = t.tileSize, u = o("useGetMediaGroupStyles").useGetMediaGroupStyles(a, l), c = u.containerStyles, d = u.coordinations, m = u.imageSize, p = u.wrapperStyles;
		return s.jsx("div", {
			className: c,
			"data-testid": void 0,
			children: i.map(function(e, i) {
				var u = e.attachment, c = e.message;
				return s.jsx("div", {
					className: p,
					style: babelHelpers.extends({ zIndex: l - i }, d[i]),
					children: s.jsx(r("MAWSecureImageAttachmentContent.react"), {
						attachmentsFromGroupToRetry: t.attachmentsToRetryDownload,
						connectBottom: !1,
						connectTop: !1,
						dbAttachment: u,
						getPreviewUrl: o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense,
						isGroupedImage: !0,
						mediaRenderQpl: n,
						message: c,
						outgoing: a,
						previewHeight: m,
						previewWidth: m
					})
				}, i);
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.mediaGroupInfo, i = e.mediaRenderQpl, l = e.outgoing, u = a.messagesAndAttachmentsShownInGroup, c = a.isGridLayout, p = d(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
		return m(function() {
			var e, t = r("gkx")("12935") ? (e = p.current) == null ? void 0 : e.interactionUUID : null;
			i == null || i.addPoint("render-grouped-image-attachment"), i == null || i.addAnnotations({ bool: {
				is_grid_layout: c,
				is_grouped_image: !0
			} });
			var n = u.length;
			t != null && (r("InteractionTracingMetrics").addMarkerPoint(t, "render-grouped-image-attachment", "AppTiming"), r("InteractionTracingMetrics").addMetadata(t, "image_count", n));
		}, [
			p,
			i,
			u.length,
			c
		]), c ? s.jsx(f, {
			connectBottom: t,
			connectTop: n,
			mediaGroupInfo: a,
			mediaRenderQpl: i,
			outgoing: l
		}) : s.jsx(g, {
			mediaGroupInfo: a,
			mediaRenderQpl: i,
			outgoing: l
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);

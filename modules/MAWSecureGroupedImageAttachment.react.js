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
	"react-compiler-runtime",
	"useGetMediaGroupStyles",
	"useMWV2MediaViewerShowDialog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect;
	function p(e) {
		var t = o("react-compiler-runtime").c(22), n = e.attachment, a = e.mediaRenderQpl, i;
		t[0] !== a ? (i = function() {
			a == null || a.endFailAfterDelay("grid-load-image-error");
		}, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] !== a ? (u = function() {
			a == null || a.endSuccessAfterDelay();
		}, t[2] = a, t[3] = u) : u = t[3];
		var c = u, d = r("useMWV2MediaViewerShowDialog")(!1), m = d[0], p = d[1], g;
		t[4] !== n || t[5] !== m ? (g = function() {
			return m({ attachment: n }, f);
		}, t[4] = n, t[5] = m, t[6] = g) : g = t[6];
		var h = g, y;
		t[7] !== n || t[8] !== a ? (y = o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense(n, "MAWSecureGroupedImageGridItem", a), t[7] = n, t[8] = a, t[9] = y) : y = t[9];
		var C = y;
		if (C == null) return a == null || a.endFailAfterDelay("empty_preview_url"), null;
		var b;
		t[10] !== n ? (b = o("MWV2ImageGrid.react").getMWV2ImageGridItemLabel(n), t[10] = n, t[11] = b) : b = t[11];
		var v = b, S;
		t[12] !== v || t[13] !== l || t[14] !== c || t[15] !== C ? (S = s.jsx(r("FDSImageCover.react"), {
			alt: v,
			onError: l,
			onLoad: c,
			src: C
		}), t[12] = v, t[13] = l, t[14] = c, t[15] = C, t[16] = S) : S = t[16];
		var R;
		return t[17] !== v || t[18] !== h || t[19] !== p || t[20] !== S ? (R = s.jsx(r("MWXPressable.react"), {
			"aria-label": v,
			onHoverIn: p,
			onPress: h,
			overlayRadius: "compact",
			xstyle: _,
			children: S
		}), t[17] = v, t[18] = h, t[19] = p, t[20] = S, t[21] = R) : R = t[21], R;
	}
	function _() {
		return [o("MWV2ImageGrid.react").MWV2ImageGridItemStyles.pressable];
	}
	function f() {}
	function g() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx("div", { className: "x1kpc9vs x5yr21d xh8yej3" }), e[0] = t) : t = e[0], t;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(14), n = e.connectBottom, a = e.connectTop, i = e.mediaGroupInfo, l = e.mediaRenderQpl, u = e.outgoing, c = i.groupSize, d = i.messagesAndAttachmentsShownInGroup, m = i.tileSize, _ = Math.max(c - m, 0), f = d.length - 1, h;
		if (t[0] !== f || t[1] !== l || t[2] !== d || t[3] !== _) {
			var y;
			t[5] !== f || t[6] !== l || t[7] !== _ ? (y = function(t, n) {
				var e = t.attachment, o = e == null ? s.jsx(g, {}) : s.jsx(r("CometPlaceholder.react"), {
					fallback: s.jsx(g, {}),
					name: "MAWSecureGroupedImageGridItem.Suspense",
					children: s.jsx(p, {
						attachment: e,
						mediaRenderQpl: l
					})
				}), a = e != null ? n + "-" + e.attachmentFbid : "placeholder-" + n, i = n === f && _ > 0;
				return i ? s.jsxs("div", {
					className: "x5yr21d x1n2onr6 xh8yej3",
					children: [o, s.jsx(r("CometPhotoLayoutMediaOverlay.react"), { numItemsNotShown: _ })]
				}, a) : s.jsx(s.Fragment, { children: o }, a);
			}, t[5] = f, t[6] = l, t[7] = _, t[8] = y) : y = t[8], h = d.map(y), t[0] = f, t[1] = l, t[2] = d, t[3] = _, t[4] = h;
		} else h = t[4];
		var C;
		return t[9] !== n || t[10] !== a || t[11] !== u || t[12] !== h ? (C = s.jsx(o("MWV2ImageGrid.react").MWV2ImageGridContainer, {
			connectBottom: n,
			connectTop: a,
			outgoing: u,
			testid: void 0,
			children: h
		}), t[9] = n, t[10] = a, t[11] = u, t[12] = h, t[13] = C) : C = t[13], C;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(20), n = e.mediaGroupInfo, a = e.mediaRenderQpl, i = e.outgoing, l = n.messagesAndAttachmentsShownInGroup, u = n.tileSize, c = o("useGetMediaGroupStyles").useGetMediaGroupStyles(i, u), d = c.containerStyles, m = c.coordinations, p = c.imageSize, _ = c.wrapperStyles, f;
		if (t[0] !== m || t[1] !== p || t[2] !== n.attachmentsToRetryDownload || t[3] !== a || t[4] !== l || t[5] !== i || t[6] !== u || t[7] !== _) {
			var g;
			t[9] !== m || t[10] !== p || t[11] !== n.attachmentsToRetryDownload || t[12] !== a || t[13] !== i || t[14] !== u || t[15] !== _ ? (g = function(t, l) {
				var e = t.attachment, c = t.message;
				return s.jsx("div", {
					className: _,
					style: babelHelpers.extends({ zIndex: u - l }, m[l]),
					children: s.jsx(r("MAWSecureImageAttachmentContent.react"), {
						attachmentsFromGroupToRetry: n.attachmentsToRetryDownload,
						connectBottom: !1,
						connectTop: !1,
						dbAttachment: e,
						getPreviewUrl: o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense,
						isGroupedImage: !0,
						mediaRenderQpl: a,
						message: c,
						outgoing: i,
						previewHeight: p,
						previewWidth: p
					})
				}, l);
			}, t[9] = m, t[10] = p, t[11] = n.attachmentsToRetryDownload, t[12] = a, t[13] = i, t[14] = u, t[15] = _, t[16] = g) : g = t[16], f = l.map(g), t[0] = m, t[1] = p, t[2] = n.attachmentsToRetryDownload, t[3] = a, t[4] = l, t[5] = i, t[6] = u, t[7] = _, t[8] = f;
		} else f = t[8];
		var h;
		return t[17] !== d || t[18] !== f ? (h = s.jsx("div", {
			className: d,
			"data-testid": void 0,
			children: f
		}), t[17] = d, t[18] = f, t[19] = h) : h = t[19], h;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(16), n = e.connectBottom, a = e.connectTop, i = e.mediaGroupInfo, l = e.mediaRenderQpl, u = e.outgoing, c = i.messagesAndAttachmentsShownInGroup, p = i.isGridLayout, _ = d(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), f, g;
		if (t[0] !== _ || t[1] !== p || t[2] !== l || t[3] !== c.length ? (f = function() {
			var e, t = r("gkx")("12935") ? (e = _.current) == null ? void 0 : e.interactionUUID : null;
			l == null || l.addPoint("render-grouped-image-attachment"), l == null || l.addAnnotations({ bool: {
				is_grid_layout: p,
				is_grouped_image: !0
			} });
			var n = c.length;
			t != null && (r("InteractionTracingMetrics").addMarkerPoint(t, "render-grouped-image-attachment", "AppTiming"), r("InteractionTracingMetrics").addMetadata(t, "image_count", n));
		}, g = [
			_,
			l,
			c.length,
			p
		], t[0] = _, t[1] = p, t[2] = l, t[3] = c.length, t[4] = f, t[5] = g) : (f = t[4], g = t[5]), m(f, g), p) {
			var C;
			return t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== l || t[10] !== u ? (C = s.jsx(h, {
				connectBottom: n,
				connectTop: a,
				mediaGroupInfo: i,
				mediaRenderQpl: l,
				outgoing: u
			}), t[6] = n, t[7] = a, t[8] = i, t[9] = l, t[10] = u, t[11] = C) : C = t[11], C;
		}
		var b;
		return t[12] !== i || t[13] !== l || t[14] !== u ? (b = s.jsx(y, {
			mediaGroupInfo: i,
			mediaRenderQpl: l,
			outgoing: u
		}), t[12] = i, t[13] = l, t[14] = u, t[15] = b) : b = t[15], b;
	}
	l.default = C;
}), 98);

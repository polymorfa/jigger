__d("MAWSecureXMAAttachmentContent.react", [
	"LSMediaUrlAttachment",
	"MAWAttachmentBlob.react",
	"MAWDownloadMediaInWorkerDeferred",
	"MWXMAAttachment.react",
	"react",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.dbAttachment, i = e.hasText, l = e.mediaRenderQpl, c = e.outgoing, d = r("useAsyncReStore")();
		return u(function() {
			a.hasMedia !== !0 && o("MAWDownloadMediaInWorkerDeferred").maybeDownloadMediaInWorker({
				attachment: a,
				dbPromise: d,
				interactionId: void 0,
				mediaRenderQpl: l,
				triggerUIView: "thread"
			});
		}, [
			a,
			l,
			d
		]), u(function() {
			l == null || l.addPoint("render-xma-attachment");
		}, [a.hasMedia, l]), s.jsx(r("MWXMAAttachment.react"), {
			attachment: a,
			connectBottom: t,
			connectTop: n,
			getFaviconUrlXMA: function(t, n, r, a) {
				if (a == null || a.addPoint("fetch_favicon_url_xma_start"), t.faviconUrl != null) {
					a == null || a.addPoint("fetch_favicon_url_xma_receiver_fetch");
					var e = o("LSMediaUrlAttachment").faviconUrl(t);
					return a == null || a.addPoint("fetch_favicon_url_xma_end", {
						bool: {
							has_favicon: !0,
							has_url: !!e
						},
						string: { fetch_by: "receiver_fetch" }
					}), e;
				}
				if (t.hasXmaFavicon === !0) {
					var i = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(t, "favicon", "MAWSecureXMAAttachmentContent - getFaviconUrlXMA - " + r, a);
					return a == null || a.addPoint("fetch_favicon_url_xma_end", {
						bool: {
							has_favicon: !0,
							has_url: !!i
						},
						string: { fetch_by: "maw_backend" }
					}), i;
				}
				a == null || a.addPoint("fetch_favicon_url_xma_end", {
					bool: { has_favicon: !1 },
					string: { fetch_by: "none" }
				});
			},
			getHeaderUrlXMA: function(t, n, r) {
				if (r == null || r.addPoint("fetch_header_url_xma_start"), t.headerImageUrl != null) {
					r == null || r.addPoint("fetch_header_url_xma_receiver_fetch");
					var e = o("LSMediaUrlAttachment").headerImageUrl(t);
					return r == null || r.addPoint("fetch_header_url_xma_end", {
						bool: {
							has_header_image: !0,
							has_url: !!e
						},
						string: { fetch_by: "receiver_fetch" }
					}), e;
				}
				if (t.hasXmaHeaderImage === !0) {
					var a = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(t, "header", "MAWSecureXMAAttachmentContent - getHeaderUrlXMA - " + n, r);
					return r == null || r.addPoint("fetch_header_url_xma_end", {
						bool: {
							has_header_image: !0,
							has_url: !!a
						},
						string: { fetch_by: "maw_backend" }
					}), a;
				}
				r == null || r.addPoint("fetch_header_url_xma_end", {
					bool: { has_header_image: !1 },
					string: { fetch_by: "none" }
				});
			},
			getPreviewUrlXMA: function(t, n, r, a) {
				if (a == null || a.addPoint("fetch_preview_url_xma_start"), t.previewUrl != null) {
					a == null || a.addPoint("fetch_preview_url_xma_receiver_fetch");
					var e = o("LSMediaUrlAttachment").previewUrl(t);
					return a == null || a.addPoint("fetch_preview_url_xma_end", {
						bool: {
							has_preview: !0,
							has_url: !!e
						},
						string: { fetch_by: "receiver_fetch" }
					}), e;
				}
				if (t.hasXmaPreview === !0) {
					var i = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(t, "preview", "MAWSecureXMAAttachmentContent - getPreviewUrlXMA - " + r, a);
					return a == null || a.addPoint("fetch_preview_url_xma_end", {
						bool: {
							has_preview: !0,
							has_url: !!i
						},
						string: { fetch_by: "maw_backend" }
					}), i;
				}
				a == null || a.addPoint("fetch_preview_url_xma_end", {
					bool: { has_preview: !1 },
					string: { fetch_by: "none" }
				});
			},
			hasText: i,
			mediaRenderQpl: l,
			outgoing: c
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

__d("MAWSecureXMAAttachmentContent.react", [
	"LSMediaUrlAttachment",
	"MAWAttachmentBlob.react",
	"MAWDownloadMediaInWorkerDeferred",
	"MWXMAAttachment.react",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.hasText, c = e.mediaRenderQpl, _ = e.outgoing, f = r("useAsyncReStore")(), g, h;
		t[0] !== i || t[1] !== f || t[2] !== c ? (g = function() {
			i.hasMedia !== !0 && o("MAWDownloadMediaInWorkerDeferred").maybeDownloadMediaInWorker({
				attachment: i,
				dbPromise: f,
				interactionId: void 0,
				mediaRenderQpl: c,
				triggerUIView: "thread"
			});
		}, h = [
			i,
			c,
			f
		], t[0] = i, t[1] = f, t[2] = c, t[3] = g, t[4] = h) : (g = t[3], h = t[4]), u(g, h);
		var y;
		t[5] !== c ? (y = function() {
			c == null || c.addPoint("render-xma-attachment");
		}, t[5] = c, t[6] = y) : y = t[6];
		var C;
		t[7] !== i.hasMedia || t[8] !== c ? (C = [i.hasMedia, c], t[7] = i.hasMedia, t[8] = c, t[9] = C) : C = t[9], u(y, C);
		var b;
		return t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== c || t[15] !== _ ? (b = s.jsx(r("MWXMAAttachment.react"), {
			attachment: i,
			connectBottom: n,
			connectTop: a,
			getFaviconUrlXMA: p,
			getHeaderUrlXMA: m,
			getPreviewUrlXMA: d,
			hasText: l,
			mediaRenderQpl: c,
			outgoing: _
		}), t[10] = n, t[11] = a, t[12] = i, t[13] = l, t[14] = c, t[15] = _, t[16] = b) : b = t[16], b;
	}
	function d(e, t, n, r) {
		if (r == null || r.addPoint("fetch_preview_url_xma_start"), e.previewUrl != null) {
			r == null || r.addPoint("fetch_preview_url_xma_receiver_fetch");
			var a = o("LSMediaUrlAttachment").previewUrl(e);
			return r == null || r.addPoint("fetch_preview_url_xma_end", {
				bool: {
					has_preview: !0,
					has_url: !!a
				},
				string: { fetch_by: "receiver_fetch" }
			}), a;
		}
		if (e.hasXmaPreview === !0) {
			var i = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(e, "preview", "MAWSecureXMAAttachmentContent - getPreviewUrlXMA - " + n, r);
			return r == null || r.addPoint("fetch_preview_url_xma_end", {
				bool: {
					has_preview: !0,
					has_url: !!i
				},
				string: { fetch_by: "maw_backend" }
			}), i;
		}
		r == null || r.addPoint("fetch_preview_url_xma_end", {
			bool: { has_preview: !1 },
			string: { fetch_by: "none" }
		});
	}
	function m(e, t, n) {
		if (n == null || n.addPoint("fetch_header_url_xma_start"), e.headerImageUrl != null) {
			n == null || n.addPoint("fetch_header_url_xma_receiver_fetch");
			var r = o("LSMediaUrlAttachment").headerImageUrl(e);
			return n == null || n.addPoint("fetch_header_url_xma_end", {
				bool: {
					has_header_image: !0,
					has_url: !!r
				},
				string: { fetch_by: "receiver_fetch" }
			}), r;
		}
		if (e.hasXmaHeaderImage === !0) {
			var a = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(e, "header", "MAWSecureXMAAttachmentContent - getHeaderUrlXMA - " + t, n);
			return n == null || n.addPoint("fetch_header_url_xma_end", {
				bool: {
					has_header_image: !0,
					has_url: !!a
				},
				string: { fetch_by: "maw_backend" }
			}), a;
		}
		n == null || n.addPoint("fetch_header_url_xma_end", {
			bool: { has_header_image: !1 },
			string: { fetch_by: "none" }
		});
	}
	function p(e, t, n, r) {
		if (r == null || r.addPoint("fetch_favicon_url_xma_start"), e.faviconUrl != null) {
			r == null || r.addPoint("fetch_favicon_url_xma_receiver_fetch");
			var a = o("LSMediaUrlAttachment").faviconUrl(e);
			return r == null || r.addPoint("fetch_favicon_url_xma_end", {
				bool: {
					has_favicon: !0,
					has_url: !!a
				},
				string: { fetch_by: "receiver_fetch" }
			}), a;
		}
		if (e.hasXmaFavicon === !0) {
			var i = o("MAWAttachmentBlob.react").getInfoUrlXMA_CausesSuspense(e, "favicon", "MAWSecureXMAAttachmentContent - getFaviconUrlXMA - " + n, r);
			return r == null || r.addPoint("fetch_favicon_url_xma_end", {
				bool: {
					has_favicon: !0,
					has_url: !!i
				},
				string: { fetch_by: "maw_backend" }
			}), i;
		}
		r == null || r.addPoint("fetch_favicon_url_xma_end", {
			bool: { has_favicon: !1 },
			string: { fetch_by: "none" }
		});
	}
	l.default = c;
}), 98);

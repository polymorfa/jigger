__d("MAWFetchXMADataUtils", [
	"FBLogger",
	"LSXmaContentType",
	"MAWFetchXMABlob",
	"MAWGetImageSpec",
	"MAWParseXMAFBConfig",
	"WAArmadilloXMA.pb",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		failed_to_fetch_blob_for_xma_share: "Failed to fetch blob xma data for MAWShareAttachent",
		failed_to_fetch_json_for_xma_share: "Failed execute MAWShareAttachment_LinkPreviewQuery for MAWShareAttachent",
		failed_to_parse_json_for_xma_share: "Failed to fetch blob xma data for MAWShareAttachent"
	};
	function s(e) {
		var t = Object.entries(r("LSXmaContentType")).find(function(t) {
			var n = t[0], r = t[1];
			return e === r && n in o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE;
		}), n;
		if (t != null && t[0] in o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE) {
			var a = t[0];
			n = o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE[a];
		} else n = void 0;
		if (n !== void 0) return o("MAWParseXMAFBConfig").isFBSupportedTargetType({
			fbTargetType: n,
			silentExposure: !0
		}) ? n : (r("FBLogger")("messenger_web_sharing").mustfix("Unsupported XMA Target Type in sending path: " + n), o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE);
	}
	async function u(e, t) {
		var n = e.favicon_blob, r = e.header_image_blob, a = e.overlayIconGlyph, i = e.preview_blob, l = i == null ? void 0 : new File([i], "preview", { type: i.type }), s = n == null ? void 0 : new File([n], "favicon", { type: n.type }), u = r == null ? void 0 : new File([r], "header", { type: r.type });
		o("sendToSentQPLLogger").markSendToSentPoint(t, "preview_favicon_spec_start");
		var c = a === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE ? Promise.resolve({
			height: 2,
			width: 2
		}) : l != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(l) : Promise.resolve(), d = s != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(s) : Promise.resolve(), m = u != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(u) : Promise.resolve(), p = await Promise.all([
			c,
			d,
			m
		]), _ = p[0], f = p[1], g = p[2];
		o("sendToSentQPLLogger").markSendToSentPoint(t, "preview_favicon_spec_ready");
		var h = l == null || _ == null ? void 0 : {
			file: l,
			height: _.height,
			width: _.width
		}, y = s == null || f == null ? void 0 : {
			file: s,
			height: f.height,
			width: f.width
		}, C = u == null || g == null ? void 0 : {
			file: u,
			height: g.height,
			width: g.width
		};
		return {
			faviconFileArgs: y,
			headerImageFileArgs: C,
			previewFileArgs: h
		};
	}
	async function c(t, n, a, i, l, s) {
		var u = await Promise.all([
			[(t == null ? void 0 : t.startsWith("ls")) === !0 ? null : t, "favicon"],
			[n, "image"],
			[a, "preview"],
			[i, "header_image"]
		].map(function(e) {
			return o("MAWFetchXMABlob").fetchBlob({
				descriptionForLogging: "MAWFetchXMAData_" + e[1],
				url: e[0],
				xmaContentType: s
			}).then(function(e) {
				return e != null ? e : void 0;
			});
		})).catch(function(t) {
			return l.forEach(function(e) {
				o("sendToSentQPLLogger").markSendToSentFail(e, "failed_to_fetch_blob_for_xma_share");
			}), r("FBLogger")("messenger_web_sharing").catching(t).mustfix(e.failed_to_fetch_blob_for_xma_share), [
				void 0,
				void 0,
				void 0,
				void 0
			];
		}), c = u[0], d = u[1], m = u[2], p = u[3];
		return [
			c,
			d,
			m,
			p
		];
	}
	l.XMA_DATA_ERRORS = e, l.convertXmaContentTypeToMessageType = s, l.makeXMAFileArgs = u, l.getPreviewBlobs = c;
}), 98);

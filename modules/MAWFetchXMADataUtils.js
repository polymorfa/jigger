__d("MAWFetchXMADataUtils", [
	"FBLogger",
	"LSXmaContentType",
	"MAWFetchXMABlob",
	"MAWGetImageSpec",
	"MAWParseXMAFBConfig",
	"Promise",
	"WAArmadilloXMA.pb",
	"asyncToGeneratorRuntime",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		failed_to_fetch_blob_for_xma_share: "Failed to fetch blob xma data for MAWShareAttachent",
		failed_to_fetch_json_for_xma_share: "Failed execute MAWShareAttachment_LinkPreviewQuery for MAWShareAttachent",
		failed_to_parse_json_for_xma_share: "Failed to fetch blob xma data for MAWShareAttachent"
	};
	function u(e) {
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
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			var a = t.favicon_blob, i = t.header_image_blob, l = t.overlayIconGlyph, s = t.preview_blob, u = s == null ? void 0 : new File([s], "preview", { type: s.type }), c = a == null ? void 0 : new File([a], "favicon", { type: a.type }), d = i == null ? void 0 : new File([i], "header", { type: i.type });
			o("sendToSentQPLLogger").markSendToSentPoint(r, "preview_favicon_spec_start");
			var m = l === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE ? (e || (e = n("Promise"))).resolve({
				height: 2,
				width: 2
			}) : u != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(u) : (e || (e = n("Promise"))).resolve(), p = c != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(c) : (e || (e = n("Promise"))).resolve(), _ = d != null ? o("MAWGetImageSpec").getImageSpec_DEPRECATED(d) : (e || (e = n("Promise"))).resolve(), f = yield (e || (e = n("Promise"))).all([
				m,
				p,
				_
			]), g = f[0], h = f[1], y = f[2];
			o("sendToSentQPLLogger").markSendToSentPoint(r, "preview_favicon_spec_ready");
			var C = u == null || g == null ? void 0 : {
				file: u,
				height: g.height,
				width: g.width
			}, b = c == null || h == null ? void 0 : {
				file: c,
				height: h.height,
				width: h.width
			}, v = d == null || y == null ? void 0 : {
				file: d,
				height: y.height,
				width: y.width
			};
			return {
				faviconFileArgs: b,
				headerImageFileArgs: v,
				previewFileArgs: C
			};
		}), d.apply(this, arguments);
	}
	function m(e, t, n, r, o, a) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, u, c) {
			var d = yield (e || (e = n("Promise"))).all([
				[(t == null ? void 0 : t.startsWith("ls")) === !0 ? null : t, "favicon"],
				[a, "image"],
				[i, "preview"],
				[l, "header_image"]
			].map(function(e) {
				return o("MAWFetchXMABlob").fetchBlob({
					descriptionForLogging: "MAWFetchXMAData_" + e[1],
					url: e[0],
					xmaContentType: c
				}).then(function(e) {
					return e != null ? e : void 0;
				});
			})).catch(function(e) {
				return u.forEach(function(e) {
					o("sendToSentQPLLogger").markSendToSentFail(e, "failed_to_fetch_blob_for_xma_share");
				}), r("FBLogger")("messenger_web_sharing").catching(e).mustfix(s.failed_to_fetch_blob_for_xma_share), [
					void 0,
					void 0,
					void 0,
					void 0
				];
			}), m = d[0], p = d[1], _ = d[2], f = d[3];
			return [
				m,
				p,
				_,
				f
			];
		}), p.apply(this, arguments);
	}
	l.XMA_DATA_ERRORS = s, l.convertXmaContentTypeToMessageType = u, l.makeXMAFileArgs = c, l.getPreviewBlobs = m;
}), 98);

__d("MAWFetchXMAData", [
	"fbt",
	"CometRelay",
	"ConstUriUtils",
	"FBLogger",
	"LSXmaContentType",
	"MAWFetchXMADataUtils",
	"MAWFetchXMAData_fetchXmaPreviewDataQuery.graphql",
	"MAWUnshimUrl",
	"MSGDataclassTypes.flow",
	"Promise",
	"WAArmadilloXMA.pb",
	"asyncToGeneratorRuntime",
	"isFacebookURI",
	"isStringNullOrEmpty",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(e, t) {
		var n;
		return t.forEach(function(e) {
			o("sendToSentQPLLogger").addSendToSentAnnotations(e, { string: { xma_data_result: "private" } });
		}), {
			defaultCTA: {
				actionUrl: o("MAWUnshimUrl").unshimUrl(e),
				buttonType: (n = o("WAArmadilloXMA.pb")).EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
				nativeUrl: o("MAWUnshimUrl").unshimUrl(e),
				title: s._(
					/*BTDS*/
					""
				).toString()
			},
			linkType: "internal",
			overlayIconGlyph: n.EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE,
			preview_blob: void 0,
			title_text: s._(
				/*BTDS*/
				""
			).toString(),
			transportLayerForLogging: "sender_copy",
			xma_message_type: n.EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE,
			xmaTargetTypeForLogging: n.EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE
		};
	}
	function d(t, r) {
		return o("CometRelay").fetchQuery(t, e !== void 0 ? e : e = n("MAWFetchXMAData_fetchXmaPreviewDataQuery.graphql"), { url: r }).toPromise();
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a, i, l, s, u, m, p = yield d(e, t).catch(function(e) {
				n.forEach(function(t) {
					o("sendToSentQPLLogger").markSendToSentFail(t, "failed_to_fetch_json_for_xma_share", e);
				}), r("FBLogger")("messenger_web_sharing").catching(e).mustfix(o("MAWFetchXMADataUtils").XMA_DATA_ERRORS.failed_to_fetch_json_for_xma_share);
			});
			n.forEach(function(e) {
				o("sendToSentQPLLogger").markSendToSentPoint(e, "fetch_json_for_xma_share_end");
			});
			var _ = p == null ? void 0 : p.xma_preview_data;
			if (_ == null) return n.forEach(function(e) {
				o("sendToSentQPLLogger").addSendToSentAnnotations(e, { string: { xma_data_result: "empty" } });
			}), c(t, n);
			if (_.is_public !== !0) return c(t, n);
			n.forEach(function(e) {
				o("sendToSentQPLLogger").addSendToSentAnnotations(e, { string: { xma_data_result: "public" } });
			});
			var f = {
				defaultCTA: {
					actionUrl: o("MAWUnshimUrl").unshimUrl(t),
					buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
					nativeUrl: o("MAWUnshimUrl").unshimUrl(t),
					title: (a = _.default_cta_title) != null ? a : void 0
				},
				linkType: "internal",
				title_text: (i = (l = _.title_text) != null ? l : _.header_title) != null ? i : void 0
			}, g = _.xma_content_type != null ? String(_.xma_content_type) : null, h = r("LSXmaContentType"), y = g != null ? h[g] : null, C = o("MAWFetchXMADataUtils").convertXmaContentTypeToMessageType(y), b = _.post_id, v = _.is_receiver_fetch_supported === !0;
			if (v && b != null) {
				var S = {
					__typename: "XMSGMsgrXmaContentRefDataclass",
					action_type: o("MSGDataclassTypes.flow").XmsgMsgrXmaActionType.Share,
					content_type: o("MSGDataclassTypes.flow").XmsgMsgrReceiverFetchContentType.Statusupdate,
					fetch_params: {
						__typename: "XMSGMsgrReceiverFetchXmaStatusUpdateFetchParams",
						post_id: b
					},
					xma_content_type: y,
					xma_layout_type: o("MSGDataclassTypes.flow").XmsgMsgrReceiverFetchXmaLayoutType.Single
				};
				return babelHelpers.extends({}, f, {
					contentRef: JSON.stringify(S),
					transportLayerForLogging: "receiver_fetch",
					xma_message_type: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH,
					xmaTargetTypeForLogging: C
				});
			}
			var R = yield o("MAWFetchXMADataUtils").getPreviewBlobs(_.favicon_url, null, _.preview_url, _.header_image_url, n, y), L = R[0], E = R[1], k = R[2], I = R[3];
			return babelHelpers.extends({}, f, {
				ctas: (s = _.cta_data) == null || (s = s.nodes) == null ? void 0 : s.map(function(e) {
					var t, n = o("MAWUnshimUrl").unshimUrl(r("isStringNullOrEmpty")(e.cta_action_url) ? void 0 : e.cta_action_url), a = o("MAWUnshimUrl").unshimUrl(r("isStringNullOrEmpty")(e.cta_native_url) ? void 0 : e.cta_native_url);
					return {
						actionUrl: n,
						buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
						ctaType: "xma_web_url",
						nativeUrl: a,
						title: (t = e.cta_title) != null ? t : void 0
					};
				}),
				favicon_blob: L != null ? L : void 0,
				header_image_blob: I != null ? I : void 0,
				header_title: r("isStringNullOrEmpty")(_.title_text) ? void 0 : (u = _.header_title) != null ? u : void 0,
				preview_blob: k != null ? k : void 0,
				subtitle_text: (m = _.subtitle_text) != null ? m : void 0,
				transportLayerForLogging: "sender_copy",
				xma_message_type: C,
				xmaTargetTypeForLogging: C
			});
		}), p.apply(this, arguments);
	}
	function _(e, t, a) {
		var i, l = o("ConstUriUtils").getUri(t), s = l == null || (i = l.setSubDomain("www")) == null ? void 0 : i.toString();
		if (s == null) return (u || (u = n("Promise"))).resolve({
			linkType: "unknown",
			transportLayerForLogging: "sender_copy",
			xmaTargetTypeForLogging: null
		});
		var c = o("MAWUnshimUrl").unshimUrl(t);
		if (c != null) {
			var d = o("ConstUriUtils").getUri(c);
			if (d != null && !r("isFacebookURI")(d)) return (u || (u = n("Promise"))).resolve({
				linkType: "external",
				transportLayerForLogging: "sender_copy",
				xma_message_type: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE,
				xmaTargetTypeForLogging: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE
			});
		}
		return a.forEach(function(e) {
			o("sendToSentQPLLogger").markSendToSentPoint(e, "fetch_json_for_xma_share_start");
		}), m(e, s, a);
	}
	l.fetchXMAData = _;
}), 226);

__d("MWMediaComposerLinkPreviewXMARenderQpl", [
	"I64",
	"LSIntEnum",
	"MAWLoggerUtils",
	"MWMediaRenderQplUtils",
	"MessagingAttachmentType",
	"QPLUserFlow",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = c.useEffect, m = c.useMemo, p = c.useRef;
	function _(e, t, n, a) {
		e === void 0 && (e = ""), t === void 0 && (t = "");
		var i = o("MAWLoggerUtils").getInstanceKeyFromId(e.concat(t)), l = p(!1), c = m(function() {
			if (e == null || t == null) return null;
			var c = (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA);
			return r("QPLUserFlow").start(o("MWMediaRenderQplUtils").MSGR_WEB_MEDIA_RENDER_EVENT, {
				annotations: { string: {
					attachment_type: o("MWMediaRenderQplUtils").getAttachmentTypeStringFromEnum(c),
					content_type: o("MWMediaRenderQplUtils").deriveMessageContentTypeStringFromAttachmentTypeLessAccurate(c),
					entry_point: "composer_view",
					linkPreviewDataType: o("MWMediaRenderQplUtils").getE2EELinkPreviewXMADataTypeStringFromEnum(n != null ? n : (u || (u = o("I64"))).zero),
					thread_type: o("MWMediaRenderQplUtils").getThreadTypeStringFromEnum(a != null ? a : (u || (u = o("I64"))).zero)
				} },
				cancelOnUnload: !0,
				instanceKey: i,
				timeoutInMs: o("MWMediaRenderQplUtils").QPL_TIMEOUT
			}), babelHelpers.extends({}, o("MWMediaRenderQplUtils").createQplFlowCommon(o("MWMediaRenderQplUtils").MSGR_WEB_MEDIA_RENDER_EVENT, i, l));
		}, [i]);
		return d(function() {
			l.current = !1;
		}, [i]), d(function() {
			return function() {
				l.current === !1 && (c == null ? void 0 : c.getInstanceKey()) != null && (c == null || c.endCancelAfterDelay(706));
			};
		}, [c]), c;
	}
	l.useMediaComposerLinkPreviewXMARenderQpl = _;
}), 98);

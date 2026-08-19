__d("MAWFilePressable.react", [
	"CometErrorBoundary.react",
	"FBLogger",
	"I64",
	"MAWAttachmentBlob.react",
	"MWChatMessageId",
	"MWFileUtils",
	"MWXPressable.react",
	"goUriOnNewWindow",
	"react",
	"useMWFileOnPress"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = { filePressable: {
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function _(e) {
		var t = e.children, n = e.linkProps, o = e.onPress, a = e.testid;
		return u.jsx(r("MWXPressable.react"), {
			display: "inline",
			linkProps: n,
			onPress: o,
			overlayDisabled: !0,
			testid: void 0,
			xstyle: p.filePressable,
			children: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.children, n = e.linkProps, o = e.onPress, a = e.testid, i = r("useMWFileOnPress")(o);
		return u.jsx(_, {
			linkProps: n,
			onPress: i,
			testid: void 0,
			children: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.children, a = e.file, i = e.getFileUrl, l = e.mediaRenderQpl, c = e.onPress, p = e.renderUnsupportedAttachment, g = e.testid, h = ((t = a.filename) != null ? t : o("MWFileUtils").PLACEHOLDER_FILENAME).toString(), y = i != null ? i(a, "MAWFilePressable", l) : o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense(a, "MAWFilePressable", l), C = o("MWChatMessageId").makeSent((s || (s = o("I64"))).to_string(a.threadKey), a.messageId, s.to_string(a.timestampMs)), b = {
			download: h,
			target: "_blank",
			url: y
		}, v = o("MWFileUtils").getFileSize(a), S = d(function(e, t) {
			r("FBLogger")("messenger_web_media", "cannot_load_entry_point").mustfix(e.message || "Cannot open file viewer in " + t), y != null && r("goUriOnNewWindow")(y);
		}, [y]);
		return m(function() {
			y != null && y.length > 0 ? (l == null || l.addPoint("render-file-pressable"), l == null || l.endSuccessAfterDelay()) : l == null || l.endFailAfterDelay("load-file-error");
		}, [l, y]), (y == null || y.length === 0) && p != null ? p(a) : C.type === "sent" ? u.jsx(r("CometErrorBoundary.react"), {
			onError: S,
			children: u.jsx(f, {
				linkProps: b,
				onPress: c,
				testid: void 0,
				children: n({
					filename: h,
					messageID: C,
					size: v
				})
			})
		}) : u.jsx(_, {
			linkProps: b,
			onPress: c,
			testid: void 0,
			children: n({
				filename: h,
				messageID: C,
				size: v
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

__d("WAWebChatMsgSymbol.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMessageFailIcon.react",
	"WAWebMessagePluginRenderPreviewIcon",
	"WAWebMsgGetters",
	"WAWebSystemMessagePluginRenderPreviewIcon",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useOptionalMsgValues(t.id, [
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getSubtype,
			o("WAWebFrontendMsgGetters").getMediaData
		]), r = n != null ? n[0] : t.type, a = n != null ? n[1] : t.subtype, i = n != null ? n[2] : t.mediaData, l = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {});
		if (e.overrideIcon != null) l = e.overrideIcon;
		else {
			var u = o("WAWebSystemMessagePluginRenderPreviewIcon").renderPreviewIcon({ msg: t });
			if (u != null) l = u;
			else {
				var c = o("WAWebMessagePluginRenderPreviewIcon").renderPreviewIcon(r, a, {
					msg: t,
					options: {
						parsedVcards: i == null ? void 0 : i.parsedVcards,
						viewOnceStatic: e.viewOnceStatic
					}
				});
				c != null && (l = c);
			}
		}
		return s.jsx("div", {
			className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xhslqc4 x16dsc37 x1qx5ct2 x1p8j9ns",
			"data-testid": "chat-msg-symbol",
			children: l
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("MAWSecureViewOnceAttachmentContent.react", [
	"fbt",
	"I64",
	"LSIntEnum",
	"MAWLocalizationType",
	"MAWSecureViewOnceMessageBubble.react",
	"MWV2TombstonedMessage.react",
	"MWViewOnceMessageIcon",
	"MWXIconStrict.react",
	"MessagingAttachmentType",
	"MessengerWebUXLogger",
	"RavenMessagingState",
	"getMAWLocalizedFallbackMsgSnippet",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react"));
	function m(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.dbAttachment, i = e.mediaRenderQpl, l = e.outgoing, m = (u || (u = o("I64"))).equal(a.attachmentType, (c || (c = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE)), p = a.ephemeralMediaState != null && (u || (u = o("I64"))).equal(a.ephemeralMediaState, (c || (c = o("LSIntEnum"))).ofNumber(r("RavenMessagingState").SEEN)), _ = r("MessengerWebUXLogger").useImpressionLoggerRef({ eventName: "view_once_message_tombstoned_rendered" });
		return l || p ? d.jsx(r("MAWSecureViewOnceMessageBubble.react"), {
			connectBottom: t,
			connectTop: n,
			label: m ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			mediaRenderQpl: i,
			outgoing: l
		}) : d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: l,
			mediaRenderQpl: i,
			children: d.jsxs("div", {
				className: "x6s0dn4 x78zum5",
				"data-testid": void 0,
				ref: _,
				children: [d.jsx("div", {
					className: "x1lliihq xbelrpt xzbario",
					children: d.jsx(r("MWXIconStrict.react"), {
						color: "primary",
						icon: r("MWViewOnceMessageIcon"),
						isDecorative: !0,
						size: 18
					})
				}), r("getMAWLocalizedFallbackMsgSnippet")(m ? o("MAWLocalizationType").LOCALIZATION_TYPE.VIEW_ONCE_PHOTO_MESSAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.VIEW_ONCE_VIDEO_MESSAGE)]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

__d("MAWSecurePlaceholder.react", [
	"fbt",
	"FBLogger",
	"I64",
	"Int64Hooks",
	"InteractionTracingMetrics",
	"LSIntEnum",
	"LSXmaContentType",
	"MAWLocalizationType",
	"MAWSecurePlaceholderTombstone.react",
	"MAWUnavailablePlaceholder.react",
	"MWPMessageListColumn.react",
	"MWV2TombstonedMessage.react",
	"MWXLink.react",
	"MWXMAUtils",
	"MWXText.react",
	"getMAWLocalizedFallbackMsgSnippet",
	"gkx",
	"hero-tracing-placeholder",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react")), m = e.useContext;
	function p(e) {
		var t = e.actorId, n = e.message, a = e.xmaContentType, i = n.displayedContentTypes, l = n.senderId, p = (u || (u = o("I64"))).equal(l, t), _ = m(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
		return o("Int64Hooks").useEffectInt64(function() {
			var e, t = r("gkx")("12935") ? (e = _.current) == null ? void 0 : e.interactionUUID : null;
			t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "render-maw-secure-placeholder", "AppTiming"), (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(65536)) && r("FBLogger")("messenger_web").info("Message show up as encryption placeholder");
		}, [i, _]), (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(65536)) ? d.jsxs(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: [
				r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_ENCRYPTED_MESSAGE_FALLBACK),
				" ",
				d.jsx(r("MWXText.react"), {
					color: p ? "white" : "primary",
					type: "bodyLink3",
					children: d.jsx(r("MWXLink.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						href: "https://www.facebook.com/help/messenger-app/2751245661706174?cms_platform=iphone-app&helpref=platform_switcher&locale=en_US",
						target: "_blank",
						children: s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(131072)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(524288)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(4294967296)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(1048576)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POLL_CREATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POLL_CREATION_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(2097152)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(8589934592)) || a != null && (c || (c = o("LSIntEnum"))).toNumber(a) === r("LSXmaContentType").MSG_MEMORIES_SHARE ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(4194304)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(2147483648)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POST_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POST_MENTION_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(8388608)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.META_AI_SEND_MESSAGE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(16777216)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(262144)) ? d.jsx(r("MAWUnavailablePlaceholder.react"), { isOutgoing: p }) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(256)) ? d.jsx(r("MAWSecurePlaceholderTombstone.react"), {
			isOutgoing: p,
			message: n
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(33554432)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE_ORIGINAL_UNAVAILABLE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(67108864)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK)
		}) : (u || (u = o("I64"))).equal(i, (c || (c = o("LSIntEnum"))).ofNumber(1073741824)) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(p ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_NOTE_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_NOTE_MENTION_FALLBACK)
		}) : a != null && o("MWXMAUtils").isXMAContentTypeRTC(a) ? d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: p,
			children: r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK)
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.actorId, n = e.message, r = e.xmaContentType;
		return d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap, { children: [d.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), d.jsx(p, {
			actorId: t,
			message: n,
			xmaContentType: r
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

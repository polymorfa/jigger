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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react"));
	function m(e) {
		var t = o("react-compiler-runtime").c(22), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.mediaRenderQpl, m = e.outgoing, p;
		t[0] !== i.attachmentType ? (p = (u || (u = o("I64"))).equal(i.attachmentType, (c || (c = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE)), t[0] = i.attachmentType, t[1] = p) : p = t[1];
		var _ = p, f = i.ephemeralMediaState != null && (u || (u = o("I64"))).equal(i.ephemeralMediaState, (c || (c = o("LSIntEnum"))).ofNumber(r("RavenMessagingState").SEEN)), g;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (g = { eventName: "view_once_message_tombstoned_rendered" }, t[2] = g) : g = t[2];
		var h = r("MessengerWebUXLogger").useImpressionLoggerRef(g);
		if (m || f) {
			var y;
			t[3] !== _ ? (y = _ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[3] = _, t[4] = y) : y = t[4];
			var C;
			return t[5] !== n || t[6] !== a || t[7] !== l || t[8] !== m || t[9] !== y ? (C = d.jsx(r("MAWSecureViewOnceMessageBubble.react"), {
				connectBottom: n,
				connectTop: a,
				label: y,
				mediaRenderQpl: l,
				outgoing: m
			}), t[5] = n, t[6] = a, t[7] = l, t[8] = m, t[9] = y, t[10] = C) : C = t[10], C;
		}
		var b;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x6s0dn4 x78zum5" }, t[11] = b) : b = t[11];
		var v;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (v = d.jsx("div", {
			className: "x1lliihq xbelrpt xzbario",
			children: d.jsx(r("MWXIconStrict.react"), {
				color: "primary",
				icon: r("MWViewOnceMessageIcon"),
				isDecorative: !0,
				size: 18
			})
		}), t[12] = v) : v = t[12];
		var S = _ ? o("MAWLocalizationType").LOCALIZATION_TYPE.VIEW_ONCE_PHOTO_MESSAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.VIEW_ONCE_VIDEO_MESSAGE, R;
		t[13] !== S ? (R = r("getMAWLocalizedFallbackMsgSnippet")(S), t[13] = S, t[14] = R) : R = t[14];
		var L;
		t[15] !== h || t[16] !== R ? (L = d.jsxs("div", babelHelpers.extends({}, b, {
			"data-testid": void 0,
			ref: h,
			children: [v, R]
		})), t[15] = h, t[16] = R, t[17] = L) : L = t[17];
		var E;
		return t[18] !== l || t[19] !== m || t[20] !== L ? (E = d.jsx(r("MWV2TombstonedMessage.react"), {
			isOutgoing: m,
			mediaRenderQpl: l,
			children: L
		}), t[18] = l, t[19] = m, t[20] = L, t[21] = E) : E = t[21], E;
	}
	l.default = m;
}), 226);

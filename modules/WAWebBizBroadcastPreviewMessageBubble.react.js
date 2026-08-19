__d("WAWebBizBroadcastPreviewMessageBubble.react", [
	"fbt",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastPreviewCatalogSection.react",
	"WAWebBizBroadcastTextFormatUtils",
	"WAWebBizBroadcastsDocumentPreview.react",
	"WAWebBizBroadcastsFileTypeValidator",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebMsgType",
	"WAWebTailOutIcon.react",
	"WDSFontTokenStyles",
	"WDSIconIcCall.react",
	"WDSIconIcLink.react",
	"WDSIconIcReply.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 280, d = {
		buttonContainer: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			columnGap: "x1trrmfo",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			width: "x1dz1jew",
			$$css: !0
		},
		container: {
			minWidth: "xgqtt45",
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			$$css: !0
		},
		tail: {
			alignSelf: "xpvyfi4",
			color: "x1fa4crm",
			marginInlineStart: "x1hb08if",
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(20), n = e.attachmentData, r = e.buttonData, a = e.message, i;
		t[0] !== a ? (i = a != null && a.trim() !== "", t[0] = a, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] !== r ? (s = r != null && r.displayText != null && r.displayText.trim() !== "", t[2] = r, t[3] = s) : s = t[3];
		var c = s, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1g5lz36 xlr9sxt xwd4zgb xq8v1ta x17un8ov x1jkqq1h" }, t[4] = m) : m = t[4];
		var _;
		t[5] !== n ? (_ = u.jsx(p, { attachmentData: n }), t[5] = n, t[6] = _) : _ = t[6];
		var h;
		t[7] !== l || t[8] !== a ? (h = l && u.jsx(f, { message: a }), t[7] = l, t[8] = a, t[9] = h) : h = t[9];
		var y;
		t[10] !== r || t[11] !== c ? (y = c && r != null && u.jsx(g, { buttonData: r }), t[10] = r, t[11] = c, t[12] = y) : y = t[12];
		var C;
		t[13] !== _ || t[14] !== h || t[15] !== y ? (C = u.jsxs("div", babelHelpers.extends({}, m, { children: [
			_,
			h,
			y
		] })), t[13] = _, t[14] = h, t[15] = y, t[16] = C) : C = t[16];
		var b;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebTailOutIcon.react").TailOutIcon, {
			iconXstyle: d.tail,
			width: 8,
			height: 13
		}), t[17] = b) : b = t[17];
		var v;
		return t[18] !== C ? (v = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.container,
			justify: "center",
			align: "start",
			children: [C, b]
		}), t[18] = C, t[19] = v) : v = t[19], v;
	}
	function p(e) {
		var t, n, a = o("react-compiler-runtime").c(9), i = e.attachmentData;
		if (i == null) return null;
		var l = i.previewUrl, s = i.mimetype, c = i.mediaType === o("WAWebMsgType").MSG_TYPE.PRODUCT, d = c && ((t = i.catalogData) == null ? void 0 : t.productId) != null, m = c && !d, p = m ? (n = i.catalogData) == null ? void 0 : n.productImageUrl : null, f = !c && l != null && s != null && (o("WAWebBizBroadcastsFileTypeValidator").isAttachmentImageMimeType(s) || o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(s));
		if (m && p != null) {
			var g;
			return a[0] !== p ? (g = u.jsx(_, {
				mediaPreviewUrl: p,
				mimetype: "image/*"
			}), a[0] = p, a[1] = g) : g = a[1], g;
		} else if (c) {
			var h;
			return a[2] !== i ? (h = u.jsx(r("WAWebBizBroadcastPreviewCatalogSection.react"), { attachmentData: i }), a[2] = i, a[3] = h) : h = a[3], h;
		} else if (f) {
			var y;
			return a[4] !== l || a[5] !== s ? (y = u.jsx(_, {
				mediaPreviewUrl: l,
				mimetype: s
			}), a[4] = l, a[5] = s, a[6] = y) : y = a[6], y;
		} else {
			var C;
			return a[7] !== i ? (C = u.jsx(r("WAWebBizBroadcastsDocumentPreview.react"), { documentData: i }), a[7] = i, a[8] = C) : C = a[8], C;
		}
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(9), n = e.mediaPreviewUrl, r = e.mimetype, a = n === void 0 ? null : n, i = r === void 0 ? null : r;
		if (a == null) return null;
		var l;
		t[0] !== i ? (l = i != null && o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(i), t[0] = i, t[1] = l) : l = t[1];
		var c = l, d;
		t[2] !== a ? (d = a.startsWith("data:"), t[2] = a, t[3] = d) : d = t[3];
		var m = d, p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "xyi3aci xwf5gio x1p453bz x1suzm8a xav9cv8 x7g7pl8 x4tpdpg x1wbi8v6 x6ikm8r x10wlt62" }, t[4] = p) : p = t[4];
		var _;
		return t[5] !== m || t[6] !== c || t[7] !== a ? (_ = u.jsx("div", babelHelpers.extends({}, p, { children: c && !m ? u.jsx("video", {
			className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
			src: a,
			muted: !0,
			playsInline: !0,
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}) : u.jsx("img", {
			className: "x1lliihq xt7dq6l xl1xv1r xh8yej3",
			src: a,
			alt: s._(
				/*BTDS*/
				""
			)
		}) })), t[5] = m, t[6] = c, t[7] = a, t[8] = _) : _ = t[8], _;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.message, r = n === void 0 ? null : n;
		if (r == null || r.trim() === "") return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1mzt3pk x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x126k92a" }, t[0] = a) : a = t[0];
		var i;
		return t[1] !== r ? (i = u.jsx("div", babelHelpers.extends({}, a, { children: o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: r,
			formatters: o("WAWebBizBroadcastTextFormatUtils").AI_TEXT_FORMATTERS
		}) : u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: r,
			xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
			selectable: !1
		}) })), t[1] = r, t[2] = i) : i = t[2], i;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(9), n = e.buttonData, a;
		t[0] !== n.type ? (a = n.type === "quick_reply" ? u.jsx(r("WDSIconIcReply.react"), {
			height: 16,
			width: 16,
			colorName: "contentExternalLink"
		}) : n.type === "cta_call" ? u.jsx(r("WDSIconIcCall.react"), {
			height: 16,
			width: 16,
			colorName: "contentExternalLink"
		}) : n.type === "cta_url" ? u.jsx(r("WDSIconIcLink.react"), {
			height: 16,
			width: 16,
			colorName: "contentExternalLink"
		}) : n.type === "cta_catalog" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n.type);
		})(), t[0] = n.type, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== i ? (l = i != null && u.jsx("div", {
			className: "x2lah0s x1gxa6cn",
			children: i
		}), t[2] = i, t[3] = l) : l = t[3];
		var s;
		t[4] !== n.displayText ? (s = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentExternalLink",
			maxLines: 1,
			children: n.displayText
		}), t[4] = n.displayText, t[5] = s) : s = t[5];
		var c;
		return t[6] !== l || t[7] !== s ? (c = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: d.buttonContainer,
			children: [l, s]
		}), t[6] = l, t[7] = s, t[8] = c) : c = t[8], c;
	}
	l.default = m;
}), 226);

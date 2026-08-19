__d("WAWebBizBroadcastsDocumentPreview.react", [
	"WAWebBizBroadcastsDocumentPreviewMetadata.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDocumentFileIcon",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebL10N",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		documentContainer: {
			alignItems: "x1qjc9v5",
			backgroundColor: "x1bu39yj",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			marginTop: "xav9cv8",
			marginInlineEnd: "x7g7pl8",
			marginBottom: "x4tpdpg",
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		fileNameRow: {
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			width: "xh8yej3",
			$$css: !0
		},
		text: {
			paddingTop: "x1gxa6cn",
			$$css: !0
		},
		textRTL: {
			textAlign: "xp4054r",
			$$css: !0
		},
		wrapper: {
			minWidth: "xeuugli",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.documentData, a = n.fileExt, i = n.fileName, l = n.mimetype, c = n.previewUrl, m = l === "application/pdf", p;
		t[0] !== m || t[1] !== c ? (p = m && c != null && s.jsx("img", {
			className: "x4mnvg2 xx9ypkp x1i282gy x1lliihq xl1xv1r x8ozjh4",
			src: c,
			alt: ""
		}), t[0] = m, t[1] = c, t[2] = p) : p = t[2];
		var _ = a != null ? a : "", f;
		t[3] !== l || t[4] !== _ ? (f = s.jsx(r("WAWebDocumentFileIcon"), {
			width: 20,
			mimeType: l,
			ext: _
		}), t[3] = l, t[4] = _, t[5] = f) : f = t[5];
		var g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "xs83m0k xeuugli x6ikm8r x10wlt62" }, t[6] = g) : g = t[6];
		var h;
		t[7] !== i ? (h = s.jsx("div", babelHelpers.extends({}, g, { children: s.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDefault",
			type: "Body2Emphasized",
			children: i
		}) })), t[7] = i, t[8] = h) : h = t[8];
		var y;
		t[9] !== f || t[10] !== h ? (y = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			xstyle: u.fileNameRow,
			children: [f, h]
		}), t[9] = f, t[10] = h, t[11] = y) : y = t[11];
		var C;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (C = [u.text, r("WAWebL10N").isRTL() && u.textRTL], t[12] = C) : C = t[12];
		var b;
		t[13] !== n ? (b = s.jsx(r("WAWebFlexItem.react"), {
			xstyle: C,
			grow: 1,
			children: s.jsx(r("WAWebBizBroadcastsDocumentPreviewMetadata.react"), { documentData: n })
		}), t[13] = n, t[14] = b) : b = t[14];
		var v;
		t[15] !== y || t[16] !== b ? (v = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.wrapper,
			children: [y, b]
		}), t[15] = y, t[16] = b, t[17] = v) : v = t[17];
		var S;
		return t[18] !== p || t[19] !== v ? (S = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-document-preview",
			onError: d,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.documentContainer,
				children: [p, v]
			})
		}), t[18] = p, t[19] = v, t[20] = S) : S = t[20], S;
	}
	function d() {
		return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.documentPreviewMessageBubbleErrorRender();
	}
	l.default = c;
}), 98);

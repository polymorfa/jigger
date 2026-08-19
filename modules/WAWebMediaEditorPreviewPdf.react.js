__d("WAWebMediaEditorPreviewPdf.react", [
	"WAWebAttachMediaDrawerAttachMediaTypePdf.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebMediaEditorPreviewFile.react",
	"WAWebMediaEditorPreviewHeader.react",
	"WAWebSpinner.react",
	"WAWebTPPdfViewerGatingUtils",
	"cr:35231",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		container: {
			position: "x1n2onr6",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			height: "x5yr21d",
			$$css: !0
		},
		containerElements: {
			width: "xh8yej3",
			$$css: !0
		},
		footer: {
			position: "x1n2onr6",
			minHeight: "xbktkl8",
			marginTop: "x98l61r",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		spinnerArea: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1r8uery",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(41), a = e.captionInput, i = e.documentPageCount, l = e.fileExt, c = e.filename, d = e.fileSize, m = e.fullPreview, p = e.fullPreviewSize, _ = e.isPasswordProtected, f = e.isProcessing, g = e.mimetype, h = e.onClose, y = _ === void 0 ? !1 : _, C = f === void 0 ? !1 : f, b = i > 0, v = n("cr:35231") != null && o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled();
		if (C && (m === "" || !b) && o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
			var S;
			t[0] !== c || t[1] !== h ? (S = s.jsx(r("WAWebFlexItem.react"), {
				xstyle: u.containerElements,
				children: s.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
					onClose: h,
					filename: c
				})
			}), t[0] = c, t[1] = h, t[2] = S) : S = t[2];
			var R;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.spinnerArea,
				justify: "center",
				align: "center",
				children: s.jsx(o("WAWebSpinner.react").Spinner, { color: "highlight" })
			}), t[3] = R) : R = t[3];
			var L;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (L = [u.footer, u.containerElements], t[4] = L) : L = t[4];
			var E;
			t[5] !== a ? (E = s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: L,
				align: "center",
				children: a
			}), t[5] = a, t[6] = E) : E = t[6];
			var k;
			return t[7] !== S || t[8] !== E ? (k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.container,
				justify: "all",
				align: "center",
				children: [
					S,
					R,
					E
				]
			}), t[7] = S, t[8] = E, t[9] = k) : k = t[9], k;
		}
		if (v && (b || y === !0 && o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailAttributionEnabled()) && n("cr:35231") != null) {
			var I;
			return t[10] !== a || t[11] !== i || t[12] !== c || t[13] !== m || t[14] !== y || t[15] !== h ? (I = s.jsx(n("cr:35231"), {
				captionInput: a,
				documentPageCount: i,
				filename: c,
				fullPreview: m,
				isPasswordProtected: y,
				onClose: h
			}), t[10] = a, t[11] = i, t[12] = c, t[13] = m, t[14] = y, t[15] = h, t[16] = I) : I = t[16], I;
		}
		if (!b) {
			var T;
			return t[17] !== a || t[18] !== l || t[19] !== d || t[20] !== c || t[21] !== g || t[22] !== h ? (T = s.jsx(r("WAWebMediaEditorPreviewFile.react"), {
				mimeType: g,
				filesize: d,
				filename: c,
				fileExt: l,
				onClose: h,
				captionInput: a
			}), t[17] = a, t[18] = l, t[19] = d, t[20] = c, t[21] = g, t[22] = h, t[23] = T) : T = t[23], T;
		}
		var D;
		t[24] !== i || t[25] !== c || t[26] !== h ? (D = s.jsx(r("WAWebFlexItem.react"), {
			xstyle: u.containerElements,
			children: s.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
				onClose: h,
				filename: c,
				pageCount: i
			})
		}), t[24] = i, t[25] = c, t[26] = h, t[27] = D) : D = t[27];
		var x;
		t[28] !== i || t[29] !== c || t[30] !== m || t[31] !== p || t[32] !== g ? (x = s.jsx(r("WAWebAttachMediaDrawerAttachMediaTypePdf.react"), {
			fullPreview: m,
			fullPreviewSize: p,
			pageCount: i,
			showPageCount: !1,
			showBorder: !0,
			mimeType: g,
			filename: c
		}), t[28] = i, t[29] = c, t[30] = m, t[31] = p, t[32] = g, t[33] = x) : x = t[33];
		var $;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? ($ = [u.footer, u.containerElements], t[34] = $) : $ = t[34];
		var P;
		t[35] !== a ? (P = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: $,
			align: "center",
			children: a
		}), t[35] = a, t[36] = P) : P = t[36];
		var N;
		return t[37] !== D || t[38] !== x || t[39] !== P ? (N = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			justify: "all",
			align: "center",
			children: [
				D,
				x,
				P
			]
		}), t[37] = D, t[38] = x, t[39] = P, t[40] = N) : N = t[40], N;
	}
	l.default = c;
}), 98);

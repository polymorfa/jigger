__d("WAWebMediaEditorPreviewPdf.react", [
	"WAWebAttachMediaDrawerAttachMediaTypePdf.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebMediaEditorPreviewFile.react",
	"WAWebMediaEditorPreviewHeader.react",
	"WAWebSpinner.react",
	"WAWebTPPdfViewerGatingUtils",
	"cr:35231",
	"react"
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
		var t = e.captionInput, a = e.documentPageCount, i = e.fileExt, l = e.filename, c = e.fileSize, d = e.fullPreview, m = e.fullPreviewSize, p = e.isPasswordProtected, _ = p === void 0 ? !1 : p, f = e.isProcessing, g = f === void 0 ? !1 : f, h = e.mimetype, y = e.onClose, C = a > 0, b = n("cr:35231") != null && o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled();
		return g && (d === "" || !C) && o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled() ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			justify: "all",
			align: "center",
			children: [
				s.jsx(r("WAWebFlexItem.react"), {
					xstyle: u.containerElements,
					children: s.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
						onClose: y,
						filename: l
					})
				}),
				s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: u.spinnerArea,
					justify: "center",
					align: "center",
					children: s.jsx(o("WAWebSpinner.react").Spinner, { color: "highlight" })
				}),
				s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: [u.footer, u.containerElements],
					align: "center",
					children: t
				})
			]
		}) : b && (C || _ === !0 && o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailAttributionEnabled()) && n("cr:35231") != null ? s.jsx(n("cr:35231"), {
			captionInput: t,
			documentPageCount: a,
			filename: l,
			fullPreview: d,
			isPasswordProtected: _,
			onClose: y
		}) : C ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			justify: "all",
			align: "center",
			children: [
				s.jsx(r("WAWebFlexItem.react"), {
					xstyle: u.containerElements,
					children: s.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
						onClose: y,
						filename: l,
						pageCount: a
					})
				}),
				s.jsx(r("WAWebAttachMediaDrawerAttachMediaTypePdf.react"), {
					fullPreview: d,
					fullPreviewSize: m,
					pageCount: a,
					showPageCount: !1,
					showBorder: !0,
					mimeType: h,
					filename: l
				}),
				s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: [u.footer, u.containerElements],
					align: "center",
					children: t
				})
			]
		}) : s.jsx(r("WAWebMediaEditorPreviewFile.react"), {
			mimeType: h,
			filesize: c,
			filename: l,
			fileExt: i,
			onClose: y,
			captionInput: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

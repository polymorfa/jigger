__d("WAWebWindowsNuxModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLaptopIllustrationIcon.react",
	"WAWebMobilePlatforms",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebText.react",
	"WAWebWdsIllWaWindowsWebCursorIcon.react",
	"WAWebWindowsGatingUtils",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		container: {
			width: "xvue9z",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		illustrationContainer: {
			width: "xh8yej3",
			paddingTop: "x13zrc24",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1hhzuzn",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		headerContainerOld: {
			paddingTop: "x109j2v6",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1hhzuzn",
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		headerContainerNew: {
			paddingTop: "x109j2v6",
			paddingInlineEnd: "x1xnnf8n",
			paddingBottom: "x1hhzuzn",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		headerText: {
			fontWeight: "x1s688f",
			$$css: !0
		},
		descriptionContainerOld: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x5zjp28",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		descriptionContainerNew: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1xnnf8n",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		},
		descriptionText: {
			lineHeight: "x1o2sk6j",
			fontWeight: "xo1h6xc",
			$$css: !0
		},
		buttonContainer: {
			paddingTop: "x9orja2",
			paddingInlineEnd: "x5zjp28",
			paddingBottom: "xbaz6xv",
			paddingInlineStart: "x162tt16",
			backgroundColor: "x16w0wmm",
			$$css: !0
		}
	};
	function d(e) {
		var t = r("useWAWebFocusOnMount")();
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", e.onOkOrDismiss);
		var n = o("WAWebWindowsGatingUtils").isHybridNuxBeta50Enabled(), a = o("WAWebMobilePlatforms").isSMB() ? u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: c.descriptionText,
			testid: "hybrid-nux-description-smb",
			children: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: c.descriptionText,
			testid: "hybrid-nux-description-consumer",
			children: s._(
				/*BTDS*/
				""
			)
		}), i = o("WAWebMobilePlatforms").isSMB() ? u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: c.descriptionText,
			testid: "hybrid-nux-description-smb",
			children: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: c.descriptionText,
			testid: "hybrid-nux-description-consumer",
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: t,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Continue"),
			onOverlayClick: r("WAWebNoop"),
			type: o("WAWebModal.react").ModalTheme.Auto,
			buttonGroupStyle: c.buttonContainer,
			testid: "hybrid-nux-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.container,
				children: [
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: c.illustrationContainer,
						justify: "center",
						children: n ? u.jsx(o("WAWebWdsIllWaWindowsWebCursorIcon.react").WdsIllWaWindowsWebCursorIcon, {}) : u.jsx(o("WAWebLaptopIllustrationIcon.react").LaptopIllustrationIcon, {})
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: n ? c.headerContainerNew : c.headerContainerOld,
						align: "center",
						alignSelf: "stretch",
						justify: "center",
						children: u.jsx(o("WAWebText.react").WAWebTextMediumRefreshed, {
							xstyle: c.headerText,
							children: n ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: n ? c.descriptionContainerNew : c.descriptionContainerOld,
						children: n ? i : a
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

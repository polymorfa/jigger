__d("WAWebMediaEditPdfModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDesktopSharerSlot.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebMediaPdfSharerIframe.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WAWebTPAnnotatedBufferUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTPSharerPreference",
	"WDSButtonGroup.react",
	"WDSIconIcWarning.react",
	"WDSText.react",
	"react",
	"useWAWebPdfSharerConnection"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useLayoutEffect, p = c.useRef, _ = c.useState, f = {
		browserCompatContainer: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		buttonContainer: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t, n = o("WAWebTPPdfViewerGatingUtils").getWebTPBrowserCompatibility(), a = p(null), i = r("WAWebEnvironment").isWindows, l = _(null), c = l[0], f = l[1], g = e.mediaData, y = e.msg, C = d(function(e) {
			f(e);
		}, []), b = p(!1);
		m(function() {
			var e = c;
			return function() {
				e != null && !b.current && e.destroy();
			};
		}, [c]);
		var v = o("WAWebTPSharerPreference").getSharerSkipPreference(), S = (t = e.hasUnsavedAnnotations) != null ? t : !1, R = d(function() {
			return o("WAWebTPAnnotatedBufferUtils").getAnnotatedPdfBuffer(S);
		}, [S]), L = r("useWAWebPdfSharerConnection")(y, g, a, {
			appConfigOverrides: {
				showSavePreferenceCheckbox: o("WAWebTPPdfViewerGatingUtils").isWebTPSharerSavePreferenceEnabled(),
				savedPreference: v
			},
			desktopSession: i ? c : null,
			getAnnotatedBuffer: R,
			onShareSuccess: function(n) {
				b.current = !0, n.savePreference != null && (o("WAWebTPSharerPreference").setSharerSkipPreference(n.savePreference), e.onPreferenceSaved == null || e.onPreferenceSaved()), o("WAWebModalManager").ModalManager.closeSupportOrModal();
			},
			onCancel: function() {
				o("WAWebModalManager").ModalManager.closeSupportOrModal();
			}
		}), E = L.hasError, k = L.loading, I = function() {
			o("WAWebModalManager").ModalManager.closeSupportOrModal();
		};
		return n === "upgrade_browser" ? u.jsx(h, {
			onDismiss: I,
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			)
		}) : n === "unsupported" ? u.jsx(h, {
			onDismiss: I,
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			)
		}) : E ? u.jsx(h, {
			onDismiss: I,
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			)
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "edit-pdf"
			},
			type: o("WAWebModal.react").ModalTheme.PdfEdit,
			testid: "edit-pdf-modal",
			onOverlayClick: I,
			children: u.jsxs("div", {
				className: "x14luw17",
				children: [k && u.jsx("div", {
					className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
					children: u.jsx("div", {
						className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4",
						children: u.jsx(o("WAWebSpinner.react").Spinner, {
							stroke: 6,
							size: 40
						})
					})
				}), u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod" },
					1: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr" }
				}[!k << 0], { children: i ? u.jsx(r("WAWebDesktopSharerSlot.react"), { onSessionReady: C }) : u.jsx(r("WAWebMediaPdfSharerIframe.react"), { iframeRef: a }) }))]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.description, n = e.onDismiss, a = e.title;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "edit-pdf"
			},
			type: o("WAWebModal.react").ModalTheme.PdfEditError,
			testid: "edit-pdf-modal",
			onOverlayClick: n,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "start",
				xstyle: f.browserCompatContainer,
				gap: 16,
				padding: 24,
				children: [
					u.jsx(r("WDSIconIcWarning.react"), {
						height: 24,
						width: 24
					}),
					u.jsx("div", {
						className: "x2b8uid",
						children: u.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							children: a
						})
					}),
					u.jsx("div", {
						className: "x1yc453h xh8yej3",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: t
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "end",
						xstyle: f.buttonContainer,
						children: u.jsx(r("WDSButtonGroup.react"), {
							orientation: "horizontal",
							width: "hug",
							primaryButtonProps: {
								label: s._(
									/*BTDS*/
									""
								),
								variant: "filled",
								onPress: n
							}
						})
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);

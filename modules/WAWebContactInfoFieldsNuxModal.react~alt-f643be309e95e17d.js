__d("WAWebContactInfoFieldsNuxModal.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsPictoAccount.react",
	"WDSText.react",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		content: {
			rowGap: "x8a3fw1",
			width: "xh8yej3",
			$$css: !0
		},
		heroRow: {
			paddingTop: "x1p57kb1",
			paddingBottom: "x12xbjc7",
			width: "xh8yej3",
			$$css: !0
		},
		controls: {
			paddingTop: "xl7twdi",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.onAcknowledge, n = r("useWAWebFocusOnMount")(), a = function() {
			o("WAWebModalManager").ModalManager.close(), t == null || t();
		};
		return o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			t == null || t();
		}), u.jsxs(o("WAWebModal.react").Modal, {
			contentRef: n,
			controlsStyle: c.controls,
			testid: "contact-info-fields-nux-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "contact-info-fields-nux"
			},
			actions: u.jsx(r("WDSButton.react"), {
				variant: "filled",
				type: "default",
				size: "medium",
				widthMode: "flexible",
				onPress: a,
				testid: "contact-info-fields-nux-ok-button",
				label: s._(
					/*BTDS*/
					""
				)
			}),
			children: [u.jsx("div", {
				className: "x10l6tqk xugynej x67dgr1",
				children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcClose.react"),
					variant: "borderless",
					type: "default",
					size: "medium",
					onPress: o("WAWebModalManager").closeModalManager,
					testid: "contact-info-fields-nux-close-button",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.content,
				children: [
					u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: c.heroRow,
						children: u.jsx(r("WDSIllustrationWdsPictoAccount.react"), {})
					}),
					u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

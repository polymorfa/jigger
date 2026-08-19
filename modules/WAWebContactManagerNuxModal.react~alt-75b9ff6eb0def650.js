__d("WAWebContactManagerNuxModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcContacts.react",
	"WDSIconIcDescription.react",
	"WDSIllustrationWdsSmbIllStartAChat.react",
	"WDSText.react",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		root: {
			position: "x1n2onr6",
			$$css: !0
		},
		closeButton: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		},
		illustrationRow: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		header: {
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		content: {
			boxSizing: "x9f619",
			color: "xhslqc4",
			marginTop: "x98l61r",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		contentItemRow: {
			marginTop: "x1nmyh1g",
			$$css: !0
		},
		ctaRow: {
			marginBottom: "x14mdic9",
			marginTop: "x1q9ymp4",
			$$css: !0
		},
		ctaButton: {
			paddingInlineStart: "x1ivwiv9",
			paddingInlineEnd: "x1arroq",
			width: "xqyf9gi",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = r("useWAWebFocusOnMount")(), a = function() {
			o("WAWebModalManager").ModalManager.close(), e.onAcknowledge == null || e.onAcknowledge();
		};
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			e.onAcknowledge == null || e.onAcknowledge();
		});
		var i = [{
			Icon: r("WDSIconIcContacts.react"),
			description: s._(
				/*BTDS*/
				""
			),
			key: "lead-tracking"
		}, {
			Icon: r("WDSIconIcDescription.react"),
			description: s._(
				/*BTDS*/
				""
			),
			key: "contact-details"
		}];
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: n,
			testid: "customer-manager-intro-nux-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "customer-manager-intro-nux"
			},
			children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
				align: "center",
				xstyle: c.root,
				children: [
					u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: o("WAWebModalManager").closeModalManager,
						size: "medium",
						testid: "customer-manager-intro-nux-close-button",
						variant: "borderless",
						xstyle: c.closeButton
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						xstyle: c.illustrationRow,
						children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSIllustrationWdsSmbIllStartAChat.react"), {}) })
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						children: u.jsx(r("WAWebFlexItem.react"), {
							xstyle: c.header,
							children: u.jsx(r("WDSText.react"), {
								type: "Headline2",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					u.jsx(t.FlexColumn, {
						xstyle: c.content,
						children: i.map(function(e) {
							var t = e.Icon, n = e.description, a = e.key;
							return u.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								xstyle: c.contentItemRow,
								children: [u.jsx(r("WAWebFlexItem.react"), {
									shrink: 0,
									className: "x1iw51ew xyo0t3i",
									children: u.jsx(t, {
										width: 20,
										height: 20,
										iconXstyle: c.icon
									})
								}), u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: n
								}) })]
							}, a);
						})
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						xstyle: c.ctaRow,
						children: u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: a,
							size: "small",
							testid: "popup-controls-ok",
							xstyle: c.ctaButton
						})
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

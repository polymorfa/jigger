__d("WAWebNewsletterAiContentInfoModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNewsletterAiContentInfoModalTypes",
	"WDSIconIcInfo.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIllustrationWdsIllAiImage.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.onCancel, a = e.onClose, i = e.onConfirm, l = e.variant, d = l === (t = o("WAWebNewsletterAiContentInfoModalTypes")).AiContentModalVariant.VIEWER_INFO, m = l === t.AiContentModalVariant.ADMIN_CONFIRMATION, p = l === t.AiContentModalVariant.ADMIN_NUX, _ = l === t.AiContentModalVariant.ADMIN_INFO, f = u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterAiContentFaqUrl());
			},
			testid: "ai-content-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), g = [{
			body: s._(
				/*BTDS*/
				""
			),
			icon: u.jsx(r("WDSIconWdsIcAiContent.react"), {
				width: 24,
				height: 24,
				xstyle: c.bulletIcon
			}),
			testid: "ai-content-what-is-section",
			title: s._(
				/*BTDS*/
				""
			)
		}];
		return p && g.push({
			body: s._(
				/*BTDS*/
				""
			),
			icon: u.jsx(r("WDSIconIcInfo.react"), {
				width: 24,
				height: 24,
				xstyle: c.bulletIcon
			}),
			testid: "ai-content-how-to-label-section",
			title: s._(
				/*BTDS*/
				""
			)
		}), _ && g.push({
			body: s._(
				/*BTDS*/
				""
			),
			icon: u.jsx(r("WDSIconIcInfo.react"), {
				width: 24,
				height: 24,
				xstyle: c.bulletIcon
			}),
			testid: "ai-content-how-labeled-section",
			title: s._(
				/*BTDS*/
				""
			)
		}), u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.AiContentInfo,
			testid: "ai-content-info-modal",
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			tsNavigationData: {
				surface: "unknown",
				viewName: "ai-content-info"
			},
			okText: m ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onOK: m ? i : a,
			cancelText: m ? s._(
				/*BTDS*/
				""
			) : void 0,
			onCancel: m ? n : void 0,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					paddingBottom: 16,
					children: u.jsx(r("WDSIllustrationWdsIllAiImage.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 16,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						textAlign: "center",
						isPrimaryHeading: !0,
						testid: "ai-content-title",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 16,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						testid: "ai-content-notice",
						children: d ? s._(
							/*BTDS*/
							"",
							[s._param("learn more link", f)]
						) : s._(
							/*BTDS*/
							"",
							[s._param("learn more link", f)]
						)
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					justify: "start",
					grow: 1,
					children: g.map(function(e) {
						var t = e.body, n = e.icon, a = e.testid, i = e.title;
						return u.jsxs(o("WAWebFlex.react").FlexRow, {
							testid: a,
							paddingTop: 4,
							paddingBottom: 4,
							marginBottom: 8,
							columnGap: 24,
							align: "center",
							children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
								justify: "center",
								align: "center",
								shrink: 0,
								xstyle: c.bulletIconContainer,
								children: n
							}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "start",
								grow: 1,
								shrink: 1,
								children: [u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									isSemanticHeading: !0,
									children: i
								}), u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: t
								})]
							})]
						}, a);
					})
				}),
				m && u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingTop: 8,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						testid: "ai-content-caption",
						children: s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

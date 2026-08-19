__d("WAWebGoogleReviewInfoModal.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButtonGroup.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = "https://support.google.com/maps/answer/6230175", d = "https://support.google.com/maps/answer/7421661", m = "https://www.google.com/intl/en/help/terms_maps/", p = "https://policies.google.com/privacy", _ = { content: {
		boxSizing: "x9f619",
		width: "x1l2rt3b",
		paddingTop: "xl7twdi",
		paddingInlineEnd: "xyo0t3i",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "xb0esv5",
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function f(e, t) {
		e.preventDefault(), o("WAWebModalManager").ModalManager.close(), self.setTimeout(function() {
			return o("WAWebExternalLink.react").openExternalLink(t);
		}, 10);
	}
	function g() {
		var e, t, n;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			children: u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
				align: "stretch",
				xstyle: _.content,
				children: [
					u.jsx(n.FlexColumn, {
						align: "start",
						children: u.jsx(e = r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsxs(n.FlexColumn, {
						align: "start",
						children: [u.jsx(e, {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(e, {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								"",
								[s._param("learn more link", u.jsx(t = r("WAWebClickableLink.react"), {
									href: c,
									onClick: function(t) {
										return f(t, c);
									},
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})]
					}),
					u.jsxs(n.FlexColumn, {
						align: "start",
						children: [u.jsx(e, {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(t, {
							href: d,
							onClick: function(t) {
								return f(t, d);
							},
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsxs(n.FlexColumn, {
						align: "start",
						children: [u.jsx(e, {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsxs(n.FlexRow, {
							align: "center",
							gap: 4,
							children: [
								u.jsx(t, {
									href: m,
									onClick: function(t) {
										return f(t, m);
									},
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsx(e, {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: "·"
								}),
								u.jsx(t, {
									href: p,
									onClick: function(t) {
										return f(t, p);
									},
									children: s._(
										/*BTDS*/
										""
									)
								})
							]
						})]
					}),
					u.jsx(r("WDSButtonGroup.react"), {
						width: "fill",
						orientation: "stacked",
						primaryButtonProps: {
							variant: "filled",
							type: "default",
							size: "medium",
							onPress: o("WAWebModalManager").closeModalManager,
							label: s._(
								/*BTDS*/
								""
							),
							testid: "google_review_info_done"
						}
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

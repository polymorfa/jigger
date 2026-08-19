__d("WAWebBizAIChatHistoryEducationModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WDSBaseRadio.react",
	"WDSIllustrationWdsSmbIllAiEducation.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = {
		body: {
			paddingBottom: "xvpt6g3",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		optionRow: {
			alignItems: "x1cy8zhl",
			columnGap: "x1aj3ljl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		optionText: {
			rowGap: "x129bwdz",
			$$css: !0
		}
	}, f = function() {};
	function g(e) {
		var t = e.onCancel, a = e.onConfirm, i = p(!1), l = i[0], c = i[1], g = m(!1), h = d(function() {
			g.current || (g.current = !0, c(!0), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					yield a();
				} finally {
					g.current = !1, c(!1);
				}
			})());
		}, [a]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "biz-ai-chat-history-education-modal",
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: h,
			okSpinner: l,
			okDisabled: l,
			okButtonType: "primary",
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: t,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: _.body,
				children: [
					u.jsx("div", {
						className: "xvpt6g3",
						children: u.jsx(r("WDSIllustrationWdsSmbIllAiEducation.react"), {})
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: _.optionRow,
						children: [u.jsx(r("WDSBaseRadio.react"), {
							checked: !0,
							name: "biz-ai-chat-history-source",
							value: "use-past-chats",
							onChange: f,
							tabIndex: -1
						}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: _.optionText,
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					}),
					u.jsx("div", {
						className: "x1xrf6ya x2b8uid",
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body3",
							children: s._(
								/*BTDS*/
								"",
								[s._param("learnMore", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebFaqUrl").getBizBot1pLearnMoreUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

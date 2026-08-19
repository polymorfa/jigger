__d("WAWebBotNux.react", [
	"fbt",
	"WAWebBotTos",
	"WAWebBotTosIds",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WAWebLockIcon.react",
	"WAWebMetaAiRingAssetResolver",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsIcAiFilledIcon.react",
	"WAWebWdsIcPhotoAiIcon.react",
	"WAWebWdsIllAiChatsIcon.react",
	"WDSIconWdsIcAiChat.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebDisclosureShownTracking",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = {
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionTitle: {
			width: "x1cvmir6",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		divider: {
			width: "xw90zxv",
			height: "xjm9jq1",
			backgroundColor: "x3x0x6p",
			$$css: !0
		}
	};
	function f() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [{
				icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}, {
				icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}]
		};
	}
	function g() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [{
				icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}, {
				icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}]
		};
	}
	function h() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [
				{
					icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: c.jsx(o("WAWebWdsIcPhotoAiIcon.react").WdsIcPhotoAiIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				}
			]
		};
	}
	function y(e) {
		switch (e) {
			case "agent": return o("WAWebBotTosIds").getBotAgentTosId();
			case "invoke": return o("WAWebBotTosIds").getBotInvokeTosId();
			case "shortcut": return o("WAWebBotTosIds").getBotShortcutTosId();
		}
	}
	function C(t) {
		var n = t.onCancel, a = t.onOK, i = t.origin, l = p(!1), u = l[0], d = l[1], C = r("useWAWebDisclosureShownTracking")({ noticeId: y(i) }), b = async function(t) {
			switch (t) {
				case "agent":
					await o("WAWebBotTos").markSeenAgentTos();
					break;
				case "invoke":
					await o("WAWebBotTos").markSeenInvokeTos();
					break;
				case "shortcut":
					await o("WAWebBotTos").markSeenShortcutTos();
					break;
			}
		}, v = async function() {
			o("WAWebBotTos").hasSeenBotTos() || (d(!0), await b(i), d(!1)), o("WAWebModalManager").ModalManager.close(), a == null || a();
		}, S = function() {
			o("WAWebModalManager").ModalManager.close(), n == null || n();
		}, R = r("useWAWebFocusOnMount")();
		m(function() {
			o("WAWebBotTos").hasSeenBotTos() && b(i);
		}, [i]);
		var L = c.jsx(o("WAWebFlex.react").FlexItem, { children: i === "agent" ? c.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
			width: 168,
			height: 128
		}) : c.jsx(r("WAWebImg.react"), {
			src: o("WAWebMetaAiRingAssetResolver").getBotAssistantURL(),
			style: {
				width: 168,
				height: 168
			}
		}) }), E;
		switch (i) {
			case "invoke":
				E = f();
				break;
			case "shortcut":
				E = h();
				break;
			default: E = g();
		}
		var k = E, I = k.headerText, T = k.sections, D = i === "agent" ? s._(
			/*BTDS*/
			"",
			[
				s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotTermsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m8", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		) : s._(
			/*BTDS*/
			"",
			[
				s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotTermsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m8", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		);
		return c.jsx("div", {
			ref: C,
			children: c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				ref: R,
				type: o("WAWebModal.react").ModalTheme.BotNut,
				okText: s._(
					/*BTDS*/
					""
				),
				onOK: v,
				okSpinner: u === !0,
				cancelText: s._(
					/*BTDS*/
					""
				),
				onCancel: S,
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
					children: [
						L,
						c.jsx(r("WAWebBox.react"), {
							xstyle: [
								_.headerText,
								o("WDSMargins.stylex").wdsMargins.marginHor8,
								o("WDSMargins.stylex").wdsMargins.marginTop16,
								o("WDSMargins.stylex").wdsMargins.marginBottom8
							],
							children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
								weight: "bold",
								children: I
							})
						}),
						T.map(function(t, n) {
							var a = t.icon, i = t.subtitle, l = t.title;
							return c.jsxs(o("WAWebFlex.react").FlexRow, {
								className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
								children: [c.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, _.sectionIcon],
									children: a
								}), c.jsxs(o("WAWebFlex.react").FlexItem, {
									xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, _.sectionTitle],
									children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })]
								})]
							}, n);
						}),
						c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.divider, o("WDSMargins.stylex").wdsMargins.marginVer16))),
						c.jsx(r("WAWebBox.react"), {
							xstyle: [o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer8],
							children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: D })
						})
					]
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

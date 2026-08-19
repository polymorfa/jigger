__d("WAWebNewCommunityNux.react", [
	"fbt",
	"$InternalEnum",
	"WAWebCommunityCells.react",
	"WAWebCommunityGatingUtils",
	"WAWebCommunityNuxAnimationData",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebLottieAnimationLoadable",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = n("$InternalEnum").Mirrored(["COMMUNITY", "PRIVACY_POLICY"]), d = {
		badge: {
			marginTop: "xotjm27",
			$$css: !0
		},
		header: {
			marginTop: "x14beivq",
			marginInlineEnd: "x11t971q",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			maxWidth: "x13qrzjo",
			textAlign: "x2b8uid",
			$$css: !0
		},
		section: {
			display: "x78zum5",
			marginTop: "xotjm27",
			marginInlineEnd: "x11t971q",
			marginBottom: "xat24cr",
			marginInlineStart: "xvc5jky",
			maxWidth: "x13qrzjo",
			$$css: !0
		},
		getStartedButton: {
			marginTop: "x1q9ymp4",
			$$css: !0
		},
		disclaimerSection: {
			marginTop: "x98l61r",
			$$css: !0
		},
		full: {
			height: "x5yr21d",
			$$css: !0
		},
		animation: {
			height: "x1wkxgih",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.onBack, n = e.onCancel, a = e.onContinue, i = e.ref, l = e.viewType, m = r("useWAWebCallbackOnce")(a), _ = r("useWAWebFocusOnMount")(), f = s._(
			/*BTDS*/
			""
		), g = o("WAWebDrawerUtils").getDrawerHeaderType(l), h = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			loop: !1,
			autoplay: !0,
			data: r("WAWebCommunityNuxAnimationData"),
			xstyle: d.animation
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "new-community-nux",
			viewType: l,
			tsNavigationData: {
				surface: "unknown",
				viewName: "new-community-nux"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: g,
				onBack: t,
				onCancel: n
			}), u.jsx(r("WAWebDrawerBody.react"), {
				ref: _,
				tabIndex: "-1",
				children: u.jsx(r("WAWebDrawerSection.react"), {
					animation: !1,
					theme: "full-height",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: d.full,
						children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							xstyle: o("WDSMargins.stylex").wdsMargins.marginVerAuto,
							children: [
								u.jsx(r("WAWebFlexItem.react"), {
									xstyle: d.badge,
									children: h
								}),
								u.jsx(r("WAWebFlexItem.react"), {
									marginTop: 24,
									marginBottom: 4,
									children: u.jsx(r("WDSText.react"), {
										type: "Headline1",
										colorName: "contentDefault",
										xstyle: d.header,
										children: f
									})
								}),
								u.jsx(p, { type: c.COMMUNITY })
							]
						}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom32,
							children: [u.jsx(r("WDSButton.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								variant: "filled",
								size: "medium",
								type: "default",
								onPress: m,
								xstyle: d.getStartedButton,
								widthMode: "flexible",
								testid: "nux-continue-btn"
							}), o("WAWebCommunityGatingUtils").communityCreatePrivacyEnabled() ? u.jsx(p, { type: c.PRIVACY_POLICY }) : null]
						})]
					})
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.type, n = t === c.PRIVACY_POLICY ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [
				d.section,
				d.disclaimerSection,
				t === c.COMMUNITY && o("WDSMargins.stylex").wdsMargins.marginTop8
			],
			children: [u.jsxs(r("WDSText.react"), {
				type: t === c.PRIVACY_POLICY ? "Body3" : "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: [
					n,
					" ",
					t === c.PRIVACY_POLICY ? u.jsx(r("WDSTextualLink.react"), {
						href: o("WAWebFaqUrl").getCommunityCreatorPrivacyUrl(),
						children: r("WAWebFbtCommon")("Learn more")
					}) : null
				]
			}), t === c.COMMUNITY ? u.jsx(o("WAWebCommunityCells.react").SeeExamplesLink, {}) : null]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);

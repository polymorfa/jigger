__d("WAWebCommunityTransferOwnershipConfirmationDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCmd",
	"WAWebCommunityInformationCell.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebNetworkStatus",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTransferCommunityOwnershipAction",
	"WAWebUserShieldIcon.react",
	"WAWebWarningIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom48: {
			paddingBottom: "x1sgudl8",
			$$css: !0
		}
	}, _ = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		buttonContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.chat, a = e.newOwner, i = e.onBack, l = e.ref, c = d(), f = m(!1), g = f[0], h = f[1], y = s._(
			/*BTDS*/
			"",
			[s._param("contact_name", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getFormattedName(a) }))]
		), C = [{
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebWarningIcon.react").WarningIcon,
			key: "no-longer-owner"
		}, {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
			key: "remain-admin"
		}], b = g ? u.jsx(o("WAWebSpinner.react").Spinner, { size: 18 }) : s._(
			/*BTDS*/
			""
		), v = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!r("WAWebNetworkStatus").online) {
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				h(!0), o("WAWebTransferCommunityOwnershipAction").transferCommunityOwnershipAction(t, a).then(function() {
					o("WAWebCmd").Cmd.openCommunityTabbedInfo(t.id, void 0, !1, !0);
				}).catch(function() {
					h(!1), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			testid: "community-assign-new-owner-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-transfer-confirmation"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i
			}), u.jsx(r("WAWebDrawerBody.react"), {
				ref: c,
				tabIndex: "-1",
				children: u.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					xstyle: [
						_.container,
						o("WDSPaddings.stylex").wdsPaddings.paddingTop32,
						p.paddingInline48,
						p.paddingBottom48
					],
					children: [
						u.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
								id: t.id,
								size: 104,
								quality: o("WAWebDetailImage.react").DetailImageQuality.High,
								shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
							})
						}),
						u.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
								weight: "bold",
								xstyle: [_.header, o("WDSMargins.stylex").wdsMargins.marginVer16],
								children: y
							})
						}),
						C.map(function(e) {
							var t = e.Icon, n = e.description, o = e.key, a = e.title;
							return u.jsx(r("WAWebCommunityInformationCell.react"), {
								Icon: t,
								title: a,
								description: n
							}, o);
						}),
						u.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: [_.buttonContainer, o("WDSMargins.stylex").wdsMargins.marginTop16],
							children: u.jsx(o("WAWebButton.react").Button, {
								testid: "transfer-community-ownership-button",
								type: "primary",
								onClick: v,
								children: b
							})
						})
					]
				})
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

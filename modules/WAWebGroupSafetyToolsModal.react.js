__d("WAWebGroupSafetyToolsModal.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebMessageReportIcon.react",
	"WAWebModalManager",
	"WAWebPrivacyVisibilityEditDrawer.react",
	"WAWebText.react",
	"WAWebThumbsDownIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		o("WAWebModalManager").ModalManager.open(u.jsx(m, {}));
	}
	function m() {
		var e, t = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSafetyToolsFaqUrl());
		}, n = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
				category: "groupAdd",
				onClose: o("WAWebDrawerManager").closeDrawerLeft
			}));
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "group-safety-tools"
			},
			cancelText: r("WAWebFbtCommon")("Learn more"),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: t,
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx((e = o("WAWebText.react")).WAWebTextLarge, { children: s._(
					/*BTDS*/
					""
				) }),
				u.jsx(e.WAWebTextMuted, {
					paddingTop: 8,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					alignSelf: "stretch",
					paddingTop: 8,
					children: [
						u.jsx(r("WAWebCellV2.react"), {
							colorScheme: "lightest",
							detailLeft: u.jsx(o("WAWebLockIcon.react").LockIcon, {
								width: 24,
								height: 24,
								iconXstyle: c.secondaryColor
							}),
							interactive: !1,
							primary: u.jsx(e.WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									"",
									[s._implicitParam("=m2", u.jsx(r("WAWebClickableLink.react"), {
										onClick: n,
										children: s._(
											/*BTDS*/
											""
										)
									}))]
								)
							}),
							size: "medium"
						}),
						u.jsx(r("WAWebCellV2.react"), {
							colorScheme: "lightest",
							detailLeft: u.jsx(o("WAWebMessageReportIcon.react").MessageReportIcon, {
								width: 24,
								height: 24,
								iconXstyle: c.secondaryColor
							}),
							interactive: !1,
							primary: u.jsx(e.WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							size: "medium"
						}),
						u.jsx(r("WAWebCellV2.react"), {
							colorScheme: "lightest",
							detailLeft: u.jsx(o("WAWebThumbsDownIcon.react").ThumbsDownIcon, {
								width: 24,
								height: 24,
								iconXstyle: c.secondaryColor
							}),
							interactive: !1,
							primary: u.jsx(e.WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							size: "medium"
						})
					]
				})
			] })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.displayGroupSafetyToolsModal = d;
}), 226);

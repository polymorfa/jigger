__d("WAWebNewsletterLinkDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebCellFrame.react",
	"WAWebCommonNewsletterStrings",
	"WAWebCopyPasteSelectable.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebWamEnumChannelLinkShareScreen",
	"WDSIconIcContentCopy.react",
	"WDSIconIcFastForward.react",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useWAWebModelValues",
	"useWAWebNewsletterInviteLink"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = { marginInline30: {
		marginInlineStart: "xymharo",
		marginInlineEnd: "x2pibh5",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, p = {
		drawer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		optionsHeader: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		mouseCursor: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		link: {
			wordBreak: "x1yn0g08",
			$$css: !0
		},
		newsletterName: {
			overflowWrap: "x1mzt3pk",
			maxHeight: "x1o16irs",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.entryPoint, a = t.newsletter, i = t.onBack, l = t.onClose, c = t.ref, _ = n != null ? n : void 0;
		_ === void 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Encountered null link share screen entry point"]))).tags("newsletter-logging").sendLogs("Null link share screen entry point in newsletter link share logging");
		var f = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
			chat: a,
			linkShareLoggingNavigationParams: {
				linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
				linkShareScreenEntryPoint: _
			}
		}), g = f[0], h = f[1], y = f[2], C = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, ["name"]), b = o("useWAWebModelValues").useModelValues(a.contact, ["id", "profilePicThumb"]), v = [];
		g != null && (v.push({
			icon: d.jsx(r("WDSIconIcFastForward.react"), { iconXstyle: p.secondaryColor }),
			onClick: y,
			testid: "newsletter-info-invite-action",
			title: s._(
				/*BTDS*/
				""
			)
		}), document.queryCommandSupported("copy") && v.push({
			icon: d.jsx(r("WDSIconIcContentCopy.react"), { iconXstyle: p.secondaryColor }),
			onClick: h,
			testid: "newsletter-info-copy-link-action",
			title: o("WAWebCommonNewsletterStrings").getCopyLinkText()
		}));
		var S = d.jsx("div", {
			className: "x14atkfc xyi3aci xwf5gio x1p453bz x1suzm8a x1h3rtpe x6ikm8r x10wlt62 xcxhlts xjx09e3 x1fqp7bg xx6jrq6",
			children: d.jsx(r("WAWebCellFrame.react"), {
				className: (u || (u = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginVer4, o("WDSMargins.stylex").wdsMargins.marginHor2),
				image: d.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: b.id,
					quality: o("WAWebDetailImage.react").DetailImageQuality.High,
					shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
					size: 56
				}),
				primary: d.jsx(o("WAWebText.react").WAWebTextTitle, {
					xstyle: p.newsletterName,
					children: C == null ? void 0 : C.name
				}),
				secondary: d.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
					onClick: h,
					selectable: !0,
					xstyle: p.mouseCursor,
					children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
						color: "link",
						testid: "newsletter-link-drawer-copyable-link",
						textWrap: "wrap",
						xstyle: p.link,
						children: g
					})
				}),
				theme: "newsletter-link-cell"
			})
		}), R = d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
			color: "primary",
			marginBottom: 20,
			marginEnd: 32,
			marginStart: 32,
			marginTop: 16,
			xstyle: p.optionsHeader,
			children: s._(
				/*BTDS*/
				""
			)
		}), L = d.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer4, m.marginInline30],
			children: d.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" })
		}), E = i ? { onBack: i } : { onCancel: l };
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "newsletter-link-drawer",
			theme: "striped",
			tsNavigationData: { surface: "channel-link" },
			xstyle: p.drawer,
			children: [
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}, E, { testid: "newsletter-link-drawer-header" })),
				S,
				R,
				L,
				v.map(function(e, t) {
					var n = e.icon, r = e.onClick, a = e.testid, i = e.title;
					return d.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						divider: !1,
						icon: n,
						onClick: r,
						testid: a,
						children: i
					}, a + "-" + t);
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

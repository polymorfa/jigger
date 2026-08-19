__d("WAWebLimitSharingDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLimitSharingGatingUtils",
	"WAWebLimitSharingUIUtils",
	"WAWebMediaUploadIcon.react",
	"WAWebNoop",
	"WAWebSecurityMessageLockIllustrationIcon.react",
	"WAWebText.react",
	"WAWebWdsIcAiFilledIcon.react",
	"WDSIconIcImage.react",
	"WDSSwitch.react",
	"cr:15980",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		headerIcon: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			height: "x1wkxgih",
			$$css: !0
		},
		defaultLineHeight: {
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		description: {
			paddingTop: "x1y1aw1k",
			$$css: !0
		},
		block: {
			marginTop: "xqui205",
			marginBottom: "x1hq5gj4",
			$$css: !0
		},
		feature: {
			paddingTop: "xyinxu5",
			paddingBottom: "x1g2khh7",
			":first-child_paddingTop": "x10zg81t",
			":last-child_paddingBottom": "xup0pd7",
			$$css: !0
		},
		featureImg: {
			paddingInlineEnd: "x64bnmy",
			color: "xhslqc4",
			$$css: !0
		},
		status: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			paddingTop: "x1xy6bms",
			paddingBottom: "x1t4gjm",
			$$css: !0
		},
		statusDescription: {
			paddingTop: "x1iorvi4",
			paddingBottom: "xjkvuk6",
			$$css: !0
		},
		spaceBefore: {
			"::before_content": "xjuopq5",
			"::before_whiteSpace": "xulcptl",
			$$css: !0
		}
	}, m = {
		as: "li",
		align: "center",
		xstyle: [d.feature, d.defaultLineHeight]
	}, p = {
		width: 24,
		height: 24,
		xstyle: d.featureImg
	};
	function _(e) {
		var t, n = e.chat, a = e.onClose, i = e.ref, l = o("useWAWebModelValues").useModelValues(n, [
			"id",
			"limitSharing",
			"groupMetadata"
		]), c = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(l), m = o("WAWebABProps").getABPropConfigValue("limit_sharing_update_enabled_web"), p = l.groupMetadata != null, _ = p && ((t = l.groupMetadata) == null || (t = t.participants) == null ? void 0 : t.iAmAdmin()) === !0, g = p && o("WAWebLimitSharingGatingUtils").isOpusAdminOnly(), h = g && !_, y = !m || h, C = function() {
			a == null || a();
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "limit-sharing-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "limit-sharing"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: C,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "padding-no-vertical",
				children: [
					u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						children: u.jsx(o("WAWebSecurityMessageLockIllustrationIcon.react").SecurityMessageLockIllustrationIcon, { xstyle: [d.headerIcon, d.block] })
					}),
					u.jsx(f, { useAdminOnlyDescription: g }),
					!o("WAWebLimitSharingGatingUtils").isOpusEnabled() && u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: d.status,
						justify: "all",
						align: m && !h ? "center" : "start",
						children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
							testid: "limit-sharing-drawer-settings",
							children: [
								s._(
									/*BTDS*/
									""
								),
								!m && u.jsx(o("WAWebText.react").WAWebTextMuted, {
									xstyle: d.statusDescription,
									testid: "limit-sharing-drawer-settings-description",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								h && u.jsx(o("WAWebText.react").WAWebTextMuted, {
									xstyle: d.statusDescription,
									testid: "limit-sharing-drawer-admin-only-subtitle",
									children: s._(
										/*BTDS*/
										""
									)
								})
							]
						}), u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(r("WDSSwitch.react"), {
							value: c,
							disabled: y,
							onChange: function() {
								return y ? r("WAWebNoop")() : void o("WAWebLimitSharingUIUtils").toggleLimitSharing(l);
							}
						}) })]
					})
				]
			}) })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.useAdminOnlyDescription;
		return o("WAWebLimitSharingGatingUtils").isOpusEnabled() && n("cr:15980") != null ? u.jsx(n("cr:15980"), {}) : o("WAWebLimitSharingGatingUtils").isLimitSharingContentUpdateJuly25Enabled() ? u.jsx(g, { useAdminOnlyDescription: t }) : u.jsx(h, {});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.useAdminOnlyDescription, n = c(function() {
			return [
				{
					icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
					text: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: u.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, babelHelpers.extends({}, p)),
					text: u.jsxs("div", { children: [
						s._(
							/*BTDS*/
							""
						),
						"\xA0",
						u.jsx("label", {
							className: "xuxw1ft",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						"\xA0",
						s._(
							/*BTDS*/
							""
						)
					] })
				},
				{
					icon: u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, babelHelpers.extends({}, p)),
					text: s._(
						/*BTDS*/
						""
					)
				}
			];
		}, []);
		return u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				"data-testid": "limit-sharing-drawer-description",
				className: "x1y1aw1k x1o2sk6j",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsxs(o("WAWebText.react").WAWebTextMuted, {
				testid: "limit-sharing-drawer-detail",
				xstyle: d.block,
				children: [t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebLimitSharingUIUtils").getSystemMessageLearnMoreURL(),
					xstyle: d.spaceBefore,
					children: r("WAWebFbtCommon")("Learn more")
				})]
			}),
			u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "limit-sharing-drawer-detail",
				children: t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx("ul", {
				className: "xqui205 x1hq5gj4",
				children: n.map(function(e, t) {
					return u.jsx(y, {
						icon: e.icon,
						text: e.text
					}, t);
				})
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		var e = c(function() {
			return [
				{
					icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
					text: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: u.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, babelHelpers.extends({}, p)),
					text: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: u.jsx(o("WAWebMediaUploadIcon.react").MediaUploadIcon, babelHelpers.extends({}, p)),
					text: s._(
						/*BTDS*/
						""
					)
				}
			];
		}, []);
		return u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebText.react").WAWebTextMuted, {
			testid: "limit-sharing-drawer-description",
			xstyle: d.description,
			children: [s._(
				/*BTDS*/
				""
			), u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebLimitSharingUIUtils").getSystemMessageLearnMoreURL(),
				xstyle: d.spaceBefore,
				children: r("WAWebFbtCommon")("Learn more")
			})]
		}), u.jsx("ul", {
			className: "xqui205 x1hq5gj4",
			children: e.map(function(e, t) {
				return u.jsx(y, {
					icon: e.icon,
					text: e.text
				}, t);
			})
		})] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.icon, n = e.text;
		return u.jsxs(o("WAWebFlex.react").FlexRow, babelHelpers.extends({}, m, { children: [t, n] }));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = _;
}), 226);

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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(30), a = e.chat, i = e.onClose, l = e.ref, c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			"id",
			"limitSharing",
			"groupMetadata"
		], n[0] = c) : c = n[0];
		var m = o("useWAWebModelValues").useModelValues(a, c), p;
		n[1] !== m ? (p = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(m), n[1] = m, n[2] = p) : p = n[2];
		var _ = p, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebABProps").getABPropConfigValue("limit_sharing_update_enabled_web"), n[3] = g) : g = n[3];
		var h = g, y = m.groupMetadata != null, C;
		if (n[4] !== ((t = m.groupMetadata) == null ? void 0 : t.participants) || n[5] !== y) {
			var b, v;
			C = y && ((b = m.groupMetadata) == null || (b = b.participants) == null ? void 0 : b.iAmAdmin()) === !0, n[4] = (v = m.groupMetadata) == null ? void 0 : v.participants, n[5] = y, n[6] = C;
		} else C = n[6];
		var S = C, R;
		n[7] !== y ? (R = y && o("WAWebLimitSharingGatingUtils").isOpusAdminOnly(), n[7] = y, n[8] = R) : R = n[8];
		var L = R, E = L && !S, k = !h || E, I;
		n[9] !== i ? (I = function() {
			i == null || i();
		}, n[9] = i, n[10] = I) : I = n[10];
		var T = I, D;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (D = {
			surface: "unknown",
			viewName: "limit-sharing"
		}, n[11] = D) : D = n[11];
		var x;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), n[12] = x) : x = n[12];
		var $;
		n[13] !== T ? ($ = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: x,
			onBack: T,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[13] = T, n[14] = $) : $ = n[14];
		var P;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebSecurityMessageLockIllustrationIcon.react").SecurityMessageLockIllustrationIcon, { xstyle: [d.headerIcon, d.block] })
		}), n[15] = P) : P = n[15];
		var N;
		n[16] !== L ? (N = u.jsx(f, { useAdminOnlyDescription: L }), n[16] = L, n[17] = N) : N = n[17];
		var M;
		n[18] !== m || n[19] !== _ || n[20] !== E || n[21] !== k ? (M = !o("WAWebLimitSharingGatingUtils").isOpusEnabled() && u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.status,
			justify: "all",
			align: h && !E ? "center" : "start",
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				testid: "limit-sharing-drawer-settings",
				children: [
					s._(
						/*BTDS*/
						""
					),
					!h && u.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: d.statusDescription,
						testid: "limit-sharing-drawer-settings-description",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					E && u.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: d.statusDescription,
						testid: "limit-sharing-drawer-admin-only-subtitle",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			}), u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(r("WDSSwitch.react"), {
				value: _,
				disabled: k,
				onChange: function() {
					return k ? r("WAWebNoop")() : void o("WAWebLimitSharingUIUtils").toggleLimitSharing(m);
				}
			}) })]
		}), n[18] = m, n[19] = _, n[20] = E, n[21] = k, n[22] = M) : M = n[22];
		var w;
		n[23] !== N || n[24] !== M ? (w = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-vertical",
			children: [
				P,
				N,
				M
			]
		}) }), n[23] = N, n[24] = M, n[25] = w) : w = n[25];
		var A;
		return n[26] !== l || n[27] !== w || n[28] !== $ ? (A = u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: l,
			testid: "limit-sharing-drawer",
			tsNavigationData: D,
			children: [$, w]
		}), n[26] = l, n[27] = w, n[28] = $, n[29] = A) : A = n[29], A;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(4), r = e.useAdminOnlyDescription;
		if (o("WAWebLimitSharingGatingUtils").isOpusEnabled() && n("cr:15980") != null) {
			var a;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(n("cr:15980"), {}), t[0] = a) : a = t[0], a;
		}
		if (o("WAWebLimitSharingGatingUtils").isLimitSharingContentUpdateJuly25Enabled()) {
			var i;
			return t[1] !== r ? (i = u.jsx(g, { useAdminOnlyDescription: r }), t[1] = r, t[2] = i) : i = t[2], i;
		}
		var l;
		return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(h, {}), t[3] = l) : l = t[3], l;
	}
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
		var t = o("react-compiler-runtime").c(3), n = e.icon, r = e.text, a;
		return t[0] !== n || t[1] !== r ? (a = u.jsxs(o("WAWebFlex.react").FlexRow, babelHelpers.extends({}, m, { children: [n, r] })), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	l.default = _;
}), 226);

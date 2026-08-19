__d("WAWebCustomerProfileSelectField.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebUimUie.react",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = c.useState, f = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			marginInlineStart: "xvc5jky",
			flexShrink: "x2lah0s",
			opacity: "xg01cxk x5b7970",
			$$css: !0
		},
		editButton: {
			alignItems: "x6s0dn4",
			background: "x11g6tue",
			borderTopColor: "x1v8p93f",
			borderBottomColor: "x16stqrj",
			borderTopStyle: "x1ejq31n",
			borderBottomStyle: "x1sy0etr",
			borderTopWidth: "x972fbf",
			borderBottomWidth: "x1qhh985",
			borderInlineStartColor: "xv5lvn5",
			borderInlineEndColor: "x1o3jo1z",
			borderInlineStartStyle: "xstzfhl",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartWidth: "x14e42zd",
			borderInlineEndWidth: "x10w94by",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			color: "xhslqc4",
			cursor: "x1ypdohk",
			display: "x78zum5",
			height: "xzpcc6d",
			justifyContent: "xl56j7k",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			width: "x1xephfl",
			":hover_backgroundColor": "x1nsvvxn",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		},
		fieldContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		editFieldRow: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		selectTrigger: {
			alignItems: "x6s0dn4",
			background: "x11g6tue",
			borderTopColor: "x1v8p93f",
			borderBottomColor: "x16stqrj",
			borderTopStyle: "x1ejq31n",
			borderBottomStyle: "x1sy0etr",
			borderTopWidth: "x972fbf",
			borderBottomWidth: "x1qhh985",
			borderInlineStartColor: "xv5lvn5",
			borderInlineEndColor: "x1o3jo1z",
			borderInlineStartStyle: "xstzfhl",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartWidth: "x14e42zd",
			borderInlineEndWidth: "x10w94by",
			color: "x14ug900",
			cursor: "x1ypdohk",
			display: "x78zum5",
			fontFamily: "xjb2p0i",
			fontSize: "x1qlqyl8",
			justifyContent: "x1qughib",
			lineHeight: "x15bjb6t",
			outline: "x1a2a7pz",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		editActions: {
			columnGap: "x1trrmfo",
			marginTop: "x1380le5",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.icon, n = e.label, a = e.onSave, i = e.options, l = e.placeholder, c = e.testid, g = e.value, h = _(!1), y = h[0], C = h[1], b = _(g), v = b[0], S = b[1], R = p(null), L = i.find(function(e) {
			return e.value === g;
		}), E = i.find(function(e) {
			return e.value === v;
		}), k = d(function() {
			S(g), C(!0);
		}, [g]), I = d(function() {
			S(g), C(!1);
		}, [g]), T = d(function() {
			v != null && v !== g && a(v), C(!1);
		}, [
			v,
			a,
			g
		]), D = m(function() {
			return u.jsx(r("WDSMenu.react"), { children: i.map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					isToggleable: !0,
					onPress: function() {
						return S(e.value);
					},
					testid: c + "-option-" + e.value,
					title: e.label,
					toggled: v === e.value
				}, e.value);
			}) });
		}, [
			v,
			i,
			c
		]), x = r("useWDSMenu")({
			targetRef: R,
			menu: D,
			dismissable: !0
		}), $ = x.closeMenu, P = x.isMenuOpen, N = x.menuPortal, M = x.openMenu, w = d(function(e) {
			P ? $() : M(e);
		}, [
			$,
			P,
			M
		]), A = d(function(e) {
			R.current = e;
		}, []);
		if (y) {
			var F, O;
			return u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "CustomerProfileSelectFieldEdit",
				escapable: !0,
				requestDismiss: I,
				children: u.jsxs((O = o("WAWebFlex.react")).FlexColumn, {
					align: "stretch",
					xstyle: f.row,
					testid: c + "-edit",
					children: [
						u.jsxs(O.FlexRow, {
							xstyle: f.editFieldRow,
							gap: 12,
							children: [u.jsx(O.FlexItem, {
								align: "center",
								justify: "center",
								xstyle: f.iconContainer,
								children: t
							}), u.jsx(O.FlexColumn, {
								xstyle: f.fieldContainer,
								children: u.jsxs("fieldset", {
									className: "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3",
									children: [u.jsx("legend", {
										className: "xhslqc4 x1pg5gke x181vq82 x1uc92m",
										children: n
									}), u.jsxs(r("WAWebUnstyledButton.react"), {
										xstyle: f.selectTrigger,
										"aria-expanded": P,
										"aria-haspopup": "menu",
										onClick: w,
										ref: A,
										testid: c + "-select-trigger",
										children: [u.jsx(r("WDSText.react"), {
											type: "Body1",
											colorName: E != null ? "contentDefault" : "contentDeemphasized",
											maxLines: 1,
											children: (F = E == null ? void 0 : E.label) != null ? F : l
										}), u.jsx(r("WDSIconIcArrowDropDown.react"), {
											height: 20,
											width: 20
										})]
									})]
								})
							})]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							justify: "end",
							xstyle: f.editActions,
							children: [u.jsx(r("WDSButton.react"), {
								Icon: r("WDSIconIcClose.react"),
								size: "small",
								variant: "tonal",
								onPress: I,
								testid: c + "-cancel",
								"aria-label": s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSButton.react"), {
								Icon: r("WDSIconIcCheck.react"),
								size: "small",
								variant: "filled",
								disabled: v == null,
								onPress: T,
								testid: c + "-confirm",
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})]
						}),
						N
					]
				})
			});
		}
		return u.jsx("div", {
			"data-testid": c,
			role: "group",
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: f.row,
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: f.iconContainer,
						children: t
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.fieldContainer,
						children: L != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: n
						}), u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							maxLines: 1,
							children: L.label
						})] }) : u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: n
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: f.editButtonContainer,
						children: u.jsx(r("WAWebUnstyledButton.react"), {
							xstyle: f.editButton,
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._param("fieldLabel", n)]
							),
							onClick: k,
							testid: c + "-edit-button",
							children: u.jsx(r("WDSIconIcEdit.react"), {
								width: 20,
								height: 20
							})
						})
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);

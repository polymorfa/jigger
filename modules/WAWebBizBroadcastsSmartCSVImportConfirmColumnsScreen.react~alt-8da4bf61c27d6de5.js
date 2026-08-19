__d("WAWebBizBroadcastsSmartCSVImportConfirmColumnsScreen.react", [
	"fbt",
	"WAWebBizBroadcastsSmartCSVImportContactUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = 240, _ = 3, f = {
		columnSection: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		controlsStyle: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		previewCard: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "xvpt6g3",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xdx6fka",
			rowGap: "x1f0uite",
			$$css: !0
		},
		root: {
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		sectionIntro: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		title: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function g(e) {
		var t, n, a = e.contacts, i = e.context, l = e.onClose, c = e.onContinue, p = i.detection, g = R(i), y = p.phoneColumn, b = m((t = g == null ? void 0 : g.header) != null ? t : null), v = b[0], S = b[1], L = m((n = y == null ? void 0 : y.header) != null ? n : i.headerRow.length > 0 ? i.headerRow[0] : null), E = L[0], k = L[1], I = d(), T = E != null && o("WAWebBizBroadcastsSmartCSVImportContactUtils").isSmartCSVImportPhoneHeaderValid(a, i, E), D = E != null && !T;
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: u.jsx(r("WDSButton.react"), {
				disabled: !T,
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					!T || E == null || c({
						nameHeader: v,
						phoneHeader: E
					});
				},
				variant: "filled",
				testid: "biz-broadcasts-confirm-columns-continue-button"
			}),
			onOverlayClick: l,
			testid: "biz-broadcasts-confirm-columns-modal",
			controlsStyle: f.controlsStyle,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.root,
				children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: f.header,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onPress: l,
						variant: "borderless",
						testid: "biz-broadcasts-confirm-columns-close-button"
					}), u.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						xstyle: f.title,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.content,
					children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						xstyle: f.columnSection,
						children: [
							u.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "stretch",
								xstyle: f.sectionIntro,
								children: [u.jsx(r("WDSText.react"), {
									type: "Body1Emphasized",
									colorName: "contentDefault",
									children: s._(
										/*BTDS*/
										""
									)
								}), u.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								})]
							}),
							u.jsx(h, {
								headers: i.headerRow,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								testid: "biz-broadcasts-confirm-columns-name-select",
								value: v
							}),
							u.jsx(h, {
								headers: i.headerRow,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: k,
								testid: "biz-broadcasts-confirm-columns-phone-select",
								value: E,
								isInvalid: D,
								describedById: D ? I : void 0
							}),
							D ? u.jsx("div", {
								id: I,
								children: u.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "secondaryNegative",
									children: s._(
										/*BTDS*/
										""
									)
								})
							}) : null
						]
					}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						xstyle: f.previewCard,
						children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: f.sectionIntro,
							children: [u.jsx(r("WDSText.react"), {
								type: "Body1Emphasized",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						}), u.jsx(C, {
							contacts: a.slice(0, _),
							context: i,
							nameHeader: v,
							phoneHeader: E,
							showPhoneValues: T
						})]
					})]
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.describedById, n = t === void 0 ? null : t, r = e.headers, a = e.isInvalid, i = a === void 0 ? !1 : a, l = e.label, c = e.onChange, d = e.testid, m = e.value, _ = y(r, m), f = _ == null ? null : String(_);
		function g(e) {
			var t, n = Number(e);
			c((t = r[n]) != null ? t : null);
		}
		return u.jsx("div", {
			"aria-describedby": n != null ? n : void 0,
			"aria-invalid": i,
			children: u.jsx(o("WAWebSelect.react").Select, {
				ariaRoleDescription: l,
				defaultLabel: s._(
					/*BTDS*/
					""
				),
				initialSelection: f,
				label: l,
				menuMaxHeight: p,
				onChange: g,
				testid: d,
				theme: "about-20-screen",
				width: "100%",
				children: r.map(function(e, t) {
					return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
						optionId: String(t),
						primary: b(t, e),
						searchCriteria: e,
						testid: d + "-option-" + t
					}, t + ":" + e);
				})
			}, f != null ? f : "")
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e, t) {
		if (t == null) return null;
		var n = e.indexOf(t);
		return n === -1 ? null : n;
	}
	function C(e) {
		var t = e.contacts, n = e.context, a = e.nameHeader, i = e.phoneHeader, l = e.showPhoneValues, c = v(n, a), d = v(n, i), m = n.sampleRows.slice(0, _);
		return u.jsxs("div", {
			className: "xs2akgl xrvj5dj xcjjqqt x8a3fw1",
			children: [
				u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDeemphasized",
					children: a != null ? a : s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDeemphasized",
					children: i != null ? i : s._(
						/*BTDS*/
						""
					)
				}),
				m.map(function(e, n) {
					var a, i, s, m, p = t[n];
					return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						children: (i = S(e, c)) != null ? i : p != null ? o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(p) : ""
					}), u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						children: l && (s = (m = S(e, d)) != null ? m : p == null ? void 0 : p.phone) != null ? s : ""
					})] }, (a = p == null ? void 0 : p.rowIndex) != null ? a : n);
				}),
				m.length === 0 ? t.map(function(e) {
					return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						children: o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(e)
					}), u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						children: l ? e.phone : ""
					})] }, e.rowIndex);
				}) : null
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("column number", e + 1), s._param("column header", t)]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t) {
		if (t == null) return null;
		var n = e.headerRow.indexOf(t);
		return n === -1 ? null : n;
	}
	function S(e, t) {
		if (t == null) return null;
		var n = e[t];
		if (typeof n != "string") return null;
		var r = n.trim();
		return r === "" ? null : r;
	}
	function R(e) {
		var t, n, r = e.detection;
		return (t = (n = r.fullNameColumn) != null ? n : r.firstNameColumn) != null ? t : r.lastNameColumn;
	}
	l.default = g;
}), 226);

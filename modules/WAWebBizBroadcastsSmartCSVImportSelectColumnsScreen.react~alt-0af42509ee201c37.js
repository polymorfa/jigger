__d("WAWebBizBroadcastsSmartCSVImportSelectColumnsScreen.react", [
	"fbt",
	"WAWebContactImportSmartColumnDetection",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"countWhere",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = "min(92vh, 648px)", _ = "min(92vw, 436px)", f = {
		content: {
			minHeight: "x2lwn1j",
			overflowY: "x1odjw0f",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		fieldWithHelper: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		footer: {
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		previewCard: {
			backgroundColor: "x1h3rtpe",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "xv6tirj",
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xdx6fka",
			rowGap: "x121sasi",
			$$css: !0
		},
		previewHeader: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			height: "x22hwcn",
			paddingBottom: "xv6tirj",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1j3ira4",
			width: "xo89u87",
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
	}, g = 3, h = 240, y = .7;
	function C(e) {
		var t, n, a, i, l, c, p = e.allHeaders, _ = e.detection, g = e.onCancel, h = e.onConfirm, y = e.previewRows, C = (t = _.phoneColumn) == null ? void 0 : t.columnIndex, S = (n = (a = _.fullNameColumn) == null ? void 0 : a.columnIndex) != null ? n : (i = _.firstNameColumn) == null ? void 0 : i.columnIndex, E = ((l = _.phoneColumn) == null ? void 0 : l.confidence) === "medium", k = m(E ? C : null), I = k[0], T = k[1], D = m(E ? S : null), x = D[0], $ = D[1], P = d(), N = I != null && ((c = _.phoneColumn) == null ? void 0 : c.columnIndex) === I, M = I != null && (N || L(y, I)), w = I != null && !M, A = I != null && M, F = M ? I : null, O = x != null || F != null || w, B = R();
		function W() {
			A && h({
				nameColumnIndex: x,
				phoneColumnIndex: I
			});
		}
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onOverlayClick: g,
			testid: "biz-broadcasts-column-picker-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.root,
				children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					grow: 1,
					xstyle: f.content,
					children: [
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: f.header,
							children: [u.jsx(r("WDSButton.react"), {
								Icon: r("WDSIconIcClose.react"),
								"aria-label": s._(
									/*BTDS*/
									""
								),
								onPress: g,
								variant: "borderless",
								testid: "biz-broadcasts-column-picker-close-button"
							}), u.jsx(r("WDSText.react"), {
								type: "Body1Emphasized",
								colorName: "contentDefault",
								xstyle: f.title,
								children: s._(
									/*BTDS*/
									""
								)
							})]
						}),
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
						u.jsx(v, {
							headers: p,
							value: x,
							onChange: $,
							label: s._(
								/*BTDS*/
								""
							),
							placeholder: s._(
								/*BTDS*/
								""
							),
							testid: "biz-broadcasts-column-picker-name-select"
						}),
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: f.fieldWithHelper,
							children: [u.jsx(v, {
								headers: p,
								value: I,
								onChange: T,
								label: B,
								placeholder: B,
								testid: "biz-broadcasts-column-picker-phone-select",
								isInvalid: w,
								describedById: w ? P : void 0
							}), I == null || w ? u.jsx("div", {
								id: P,
								children: u.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: w ? "secondaryNegative" : "contentDeemphasized",
									children: w ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})
							}) : null]
						}),
						O ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: f.previewCard,
							children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "stretch",
								xstyle: f.previewHeader,
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
							}), u.jsx(b, {
								allHeaders: p,
								nameColumnIndex: x,
								phoneColumnIndex: F,
								previewRows: y
							})]
						}) : null
					]
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					xstyle: f.footer,
					children: u.jsx(r("WDSButton.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						variant: "filled",
						disabled: !A,
						onPress: W,
						testid: "biz-broadcasts-column-picker-apply-button"
					})
				})]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.allHeaders, n = e.nameColumnIndex, o = e.phoneColumnIndex, a = e.previewRows, i = a.slice(0, g), l = n != null, s = o != null;
		return u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "xs2akgl xrvj5dj x8a3fw1 xcjjqqt" },
			1: { className: "xs2akgl xrvj5dj x8a3fw1 x1mkdm3x" }
		}[(!l || !s) << 0], { children: [
			n != null ? u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: t[n]
			}) : null,
			o != null ? u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: t[o]
			}) : null,
			i.map(function(e, t) {
				var a, i;
				return u.jsxs(u.Fragment, { children: [n != null ? u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: (a = e[n]) != null ? a : ""
				}) : null, o != null ? u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: (i = e[o]) != null ? i : ""
				}) : null] }, t);
			})
		] }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.describedById, n = t === void 0 ? null : t, r = e.headers, a = e.isInvalid, i = a === void 0 ? !1 : a, l = e.label, s = e.onChange, c = e.placeholder, d = e.testid, m = e.value;
		function p(e) {
			s(Number(e));
		}
		return u.jsx("div", {
			"aria-describedby": n != null ? n : void 0,
			"aria-invalid": i,
			children: u.jsx(o("WAWebSelect.react").Select, {
				ariaRoleDescription: l,
				defaultLabel: c,
				initialSelection: m == null ? void 0 : String(m),
				label: l,
				menuMaxHeight: h,
				onChange: p,
				testid: d,
				theme: "about-20-screen",
				width: "100%",
				children: r.map(function(e, t) {
					return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
						optionId: String(t),
						primary: S(t, e),
						searchCriteria: e,
						testid: d + "-option-" + t
					}, t);
				})
			}, m == null ? "" : String(m))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		return "Column " + (e + 1) + ": " + t;
	}
	function R() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function L(e, t) {
		var n = e.slice(0, g).map(function(e) {
			var n;
			return (n = e[t]) != null ? n : "";
		}).filter(function(e) {
			return e.trim() !== "";
		});
		if (n.length === 0) return !1;
		var a = r("countWhere")(n, o("WAWebContactImportSmartColumnDetection").looksLikePhoneValue);
		return a / n.length >= y;
	}
	l.default = C;
}), 226);

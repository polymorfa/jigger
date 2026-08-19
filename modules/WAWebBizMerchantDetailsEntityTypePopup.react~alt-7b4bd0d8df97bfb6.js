__d("WAWebBizMerchantDetailsEntityTypePopup.react", [
	"fbt",
	"WAWebBizComplianceUtil",
	"WAWebBusinessProfileTypes",
	"WAWebButton.react",
	"WAWebComplianceConstants",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = {
		cursorPointer: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		footer: {
			backgroundColor: "x1280gxy",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			paddingTop: "x889kno",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		indentedOption: {
			marginInlineStart: "xvc51xn",
			$$css: !0
		},
		inputWrapper: {
			alignSelf: "xamitd3",
			display: "x78zum5",
			paddingInlineEnd: "x1xnnf8n",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.legalEntityDetails, n = e.onSave, a = _(t == null ? void 0 : t.entityType), i = a[0], l = a[1], u = _(t == null ? void 0 : t.entityTypeCustom), d = u[0], g = u[1], y = _(t == null ? void 0 : t.isRegistered), C = y[0], b = y[1];
		p(function() {
			i !== (t == null ? void 0 : t.entityType) && (g(""), b(!1));
		}, [i, t == null ? void 0 : t.entityType]);
		var v = m(function() {
			o("WAWebModalManager").ModalManager.close(), n({
				entityType: i,
				entityTypeCustom: d,
				isRegistered: C
			});
		}, [
			i,
			d,
			C,
			n
		]), S = m(function(e) {
			l(e.target.value);
		}, []), R = m(function(e) {
			return b(e.target.checked);
		}, []), L = c.jsx(h, {
			value: C,
			label: s._(
				/*BTDS*/
				""
			),
			inputType: "checkbox",
			xstyle: f.indentedOption,
			onChange: R,
			"data-testid": "registered"
		});
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			children: c.jsxs(r("WAWebDrawer.react"), {
				theme: "settings",
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-merchant-entity-type"
				},
				children: [
					c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							""
						),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onCancel: o("WAWebModalManager").closeModalManager
					}),
					c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("form", {
						className: "xqy66fx x5zjp28 xr1496l x162tt16",
						children: c.jsxs("ol", { children: [
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.limitedLiabilityPartnership,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "limited-liability-partnership"
							}),
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.soleProprietorship,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "sole-proprietorship"
							}),
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.partnership,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "partnership"
							}),
							i === o("WAWebBusinessProfileTypes").businessTypeOptions.partnership && L,
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.publicCompany,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "public-company"
							}),
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.privateCompany,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "private-company"
							}),
							c.jsx(h, {
								id: o("WAWebBusinessProfileTypes").businessTypeOptions.other,
								value: i,
								label: s._(
									/*BTDS*/
									""
								),
								onChange: S,
								"data-testid": "other"
							}),
							i === o("WAWebBusinessProfileTypes").businessTypeOptions.other && c.jsxs(c.Fragment, { children: [c.jsx("div", {
								className: "xvc51xn",
								"data-testid": "other-input",
								children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
									value: d,
									editable: !0,
									maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.ENTITY_TYPE_CUSTOM,
									inputPlaceholder: s._(
										/*BTDS*/
										""
									),
									showRemaining: !0,
									onChange: function(t) {
										var e = t.text;
										return g(e);
									},
									theme: "text-input",
									lowProfile: !0
								})
							}), L] })
						] })
					}) }),
					c.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "end",
						xstyle: f.footer,
						children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							onClick: v,
							disabled: i === o("WAWebBusinessProfileTypes").businessTypeOptions.other && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(d),
							children: s._(
								/*BTDS*/
								""
							)
						}) })
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var n = t["data-testid"], a = n === void 0 ? "merchant-details-entity-type-option-popup" : n, i = t.id, l = t.inputType, s = l === void 0 ? "radio" : l, u = t.label, d = t.onChange, m = t.value, p = t.xstyle, _ = i || u.toString();
		return c.jsx("li", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.cursorPointer, p), { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [c.jsx(r("WAWebFlexItem.react"), {
				xstyle: f.inputWrapper,
				children: c.jsx("input", {
					id: _,
					value: _,
					type: s,
					name: "entityType",
					checked: s === "radio" ? m === _ : m,
					className: "x1ypdohk",
					onChange: d
				})
			}), c.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				children: c.jsx("label", {
					htmlFor: _,
					className: "x1lliihq x1lkfr7t x889kno xyri2b x1a8lsjc x1c1uobl x1ypdohk",
					"data-testid": a + "-label",
					children: u
				})
			})]
		}) }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);

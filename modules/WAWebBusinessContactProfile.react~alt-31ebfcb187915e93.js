__d("WAWebBusinessContactProfile.react", [
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebBusinessProfileTextField.react",
	"WAWebFlex.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebValidationUtils",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcCall.react",
	"WDSIconIcKey.react",
	"WDSIconIcMail.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		container: {
			paddingInlineStart: "xdx6fka",
			position: "x1n2onr6",
			$$css: !0
		},
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
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
		textFieldWrapper: {
			flex: "x98rzlu",
			$$css: !0
		},
		usernameKeyBadge: {
			backgroundColor: "x6egj2d",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		usernameKeyIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.about, n = e.email, a = e.hideAbout, i = e.isAgentProfileLocked, l = e.onChange, d = e.onLockedFieldClick, p = e.onValidationChange, _ = e.phoneNumber, f = e.username, g = e.usernameKey, h = u(n != null ? n : ""), y = h[0], C = h[1], b = u(!1), v = b[0], S = b[1], R = function(t, n) {
			C(n);
			var e = o("WAWebValidationUtils").validateEmail(n);
			S(!e), p && p(e), l && l(t, n);
		}, L = function() {
			var e = y != null && y.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickEmail(e);
		}, E = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled();
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.container,
			children: [
				s.jsx(r("WAWebBusinessProfileTextField.react"), {
					editable: !0,
					fieldName: "email",
					icon: s.jsx(r("WDSIconIcMail.react"), {}),
					label: o("WAWebBusinessProfileLabels").getEmailLabel(),
					locked: i,
					testid: "biz_profile_email_textfield",
					value: y,
					onChange: R,
					onClick: L,
					onLockedClick: i === !0 && d != null ? function() {
						return d(o("WAWebBusinessProfileLabels").getEmailLabel());
					} : void 0,
					error: v,
					errorText: o("WAWebBusinessProfileLabels").getEmailErrorLabel()
				}),
				a !== !0 && (E ? s.jsx(r("WDSTooltip.react"), {
					label: o("WAWebBusinessProfileLabels").getAboutNotEditableLabel(),
					position: "end",
					children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
						editable: !1,
						icon: s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
						label: o("WAWebBusinessProfileLabels").getAboutLabel(),
						testid: "biz_profile_about_textfield",
						value: t != null ? t : ""
					})
				}) : s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					role: "group",
					"aria-label": o("WAWebBusinessProfileLabels").getAboutLabel(),
					xstyle: c.fieldContainer,
					children: [s.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: c.iconContainer,
						children: s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {})
					}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "start",
						grow: 1,
						children: [s.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: o("WAWebBusinessProfileLabels").getAboutLabel()
						}), s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: t != null ? t : ""
						})]
					})]
				})),
				E ? s.jsx(r("WDSTooltip.react"), {
					label: o("WAWebBusinessProfileLabels").getPhoneNumberNotEditableLabel(),
					position: "end",
					children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
						editable: !1,
						icon: s.jsx(r("WDSIconIcCall.react"), {}),
						label: o("WAWebBusinessProfileLabels").getPhoneNumberLabel(),
						testid: "biz_profile_phone_textfield",
						value: _ != null ? _ : ""
					})
				}) : s.jsx(m, {
					icon: s.jsx(r("WDSIconIcCall.react"), {}),
					phoneNumberValue: _,
					label: o("WAWebBusinessProfileLabels").getPhoneNumberNotEditableLabel()
				}),
				f != null && (E ? s.jsx(r("WDSTooltip.react"), {
					label: o("WAWebBusinessProfileLabels").getUsernameNotEditableLabel(),
					position: "end",
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 12,
						role: "group",
						"aria-label": o("WAWebBusinessProfileLabels").getUsernameLabel(),
						xstyle: c.fieldContainer,
						children: [s.jsx(o("WAWebFlex.react").FlexItem, {
							align: "center",
							justify: "center",
							xstyle: c.iconContainer,
							children: s.jsx(r("WDSIconIcAlternateEmail.react"), {})
						}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "start",
							grow: 1,
							children: [
								s.jsx(r("WDSText.react"), {
									type: "Body3",
									colorName: "contentDeemphasized",
									children: o("WAWebBusinessProfileLabels").getUsernameLabel()
								}),
								s.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: f
								}),
								g != null && s.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									gap: 8,
									xstyle: c.usernameKeyBadge,
									children: [s.jsx(r("WDSIconIcKey.react"), { xstyle: c.usernameKeyIcon }), s.jsx(r("WDSText.react"), {
										type: "Body2",
										colorName: "contentDeemphasized",
										children: g
									})]
								})
							]
						})]
					})
				}) : s.jsx(m, {
					icon: s.jsx(r("WDSIconIcAlternateEmail.react"), {}),
					phoneNumberValue: f,
					label: o("WAWebBusinessProfileLabels").getUsernameNotEditableLabel()
				}))
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.icon, n = e.label, a = e.phoneNumberValue;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			role: "group",
			"aria-label": n,
			xstyle: c.fieldContainer,
			children: [s.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: c.iconContainer,
				children: t
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 4,
				xstyle: c.textFieldWrapper,
				children: [s.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: a
				}), s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: n
				})]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);

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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(32), n = e.about, a = e.email, i = e.hideAbout, l = e.isAgentProfileLocked, d = e.onChange, p = e.onLockedFieldClick, _ = e.onValidationChange, f = e.phoneNumber, g = e.username, h = e.usernameKey, y = u(a != null ? a : ""), C = y[0], b = y[1], v = u(!1), S = v[0], R = v[1], L;
		t[0] !== d || t[1] !== _ ? (L = function(t, n) {
			b(n);
			var e = o("WAWebValidationUtils").validateEmail(n);
			R(!e), _ && _(e), d && d(t, n);
		}, t[0] = d, t[1] = _, t[2] = L) : L = t[2];
		var E = L, k;
		t[3] !== C ? (k = function() {
			var e = C != null && C.trim() !== "";
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickEmail(e);
		}, t[3] = C, t[4] = k) : k = t[4];
		var I = k, T;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), t[5] = T) : T = t[5];
		var D = T, x, $;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (x = s.jsx(r("WDSIconIcMail.react"), {}), $ = o("WAWebBusinessProfileLabels").getEmailLabel(), t[6] = x, t[7] = $) : (x = t[6], $ = t[7]);
		var P;
		t[8] !== l || t[9] !== p ? (P = l === !0 && p != null ? function() {
			return p(o("WAWebBusinessProfileLabels").getEmailLabel());
		} : void 0, t[8] = l, t[9] = p, t[10] = P) : P = t[10];
		var N;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (N = o("WAWebBusinessProfileLabels").getEmailErrorLabel(), t[11] = N) : N = t[11];
		var M;
		t[12] !== C || t[13] !== E || t[14] !== I || t[15] !== S || t[16] !== l || t[17] !== P ? (M = s.jsx(r("WAWebBusinessProfileTextField.react"), {
			editable: !0,
			fieldName: "email",
			icon: x,
			label: $,
			locked: l,
			testid: "biz_profile_email_textfield",
			value: C,
			onChange: E,
			onClick: I,
			onLockedClick: P,
			error: S,
			errorText: N
		}), t[12] = C, t[13] = E, t[14] = I, t[15] = S, t[16] = l, t[17] = P, t[18] = M) : M = t[18];
		var w;
		t[19] !== n || t[20] !== i ? (w = i !== !0 && (D ? s.jsx(r("WDSTooltip.react"), {
			label: o("WAWebBusinessProfileLabels").getAboutNotEditableLabel(),
			position: "end",
			children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !1,
				icon: s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
				label: o("WAWebBusinessProfileLabels").getAboutLabel(),
				testid: "biz_profile_about_textfield",
				value: n != null ? n : ""
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
					children: n != null ? n : ""
				})]
			})]
		})), t[19] = n, t[20] = i, t[21] = w) : w = t[21];
		var A;
		t[22] !== f ? (A = D ? s.jsx(r("WDSTooltip.react"), {
			label: o("WAWebBusinessProfileLabels").getPhoneNumberNotEditableLabel(),
			position: "end",
			children: s.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !1,
				icon: s.jsx(r("WDSIconIcCall.react"), {}),
				label: o("WAWebBusinessProfileLabels").getPhoneNumberLabel(),
				testid: "biz_profile_phone_textfield",
				value: f != null ? f : ""
			})
		}) : s.jsx(m, {
			icon: s.jsx(r("WDSIconIcCall.react"), {}),
			phoneNumberValue: f,
			label: o("WAWebBusinessProfileLabels").getPhoneNumberNotEditableLabel()
		}), t[22] = f, t[23] = A) : A = t[23];
		var F;
		t[24] !== g || t[25] !== h ? (F = g != null && (D ? s.jsx(r("WDSTooltip.react"), {
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
							children: g
						}),
						h != null && s.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							gap: 8,
							xstyle: c.usernameKeyBadge,
							children: [s.jsx(r("WDSIconIcKey.react"), { xstyle: c.usernameKeyIcon }), s.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: h
							})]
						})
					]
				})]
			})
		}) : s.jsx(m, {
			icon: s.jsx(r("WDSIconIcAlternateEmail.react"), {}),
			phoneNumberValue: g,
			label: o("WAWebBusinessProfileLabels").getUsernameNotEditableLabel()
		})), t[24] = g, t[25] = h, t[26] = F) : F = t[26];
		var O;
		return t[27] !== A || t[28] !== F || t[29] !== M || t[30] !== w ? (O = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.container,
			children: [
				M,
				w,
				A,
				F
			]
		}), t[27] = A, t[28] = F, t[29] = M, t[30] = w, t[31] = O) : O = t[31], O;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.icon, a = e.label, i = e.phoneNumberValue, l;
		t[0] !== n ? (l = s.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: c.iconContainer,
			children: n
		}), t[0] = n, t[1] = l) : l = t[1];
		var u;
		t[2] !== i ? (u = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: i
		}), t[2] = i, t[3] = u) : u = t[3];
		var d;
		t[4] !== a ? (d = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: a
		}), t[4] = a, t[5] = d) : d = t[5];
		var m;
		t[6] !== u || t[7] !== d ? (m = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 4,
			xstyle: c.textFieldWrapper,
			children: [u, d]
		}), t[6] = u, t[7] = d, t[8] = m) : m = t[8];
		var p;
		return t[9] !== a || t[10] !== l || t[11] !== m ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			role: "group",
			"aria-label": a,
			xstyle: c.fieldContainer,
			children: [l, m]
		}), t[9] = a, t[10] = l, t[11] = m, t[12] = p) : p = t[12], p;
	}
	l.default = d;
}), 98);

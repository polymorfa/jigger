__d("WAWebWindowsLanguageDropdownButton.react", [
	"fbt",
	"WALogger",
	"WAWebButton.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebDropdownV2.react",
	"WAWebErrorBoundary.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebL10N",
	"WAWebL10NCoerceToFBLocale",
	"WAWebL10NConstants",
	"WAWebL10NGetSystemLocale",
	"WAWebL10nGetRenderedLocale",
	"WAWebLanguageDropdownUtils",
	"WAWebMenuItems.react",
	"WAWebModalManager",
	"WAWebSelectMenuItem.react",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWindowsLanguageConfirmModalDialog.react",
	"WAWebWorldIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.Suspense, f = p.use, g = p.useMemo, h = p.useState, y = {
		buttonTextContent: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			textAlign: "x1yc453h",
			color: "x14ug900",
			$$css: !0
		},
		menu: {
			overflowY: "x1odjw0f",
			paddingInlineStart: "xyiysdx",
			paddingInlineEnd: "x14vy60q",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		buttonContent: {
			color: "xhslqc4",
			marginBottom: "xat24cr",
			marginTop: "xdj266r",
			marginInlineEnd: "xfanx6s",
			marginInlineStart: "x1dpg1xm",
			$$css: !0
		},
		languageIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, C = o("WAWebL10NGetSystemLocale").getSystemLocale(), b = function(t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("language_name", t)]
		).toString();
	}, v = function(t, n) {
		var e;
		return (e = n.find(function(e) {
			return e.locale === t;
		})) == null ? void 0 : e.languageNameTranslatedToUserLocale;
	}, S = async function(n) {
		try {
			await r("WAWebL10N").setLocale(n, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, !1), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageDropdownButton: locale changed"])));
		} catch (e) {
			throw o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageDropdownButton: locale change -"]))), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
				action: {
					dismiss: !0,
					actionText: r("WAWebFbtCommon")("OK")
				},
				msg: s._(
					/*BTDS*/
					""
				)
			})), e;
		}
	}, R = function(t) {
		return t.reduce(function(e, t) {
			return t.locale === C || e.push(m.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
				optionId: t.locale,
				primary: t.languageNameTranslatedToUserLocale + ", " + t.languageNameInOriginalLocale
			}, t.locale)), e;
		}, []);
	};
	function L() {
		var e = h(!1), t = e[0], n = e[1], r = async function(t) {
			await S(t), n(!0);
		}, a = m.jsx(k, {
			disabled: !0,
			spinner: !0,
			children: s._(
				/*BTDS*/
				""
			)
		}), i = m.jsx(k, {
			disabled: !0,
			children: s._(
				/*BTDS*/
				""
			)
		}), l = g(function() {
			return o("WAWebLanguageDropdownUtils").getLanguageDropdownItems();
		}, []);
		return m.jsx("div", {
			className: "x1yrsyyn x78zum5 xdt5ytf",
			children: t ? m.jsx(k, {
				disabled: !0,
				spinner: !0,
				children: s._(
					/*BTDS*/
					""
				)
			}) : m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "hybrid-language-change",
				sendLogs: !0,
				fallback: function() {
					return i;
				},
				children: m.jsx(_, {
					fallback: a,
					children: m.jsx(E, {
						handleLocaleChange: r,
						languageDropdownItemsPromise: l
					})
				})
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t, n, a = e.handleLocaleChange, i = e.languageDropdownItemsPromise, l = m.createRef(), s = o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()), u = f(i), d = (t = v(s, u)) != null ? t : s;
		s === C && (d = b(d));
		var p = b((n = v(C, u)) != null ? n : C), _ = R(u), g = function(t) {
			var e;
			if (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageDropdownButton: Selected locale ", ""])), t), t !== s) {
				var n = (e = v(t, u)) != null ? e : t;
				o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebWindowsLanguageConfirmModalDialog.react"), {
					newLanguage: n,
					onConfirm: function() {
						return a(t);
					}
				}));
			}
		};
		return m.jsxs(m.Fragment, { children: [m.jsxs(k, {
			ref: l,
			children: [
				m.jsx(o("WAWebWorldIcon.react").WorldIcon, { iconXstyle: y.languageIcon }),
				m.jsx(o("WAWebFlex.react").FlexItem, {
					marginStart: 8,
					grow: 1,
					justify: "stretch",
					align: "center",
					xstyle: y.buttonTextContent,
					children: d
				}),
				m.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {})
			]
		}), m.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
			xstyle: y.menu,
			maxHeight: 300,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			minWidth: 320,
			initHandling: "click",
			initialActiveOptionId: s,
			target: l,
			children: m.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
				multiselect: !1,
				initialSelection: s,
				onSelect: g,
				children: [
					m.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
						optionId: C,
						primary: p
					}, C),
					m.jsx(r("WAWebDropdownItemSeparator.react"), {}),
					_
				]
			})
		})] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.children, n = e.disabled, r = e.ref, a = e.spinner;
		return m.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			borderStyles: y.button,
			disabled: n,
			ref: r,
			children: m.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				align: "center",
				grow: 1,
				xstyle: y.buttonContent,
				children: a ? m.jsx(I, { children: t }) : t
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.children;
		return m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			children: [m.jsx(o("WAWebFlex.react").FlexColumn, { children: m.jsx(o("WAWebSpinner.react").Spinner, { size: 24 }) }), m.jsx(o("WAWebFlex.react").FlexColumn, { children: m.jsx(o("WAWebText.react").WAWebTextMuted, { children: t }) })]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = L;
}), 226);

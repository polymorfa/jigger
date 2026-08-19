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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
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
	}, S = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			try {
				yield r("WAWebL10N").setLocale(t, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, !1), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageDropdownButton: locale changed"])));
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
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})(), R = function(t) {
		return t.reduce(function(e, t) {
			return t.locale === C || e.push(m.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
				optionId: t.locale,
				primary: t.languageNameTranslatedToUserLocale + ", " + t.languageNameInOriginalLocale
			}, t.locale)), e;
		}, []);
	};
	function L() {
		var e = o("react-compiler-runtime").c(7), t = h(!1), r = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield S(e), a(!0);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), e[0] = i) : i = e[0];
		var l = i, u;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(k, {
			disabled: !0,
			spinner: !0,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = u) : u = e[1];
		var c = u, d;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsx(k, {
			disabled: !0,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = d) : d = e[2];
		var p = d, f;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebLanguageDropdownUtils").getLanguageDropdownItems(), e[3] = f) : f = e[3];
		var g = f, y;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x1yrsyyn x78zum5 xdt5ytf" }, e[4] = y) : y = e[4];
		var C;
		return e[5] !== r ? (C = m.jsx("div", babelHelpers.extends({}, y, { children: r ? m.jsx(k, {
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
				return p;
			},
			children: m.jsx(_, {
				fallback: c,
				children: m.jsx(E, {
					handleLocaleChange: l,
					languageDropdownItemsPromise: g
				})
			})
		}) })), e[5] = r, e[6] = C) : C = e[6], C;
	}
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
		var t = o("react-compiler-runtime").c(9), n = e.children, r = e.disabled, a = e.ref, i = e.spinner, l;
		t[0] !== n || t[1] !== i ? (l = i ? m.jsx(I, { children: n }) : n, t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var s;
		t[3] !== l ? (s = m.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			xstyle: y.buttonContent,
			children: l
		}), t[3] = l, t[4] = s) : s = t[4];
		var u;
		return t[5] !== r || t[6] !== a || t[7] !== s ? (u = m.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			borderStyles: y.button,
			disabled: r,
			ref: a,
			children: s
		}), t[5] = r, t[6] = a, t[7] = s, t[8] = u) : u = t[8], u;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = m.jsx(o("WAWebFlex.react").FlexColumn, { children: m.jsx(o("WAWebSpinner.react").Spinner, { size: 24 }) }), t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			children: [r, m.jsx(o("WAWebFlex.react").FlexColumn, { children: m.jsx(o("WAWebText.react").WAWebTextMuted, { children: n }) })]
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	l.default = L;
}), 226);

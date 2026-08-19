__d("WAWebLanguageDrawer.react", [
	"VultureJSDeadComponent.react",
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebL10N",
	"WAWebL10nGetRenderedLocale",
	"WAWebLocaleToLanguages",
	"WAWebModalManager",
	"WAWebRadio.react",
	"WAWebSettingsFBT",
	"WAWebSpinner.react",
	"WAWebText.react",
	"react",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = t.onClose, a = t.ref, i = c(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()), l = i[0], s = i[1], d = c([]), m = d[0], p = d[1];
		async function _() {
			var e = r("WAWebL10N").getLocale(), t = await o("WAWebLocaleToLanguages").getLanguageNames(e);
			return t;
		}
		async function f() {
			var e = await o("WAWebLocaleToLanguages").getLanguageNames();
			return e;
		}
		var g = r("useWAWebAsync")(async function() {
			var t = await f(), n = await _(), a = r("WAWebL10N").getLocale(), i = [];
			n.forEach(function(e, n) {
				n === a && s(n);
				var r = t.get(n);
				r != null && i.push({
					language: r,
					language_native: e,
					locale: n
				});
			}), i.sort(function(e, t) {
				return e.locale < t.locale ? -1 : e.locale > t.locale ? 1 : 0;
			}), i.length === 0 && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebLanguageDrawer: no langs from getLanguageNames"]))), p(i);
		}, []);
		function h(e) {
			s(e), o("WAWebModalManager").ModalManager.open(u.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebConfirmLanguageModal" }));
		}
		var y = null;
		return g.loading || g.error ? y = u.jsx(o("WAWebSpinner.react").Spinner, {}) : y = u.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "language",
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			checkedValue: l,
			options: m.map(function(e) {
				return {
					value: e.locale,
					label: e.language,
					secondaryLabel: e.language_native,
					onChange: function() {
						return h(e.locale);
					}
				};
			})
		}), u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "language-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "language-settings"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-language",
				title: o("WAWebSettingsFBT").languageTitle(),
				onBack: n,
				focusBackOrCancel: !0,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
					margin: [
						32,
						0,
						16,
						0
					],
					children: o("WAWebSettingsFBT").languageHeaderTitle()
				}), y]
			}) })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

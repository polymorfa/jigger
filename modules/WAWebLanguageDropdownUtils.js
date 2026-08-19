__d("WAWebLanguageDropdownUtils", [
	"WALogger",
	"WAWebL10N",
	"WAWebLocaleToLanguages",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				return yield o("WAWebLocaleToLanguages").getLanguageNames();
			} catch (t) {
				throw o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebLanguageDropdownUtils: lang index load failed"]))), t;
			}
		});
		return function() {
			return t.apply(this, arguments);
		};
	})(), d = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				return yield o("WAWebLocaleToLanguages").getLanguageNames(r("WAWebL10N").getLocale());
			} catch (e) {
				throw o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebLanguageDropdownUtils: Failed to load languages"]))), e;
			}
		});
		return function() {
			return e.apply(this, arguments);
		};
	})();
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield c(), t = yield d(), n = [];
			return t.forEach(function(t, r) {
				var o = e.get(r);
				o != null && n.push({
					languageNameInOriginalLocale: o,
					languageNameTranslatedToUserLocale: t,
					locale: r
				});
			}), n.length === 0 && o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebLanguageDropdownUtils: no languages found"]))), n.sort(function(e, t) {
				return e.languageNameTranslatedToUserLocale.localeCompare(t.languageNameTranslatedToUserLocale);
			}), n;
		}), p.apply(this, arguments);
	}
	l.getLanguageDropdownItems = m;
}), 98);

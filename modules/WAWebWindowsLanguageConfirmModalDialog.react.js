__d("WAWebWindowsLanguageConfirmModalDialog.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react"));
	function m(t) {
		var a = t.newLanguage, i = t.onConfirm, l = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageConfirmModalDialog: confirmed"]))), o("WAWebModalManager").ModalManager.close(), i();
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), c = function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageConfirmModalDialog: cancelled"]))), o("WAWebModalManager").ModalManager.close();
		};
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: l,
			okText: s._(
				/*BTDS*/
				"",
				[s._param("new-language-localised-name", a)]
			),
			onCancel: c,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			children: s._(
				/*BTDS*/
				"",
				[s._param("new-language-localised-name", a)]
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

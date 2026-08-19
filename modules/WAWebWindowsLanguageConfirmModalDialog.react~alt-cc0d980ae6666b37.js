__d("WAWebWindowsLanguageConfirmModalDialog.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react"));
	function m(t) {
		var n = t.newLanguage, a = t.onConfirm, i = async function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageConfirmModalDialog: confirmed"]))), o("WAWebModalManager").ModalManager.close(), a();
		}, l = function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[l10n] WAWebWindowsLanguageConfirmModalDialog: cancelled"]))), o("WAWebModalManager").ModalManager.close();
		};
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: i,
			okText: s._(
				/*BTDS*/
				"",
				[s._param("new-language-localised-name", n)]
			),
			onCancel: l,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			children: s._(
				/*BTDS*/
				"",
				[s._param("new-language-localised-name", n)]
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

__d("WAWebHarmfulFileWarningModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebHarmfulFileWamLogger",
	"WAWebWamEnumHarmfulFileWarningClickthroughAction",
	"WDSTextualLink.react",
	"react",
	"useWAWebLogHarmfulFileDialogLifecycle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.learnMoreUrl, n = e.onCancel, a = e.onOpen, i = e.senderRelationship, l = r("useWAWebLogHarmfulFileDialogLifecycle")(i), c = function() {
			l(), o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.CANCEL, i), n();
		}, d = function() {
			l(), o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.OPEN, i), a();
		}, m = function() {
			o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.LEARN_MORE, i);
		}, p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			"",
			[s._param("learnMoreLink", u.jsx(r("WDSTextualLink.react"), {
				href: t,
				onClick: m,
				children: r("WAWebFbtCommon")("Learn more")
			}))]
		), f = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: p,
			okText: f,
			onOK: d,
			onCancel: c,
			testid: "harmful-file-warning-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "harmful-file-warning"
			},
			children: _
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

__d("WAWebContactInfoDisclosuresSectionRow.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebConsumerTransparencyModalDialog.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		if (!o("WAWebCommonCTWAConsumerTransparency").shouldShowROWConsumerDisclosure()) return null;
		var e = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
			icon: u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
				iconXstyle: c.secondaryColor,
				height: 22,
				width: 22
			}),
			onClick: o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog,
			secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "contact-info-ads-disclosure-setting-row-subtitle",
				children: e
			}),
			testid: "contact-info-ads-disclosure-section",
			title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				testid: "contact-info-ads-disclosure-setting-row-title",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

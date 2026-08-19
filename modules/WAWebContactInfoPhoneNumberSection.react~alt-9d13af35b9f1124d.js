__d("WAWebContactInfoPhoneNumberSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebContactGetters",
	"WAWebFrontendContactGetters",
	"WAWebStopEvent",
	"WAWebText.react",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contact, n = o("useWAWebContactValues").useContactValues(t.id, [
			o("WAWebFrontendContactGetters").getFormattedPhoneAndType,
			o("WAWebFrontendContactGetters").getFormattedUserAndType,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType
		]), r = n[0], a = n[1], i = n[2], l = !o("WAWebContactGetters").getIsAiHub(t) && (a.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME || i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME) && r.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER;
		if (!l) return null;
		var c = s._(
			/*BTDS*/
			""
		), d = r.displayName;
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-phone-number",
			title: c,
			titleXStyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			children: u.jsx("div", {
				onCopy: o("WAWebStopEvent").stopPropagation,
				children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
					color: "wdsContentDefault",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginTop4,
					children: d
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

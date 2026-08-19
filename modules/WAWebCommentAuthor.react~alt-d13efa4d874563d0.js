__d("WAWebCommentAuthor.react", [
	"WAWebChatParticipantColor",
	"WAWebName.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebUserPrefsMeUser",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { container: {
		alignItems: "x1pha0wt",
		columnGap: "xmixu3c",
		display: "x3nfvp2",
		minWidth: "xeuugli",
		$$css: !0
	} };
	function d(t) {
		var n, a = t.chat, i = t.contact, l = o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(i.id) ? 1 : o("WAWebChatParticipantColor").getAssignedColor(a, i.id, "WAWebCommentAuthor-" + ((n = o("WAWebQuotedMessageUserJourneyLogger").getChatType(a.id)) != null ? n : "")), s = o("useWAWebGroupColors").useGroupsColorStyle(l, "color"), d = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i.id), m = d.foreground, p = r("useWAWebContactFormattedUsernameOrPhoneByChat")(a, i), _ = p.formattedUsernameOrPhone, f = !r("isStringNullOrEmpty")(_) && !o("WAWebUserPrefsMeUser").isMeAccount(i.id);
		return u.jsxs("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.container, m != null ? m : s), { children: [u.jsx(o("WAWebName.react").Name, {
			contact: i,
			elevatedPushNamesEnabled: !0,
			titlify: !0,
			ellipsify: !0,
			you: !0,
			showNotifyName: !0
		}), f ? u.jsx("span", {
			className: "xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: _
		}) : null] }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

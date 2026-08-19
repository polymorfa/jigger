__d("WAWebCommentAuthor.react", [
	"WAWebChatParticipantColor",
	"WAWebName.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebUserPrefsMeUser",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(18), a = t.chat, i = t.contact, l;
		if (n[0] !== a || n[1] !== i.id) {
			var s;
			l = o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(i.id) ? 1 : o("WAWebChatParticipantColor").getAssignedColor(a, i.id, "WAWebCommentAuthor-" + ((s = o("WAWebQuotedMessageUserJourneyLogger").getChatType(a.id)) != null ? s : "")), n[0] = a, n[1] = i.id, n[2] = l;
		} else l = n[2];
		var d = l, m = o("useWAWebGroupColors").useGroupsColorStyle(d, "color"), p = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i.id), _ = p.foreground, f = r("useWAWebContactFormattedUsernameOrPhoneByChat")(a, i), g = f.formattedUsernameOrPhone, h;
		n[3] !== i.id || n[4] !== g ? (h = !r("isStringNullOrEmpty")(g) && !o("WAWebUserPrefsMeUser").isMeAccount(i.id), n[3] = i.id, n[4] = g, n[5] = h) : h = n[5];
		var y = h, C;
		n[6] !== m || n[7] !== _ ? (C = (e || (e = r("stylex"))).props(c.container, _ != null ? _ : m), n[6] = m, n[7] = _, n[8] = C) : C = n[8];
		var b;
		n[9] !== i ? (b = u.jsx(o("WAWebName.react").Name, {
			contact: i,
			elevatedPushNamesEnabled: !0,
			titlify: !0,
			ellipsify: !0,
			you: !0,
			showNotifyName: !0
		}), n[9] = i, n[10] = b) : b = n[10];
		var v;
		n[11] !== g || n[12] !== y ? (v = y ? u.jsx("span", {
			className: "xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: g
		}) : null, n[11] = g, n[12] = y, n[13] = v) : v = n[13];
		var S;
		return n[14] !== C || n[15] !== b || n[16] !== v ? (S = u.jsxs("span", babelHelpers.extends({}, C, { children: [b, v] })), n[14] = C, n[15] = b, n[16] = v, n[17] = S) : S = n[17], S;
	}
	l.default = d;
}), 98);

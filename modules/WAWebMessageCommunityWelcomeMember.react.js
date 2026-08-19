__d("WAWebMessageCommunityWelcomeMember.react", [
	"fbt",
	"WAWebFormatParticipantNames",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityWelcomeMemberTitle.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(16), n = e.author, r = e.chat, a = e.clickable, i = e.templateParams, l = i[0], c;
		t[0] !== n || t[1] !== a ? (c = n ? o("WAWebFormatParticipantNames").getFormattedName(n, a) : null, t[0] = n, t[1] = a, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== d ? (m = u.jsx(u.Fragment, { children: d == null || d === "" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("author", d)]
		) }), t[3] = d, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		t[6] !== m ? (_ = [m, p], t[6] = m, t[7] = _) : _ = t[7];
		var f = _, g;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[8] = g) : g = t[8];
		var h = g, y = r.id, C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebMessageCommunityWelcomeMemberTitle.react").communityWelcomeMemberTitle(), t[9] = C) : C = t[9];
		var b;
		t[10] !== f ? (b = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: f }), t[10] = f, t[11] = b) : b = t[11];
		var v;
		return t[12] !== r.id || t[13] !== l || t[14] !== b ? (v = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: l,
			subgroupId: y,
			title: C,
			body: b,
			footer: h
		}), t[12] = r.id, t[13] = l, t[14] = b, t[15] = v) : v = t[15], v;
	}
	l.MessageCommunityWelcomeMember = c;
}), 226);

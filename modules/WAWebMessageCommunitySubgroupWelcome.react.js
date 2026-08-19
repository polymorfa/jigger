__d("WAWebMessageCommunitySubgroupWelcome.react", [
	"fbt",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunitySubgroupWelcomeTitle.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.author, r = e.chat, a = e.clickable, i = e.templateParams, l = i[0], c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [s._(
			/*BTDS*/
			""
		), s._(
			/*BTDS*/
			""
		)], t[0] = c) : c = t[0];
		var d = c, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[1] = m) : m = t[1];
		var p = m, _ = r.id, f;
		t[2] !== n || t[3] !== a || t[4] !== i ? (f = o("WAWebMessageCommunitySubgroupWelcomeTitle.react").communitySubgroupWelcomeTitle({
			templateParams: i,
			clickable: a,
			author: n
		}), t[2] = n, t[3] = a, t[4] = i, t[5] = f) : f = t[5];
		var g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: d }), t[6] = g) : g = t[6];
		var h;
		return t[7] !== r.id || t[8] !== l || t[9] !== f ? (h = u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: l,
			subgroupId: _,
			title: f,
			body: g,
			footer: p,
			openNavigation: !0
		}), t[7] = r.id, t[8] = l, t[9] = f, t[10] = h) : h = t[10], h;
	}
	l.MessageCommunitySubgroupWelcome = c;
}), 226);

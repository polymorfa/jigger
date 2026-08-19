__d("WAWebMessageButtons.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebSendButtonsMsgReplyChatAction",
	"WAWebSendMsgResultAction",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebSetModelValue",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 3, c = 10;
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.isStacked, a = e.msg, i = e.replyButton, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebMsgGetters").getIsSentByMe], t[0] = l) : l = t[0];
		var u = o("useWAWebMsgValues").useMsgValues(a.id, l), c = u[0], d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = [
			"selected",
			"displayText",
			"id"
		], t[1] = d) : d = t[1];
		var m = o("useWAWebModelValues").useModelValues(i, d), p;
		t[2] !== a ? (p = o("WAWebFrontendMsgGetters").getChat(a), t[2] = a, t[3] = p) : p = t[3];
		var _ = p, f = o("useWAWebSetModelValue").useSetModelValue(i, "selected"), g = i.displayText, h = i.selected, y;
		t[4] !== _ || t[5] !== a || t[6] !== m || t[7] !== f ? (y = function() {
			f(!0), r("WAWebSendButtonsMsgReplyChatAction")(a, m, _).then(function(e) {
				e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK && f(!1);
			}).catch(function() {
				f(!1);
			});
		}, t[4] = _, t[5] = a, t[6] = m, t[7] = f, t[8] = y) : y = t[8];
		var C = y, b;
		t[9] !== h ? (b = { disabled: h }, t[9] = h, t[10] = b) : b = t[10];
		var v = r("useWAWebStaticButtonA11y")(C, b), S = v[0], R = v[1], L;
		t[11] !== n || t[12] !== h ? (L = {
			0: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk",
			2: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1",
			1: "x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk x1l7klhg",
			3: "x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1 x1l7klhg"
		}[!!h << 1 | !!n << 0], t[11] = n, t[12] = h, t[13] = L) : L = t[13];
		var E = L, k;
		return t[14] !== R || t[15] !== S || t[16] !== E || t[17] !== g || t[18] !== c || t[19] !== h ? (k = g ? s.jsx("div", babelHelpers.extends({
			ref: S,
			className: E
		}, R, { children: s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur" },
			2: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4" },
			1: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur x1g5lz36" },
			3: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4 x1g5lz36" }
		}[!!h << 1 | !!c << 0], { children: s.jsx("span", {
			className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: g
		}) })) })) : null, t[14] = R, t[15] = S, t[16] = E, t[17] = g, t[18] = c, t[19] = h, t[20] = k) : k = t[20], k;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.msg, r = n.replyButtons;
		if (r == null || r.length === 0 || n.id.fromMe && o("WAWebMsgGetters").getBizBotType(n) != null) return null;
		var a, i;
		if (t[0] !== r) {
			var l = r.some(p);
			a = r.length >= u || l, i = {
				0: { className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w" },
				1: { className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w x173radd" }
			}[!!l << 0], t[0] = r, t[1] = a, t[2] = i;
		} else a = t[1], i = t[2];
		var c;
		if (t[3] !== a || t[4] !== n || t[5] !== r) {
			var m;
			t[7] !== a || t[8] !== n ? (m = function(t, r) {
				return s.jsx(d, {
					msg: n,
					replyButton: t,
					isStacked: a
				}, r);
			}, t[7] = a, t[8] = n, t[9] = m) : m = t[9], c = r.map(m), t[3] = a, t[4] = n, t[5] = r, t[6] = c;
		} else c = t[6];
		var _;
		return t[10] !== i || t[11] !== c ? (_ = s.jsx("div", babelHelpers.extends({}, i, { children: c })), t[10] = i, t[11] = c, t[12] = _) : _ = t[12], _;
	}
	function p(e) {
		return e.displayText.length > c;
	}
	l.default = m;
}), 98);

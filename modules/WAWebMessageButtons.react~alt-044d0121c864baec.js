__d("WAWebMessageButtons.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebSendButtonsMsgReplyChatAction",
	"WAWebSendMsgResultAction",
	"react",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebSetModelValue",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 3, c = 10;
	function d(e) {
		var t = e.isStacked, n = e.msg, a = e.replyButton, i = o("useWAWebMsgValues").useMsgValues(n.id, [o("WAWebMsgGetters").getIsSentByMe]), l = i[0], u = o("useWAWebModelValues").useModelValues(a, [
			"selected",
			"displayText",
			"id"
		]), c = o("WAWebFrontendMsgGetters").getChat(n), d = o("useWAWebSetModelValue").useSetModelValue(a, "selected"), m = a.displayText, p = a.selected, _ = function() {
			d(!0), r("WAWebSendButtonsMsgReplyChatAction")(n, u, c).then(function(e) {
				e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK && d(!1);
			}).catch(function() {
				d(!1);
			});
		}, f = r("useWAWebStaticButtonA11y")(_, { disabled: p }), g = f[0], h = f[1], y = {
			0: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk",
			2: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1",
			1: "x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk x1l7klhg",
			3: "x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1 x1l7klhg"
		}[!!p << 1 | !!t << 0];
		return m ? s.jsx("div", babelHelpers.extends({
			ref: g,
			className: y
		}, h, { children: s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur" },
			2: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4" },
			1: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur x1g5lz36" },
			3: { className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4 x1g5lz36" }
		}[!!p << 1 | !!l << 0], { children: s.jsx("span", {
			className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
			children: m
		}) })) })) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.msg, n = t.replyButtons;
		if (n == null || n.length === 0 || t.id.fromMe && o("WAWebMsgGetters").getBizBotType(t) != null) return null;
		var r = n.some(function(e) {
			return e.displayText.length > c;
		}), a = n.length >= u || r;
		return s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w" },
			1: { className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w x173radd" }
		}[!!r << 0], { children: n.map(function(e, n) {
			return s.jsx(d, {
				msg: t,
				replyButton: e,
				isStacked: a
			}, n);
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

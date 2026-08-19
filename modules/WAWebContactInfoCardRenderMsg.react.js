__d("WAWebContactInfoCardRenderMsg.react", [
	"WAWebCmd",
	"WAWebContactInfoCard.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, a = e.msg, i, l;
		t[0] !== a.id ? (i = function() {
			o("WAWebCmd").Cmd.contactInfoCardRendered(a.id);
		}, l = [a.id], t[0] = a.id, t[1] = i, t[2] = l) : (i = t[1], l = t[2]), u(i, l);
		var c;
		return t[3] !== n ? (c = s.jsx(r("WAWebContactInfoCard.react"), { chat: n }), t[3] = n, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);

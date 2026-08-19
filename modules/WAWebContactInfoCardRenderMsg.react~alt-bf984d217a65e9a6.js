__d("WAWebContactInfoCardRenderMsg.react", [
	"WAWebCmd",
	"WAWebContactInfoCard.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.chat, n = e.msg;
		return u(function() {
			o("WAWebCmd").Cmd.contactInfoCardRendered(n.id);
		}, [n.id]), s.jsx(r("WAWebContactInfoCard.react"), { chat: t });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

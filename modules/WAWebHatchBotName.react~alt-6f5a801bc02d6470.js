__d("WAWebHatchBotName.react", [
	"WAWebBotUtils",
	"WAWebContactCollection",
	"WAWebName.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		return s.jsx(o("WAWebName.react").Name, {
			contact: o("WAWebContactCollection").ContactCollection.gadd(o("WAWebBotUtils").HATCH_BOT_FBID_WID),
			skipCheckMark: !0
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("WAWebContactManagerNotesCell.react", [
	"fbt",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNoteValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = o("react-compiler-runtime").c(4), a = e.chatJid, i = r("useWAWebNoteValues")(a), l = (t = i.value) == null ? void 0 : t.content;
		if (i.loading) return null;
		if (l == null || l === "") {
			var c;
			n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
				/*BTDS*/
				""
			), n[0] = c) : c = n[0];
			var d;
			return n[1] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx("span", {
				role: "img",
				"aria-label": c,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					maxLines: 1,
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), n[1] = d) : d = n[1], d;
		}
		var m;
		return n[2] !== l ? (m = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			children: l
		}), n[2] = l, n[3] = m) : m = n[3], m;
	}
	l.default = c;
}), 226);

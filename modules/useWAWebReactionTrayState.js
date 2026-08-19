__d("useWAWebReactionTrayState", [
	"WAWebDefaultReactions",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebReactions"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useState;
	function u(e) {
		var t, n = o("react-compiler-runtime").c(12), a = s(null), i = a[0], l = a[1], u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = function(t) {
			var e, n, r, a = t[0];
			if (!a) {
				l(null);
				return;
			}
			var i = (e = (n = a.reactionByMe) == null ? void 0 : n.reactionText) != null ? e : "", s = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, (r = a.reactionByMe) == null ? void 0 : r.reactionText).indexOf(i);
			if (s === -1) {
				l(null);
				return;
			}
			l(s);
		}, n[0] = u) : u = n[0];
		var c = u, d;
		n[1] !== e ? (d = [e], n[1] = e, n[2] = d) : d = n[2];
		var m = r("useWAWebReactions")(d, c), p = m.reactionsModels, _ = (t = p[0]) == null || (t = t.reactionByMe) == null ? void 0 : t.reactionText, f;
		n[3] !== _ ? (f = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, _), n[3] = _, n[4] = f) : f = n[4];
		var g = f, h;
		n[5] !== g || n[6] !== p[0] ? (h = function(t) {
			var e;
			if (p[0] && t === ((e = p[0].reactionByMe) == null ? void 0 : e.reactionText)) return l(null), o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
			var n = g.indexOf(t);
			return l(n !== -1 ? n : null), t;
		}, n[5] = g, n[6] = p[0], n[7] = h) : h = n[7];
		var y = h, C;
		return n[8] !== y || n[9] !== g || n[10] !== i ? (C = {
			selectedIndex: i,
			reactionOptions: g,
			handleSelection: y
		}, n[8] = y, n[9] = g, n[10] = i, n[11] = C) : C = n[11], C;
	}
	l.default = u;
}), 98);

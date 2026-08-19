__d("useWAWebNewsletterReactionTrayState", [
	"WAWebDefaultReactions",
	"WAWebFrontendMsgGetters",
	"WAWebNewsletterGatingUtils",
	"WAWebReactionsBEUtils",
	"WAWebReactionsUtils",
	"react",
	"useWAWebNewsletterReactions"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useMemo, c = s.useState;
	function d(e, t) {
		var n, a = e.id.toString(), i = u(function() {
			return [e.id];
		}, [a]), l = r("useWAWebNewsletterReactions")(i), s = l[0], d = (n = s == null ? void 0 : s.myReaction) != null ? n : null, m = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, d), p = d != null ? m.indexOf(d) : null, _ = c({ type: "none" }), f = _[0], g = _[1], h = f.type === "override" && !o("WAWebReactionsUtils").isSameReactionAggregate(f.forReaction, d) ? f : null, y = h != null ? h.forReaction : d, C = h != null ? h.index : p, b = function(n) {
			if (o("WAWebReactionsUtils").isSameReactionAggregate(n, y)) {
				g({
					type: "override",
					index: null,
					forReaction: null
				}), t == null || t(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
				return;
			}
			var e = m.indexOf(n);
			g({
				type: "override",
				index: e !== -1 ? e : null,
				forReaction: n
			}), t == null || t(n);
		}, v = o("WAWebFrontendMsgGetters").getChat(e), S = v.newsletterMetadata != null && !o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(v);
		return {
			handleReaction: b,
			reactionOptions: m,
			selectedIndex: C,
			showFullDefaultSet: S
		};
	}
	l.default = d;
}), 98);

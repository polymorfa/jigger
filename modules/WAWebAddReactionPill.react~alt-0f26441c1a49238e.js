__d("WAWebAddReactionPill.react", [
	"fbt",
	"WDSChip.react",
	"WDSIconWdsIcMoodAdd.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onClick, n = e.ref;
		return u.jsx(r("WDSChip.react"), {
			Icon: r("WDSIconWdsIcMoodAdd.react"),
			iconOnly: !0,
			label: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			ref: n,
			testid: "chat_thread_add_reaction_chip"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

__d("WAWebAnnouncementsOnlyMsgBar.react", [
	"fbt",
	"WAWebMsgBarActions",
	"WAWebMuteGetters",
	"WAWebTabOrder",
	"WDSTextualLink.react",
	"react",
	"useWAWebModelValues",
	"useWAWebMuteValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.groupMetadata, a = e.mute;
		o("useWAWebMuteValues").useMuteValues(a.id, [o("WAWebMuteGetters").getIsMuted]);
		var i = o("useWAWebModelValues").useModelValues(n, ["participants", "id"]), l = u.jsx(r("WDSTextualLink.react"), {
			tabIndex: 0,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				o("WAWebMsgBarActions").handleMsgAdmin(i, s._(
					/*BTDS*/
					""
				));
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsx("span", {
			className: "x126k92a",
			children: s._(
				/*BTDS*/
				"",
				[s._param("admins", l)]
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

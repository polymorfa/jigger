__d("WAWebSendGroupInviteFlow.react", [
	"fbt",
	"WAWebGroupType",
	"WAWebSendTextFlow.react",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = e.chat, i = r("nullthrows")((t = a.groupMetadata) == null ? void 0 : t.groupInviteLink), l = ((n = a.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY, c = l ? s._(
			/*BTDS*/
			""
		).toString() + " " + i : s._(
			/*BTDS*/
			""
		).toString() + " " + i;
		return u.jsx(r("WAWebSendTextFlow.react"), {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			),
			text: c
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

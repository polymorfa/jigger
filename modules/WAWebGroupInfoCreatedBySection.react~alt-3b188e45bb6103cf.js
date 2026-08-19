__d("WAWebGroupInfoCreatedBySection.react", [
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupType",
	"WDSSectionDivider.react",
	"nullthrows",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.chat, a = o("useWAWebModelValues").useModelValues(n, ["groupMetadata"]), i = o("useWAWebModelValues").useModelValues(r("nullthrows")(a.groupMetadata), [
			"owner",
			"creation",
			"groupType",
			"participants"
		]), l = i.owner && ((t = i.participants.get(i.owner)) == null ? void 0 : t.contact);
		if (l == null) return null;
		var u = o("WAWebFrontendContactGetters").getFormattedName(l), c = o("WAWebContactGetters").getIsMe(l), d = i.creation, m = i.groupType === o("WAWebGroupType").GroupType.COMMUNITY ? o("WAWebClock").Clock.communityCreatedByStr({
			isMe: c,
			name: u,
			unixTime: d
		}) : o("WAWebClock").Clock.groupCreatedByStr(d, u, c);
		return s.jsx("div", {
			className: "x98l61r",
			"data-testid": "group_info_created_by_wrapper",
			children: s.jsx(r("WDSSectionDivider.react"), {
				footer: { children: m },
				testid: "group-info-created-by"
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

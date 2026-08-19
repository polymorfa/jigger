__d("WAWebGroupInfoCreatedBySection.react", [
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupType",
	"WDSSectionDivider.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["groupMetadata"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(n, a), l;
		t[1] !== i.groupMetadata ? (l = r("nullthrows")(i.groupMetadata), t[1] = i.groupMetadata, t[2] = l) : l = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = [
			"owner",
			"creation",
			"groupType",
			"participants"
		], t[3] = u) : u = t[3];
		var c = o("useWAWebModelValues").useModelValues(l, u), d;
		if (t[4] !== c.owner || t[5] !== c.participants) {
			var m;
			d = c.owner && ((m = c.participants.get(c.owner)) == null ? void 0 : m.contact), t[4] = c.owner, t[5] = c.participants, t[6] = d;
		} else d = t[6];
		var p = d;
		if (p == null) return null;
		var _;
		if (t[7] !== c.creation || t[8] !== c.groupType || t[9] !== p) {
			var f = o("WAWebFrontendContactGetters").getFormattedName(p), g = o("WAWebContactGetters").getIsMe(p), h = c.creation;
			_ = c.groupType === o("WAWebGroupType").GroupType.COMMUNITY ? o("WAWebClock").Clock.communityCreatedByStr({
				isMe: g,
				name: f,
				unixTime: h
			}) : o("WAWebClock").Clock.groupCreatedByStr(h, f, g), t[7] = c.creation, t[8] = c.groupType, t[9] = p, t[10] = _;
		} else _ = t[10];
		var y = _, C;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x98l61r" }, t[11] = C) : C = t[11];
		var b;
		return t[12] !== y ? (b = s.jsx("div", babelHelpers.extends({}, C, {
			"data-testid": "group_info_created_by_wrapper",
			children: s.jsx(r("WDSSectionDivider.react"), {
				footer: { children: y },
				testid: "group-info-created-by"
			})
		})), t[12] = y, t[13] = b) : b = t[13], b;
	}
	l.default = u;
}), 98);

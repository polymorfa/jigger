__d("WAWebSelectModalSelectedChatList.react", [
	"WAWebChatModel",
	"WAWebChatParticipantList.react",
	"WAWebContactModel",
	"WDSPaddings.stylex",
	"compactMap",
	"react",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		paddingInlineEnd25: {
			paddingInlineEnd: "x1a4sjiy",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, m = { container: {
		display: "x78zum5",
		flexWrap: "x1a02dak",
		maxHeight: "x1aoj0v",
		overflowX: "xw2csxc",
		overflowY: "x1odjw0f",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(t) {
		var n = t.chats, a = t.onDelete, i = c(n.getSelected()), l = i[0], s = i[1];
		o("useWAWebListener").useListener(n, "all", function() {
			s(n.getSelected());
		});
		var p = r("compactMap")(l, function(e) {
			if (e instanceof r("WAWebContactModel")) return e;
			if (e instanceof o("WAWebChatModel").Chat) return e.contact;
		});
		return p.length === 0 ? null : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, d.paddingInlineEnd25, d.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingStart24), { children: u.jsx(r("WAWebChatParticipantList.react"), {
			theme: "list-names",
			contacts: p,
			onDelete: a
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

__d("WAWebEventInfoFlow.react", [
	"invariant",
	"$InternalEnum",
	"WAWebChatGroupUtils",
	"WAWebEventInfoDrawer.react",
	"WAWebFindChatAction",
	"WAWebInfoFlowLoadable",
	"WAWebStateUtils",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = n("$InternalEnum").Mirrored(["EventInfoDrawer", "ParticipantInfoDrawer"]);
	function m(e) {
		var t = e.chat, n = e.msg, a = e.onBack, i = e.onEnd, l = e.ref, m = o("useWAWebFlow").useFlow(d.EventInfoDrawer, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: i
		}), p = m[0], _ = m[1], f = c(null), g = f[0], h = f[1], y = i != null ? i : _.end, C = async function(t) {
			var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(t, "participant_click");
			if (e != null) {
				var n = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "eventParticipants"), r = n.chat;
				h(r), _.push(d.ParticipantInfoDrawer);
			}
		};
		if (_.step == null) return null;
		var b = null;
		switch (_.step) {
			case d.EventInfoDrawer:
				b = u.jsx(r("WAWebEventInfoDrawer.react"), {
					chat: o("WAWebStateUtils").unproxy(t),
					msg: n,
					onBack: a,
					onEnd: y,
					onParticipantClick: C
				});
				break;
			case d.ParticipantInfoDrawer:
				g != null || s(0, 79980), b = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: g,
					onBack: function() {
						return _.pop();
					}
				});
				break;
		}
		return u.jsx(p, {
			ref: l,
			flow: _,
			children: b
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

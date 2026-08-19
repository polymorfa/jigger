__d("WAWebEventInfoFlow.react", [
	"invariant",
	"$InternalEnum",
	"WAWebChatGroupUtils",
	"WAWebEventInfoDrawer.react",
	"WAWebFindChatAction",
	"WAWebInfoFlowLoadable",
	"WAWebStateUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = n("$InternalEnum").Mirrored(["EventInfoDrawer", "ParticipantInfoDrawer"]);
	function m(e) {
		var t = o("react-compiler-runtime").c(22), n = e.chat, a = e.msg, i = e.onBack, l = e.onEnd, m = e.ref, p;
		t[0] !== l ? (p = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: l
		}, t[0] = l, t[1] = p) : p = t[1];
		var _ = o("useWAWebFlow").useFlow(d.EventInfoDrawer, p), f = _[0], g = _[1], h = c(null), y = h[0], C = h[1], b = l != null ? l : g.end, v;
		t[2] !== g ? (v = async function(t) {
			var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(t, "participant_click");
			if (e != null) {
				var n = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "eventParticipants"), r = n.chat;
				C(r), g.push(d.ParticipantInfoDrawer);
			}
		}, t[2] = g, t[3] = v) : v = t[3];
		var S = v;
		if (g.step == null) return null;
		var R = null;
		e: switch (g.step) {
			case d.EventInfoDrawer: {
				var L;
				t[4] !== n ? (L = o("WAWebStateUtils").unproxy(n), t[4] = n, t[5] = L) : L = t[5];
				var E;
				t[6] !== b || t[7] !== S || t[8] !== a || t[9] !== i || t[10] !== L ? (E = u.jsx(r("WAWebEventInfoDrawer.react"), {
					chat: L,
					msg: a,
					onBack: i,
					onEnd: b,
					onParticipantClick: S
				}), t[6] = b, t[7] = S, t[8] = a, t[9] = i, t[10] = L, t[11] = E) : E = t[11], R = E;
				break e;
			}
			case d.ParticipantInfoDrawer: {
				y != null || s(0, 79980);
				var k;
				t[12] !== g ? (k = function() {
					return g.pop();
				}, t[12] = g, t[13] = k) : k = t[13];
				var I;
				t[14] !== y || t[15] !== k ? (I = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: y,
					onBack: k
				}), t[14] = y, t[15] = k, t[16] = I) : I = t[16], R = I;
			}
		}
		var T;
		return t[17] !== f || t[18] !== R || t[19] !== g || t[20] !== m ? (T = u.jsx(f, {
			ref: m,
			flow: g,
			children: R
		}), t[17] = f, t[18] = R, t[19] = g, t[20] = m, t[21] = T) : T = t[21], T;
	}
	l.default = m;
}), 98);

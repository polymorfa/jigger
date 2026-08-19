__d("WAWebConversationMsgsMenuV2.react", [
	"WAWebABProps",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebContactMenuDropdown.react",
	"WAWebConversationMenus",
	"WAWebConversationMsgsUtils",
	"WDSMenu.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(32), n = e.chat, a = e.onCancelSelect, i = e.onMenuReady, l = e.onSelect, u = e.scrollContainerRef, d = e.selectable, p = m(null), _, f;
		t[0] !== u ? (_ = function() {
			return p.current = u, (function() {
				o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup") && (p.current = null);
			});
		}, f = [u], t[0] = u, t[1] = _, t[2] = f) : (_ = t[1], f = t[2]), c(_, f);
		var g;
		e: {
			var h;
			t[3] !== n ? (h = function() {
				o("WAWebCmd").Cmd.chatSearch(n);
			}, t[3] = n, t[4] = h) : h = t[4];
			var y = h;
			if (o("WAWebConversationMsgsUtils").isSimplifiedChatConversationMenuEnabled(n)) {
				var C;
				t[5] !== n || t[6] !== a || t[7] !== l || t[8] !== d ? (C = o("WAWebConversationMenus").hybridMenu({
					chat: n,
					onCancelSelect: a,
					onSelect: l,
					selectable: d
				}), t[5] = n, t[6] = a, t[7] = l, t[8] = d, t[9] = C) : C = t[9];
				var b = C, v;
				t[10] !== b ? (v = s.jsx(r("WDSMenu.react"), { children: b }), t[10] = b, t[11] = v) : v = t[11], g = v;
				break e;
			} else if (o("WAWebChatGetters").getIsUser(n)) {
				var S;
				t[12] !== n || t[13] !== y || t[14] !== l || t[15] !== u ? (S = s.jsx(r("WAWebContactMenuDropdown.react"), {
					chat: n,
					onSelectMessages: l,
					enableChatThreadLogging: !1,
					onSearchChat: y,
					container: u
				}), t[12] = n, t[13] = y, t[14] = l, t[15] = u, t[16] = S) : S = t[16], g = S;
				break e;
			} else if (o("WAWebChatGetters").getIsGroup(n)) {
				var R;
				if (t[17] !== n || t[18] !== y || t[19] !== l || t[20] !== u) {
					var L = s.jsx(o("WAWebConversationMenus").GroupMenu, {
						chat: n,
						container: u,
						onSelect: l,
						onSearchChat: y
					});
					R = s.jsx(r("WDSMenu.react"), { children: L }), t[17] = n, t[18] = y, t[19] = l, t[20] = u, t[21] = R;
				} else R = t[21];
				g = R;
				break e;
			} else if (o("WAWebChatGetters").getIsBroadcast(n)) {
				var E;
				t[22] !== n ? (E = o("WAWebConversationMenus").broadcastMenu(n), t[22] = n, t[23] = E) : E = t[23];
				var k = E, I;
				t[24] !== k ? (I = s.jsx(r("WDSMenu.react"), { children: k }), t[24] = k, t[25] = I) : I = t[25], g = I;
				break e;
			}
			g = null;
		}
		var T = g, D;
		t[26] !== T ? (D = {
			targetRef: p,
			menu: T,
			contextMenuArea: !0,
			enableUIM: !1
		}, t[26] = T, t[27] = D) : D = t[27];
		var x = r("useWDSMenu")(D), $ = x.menuPortal, P = x.openMenu, N, M;
		return t[28] !== i || t[29] !== P ? (N = function() {
			i(P);
		}, M = [P, i], t[28] = i, t[29] = P, t[30] = N, t[31] = M) : (N = t[30], M = t[31]), c(N, M), $;
	}
	l.ConversationMsgsMenuV2 = p;
}), 98);

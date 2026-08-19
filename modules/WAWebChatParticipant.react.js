__d("WAWebChatParticipant.react", [
	"WAWebChatContact.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = o("WAWebChatContact.react").ContactFactory();
	function c(e) {
		var t = o("react-compiler-runtime").c(26), n = e.active, r = e.contact, a = e.contextEnabled, i = e.contextMenu, l = e.elevatedPushNamesEnabled, c = e.isPendingParticipant, d = e.nameOverride, m = e.onClick, p = e.onContext, _ = e.participantCollection, f = e.showStatusRingAroundProfilePhoto, g = e.showTeeLockBadge, h = e.theme, y = e.truncateName, C = e.unknownUserLogContext, b = c === void 0 ? !1 : c, v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = ["isAdmin"], t[0] = v) : v = t[0];
		var S = o("useWAWebModelValues").useModelValues(e.participant, v), R;
		t[1] !== r || t[2] !== a ? (R = function() {
			return a == null ? !1 : a(r);
		}, t[1] = r, t[2] = a, t[3] = R) : R = t[3];
		var L = R, E;
		t[4] !== r || t[5] !== p ? (E = function(t) {
			return p == null ? void 0 : p(t, r);
		}, t[4] = r, t[5] = p, t[6] = E) : E = t[6];
		var k = E, I = b ? p : m, T = h || "drawer-list", D;
		return t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== l || t[11] !== k || t[12] !== L || t[13] !== b || t[14] !== d || t[15] !== S.isAdmin || t[16] !== _ || t[17] !== e.showMemberLabel || t[18] !== e.sourceChat || t[19] !== f || t[20] !== g || t[21] !== I || t[22] !== T || t[23] !== y || t[24] !== C ? (D = s.jsx(u, {
			truncateName: y,
			active: n,
			contact: r,
			admin: S.isAdmin,
			onClick: I,
			theme: T,
			contextEnabled: L,
			contextMenu: i,
			onContext: k,
			isPendingParticipant: b,
			nameOverride: d,
			showNotifyName: !0,
			elevatedPushNamesEnabled: l,
			waitIdle: !0,
			showStatusRingAroundProfilePhoto: f,
			showTeeLockBadge: g,
			participantCollection: _,
			sourceChat: e.sourceChat,
			showMemberLabel: e.showMemberLabel,
			unknownUserLogContext: C
		}), t[7] = n, t[8] = r, t[9] = i, t[10] = l, t[11] = k, t[12] = L, t[13] = b, t[14] = d, t[15] = S.isAdmin, t[16] = _, t[17] = e.showMemberLabel, t[18] = e.sourceChat, t[19] = f, t[20] = g, t[21] = I, t[22] = T, t[23] = y, t[24] = C, t[25] = D) : D = t[25], D;
	}
	l.default = c;
}), 98);

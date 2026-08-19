__d("WAWebChatParticipant.react", [
	"WAWebChatContact.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = o("WAWebChatContact.react").ContactFactory();
	function c(e) {
		var t = e.active, n = e.contact, r = e.contextEnabled, a = e.contextMenu, i = e.elevatedPushNamesEnabled, l = e.isPendingParticipant, c = l === void 0 ? !1 : l, d = e.nameOverride, m = e.onClick, p = e.onContext, _ = e.participantCollection, f = e.showStatusRingAroundProfilePhoto, g = e.showTeeLockBadge, h = e.theme, y = e.truncateName, C = e.unknownUserLogContext, b = o("useWAWebModelValues").useModelValues(e.participant, ["isAdmin"]), v = function() {
			return r == null ? !1 : r(n);
		}, S = function(t) {
			return p == null ? void 0 : p(t, n);
		};
		return s.jsx(u, {
			truncateName: y,
			active: t,
			contact: n,
			admin: b.isAdmin,
			onClick: c ? p : m,
			theme: h || "drawer-list",
			contextEnabled: v,
			contextMenu: a,
			onContext: S,
			isPendingParticipant: c,
			nameOverride: d,
			showNotifyName: !0,
			elevatedPushNamesEnabled: i,
			waitIdle: !0,
			showStatusRingAroundProfilePhoto: f,
			showTeeLockBadge: g,
			participantCollection: _,
			sourceChat: e.sourceChat,
			showMemberLabel: e.showMemberLabel,
			unknownUserLogContext: C
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

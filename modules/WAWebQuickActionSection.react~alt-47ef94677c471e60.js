__d("WAWebQuickActionSection.react", [
	"WAWebQuickActionGatingUtils",
	"WAWebQuickActionLogging",
	"WAWebTabOrder",
	"WDSActionTile.react",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.actions, n = e.context, r = e.surface;
		if (!o("WAWebQuickActionGatingUtils").isQuickActionsEnabled(r)) return null;
		var a = t.filter(function(e) {
			return e.isVisible == null || e.isVisible(n);
		});
		return a.length === 0 ? null : s.jsx(c, {
			actions: a,
			context: n,
			surface: r
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.actions, n = e.context, a = e.surface, i = r("useVisibility")({ onVisible: function() {
			o("WAWebQuickActionLogging").logQuickActionSurfaceView(a, t.length), t.forEach(function(e, n) {
				o("WAWebQuickActionLogging").logQuickActionImpression({
					actionId: e.id,
					numActionsVisible: t.length,
					slotPosition: n,
					surface: a
				});
			});
		} }), l = i[0];
		return s.jsx("div", {
			ref: l,
			className: "xrvj5dj x75r7lz xl56j7k x98l61r xs2akgl x1f0uite",
			"data-testid": "quick-action-section",
			"data-surface": a,
			children: t.map(function(e, i) {
				var l = "quick-action-" + e.id, u = function() {
					o("WAWebQuickActionLogging").logQuickActionTap(a, e.id, i, t.length), e.onClick(n);
				};
				return s.jsx(r("WDSActionTile.react"), {
					Icon: e.Icon,
					label: e.label(),
					onPress: u,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
					testid: l
				}, e.id);
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("WAWebQuickActionSection.react", [
	"WAWebQuickActionGatingUtils",
	"WAWebQuickActionLogging",
	"WAWebTabOrder",
	"WDSActionTile.react",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.actions, r = e.context, a = e.surface;
		if (!o("WAWebQuickActionGatingUtils").isQuickActionsEnabled(a)) return null;
		var i;
		if (t[0] !== n || t[1] !== r) {
			var l;
			t[3] !== r ? (l = function(t) {
				return t.isVisible == null || t.isVisible(r);
			}, t[3] = r, t[4] = l) : l = t[4], i = n.filter(l), t[0] = n, t[1] = r, t[2] = i;
		} else i = t[2];
		var u = i;
		if (u.length === 0) return null;
		var d;
		return t[5] !== r || t[6] !== a || t[7] !== u ? (d = s.jsx(c, {
			actions: u,
			context: r,
			surface: a
		}), t[5] = r, t[6] = a, t[7] = u, t[8] = d) : d = t[8], d;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(16), n = e.actions, a = e.context, i = e.surface, l;
		t[0] !== n || t[1] !== i ? (l = { onVisible: function() {
			o("WAWebQuickActionLogging").logQuickActionSurfaceView(i, n.length), n.forEach(function(e, t) {
				o("WAWebQuickActionLogging").logQuickActionImpression({
					actionId: e.id,
					numActionsVisible: n.length,
					slotPosition: t,
					surface: i
				});
			});
		} }, t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var u = r("useVisibility")(l), c = u[0], d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "xrvj5dj x75r7lz xl56j7k x98l61r xs2akgl x1f0uite" }, t[3] = d) : d = t[3];
		var m;
		if (t[4] !== n || t[5] !== a || t[6] !== i) {
			var p;
			t[8] !== n.length || t[9] !== a || t[10] !== i ? (p = function(t, l) {
				var e = "quick-action-" + t.id, u = function() {
					o("WAWebQuickActionLogging").logQuickActionTap(i, t.id, l, n.length), t.onClick(a);
				};
				return s.jsx(r("WDSActionTile.react"), {
					Icon: t.Icon,
					label: t.label(),
					onPress: u,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
					testid: e
				}, t.id);
			}, t[8] = n.length, t[9] = a, t[10] = i, t[11] = p) : p = t[11], m = n.map(p), t[4] = n, t[5] = a, t[6] = i, t[7] = m;
		} else m = t[7];
		var _;
		return t[12] !== c || t[13] !== i || t[14] !== m ? (_ = s.jsx("div", babelHelpers.extends({ ref: c }, d, {
			"data-testid": "quick-action-section",
			"data-surface": i,
			children: m
		})), t[12] = c, t[13] = i, t[14] = m, t[15] = _) : _ = t[15], _;
	}
	l.default = u;
}), 98);

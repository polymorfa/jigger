__d("WAWebLeadStageChip.react", [
	"fbt",
	"WAWebCustomerDataCollection",
	"WAWebCustomerDataFieldSaver",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebStopEvent",
	"WDSChip.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebListener",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.customer, n = e.onPillClick, a = e.onStageChange, i = e.showNoneOption, l = e.testid, c = d(function() {
			var e;
			return (e = o("WAWebLeadStage").getLeadStageFromNumber(t == null ? void 0 : t.leadStage)) != null ? e : o("WAWebLeadStage").LeadStage.NONE;
		}, [t == null ? void 0 : t.leadStage]), f = _(c), g = f[0], h = f[1], y = _(t == null ? void 0 : t.id), C = y[0], b = y[1];
		C !== (t == null ? void 0 : t.id) && (b(t == null ? void 0 : t.id), h(c())), o("useWAWebListener").useListeners(t != null ? [{
			source: t,
			eventOrEvents: "change:leadStage",
			callback: function() {
				h(c());
			}
		}] : []);
		var v = p(null), S = d(function(e) {
			var n = g;
			if (a != null) h(e), a(e, n);
			else if (t != null) {
				var r = o("WAWebCustomerDataCollection").CustomerDataCollection.get(t.id);
				r != null && (h(e), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(r.chatJid, r, { leadStage: e }));
			}
		}, [
			g,
			t,
			a
		]), R = i === !0 ? o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE : o("WAWebLeadStage").LEAD_STAGE_ORDER, L = m(function() {
			return u.jsx(r("WDSMenu.react"), { children: R.map(function(e) {
				return u.jsx(r("WDSMenuItem.react"), {
					isToggleable: !0,
					onPress: function() {
						return S(e);
					},
					testid: "lead-stage-option-" + e,
					title: o("WAWebLeadStageNames").getLeadStageName(e),
					toggled: g === e
				}, e);
			}) });
		}, [
			g,
			S,
			R
		]), E = r("useWDSMenu")({
			targetRef: v,
			menu: L
		}), k = E.closeMenu, I = E.isMenuOpen, T = E.menuPortal, D = E.openMenu, x = d(function() {
			I ? k() : (n == null || n(g), D());
		}, [
			k,
			g,
			I,
			n,
			D
		]), $ = o("WAWebLeadStageNames").getLeadStageName(g);
		return u.jsxs("div", {
			onClick: o("WAWebStopEvent").stopPropagation,
			onKeyDown: o("WAWebStopEvent").stopPropagation,
			role: "toolbar",
			children: [u.jsx(r("WDSChip.react"), {
				"aria-haspopup": "menu",
				"aria-expanded": I,
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("lead stage name", $)]
				),
				label: $,
				onPress: x,
				ref: v,
				showEndDropdownIcon: !0,
				testid: l != null ? l : "customer_manager_lead_stage_chip"
			}), T]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

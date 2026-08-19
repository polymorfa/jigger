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
	"react-compiler-runtime",
	"useWAWebListener",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(50), n = e.customer, a = e.onPillClick, i = e.onStageChange, l = e.showNoneOption, c = e.testid, d;
		t[0] !== (n == null ? void 0 : n.leadStage) ? (d = function() {
			var e;
			return (e = o("WAWebLeadStage").getLeadStageFromNumber(n == null ? void 0 : n.leadStage)) != null ? e : o("WAWebLeadStage").LeadStage.NONE;
		}, t[0] = n == null ? void 0 : n.leadStage, t[1] = d) : d = t[1], n == null || n.leadStage;
		var m = d, f = _(m), g = f[0], h = f[1], y = _(n == null ? void 0 : n.id), C = y[0], b = y[1];
		C !== (n == null ? void 0 : n.id) && (b(n == null ? void 0 : n.id), h(m()));
		var v;
		t[2] !== n || t[3] !== m ? (v = n != null ? [{
			source: n,
			eventOrEvents: "change:leadStage",
			callback: function() {
				h(m());
			}
		}] : [], t[2] = n, t[3] = m, t[4] = v) : v = t[4], o("useWAWebListener").useListeners(v);
		var S = p(null), R;
		t[5] !== g || t[6] !== n || t[7] !== i ? (R = function(t) {
			var e = g;
			if (i != null) h(t), i(t, e);
			else if (n != null) {
				var r = o("WAWebCustomerDataCollection").CustomerDataCollection.get(n.id);
				r != null && (h(t), o("WAWebCustomerDataFieldSaver").saveCustomerDataField(r.chatJid, r, { leadStage: t }));
			}
		}, t[5] = g, t[6] = n, t[7] = i, t[8] = R) : R = t[8];
		var L = R, E = l === !0 ? o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE : o("WAWebLeadStage").LEAD_STAGE_ORDER, k;
		if (t[9] !== g || t[10] !== L || t[11] !== E) {
			var I;
			t[13] !== g || t[14] !== L ? (I = function(t) {
				return u.jsx(r("WDSMenuItem.react"), {
					isToggleable: !0,
					onPress: function() {
						return L(t);
					},
					testid: "lead-stage-option-" + t,
					title: o("WAWebLeadStageNames").getLeadStageName(t),
					toggled: g === t
				}, t);
			}, t[13] = g, t[14] = L, t[15] = I) : I = t[15], k = E.map(I), t[9] = g, t[10] = L, t[11] = E, t[12] = k;
		} else k = t[12];
		var T;
		t[16] !== k ? (T = u.jsx(r("WDSMenu.react"), { children: k }), t[16] = k, t[17] = T) : T = t[17];
		var D = T, x;
		t[18] !== D ? (x = {
			targetRef: S,
			menu: D
		}, t[18] = D, t[19] = x) : x = t[19];
		var $ = r("useWDSMenu")(x), P = $.closeMenu, N = $.isMenuOpen, M = $.menuPortal, w = $.openMenu, A;
		t[20] !== P || t[21] !== g || t[22] !== N || t[23] !== a || t[24] !== w ? (A = function() {
			N ? P() : (a == null || a(g), w());
		}, t[20] = P, t[21] = g, t[22] = N, t[23] = a, t[24] = w, t[25] = A) : A = t[25];
		var F = A, O, B, W, q, U, V, H, G;
		t[26] !== g || t[27] !== N ? (B = o("WAWebLeadStageNames").getLeadStageName(g), q = o("WAWebStopEvent").stopPropagation, U = o("WAWebStopEvent").stopPropagation, V = "toolbar", O = r("WDSChip.react"), H = "menu", G = N, W = s._(
			/*BTDS*/
			"",
			[s._param("lead stage name", B)]
		), t[26] = g, t[27] = N, t[28] = O, t[29] = B, t[30] = W, t[31] = q, t[32] = U, t[33] = V, t[34] = H, t[35] = G) : (O = t[28], B = t[29], W = t[30], q = t[31], U = t[32], V = t[33], H = t[34], G = t[35]);
		var z = c != null ? c : "customer_manager_lead_stage_chip", j;
		t[36] !== O || t[37] !== F || t[38] !== B || t[39] !== W || t[40] !== z || t[41] !== H || t[42] !== G ? (j = u.jsx(O, {
			"aria-haspopup": H,
			"aria-expanded": G,
			"aria-label": W,
			label: B,
			onPress: F,
			ref: S,
			showEndDropdownIcon: !0,
			testid: z
		}), t[36] = O, t[37] = F, t[38] = B, t[39] = W, t[40] = z, t[41] = H, t[42] = G, t[43] = j) : j = t[43];
		var K;
		return t[44] !== M || t[45] !== q || t[46] !== U || t[47] !== V || t[48] !== j ? (K = u.jsxs("div", {
			onClick: q,
			onKeyDown: U,
			role: V,
			children: [j, M]
		}), t[44] = M, t[45] = q, t[46] = U, t[47] = V, t[48] = j, t[49] = K) : K = t[49], K;
	}
	l.default = f;
}), 226);

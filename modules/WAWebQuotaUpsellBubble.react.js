__d("WAWebQuotaUpsellBubble.react", [
	"WAWebMessageBubbleActions.react",
	"WAWebMetaOneUpsellLogger",
	"WAWebModalManager",
	"WAWebQuotaUpsellCompanionAlert.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect;
	function m(e) {
		var t = o("react-compiler-runtime").c(33), n = e.benefitType, a = e.metaSlot, i = e.msgId, l = e.body, u = e.bodyLine1, c = e.bodyLine2, m = e.buttons, p = e.title, _, f;
		t[0] !== n || t[1] !== i ? (_ = function() {
			o("WAWebMetaOneUpsellLogger").logQuotaUpsellView(i, n);
		}, f = [n, i], t[0] = n, t[1] = i, t[2] = _, t[3] = f) : (_ = t[2], f = t[3]), d(_, f);
		var g;
		t[4] !== n ? (g = function() {
			o("WAWebMetaOneUpsellLogger").logQuotaUpsellCtaClick(n), o("WAWebModalManager").ModalManager.openAlert(s.jsx(r("WAWebQuotaUpsellCompanionAlert.react"), {}));
		}, t[4] = n, t[5] = g) : g = t[5];
		var h = g, y = l != null && l !== "", C = y ? l : u, b = m != null && m.length > 0 ? m[0] : null, v = b != null && b.label != null && b.label !== "" ? b.label : null, S;
		if (t[6] !== c || t[7] !== C || t[8] !== y || t[9] !== p) {
			if (S = [], p != null && p !== "") {
				var R;
				t[11] !== p ? (R = {
					colorName: "contentDefault",
					content: p,
					key: "title",
					type: "Body2Emphasized"
				}, t[11] = p, t[12] = R) : R = t[12], S.push(R);
			}
			if (C != null && C !== "") {
				var L;
				t[13] !== C ? (L = {
					colorName: "contentDeemphasized",
					content: C,
					key: "body",
					type: "Body2"
				}, t[13] = C, t[14] = L) : L = t[14], S.push(L);
			}
			if (c != null && c !== "" && !y) {
				var E;
				t[15] !== c ? (E = {
					colorName: "contentDeemphasized",
					content: c,
					key: "bodyLine2",
					type: "Body2"
				}, t[15] = c, t[16] = E) : E = t[16], S.push(E);
			}
			t[6] = c, t[7] = C, t[8] = y, t[9] = p, t[10] = S;
		} else S = t[10];
		var k;
		t[17] !== a ? (k = a != null ? s.jsx("span", {
			className: "xtrg13t x1wbi8v6",
			"data-testid": "quota-upsell-meta-inline",
			children: a
		}) : null, t[17] = a, t[18] = k) : k = t[18];
		var I = k, T;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x78zum5 xdt5ytf x16ovd2e" }, t[19] = T) : T = t[19];
		var D;
		t[20] !== I || t[21] !== S ? (D = S.length > 0 && s.jsx("div", {
			className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g",
			"data-testid": "quota-upsell-text-block",
			children: S.map(function(e, t) {
				return s.jsxs(r("WDSText.react"), {
					type: e.type,
					colorName: e.colorName,
					children: [e.content, t === S.length - 1 ? I : null]
				}, e.key);
			})
		}), t[20] = I, t[21] = S, t[22] = D) : D = t[22];
		var x;
		t[23] !== a || t[24] !== S.length ? (x = S.length === 0 && a != null && s.jsx("div", {
			className: "x78zum5 x13a6bvl",
			"data-testid": "quota-upsell-meta-row",
			children: a
		}), t[23] = a, t[24] = S.length, t[25] = x) : x = t[25];
		var $;
		t[26] !== v || t[27] !== h ? ($ = v != null && s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: v,
			onClick: h,
			testid: "quota-upsell-cta"
		}] }), t[26] = v, t[27] = h, t[28] = $) : $ = t[28];
		var P;
		return t[29] !== D || t[30] !== x || t[31] !== $ ? (P = s.jsxs("div", babelHelpers.extends({}, T, {
			"data-testid": "quota-upsell-bubble",
			children: [
				D,
				x,
				$
			]
		})), t[29] = D, t[30] = x, t[31] = $, t[32] = P) : P = t[32], P;
	}
	l.default = m;
}), 98);

__d("WAWebBizAdCreationTargetingModalAgeComponent.react", [
	"fbt",
	"AdsYouthAdsAgeLimitEligibility",
	"LWICometBasicAdsYouthAdsUtils",
	"LWICometPAOBasicYouthUtils",
	"LWICometTargetingAgeRangeUtils",
	"LWICometTargetingModalStateContext",
	"WAWebBizAdCreationTargetingSpecDispatcherContext",
	"WAWebFlex.react",
	"WDSSlider.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"withWAWebBizAdCreationTargetingSpecPart.react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useState, f = 25;
	function g(e) {
		var t = o("react-compiler-runtime").c(54), n = e.genders, a = e.geoLocations, i = e.isAdvantagePlusAudienceEnabled, l = e.isTargetingInterests, c = e.specAgeRange, d = e.specMaxAge, g = e.specMinAge, h = m(r("WAWebBizAdCreationTargetingSpecDispatcherContext")), y = m(r("LWICometTargetingModalStateContext")), C = y.isPAOBasicAdvertiser, b = y.targetingConstraints, v = b.ageConfig, S = v.isMaxAgeFixed, R = v.isMinAgeFixed, L = v.maxAgeRange, E = v.maxTargetingAge, k = v.minAgeRange, I = v.minTargetingAge, T = o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(a), D = o("LWICometTargetingAgeRangeUtils").getSpecMinTargetingAge(c, g), x = D == null, $ = D != null && D >= T, P = C && (x || $) && o("LWICometPAOBasicYouthUtils").isAdAccountInPAOBasicYouthEnforcement(!1), N = o("LWICometBasicAdsYouthAdsUtils").isTargetingGender(n) || l || o("LWICometBasicAdsYouthAdsUtils").isTargetingUnderCity(a) || i, M = N || P, w = M ? Math.max(I, T) : I, A = _(w), F = A[0], O = A[1], B = _(w), W = B[0], q = B[1], U;
		if (t[0] !== i || t[1] !== w || t[2] !== c || t[3] !== g) {
			var V;
			U = i ? (V = c == null ? void 0 : c[0]) != null ? V : w : o("LWICometTargetingAgeRangeUtils").getSpecMinOrDefaultAge(c, g, w), t[0] = i, t[1] = w, t[2] = c, t[3] = g, t[4] = U;
		} else U = t[4];
		var H = U, G = _(Math.max(H, F)), z = G[0], j = G[1], K;
		if (t[5] !== i || t[6] !== c || t[7] !== d) {
			var Q;
			K = i ? (Q = c == null ? void 0 : c[1]) != null ? Q : o("LWICometTargetingAgeRangeUtils").MAX_AGE : o("LWICometTargetingAgeRangeUtils").getSpecMaxOrDefaultAge(c, d, o("LWICometTargetingAgeRangeUtils").MAX_AGE), t[5] = i, t[6] = c, t[7] = d, t[8] = K;
		} else K = t[8];
		var X = K, Y = _(X), J = Y[0], Z = Y[1], ee = _(c), te = ee[0], ne = ee[1];
		W !== w && (q(w), w !== F && O(w), z < w && j(w), J < w && Z(w)), te !== c && (ne(c), c != null && (c[0] !== z && j(c[0]), c[1] !== J && Z(c[1])));
		var re;
		t[9] !== h || t[10] !== g ? (re = function(t) {
			t !== g && h({
				ageMin: t,
				type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_min"
			});
		}, t[9] = h, t[10] = g, t[11] = re) : re = t[11];
		var oe = re, ae;
		t[12] !== h || t[13] !== d ? (ae = function(t) {
			t !== d && h({
				ageMax: t,
				type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_max"
			});
		}, t[12] = h, t[13] = d, t[14] = ae) : ae = t[14];
		var ie = ae, le;
		t[15] !== h || t[16] !== c ? (le = function(t) {
			(t == null && c != null || t != null && c == null || (t == null ? void 0 : t[0]) !== (c == null ? void 0 : c[0]) || (t == null ? void 0 : t[1]) !== (c == null ? void 0 : c[1])) && h({
				ageRange: t,
				type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_range"
			});
		}, t[15] = h, t[16] = c, t[17] = le) : le = t[17];
		var se = le, ue, ce;
		t[18] !== w || t[19] !== c || t[20] !== d || t[21] !== g || t[22] !== se || t[23] !== ie || t[24] !== oe ? (ue = function() {
			var e = g == null || g != null && g < w;
			e && oe(w), d != null && d < w && ie(w), c != null && c[0] < w && se([w, Math.max(w, c[1])]);
		}, ce = [
			w,
			c,
			d,
			g,
			se,
			ie,
			oe
		], t[18] = w, t[19] = c, t[20] = d, t[21] = g, t[22] = se, t[23] = ie, t[24] = oe, t[25] = ue, t[26] = ce) : (ue = t[25], ce = t[26]), p(ue, ce);
		var de;
		t[27] !== S || t[28] !== R || t[29] !== L || t[30] !== k ? (de = function(t) {
			var e = t[0], n = t[1];
			R || k != null && !k.has(e) || S || L != null && !L.has(n) || (j(e), Z(n));
		}, t[27] = S, t[28] = R, t[29] = L, t[30] = k, t[31] = de) : de = t[31];
		var me = de, pe;
		t[32] !== i || t[33] !== S || t[34] !== R || t[35] !== L || t[36] !== E || t[37] !== k || t[38] !== se || t[39] !== ie || t[40] !== oe ? (pe = function(t) {
			var e = t[0], n = t[1];
			R || k != null && !k.has(e) || S || L != null && !L.has(n) || (j(e), Z(n), i ? (oe(Math.min(e, f)), ie(E), se([e, n])) : (oe(e), ie(n), se([e, n])));
		}, t[32] = i, t[33] = S, t[34] = R, t[35] = L, t[36] = E, t[37] = k, t[38] = se, t[39] = ie, t[40] = oe, t[41] = pe) : pe = t[41];
		var _e = pe, fe;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (fe = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[42] = fe) : fe = t[42];
		var ge;
		t[43] === Symbol.for("react.memo_cache_sentinel") ? (ge = s._(
			/*BTDS*/
			""
		), t[43] = ge) : ge = t[43];
		var he = R && S, ye;
		t[44] !== J || t[45] !== z ? (ye = [z, J], t[44] = J, t[45] = z, t[46] = ye) : ye = t[46];
		var Ce;
		return t[47] !== _e || t[48] !== me || t[49] !== E || t[50] !== F || t[51] !== he || t[52] !== ye ? (Ce = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 8,
			children: [fe, u.jsx(r("WDSSlider.react"), {
				"aria-label": ge,
				disabled: he,
				max: E,
				min: F,
				onChange: me,
				onChangeSettled: _e,
				startEndLabels: "currentValues",
				step: 1,
				values: ye
			})]
		}), t[47] = _e, t[48] = me, t[49] = E, t[50] = F, t[51] = he, t[52] = ye, t[53] = Ce) : Ce = t[53], Ce;
	}
	var h = r("withWAWebBizAdCreationTargetingSpecPart.react")(g, function(e) {
		var t, n, r;
		return {
			genders: e.genders,
			geoLocations: e.geo_locations,
			isAdvantagePlusAudienceEnabled: ((t = e.targeting_automation) == null ? void 0 : t.advantage_audience) === 1,
			isTargetingInterests: ((n = (r = e.flexible_spec) == null || (r = r[0]) == null || (r = r.interests) == null ? void 0 : r.length) != null ? n : 0) > 0,
			specAgeRange: e.age_range,
			specMaxAge: e.age_max,
			specMinAge: e.age_min
		};
	});
	l.default = h;
}), 226);

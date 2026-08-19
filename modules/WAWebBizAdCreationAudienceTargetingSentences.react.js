__d("WAWebBizAdCreationAudienceTargetingSentences.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a, i = o("react-compiler-runtime").c(5), l = t.legacyAccountID, u = t.locationOnly, d = t.option, g = t.targetingSpec, y = {
			ad_account_id: l,
			audience_option: d,
			location_only: u,
			targeting_spec_string: JSON.stringify(g)
		}, C = o("CometRelay").useLazyLoadQuery(e !== void 0 ? e : e = n("WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql"), y), b, v;
		if (i[0] !== (C == null || (a = C.lwi) == null ? void 0 : a.targeting_sentences)) {
			var S;
			v = Symbol.for("react.early_return_sentinel");
			e: {
				var R, L = C == null || (R = C.lwi) == null || (R = R.targeting_sentences) == null ? void 0 : R.filter(h);
				if (L == null) {
					v = null;
					break e;
				}
				var E = L.map(f).filter(_);
				L.some(p) || E.push({
					category: s._(
						/*BTDS*/
						""
					).toString(),
					values: [s._(
						/*BTDS*/
						""
					).toString()]
				}), b = E.map(m).join("\n");
			}
			i[0] = C == null || (S = C.lwi) == null ? void 0 : S.targeting_sentences, i[1] = b, i[2] = v;
		} else b = i[1], v = i[2];
		if (v !== Symbol.for("react.early_return_sentinel")) return v;
		var k = b, I;
		return i[3] !== k ? (I = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			testid: "biz_native_ads_audience_targeting_sentences",
			type: "Body2",
			children: k
		}), i[3] = k, i[4] = I) : I = i[4], I;
	}
	function m(e) {
		var t;
		return ((t = e.category) != null ? t : "") + ": " + e.values.join(", ");
	}
	function p(e) {
		return e.meta === "advantage_audience";
	}
	function _(e) {
		return e.values.length > 0;
	}
	function f(e) {
		return {
			category: e.category_string,
			values: e.values.filter(g)
		};
	}
	function g(e) {
		return e.includes("Advantage+") !== !0;
	}
	function h(e) {
		return e.meta !== "broad_geo_targeting" && e.meta !== "interest_expansion";
	}
	l.default = d;
}), 226);

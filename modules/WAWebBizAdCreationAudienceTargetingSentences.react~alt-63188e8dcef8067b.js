__d("WAWebBizAdCreationAudienceTargetingSentences.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a, i = t.legacyAccountID, l = t.locationOnly, u = t.option, d = t.targetingSpec, m = {
			ad_account_id: i,
			audience_option: u,
			location_only: l,
			targeting_spec_string: JSON.stringify(d)
		}, p = o("CometRelay").useLazyLoadQuery(e !== void 0 ? e : e = n("WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql"), m), _ = p == null || (a = p.lwi) == null || (a = a.targeting_sentences) == null ? void 0 : a.filter(function(e) {
			return e.meta !== "broad_geo_targeting" && e.meta !== "interest_expansion";
		});
		if (_ == null) return null;
		var f = _.map(function(e) {
			return {
				category: e.category_string,
				values: e.values.filter(function(e) {
					return e.includes("Advantage+") !== !0;
				})
			};
		}).filter(function(e) {
			return e.values.length > 0;
		});
		_.some(function(e) {
			return e.meta === "advantage_audience";
		}) || f.push({
			category: s._(
				/*BTDS*/
				""
			).toString(),
			values: [s._(
				/*BTDS*/
				""
			).toString()]
		});
		var g = f.map(function(e) {
			var t;
			return ((t = e.category) != null ? t : "") + ": " + e.values.join(", ");
		}).join("\n");
		return c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			testid: "biz_native_ads_audience_targeting_sentences",
			type: "Body2",
			children: g
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

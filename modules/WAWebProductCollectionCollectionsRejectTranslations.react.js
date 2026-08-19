__d("WAWebProductCollectionCollectionsRejectTranslations.react", [
	"fbt",
	"WAWebBizCommerceConstants",
	"WAWebClickableLink.react",
	"WAWebExternalLink.react",
	"WAWebNonEmptyString",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e, t) {
		var n, a = (n = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)) != null ? n : o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL;
		return u.jsx(r("WAWebClickableLink.react"), {
			href: a,
			onClick: function(t) {
				t.preventDefault(), o("WAWebExternalLink.react").openExternalLink(a);
			},
			children: e
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t) {
		var n;
		switch (e) {
			case "drugs": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_drugs", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_drugs", c(n, t))]
				)
			};
			case "weapons": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_weapons", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_weapons", c(n, t))]
				)
			};
			case "animals": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_animals", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_animals", c(n, t))]
				)
			};
			case "alcohol": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_alcohol", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_alcohol", c(n, t))]
				)
			};
			case "gambling": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_gambling", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_gambling", c(n, t))]
				)
			};
			case "tobacco": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_tobacco", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_tobacco", c(n, t))]
				)
			};
			case "overtly_sexualized_positioning": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_overtly_sexualized_positioning", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_overtly_sexualized_positioning", c(n, t))]
				)
			};
			case "adult": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_adult", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_adult", c(n, t))]
				)
			};
			case "supplements": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_supplements", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_supplements", c(n, t))]
				)
			};
			case "body_parts_fluids": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_body_parts_fluids", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_body_parts_fluids", c(n, t))]
				)
			};
			case "healthcare": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_healthcare", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_healthcare", c(n, t))]
				)
			};
			case "misleading": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_misleading", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_misleading", c(n, t))]
				)
			};
			case "real_fake_currency": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_real_fake_currency", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_real_fake_currency", c(n, t))]
				)
			};
			case "digital_services_products": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_digital_services_products", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_digital_services_products", c(n, t))]
				)
			};
			case "thrid_party_infringements": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_thrid_party_infringements", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_thrid_party_infringements", c(n, t))]
				)
			};
			case "unauthorized_media": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_unauthorized_media", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_unauthorized_media", c(n, t))]
				)
			};
			case "illegal_products": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_illegal_products", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_illegal_products", c(n, t))]
				)
			};
			case "hazardous_goods_and_materials": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_hazardous_goods_and_materials", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_hazardous_goods_and_materials", c(n, t))]
				)
			};
			case "stolen_goods": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_stolen_goods", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_stolen_goods", c(n, t))]
				)
			};
			case "human_exploitation_and_sexual_services": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_human_exploitation_and_sexual_services", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_human_exploitation_and_sexual_services", c(n, t))]
				)
			};
			case "community_standards": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_community_standards", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_community_standards", c(n, t))]
				)
			};
			case "discrimination": return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_discrimination", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_discrimination", c(n, t))]
				)
			};
			default: return n = s._(
				/*BTDS*/
				""
			), {
				first: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_other_violation", c(n, t))]
				),
				second: s._(
					/*BTDS*/
					"",
					[s._param("collections_rejected_policy_other_violation", c(n, t))]
				)
			};
		}
	}
	l.getRejectedCollectionCopy = d;
}), 226);

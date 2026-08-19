__d("WAWebCommonNewsletterStrings", [
	"fbt",
	"WAWebABProps",
	"WAWebCommonNewsletterEnums",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebL10N",
	"WAWebNewsletterDirectoryFilterUtils",
	"WAWebUsernameGatingUtils",
	"WAXplatTrim",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		return e < Math.pow(10, 3) ? e : parseInt((e / 1e3).toFixed(0), 10) * 1e3;
	}
	function d(e, t) {
		return t === void 0 && (t = !1), e >= Math.pow(10, 6) ? s._(
			/*BTDS*/
			"",
			[s._plural(t ? e : c(e), "number", t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e))]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(t ? e : c(e), "number", t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e))]
		);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		switch (e) {
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Recommended: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Trending: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Featured: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.New: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Popular: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.Country: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function p(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("directory_category_name", e.name)]
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return s._(
			/*BTDS*/
			""
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return s._(
			/*BTDS*/
			""
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return s._(
			/*BTDS*/
			""
		);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.isLoading, n = e.resultCount, r = e.searchText;
		return t ? n > 0 ? s._(
			/*BTDS*/
			"",
			[s._plural(n, "number")]
		) : s._(
			/*BTDS*/
			""
		) : n === 0 ? s._(
			/*BTDS*/
			""
		) : o("WAXplatTrim").trim(r) !== "" ? s._(
			/*BTDS*/
			"",
			[s._plural(n, "number")]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(n, "number")]
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		return e === "create" ? s._(
			/*BTDS*/
			""
		) : e === "directory" ? _() : t != null ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return s._(
			/*BTDS*/
			""
		);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("channel_name", e)]
		);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("channel_name", e)]
		);
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		return s._(
			/*BTDS*/
			""
		);
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("contact-name", e)]
		);
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		switch (e) {
			case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner: return s._(
				/*BTDS*/
				""
			);
			default: return null;
		}
	}
	function T(e) {
		switch (e) {
			case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin: return "newsletter-admin-marker";
			case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner: return "newsletter-owner-marker";
			default: return "";
		}
	}
	function D() {
		return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x() {
		return s._(
			/*BTDS*/
			""
		);
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $() {
		return s._(
			/*BTDS*/
			""
		);
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P() {
		return s._(
			/*BTDS*/
			""
		);
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number", e)]
		);
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number", e)]
		);
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "follows"
		};
	}
	function A() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "net-follows"
		};
	}
	function F() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "unfollows"
		};
	}
	function O() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "accounts-reached"
		};
	}
	function B() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "followers"
		};
	}
	function W() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "non-followers"
		};
	}
	function q() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "reach-top-regions"
		};
	}
	function U() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "follower-top-regions"
		};
	}
	function V() {
		return {
			name: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			key: "total-followers"
		};
	}
	function H() {
		var e = o("WAWebABProps").getABPropConfigValue("channels_producer_insights_min_followers");
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number", e)]
		);
	}
	H.displayName = H.name + " [from " + i.id + "]";
	function G() {
		return s._(
			/*BTDS*/
			""
		);
	}
	G.displayName = G.name + " [from " + i.id + "]", l.roundToThousands = c, l.getNewsletterFollowersText = d, l.getNewsletterDirectoryFilterLabel = m, l.getNewsletterCategorySearchPlaceholder = p, l.getFindNewslettersText = _, l.getCreateChannelText = f, l.getNoInternetConnectionText = g, l.getDeleteChannelText = h, l.getNewsletterResultsAnnouncementString = y, l.getNewsletterLinkActionLabel = C, l.getUnfollowNewsletterText = b, l.getCopyLinkText = v, l.startGrowingChannelNameText = S, l.getYouCreatedChannelWithNameText = R, l.getAdminInvitesTitleText = L, l.getRevokeButtonFullText = E, l.getSomeoneIsNoLongerAnAdminText = k, l.getNewsletterMembershipRoleTag = I, l.getNewsletterRoleMarker = T, l.adminPrivacyNux = D, l.followerInviteDisclaimer = x, l.getNewsletterTransferOwnershipText = $, l.getNewsletterSimilarNewslettersTitle = P, l.getDaysCoveredText = N, l.getOverLastDaysText = M, l.getFollowsMetricInfo = w, l.getNetFollowsMetricInfo = A, l.getUnfollowsMetricInfo = F, l.getAccountsReachMetricInfo = O, l.getReachFollowersMetricInfo = B, l.getReachNonFollowersMetricInfo = W, l.getReachTopRegionsMetricInfo = q, l.getFollowerTopRegionsMetricInfo = U, l.getTotalFollowersMetricInfo = V, l.getMetricsAvailabilityDisclaimer = H, l.getReachMetricsThreshold = G;
}), 226);

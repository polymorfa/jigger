__d("MWEBChatTabBannerNux.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"JSResourceForInteraction",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWEBChatTabBannerNux_query.graphql",
	"MWEBEntrypointsKillswitch.enum",
	"MWEBMobileOnboardingEligibility",
	"MWEBWebOnboardingUpsellUtils",
	"MWEncryptedBackupsThreadListQPWrapper.react",
	"cr:20045",
	"cr:35052",
	"react",
	"react-compiler-runtime",
	"useEncryptedBackupsProcessStatePreLoaded",
	"useMWEncryptedBackupsListenForChangesToVirtualDevicesV2"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = o("MWEBMobileOnboardingEligibility").requireMobileOnboardingIfEligible(r("JSResourceForInteraction")("MWEBMobileOnboardingQPBannerWrapper.react").__setRef("MWEBChatTabBannerNux.react"));
	function d(t) {
		var a, l, s, d = o("react-compiler-runtime").c(8), m = t.query, p = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MWEBChatTabBannerNux_query.graphql"), m), _;
		d[0] !== p ? (_ = {
			entrypoint: r("MWEBEntrypointsKillswitch.enum").NOT_AN_ENTRYPOINT_NO_KILLSWITCH_APPLICABLE,
			query: p
		}, d[0] = p, d[1] = _) : _ = d[1];
		var f = r("useEncryptedBackupsProcessStatePreLoaded")(_), g = r("useMWEncryptedBackupsListenForChangesToVirtualDevicesV2")(), h = g.vestaClientID, y = h != null, C = (a = (l = p.viewer) == null ? void 0 : l.if_viewer_can_see_messenger_eb_auto_eb_upsells) != null ? a : (s = p.viewer) == null ? void 0 : s.if_viewer_can_see_messenger_eb_new_user_onboarding_upsells;
		switch (f) {
			case 3: {
				if (n("cr:35052") != null && !y) {
					var b;
					return d[2] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(n("cr:35052"), { children: null }), d[2] = b) : b = d[2], b;
				}
				return null;
			}
			case 2: {
				if (o("MWEBWebOnboardingUpsellUtils").IS_E2E_TEST_UNRELATED_TO_ENCRYPTED_BACKUPS) return null;
				if (C != null) {
					var v;
					d[3] === Symbol.for("react.memo_cache_sentinel") ? (v = {}, d[3] = v) : v = d[3];
					var S;
					return d[4] !== C ? (S = u.jsx(r("CometPlaceholder.react"), {
						fallback: null,
						name: i.id,
						children: u.jsx(o("CometRelay").MatchContainer, {
							match: C,
							props: v
						})
					}), d[4] = C, d[5] = S) : S = d[5], S;
				}
				if (n("cr:20045") != null) {
					var R;
					return d[6] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(n("cr:20045"), {
						children: null,
						source: r("MWChatEncryptedBackupsQPLSource.enum").CHAT_TAB_ONBOARDING_QP
					}), d[6] = R) : R = d[6], R;
				}
				var L;
				return d[7] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(c, {
					fallback: null,
					props: {
						children: null,
						source: r("MWChatEncryptedBackupsQPLSource.enum").CHAT_TAB_ONBOARDING_QP,
						trigger: o("MWEncryptedBackupsThreadListQPWrapper.react").MWEncryptedBackupsQPTrigger.CHAT_TAB
					}
				}), d[7] = L) : L = d[7], L;
			}
			default: return null;
		}
	}
	l.default = d;
}), 98);

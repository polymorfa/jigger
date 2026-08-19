__d("WAMOIdentityUtils", [
	"$InternalEnum",
	"AdCampaignDestination",
	"AdsAPIObjectives",
	"AdsUEditorMessagingDestinationUtils",
	"WAMOStatusAdsManagerUtils",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.length === 1 && e[0].wamo_whatsapp_identity_id_type === "PAGE";
	}
	function s(e) {
		var t, n = e.find(function(e) {
			return e.wamo_whatsapp_identity_id_type === "PAGE";
		});
		return (t = n == null ? void 0 : n.page_token) != null ? t : null;
	}
	var u = n("$InternalEnum").Mirrored([
		"NO_CHANGE",
		"UNSET",
		"SET"
	]);
	function c(e, t, n) {
		var a, i, l, s = o("WAMOStatusAdsManagerUtils").isWAMOStatusSelectedFromCampaign(e), u = o("WAMOStatusAdsManagerUtils").isMarketingMessagesSelectedFromCampaign(e), c = o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(e.destination_type), d = t.creative, m = d == null || (a = d.asset_feed_spec) == null ? void 0 : a.call_to_actions, p = m != null && m.some(function(e) {
			var t;
			return (e == null || (t = e.value) == null ? void 0 : t.app_destination) === "WHATSAPP";
		}), _ = d == null || (i = d.object_story_spec) == null || (i = i.link_data) == null ? void 0 : i.call_to_action, f = (_ == null || (l = _.value) == null ? void 0 : l.app_destination) === "WHATSAPP", g = p || f, h = c || g;
		return {
			hasWhatsAppStatus: s,
			hasMMPlacement: u,
			isCTWA: h,
			isCTWADestination: c,
			isAdgroupCTWA: g && (n === r("AdsAPIObjectives").OUTCOME_AWARENESS || n === r("AdsAPIObjectives").REACH || n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && e.destination_type === r("AdCampaignDestination").ON_VIDEO)
		};
	}
	function d(e, t) {
		if (!r("gkx")("9268")) return !1;
		var n = c(e, t), o = n.hasMMPlacement, a = n.hasWhatsAppStatus, i = n.isCTWA;
		return a && !o && !i;
	}
	function m(e, t) {
		if (!r("gkx")("9268")) return !1;
		var n = c(e, t), o = n.hasMMPlacement, a = n.hasWhatsAppStatus;
		return a && o;
	}
	function p(e, t, n, r) {
		var o, a, i, l, s, d = c(e, t), m = d.hasMMPlacement, p = d.hasWhatsAppStatus, _ = d.isCTWA;
		if (!p) return n == null ? {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		} : {
			action_type: u.UNSET,
			new_identity_id: null
		};
		if (r == null) return {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		};
		var f = e.promoted_object, g = (o = f == null ? void 0 : f.whats_app_business_phone_number_id) != null ? o : f == null ? void 0 : f.page_whatsapp_number_id, h = t.creative, y = (a = h == null || (i = h.object_story_spec) == null ? void 0 : i.whats_app_business_phone_number_id) != null ? a : h == null ? void 0 : h.whatsapp_mm_business_phone_number_id, C = r.available_identities;
		if (m) return y != null ? n !== y ? {
			action_type: u.SET,
			new_identity_id: y
		} : {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		} : {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		};
		if (_) return g != null ? n !== g ? {
			action_type: u.SET,
			new_identity_id: g
		} : {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		} : {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		};
		var b = (l = (s = r.available_identities) == null ? void 0 : s.filter(function(e) {
			return (e == null ? void 0 : e.is_valid) === !0;
		})) != null ? l : [], v = b.find(function(e) {
			return (e == null ? void 0 : e.should_be_defaulted) === !0;
		});
		if (v == null) return {
			action_type: u.NO_CHANGE,
			new_identity_id: null
		};
		if (n != null) {
			var S = C.some(function(e) {
				return e.wamo_whatsapp_identity_id === n;
			});
			return S ? {
				action_type: u.NO_CHANGE,
				new_identity_id: null
			} : {
				action_type: u.SET,
				new_identity_id: v.wamo_whatsapp_identity_id
			};
		} else return {
			action_type: u.SET,
			new_identity_id: v.wamo_whatsapp_identity_id
		};
	}
	l.isOnlyPageIdentity = e, l.getPageTokenFromIdentities = s, l.WamoIdentityActionTypeEnum = u, l.getCampaignInformation = c, l.isIdentitySelectorEnabled = d, l.shouldShowMMEnabledGuidance = m, l.getNeededWAMOIdentityAction = p;
}), 98);

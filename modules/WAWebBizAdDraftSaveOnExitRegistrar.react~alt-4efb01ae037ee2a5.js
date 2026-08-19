__d("WAWebBizAdDraftSaveOnExitRegistrar.react", [
	"FBLogger",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationDraftIDContext",
	"WAWebBizAdDraftSaveCallbackContext",
	"WAWebBizNativeAdsWamLogger",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"convertWAWebSpecToLWIVariables",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreateDraftMutation",
	"useWAWebBizAdEditDraftMutation"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.spec, a = u(r("WAWebBizAdDraftSaveCallbackContext")), i = a.existingDraftIDRef, l = a.saveCallbackRef, s = u(r("WAWebBizAdCreationDraftIDContext")), d = u(r("WAWebBizAdCreationConfigContext")), m = r("useWAWebBizAdCreateDraftMutation")(), p = m[0], _ = r("useWAWebBizAdEditDraftMutation")(), f = _[0], g, h;
		return t[0] !== d || t[1] !== p || t[2] !== s || t[3] !== f || t[4] !== i || t[5] !== l || t[6] !== n ? (g = function() {
			return l.current = async function() {
				var e;
				if (d == null) return r("FBLogger")("wa_ctwa_web").warn("Draft save failed: configContext is null"), { success: !1 };
				var t = d.flowID, a = d.pageID, l = d.product, u = r("convertWAWebSpecToLWIVariables")(n, t, a, l), c = u.input.creation_spec, m = (e = s.draftID) != null ? e : i.current;
				if (m != null) {
					var _ = await f({
						draft_id: m,
						flow_id: t,
						spec: c,
						use_case: "WA_SMB"
					});
					return _.success ? (o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, JSON.stringify({
						draft_action: "edit",
						draft_id: m
					})), {
						draftID: m,
						success: !0
					}) : (r("FBLogger")("wa_ctwa_web").warn("Draft edit mutation failed"), { success: !1 });
				}
				var g = await p({
					flow_id: t,
					page_id: a,
					product: l,
					spec: c,
					use_case: "WA_SMB"
				});
				return g.success ? (s.setDraftID(g.draftID), o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, JSON.stringify({
					draft_action: "create",
					draft_id: g.draftID
				})), {
					draftID: g.draftID,
					success: !0
				}) : (r("FBLogger")("wa_ctwa_web").warn("Draft create mutation failed"), { success: !1 });
			}, (function() {
				l.current = null;
			});
		}, h = [
			l,
			i,
			s,
			d,
			n,
			p,
			f
		], t[0] = d, t[1] = p, t[2] = s, t[3] = f, t[4] = i, t[5] = l, t[6] = n, t[7] = g, t[8] = h) : (g = t[7], h = t[8]), c(g, h), null;
	}
	l.default = d;
}), 98);

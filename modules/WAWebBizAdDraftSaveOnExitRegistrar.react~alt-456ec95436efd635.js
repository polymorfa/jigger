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
	"useWAWebBizAdCreateDraftMutation",
	"useWAWebBizAdEditDraftMutation"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect;
	function d(e) {
		var t = e.spec, n = u(r("WAWebBizAdDraftSaveCallbackContext")), a = n.existingDraftIDRef, i = n.saveCallbackRef, l = u(r("WAWebBizAdCreationDraftIDContext")), s = u(r("WAWebBizAdCreationConfigContext")), d = r("useWAWebBizAdCreateDraftMutation")(), m = d[0], p = r("useWAWebBizAdEditDraftMutation")(), _ = p[0];
		return c(function() {
			return i.current = async function() {
				var e;
				if (s == null) return r("FBLogger")("wa_ctwa_web").warn("Draft save failed: configContext is null"), { success: !1 };
				var n = s.flowID, i = s.pageID, u = s.product, c = r("convertWAWebSpecToLWIVariables")(t, n, i, u), d = c.input.creation_spec, p = (e = l.draftID) != null ? e : a.current;
				if (p != null) {
					var f = await _({
						draft_id: p,
						flow_id: n,
						spec: d,
						use_case: "WA_SMB"
					});
					return f.success ? (o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, JSON.stringify({
						draft_action: "edit",
						draft_id: p
					})), {
						draftID: p,
						success: !0
					}) : (r("FBLogger")("wa_ctwa_web").warn("Draft edit mutation failed"), { success: !1 });
				}
				var g = await m({
					flow_id: n,
					page_id: i,
					product: u,
					spec: d,
					use_case: "WA_SMB"
				});
				return g.success ? (l.setDraftID(g.draftID), o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_AD_CREATION_DRAFT_AD_SAVED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, n, null, JSON.stringify({
					draft_action: "create",
					draft_id: g.draftID
				})), {
					draftID: g.draftID,
					success: !0
				}) : (r("FBLogger")("wa_ctwa_web").warn("Draft create mutation failed"), { success: !1 });
			}, function() {
				i.current = null;
			};
		}, [
			i,
			a,
			l,
			s,
			t,
			m,
			_
		]), null;
	}
	l.default = d;
}), 98);

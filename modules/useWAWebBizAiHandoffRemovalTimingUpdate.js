__d("useWAWebBizAiHandoffRemovalTimingUpdate", [
	"CometRelay",
	"Promise",
	"WALogger",
	"WAWebBizAiHandoffRemovalTimingUpdateMutation",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = (u || (u = o("react"))).useCallback, d = { isSuccess: !0 }, m = { isSuccess: !1 };
	function p() {
		var t = o("react-compiler-runtime").c(2), a = o("CometRelay").useMutation(o("WAWebBizAiHandoffRemovalTimingUpdateMutation").MUTATION), i = a[0], l;
		return t[0] !== i ? (l = function(a) {
			var t = o("WAWebBizAiHandoffRemovalTimingUpdateMutation").castHandoffRemovalTiming(a);
			return t == null ? (s || (s = n("Promise"))).resolve(m) : new (s || (s = (n("Promise"))))(function(n) {
				i({
					variables: { input: { timing: t } },
					updater: function(n, r) {
						var e;
						(r == null || (e = r.xfb_meta_ai_biz_agent_wa_update_handoff_removal_timing) == null ? void 0 : e.success) === !0 && o("WAWebBizAiHandoffRemovalTimingUpdateMutation").writeHandoffTimingToStore(n, t);
					},
					onCompleted: function(t) {
						var e;
						n((t == null || (e = t.xfb_meta_ai_biz_agent_wa_update_handoff_removal_timing) == null ? void 0 : e.success) === !0 ? d : m);
					},
					onError: function(a) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updateHandoffRemovalTiming failed"]))).catching(r("getErrorSafe")(a)).sendLogs("biz-ai-handoff-removal-timing-update"), n(m);
					}
				});
			});
		}, t[0] = i, t[1] = l) : l = t[1], l;
	}
	l.default = p;
}), 98);

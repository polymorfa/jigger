__d("useWAWebWaPlusBenefitJourneyViewOnMount", [
	"WAWebWaPlusBenefitJourneyLogger",
	"react",
	"useWAWebWaPlusBenefitJourneyLogger"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = r("useWAWebWaPlusBenefitJourneyLogger")(e.benefitType, e.surface, e.source), n = c(!1);
		return u(function() {
			var r;
			n.current || e.enabled !== !1 && (n.current = !0, !(e.dedupeKey != null && !o("WAWebWaPlusBenefitJourneyLogger").shouldLogTargetOnceForBenefit(e.benefitType, e.dedupeKey)) && t.current.logView({
				success: (r = e.success) != null ? r : !0,
				actionTarget: e.actionTarget,
				errorMessage: e.errorMessage,
				customFields: e.customFields,
				surfaceOverride: e.surfaceOverride
			}));
		}, [e.enabled]), t;
	}
	l.default = d;
}), 98);

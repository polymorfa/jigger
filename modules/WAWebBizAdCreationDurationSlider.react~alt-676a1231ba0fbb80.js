__d("WAWebBizAdCreationDurationSlider.react", [
	"fbt",
	"WAWebBizAdCreationDurationReducer",
	"WDSSlider.react",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.logDurationChange, n = e.maxDuration, o = e.minDuration, a = e.setLocalDuration, i = e.selectedDuration, l = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationDurationReducer")]), s = c(function(e) {
			l({
				durationData: { durationInDays: e },
				type: "duration_reducer.update_duration"
			});
		}, [l]), d = c(function(e) {
			s(e), t(e, "slider");
		}, [s, t]);
		return u.jsx(r("WDSSlider.react"), {
			ariaValueText: p,
			displayValueText: p,
			max: n,
			min: o,
			onChange: function(t) {
				return a(t[0]);
			},
			onChangeSettled: function(t) {
				return d(t[0]);
			},
			startEndLabels: "minMax",
			step: 1,
			values: [i]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = r("withWAWebBizAdCreationSpecContext")(d, function(e) {
		return { selectedDuration: e.durationData.durationInDays };
	});
	function p(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number")]
		);
	}
	l.default = m;
}), 226);

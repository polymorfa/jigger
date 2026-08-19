__d("WAWebBizAdCreationDurationSlider.react", [
	"fbt",
	"WAWebBizAdCreationDurationReducer",
	"WDSSlider.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(18), n = e.logDurationChange, a = e.maxDuration, i = e.minDuration, l = e.setLocalDuration, s = e.selectedDuration, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [r("WAWebBizAdCreationDurationReducer")], t[0] = c) : c = t[0];
		var d = r("useWAWebBizAdCreationSpecDispatcherContext")(c), m;
		t[1] !== d ? (m = function(t) {
			d({
				durationData: { durationInDays: t },
				type: "duration_reducer.update_duration"
			});
		}, t[1] = d, t[2] = m) : m = t[2];
		var _ = m, f;
		t[3] !== n || t[4] !== _ ? (f = function(t) {
			_(t), n(t, "slider");
		}, t[3] = n, t[4] = _, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== l ? (h = function(t) {
			return l(t[0]);
		}, t[6] = l, t[7] = h) : h = t[7];
		var y;
		t[8] !== g ? (y = function(t) {
			return g(t[0]);
		}, t[8] = g, t[9] = y) : y = t[9];
		var C;
		t[10] !== s ? (C = [s], t[10] = s, t[11] = C) : C = t[11];
		var b;
		return t[12] !== a || t[13] !== i || t[14] !== h || t[15] !== y || t[16] !== C ? (b = u.jsx(r("WDSSlider.react"), {
			ariaValueText: p,
			displayValueText: p,
			max: a,
			min: i,
			onChange: h,
			onChangeSettled: y,
			startEndLabels: "minMax",
			step: 1,
			values: C
		}), t[12] = a, t[13] = i, t[14] = h, t[15] = y, t[16] = C, t[17] = b) : b = t[17], b;
	}
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

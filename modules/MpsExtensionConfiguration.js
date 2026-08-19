__d("MpsExtensionConfiguration", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = function(t) {
		var e = t.postProcessors, n = t.preprocessors, r = t.readSideEffects;
		this.postProcessors = {
			critical: e.critical,
			nonCritical: e.nonCritical
		}, this.preprocessors = n, this.readSideEffects = r != null ? r : void 0;
	};
	i.MpsExtensionConfiguration = e;
}), 66);

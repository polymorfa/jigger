__d("WAWebKmpMeManager", [
	"WALogger",
	"WAWebUserPrefsMeUser",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		isInCompanionMode: function() {
			return Promise.resolve(!0);
		},
		getMyDeviceId: async function() {
			try {
				return r("nullthrows")(o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().device);
			} catch (t) {
				throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["syncd:kmp: failed to get my device id: ", ""])), t), t;
			}
		}
	};
	l.meManager = s;
}), 98);

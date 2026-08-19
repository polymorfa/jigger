__d("WAWebStartupSkeletonGating", [
	"WAWebEnvironment",
	"WAWebMobilePlatforms",
	"WAWebUserPrefsMultiDevice"
], (function(t, n, r, o, a, i, l) {
	function e() {
		return o("WAWebUserPrefsMultiDevice").isRegistered() && !o("WAWebMobilePlatforms").isSMB() && !r("WAWebEnvironment").isWindows;
	}
	l.default = e;
}), 98);

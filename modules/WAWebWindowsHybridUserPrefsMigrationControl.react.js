__d("WAWebWindowsHybridUserPrefsMigrationControl.react", [
	"WAWebThemeContext",
	"WAWebWindowsHybridUserPrefsMigrationControlHelper",
	"WAWebWindowsUserPrefsMigrationEventEmitter",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useContext;
	function u() {
		var e = o("react-compiler-runtime").c(2), t = s(o("WAWebThemeContext").ThemeContext), n;
		return e[0] !== t ? (n = function(n) {
			o("WAWebWindowsHybridUserPrefsMigrationControlHelper").storeUserPreferences(n, t);
		}, e[0] = t, e[1] = n) : n = e[1], o("useWAWebListener").useListener(r("WAWebWindowsUserPrefsMigrationEventEmitter"), "storeUserPrefs", n), null;
	}
	l.WAWebWindowsHybridUserPrefsMigrationControl = u;
}), 98);

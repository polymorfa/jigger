__d("WAWebWindowsHybridUserPrefsMigrationControl.react", [
	"WAWebThemeContext",
	"WAWebWindowsHybridUserPrefsMigrationControlHelper",
	"WAWebWindowsUserPrefsMigrationEventEmitter",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useContext;
	function u() {
		var e = s(o("WAWebThemeContext").ThemeContext);
		return o("useWAWebListener").useListener(r("WAWebWindowsUserPrefsMigrationEventEmitter"), "storeUserPrefs", function(t) {
			o("WAWebWindowsHybridUserPrefsMigrationControlHelper").storeUserPreferences(t, e);
		}), null;
	}
	l.WAWebWindowsHybridUserPrefsMigrationControl = u;
}), 98);

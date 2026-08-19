__d("useWAWebLogHarmfulFileDialogLifecycle", [
	"WAWebHarmfulFileWamLogger",
	"WAWebWamEnumHarmfulFileWarningClickthroughAction",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = c(!1);
		return u(function() {
			return o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.DIALOG_OPEN, e), function() {
				t.current || o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.DIALOG_DISMISSED, e);
			};
		}, []), function() {
			t.current = !0;
		};
	}
	l.default = d;
}), 98);

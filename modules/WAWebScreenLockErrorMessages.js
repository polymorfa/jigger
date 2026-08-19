__d("WAWebScreenLockErrorMessages", ["fbt"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.emptyInputEntered, n = e.incorrectPasscode, r = e.onlyOneTryRemaining, o = e.triesExceeded;
		if (o) return s._(
			/*BTDS*/
			""
		);
		if (r) {
			if (t == null) return s._(
				/*BTDS*/
				""
			);
			if (t === !0) return s._(
				/*BTDS*/
				""
			);
			if (n && t === !1) return s._(
				/*BTDS*/
				""
			);
		}
		if (t === !0) return s._(
			/*BTDS*/
			""
		);
		if (n) return s._(
			/*BTDS*/
			""
		);
	}
	l.getErrorMessage = e;
}), 226);

__d("WAWebGdprRequestOverrideModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGdprConstants",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onConfirm, r;
		t[0] !== n ? (r = function() {
			n().finally(o("WAWebModalManager").closeModalManager);
		}, t[0] = n, t[1] = r) : r = t[1];
		var a = r, i;
		t[2] !== e.requestedReport ? (i = m(e.requestedReport), t[2] = e.requestedReport, t[3] = i) : i = t[3];
		var l = i, c = l[0], d = l[1], p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = {
			surface: "unknown",
			viewName: "gdpr-request-override"
		}, t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[6] = f) : f = t[6];
		var g;
		return t[7] !== d || t[8] !== a || t[9] !== c ? (g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: p,
			title: c,
			onOK: a,
			okText: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: f,
			children: d
		}), t[7] = d, t[8] = a, t[9] = c, t[10] = g) : g = t[10], g;
	}
	function m(e) {
		switch (e) {
			case o("WAWebGdprConstants").ReportType.Newsletters: {
				var t = s._(
					/*BTDS*/
					""
				), n = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m0", u.jsx("p", { children: s._(
						/*BTDS*/
						""
					) })), s._implicitParam("=m1", u.jsx("p", {
						className: "x1de0gy",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				return [t, n];
			}
			case o("WAWebGdprConstants").ReportType.Account: {
				var r = s._(
					/*BTDS*/
					""
				), a = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m0", u.jsx("p", { children: s._(
						/*BTDS*/
						""
					) })), s._implicitParam("=m1", u.jsx("p", {
						className: "x1de0gy",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				return [r, a];
			}
		}
	}
	l.default = d;
}), 226);

__d("WAWebGdprRequestOverrideModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGdprConstants",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.onConfirm, n = c(function() {
			t().finally(o("WAWebModalManager").closeModalManager);
		}, [t]), r = m(e.requestedReport), a = r[0], i = r[1];
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "gdpr-request-override"
			},
			title: a,
			onOK: n,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: i
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
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

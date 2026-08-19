__d("WAWebBusinessOpenHours.react", [
	"fbt",
	"WAWebBusinessProfileUtils",
	"WAWebL10N",
	"dompurify",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.hours, a, i;
		if (t[0] !== n) {
			i = Symbol.for("react.early_return_sentinel");
			e: {
				var l = o("WAWebBusinessProfileUtils").getBusinessOpenState(n), s = m(l);
				if (s == null) {
					i = null;
					break e;
				}
				a = r("dompurify").sanitize(s.toString());
			}
			t[0] = n, t[1] = a, t[2] = i;
		} else a = t[1], i = t[2];
		if (i !== Symbol.for("react.early_return_sentinel")) return i;
		var c = a, d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1anpt5t x1f6kntn xu06os2" }, t[3] = d) : d = t[3];
		var p;
		t[4] !== c ? (p = { __html: c }, t[4] = c, t[5] = p) : p = t[5];
		var _;
		return t[6] !== d || t[7] !== p ? (_ = u.jsx("div", babelHelpers.extends({}, d, { dangerouslySetInnerHTML: p })), t[6] = d, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	function d(e) {
		return e == null ? "" : e.toLocaleTimeString(r("WAWebL10N").getNormalizedLocale(), {
			hour: "numeric",
			minute: "2-digit"
		});
	}
	function m(e) {
		switch (e.status) {
			case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_24H: return s._(
				/*BTDS*/
				"",
				[s._param("open", "<span class=\"x1du590y\">" + s._(
					/*BTDS*/
					""
				).toString() + "</span>")]
			);
			case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT: return s._(
				/*BTDS*/
				"",
				[s._param("open", "<span class=\"x1du590y\">" + s._(
					/*BTDS*/
					""
				).toString() + "</span>")]
			);
			case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN:
				if (e.openUntil && e.additionalOpen && e.additionalClose) return s._(
					/*BTDS*/
					"",
					[
						s._param("open", "<span class=\"x1du590y\">" + s._(
							/*BTDS*/
							""
						).toString() + "</span>"),
						s._param("time", d(e.openUntil)),
						s._param("additionalOpenTime", d(e.additionalOpen)),
						s._param("additionalCloseTime", d(e.additionalClose))
					]
				);
				if (e.openUntil) return s._(
					/*BTDS*/
					"",
					[s._param("open", "<span class=\"x1du590y\">" + s._(
						/*BTDS*/
						""
					).toString() + "</span>"), s._param("time", d(e.openUntil))]
				);
				break;
			case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED: return e.opensAt ? s._(
				/*BTDS*/
				"",
				[s._param("closed", "<span class=\"x30a034\">" + s._(
					/*BTDS*/
					""
				).toString() + "</span>"), s._param("time", d(e.opensAt))]
			) : "<span class=\"x30a034\">" + s._(
				/*BTDS*/
				""
			).toString() + "</span>";
			case o("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED_TODAY: return "<span class=\"x30a034\">" + s._(
				/*BTDS*/
				""
			).toString() + "</span>";
		}
		return null;
	}
	l.default = c;
}), 226);

__d("WAWebBusinessOpenHours.react", [
	"fbt",
	"WAWebBusinessProfileUtils",
	"WAWebL10N",
	"dompurify",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.hours, n = o("WAWebBusinessProfileUtils").getBusinessOpenState(t), a = m(n);
		if (a == null) return null;
		var i = r("dompurify").sanitize(a.toString());
		return u.jsx("div", {
			className: "x1anpt5t x1f6kntn xu06os2",
			dangerouslySetInnerHTML: { __html: i }
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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

__d("WAWebNewsletterDSAModals.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebEnforcementActionLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebLocationSearchingIcon.react",
	"WAWebNewsletterLearnMoreModal.react",
	"WAWebNullFunc",
	"WAWebSettingsDocumentIcon.react",
	"WAWebStatusVcardIcon.react",
	"WDSIconIcPublic.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [{
			key: "dsa-guidelines-modal-first-paragraph",
			content: p
		}, {
			key: "dsa-guidelines-modal-second-paragraph",
			content: m
		}], e[0] = t) : t = e[0];
		var n = t, a;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			paragraphs: n
		}), e[1] = a) : a = e[1], a;
	}
	function m() {
		return s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
				onClick: _,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
	}
	function f(e) {
		switch (e) {
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_COPS:
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: _,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_PRODUCT_RESTRICTION:
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.GENERIC_VIOLATION: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: _,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.LEGAL_TDR: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: _,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RESPONSE_VIOLATES_GUIDELINES: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					onClick: _,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.DSADecisionModalCategory, a;
		t[0] !== n ? (a = [{
			key: "dsa-decision-modal-first-paragraph",
			content: function() {
				return f(n);
			}
		}], t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = [{
			key: "dsa-decision-modal-first-section",
			bullets: [{
				Icon: r("WDSIconIcPublic.react"),
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: y
			}, {
				Icon: o("WAWebLocationSearchingIcon.react").LocationSearchingIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: h
			}]
		}], t[2] = l) : l = t[2];
		var d = l, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p;
		return t[4] !== i ? (p = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: m,
			paragraphs: i,
			sections: d
		}), t[4] = i, t[5] = p) : p = t[5], p;
	}
	function h() {
		return s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [{
			key: "dsa-eu-notice-modal-first-paragraph",
			content: S
		}], e[0] = t) : t = e[0];
		var n = t, a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = [{
			key: "dsa-eu-notice-modal-first-section",
			bullets: [{
				Icon: o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: v
			}, {
				Icon: o("WAWebStatusVcardIcon.react").StatusVcardIcon,
				iconXstyle: c.secondaryColor,
				text: o("WAWebNullFunc").returnNull,
				subtext: b
			}]
		}], e[1] = a) : a = e[1];
		var i = a, l;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			paragraphs: n,
			sections: i
		}), e[2] = l) : l = e[2], l;
	}
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return s._(
			/*BTDS*/
			""
		);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return s._(
			/*BTDS*/
			""
		);
	}
	S.displayName = S.name + " [from " + i.id + "]", l.NewsletterDSAGuidelinesModal = d, l.logChannelGuidelinesClick = _, l.NewsletterDSADecisionModal = g, l.NewsletterDSAEUNoticeModal = C;
}), 226);

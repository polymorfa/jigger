__d("WAWebNewsletterSuspendedConversationPanelBody.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebText_DONOTUSE.react",
	"WAWebWrapperSystemBubble.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		linkColor: {
			color: "x1bvqhpb",
			textDecoration: "x1hl2dhg",
			$$css: !0
		},
		marginBottom2: {
			marginBottom: "x13m54ha",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isAdminOrOwner, a = e.isGeosuspended;
		if (a) {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(f, {}), t[0] = i) : i = t[0], i;
		}
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
			level: "2",
			size: "16",
			weight: "bold",
			xstyle: p.marginBottom2,
			testid: "newsletter-suspended-conversation-panel-system-message-header",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[1] = l) : l = t[1];
		var c;
		return t[2] !== n ? (c = u.jsxs(r("WAWebWrapperSystemBubble.react"), {
			theme: "center",
			children: [l, u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				testid: "newsletter-suspended-conversation-panel-system-message-paragraph",
				children: n ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})]
		}), t[2] = n, t[3] = c) : c = t[3], c;
	}
	function f() {
		var e = o("react-compiler-runtime").c(7), t = m(null), a = t[0], i = t[1], l, c;
		if (e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString({ isPreview: !1 });
					i(e);
				});
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			})();
			e();
		}, c = [], e[0] = l, e[1] = c) : (l = e[0], c = e[1]), d(l, c), a != null) {
			var _;
			e[2] !== a ? (_ = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				ariaLabel: a,
				testid: "newsletter-geosuspended-conversation-panel-system-message-paragraph",
				children: a
			}), e[2] = a, e[3] = _) : _ = e[3];
			var f;
			e[4] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, { children: s._(
				/*BTDS*/
				""
			) }), e[4] = f) : f = e[4];
			var h;
			return e[5] !== _ ? (h = u.jsx(r("WAWebWrapperSystemBubble.react"), {
				theme: "center",
				children: u.jsxs(r("WAWebClickableLink.react"), {
					testid: "newsletter-geosuspended-conversation-panel-system-message-link",
					onClick: g,
					xstyle: p.linkColor,
					children: [_, f]
				})
			}), e[5] = _, e[6] = h) : h = e[6], h;
		}
	}
	function g() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGeosuspendFaqUrl());
	}
	l.default = _;
}), 226);

__d("useWAWebNewsletterSubscribers", [
	"WALogger",
	"WAWebContactCollection",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSubscriberListAction",
	"WAWebUserPrefsNewsletter",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = (s || (s = o("react"))).useEffect;
	function c(t) {
		var a = t.cacheType, i = t.count, l = t.includeMeContact, s = l === void 0 ? !1 : l, c = t.newsletter, d = r("useWAWebUnmountSignal")(), m = c.newsletterMetadata, p = o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminProfilesListEnabled(m), _ = r("useWAWebEventTargetValue")(m == null ? void 0 : m.subscribers, [
			"add",
			"remove",
			"sort",
			"change"
		], function() {
			var e, t, n = (e = m == null || (t = m.subscribers) == null ? void 0 : t.map(function(e) {
				return {
					adminProfile: p ? e.adminProfile : null,
					contact: e.contact,
					role: e.membership
				};
			})) != null ? e : [], r = o("WAWebContactCollection").ContactCollection.getMeContact();
			return s && r != null && n.unshift({
				adminProfile: p ? m == null ? void 0 : m.adminProfile : null,
				contact: r,
				role: m == null ? void 0 : m.membershipType
			}), [n, n.length >= o("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT];
		}), f = _[0], g = _[1];
		return u(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				d.aborted || (yield o("WAWebNewsletterSubscriberListAction").getNewsletterSubscribersAction(c, i, a));
			})().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useNewsletterSubscribers] Failed to get subscribers for newsletter ", ""])), c.id).sendLogs("newsletter-hook-failed-to-get-subscribers");
			});
		}, [
			c,
			d.aborted,
			i,
			a,
			s
		]), [f, g];
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber(), t[0] = n) : n = t[0];
		var r;
		t[1] !== e ? (r = {
			newsletter: e,
			cacheType: o("WAWebUserPrefsNewsletter").ValidCachedNewsletterSubscriberKeys.FULL,
			count: n,
			includeMeContact: !1
		}, t[1] = e, t[2] = r) : r = t[2];
		var a = c(r), i = a[0], l;
		return t[3] !== i ? (l = i.map(m), t[3] = i, t[4] = l) : l = t[4], l;
	}
	function m(e) {
		return e.contact;
	}
	l.useNewsletterSubscribers = c, l.useNewsletterAllSubscribers = d;
}), 98);

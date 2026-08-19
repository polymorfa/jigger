__d("WAWebChatTextStatusWrapper", [
	"fbt",
	"WAWebContactCollection",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebIdleComponent.react",
	"WAWebStateUtils",
	"WAWebTextStatusAction",
	"WAWebTextStatusCollection",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebUserPrefsMeUser",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebContactValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = u.jsx(u.Fragment, { children: s._(
		/*BTDS*/
		""
	) });
	function m(e) {
		var t, n = o("WAWebContactCollection").ContactCollection.gadd(e), r = n.getStatus(), a = (t = o("WAWebFrontendContactGetters")).getTextStatusString(n), i = t.getTextStatusEmoji(n), l = t.getTextStatusLastUpdateTime(n), s = t.getTextStatusExpiryTs(n), u = t.getTextStatusEphemeralDuration(n), c = o("WAWebTextStatusUtils").isTextStatusNotFetched(l);
		if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) return !1;
		if (o("WAWebTextStatusUtils").shouldDisplayTextStatus(a, i, l, s, u)) return !0;
		if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
		if (!o("WAWebTextStatusUtils").hasEverHadTextStatus(l) && !c && o("WAWebTextStatusUtils").hasCustomAboutSet(r)) {
			var d, m, p = (d = (m = r.status) == null ? void 0 : m.trim()) != null ? d : "";
			return p !== "";
		}
		return !1;
	}
	function p(e) {
		var t = e.contactId, a = e.ellipsify, i = a === void 0 ? !0 : a, l = e.waitIdle, s = o("WAWebContactCollection").ContactCollection.gadd(t), m = s.getStatus(), p = o("useWAWebModelValues").useModelValues(m, [
			"id",
			"stale",
			"status"
		], { isStrong: !1 }), _ = o("useWAWebContactValues").useContactValues(s.id, [
			o("WAWebFrontendContactGetters").getTextStatusString,
			o("WAWebFrontendContactGetters").getTextStatusEmoji,
			o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
			o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
			o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration
		]), f = _[0], g = _[1], h = _[2], y = _[3], C = _[4], b = o("WAWebTextStatusUtils").shouldDisplayTextStatus(f, g, h, y, C), v = u.jsx(u.Fragment, {}), S = function() {
			if (!b) return v;
			var e;
			if (g != null) {
				var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(g);
				t != null && (e = u.jsx("div", {
					className: "x1gabggj",
					children: u.jsx(r("WAWebEmoji.react"), {
						emoji: t,
						size: "small"
					}, "low-res")
				}));
			}
			return u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [e, u.jsx(o("WAWebEmojiText.react").EmojiText, {
					direction: "auto",
					selectable: !0,
					ellipsify: i === !1 ? void 0 : !0,
					titlify: !0,
					text: f != null ? f : "",
					breakWord: !0
				})]
			});
		}, R = o("WAWebTextStatusUtils").isTextStatusNotFetched(h), L = !f && !g && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(p), E = o("WAWebUserPrefsMeUser").isMeAccount(t), k = o("WAWebTextStatusUtils").hasEverHadTextStatus(h), I = o("WAWebStateUtils").unproxy(p).stale;
		c(function() {
			!E && !k && !R && I && o("WAWebTextStatusCollection").TextStatusCollection.find(t);
		}, [
			t,
			E,
			k,
			R,
			I
		]);
		var T = function() {
			return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? b ? S() : !E && !k && !R && o("WAWebTextStatusUtils").hasCustomAboutSet(p) ? I ? d : u.jsx(u.Fragment, { children: p.status }) : v : v;
		}, D = T(), x = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e;
					return R ? e = o("WAWebTextStatusAction").getTextStatus(t, h) : !E && !k && L && (e = o("WAWebTextStatusCollection").TextStatusCollection.find(t)), e;
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			return e(), D;
		};
		return u.jsx(r("WAWebIdleComponent.react"), {
			id: t,
			onComplex: x,
			waitIdle: l,
			children: D
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.willTextStatusDisplayContent = m, l.TextStatus = p;
}), 226);

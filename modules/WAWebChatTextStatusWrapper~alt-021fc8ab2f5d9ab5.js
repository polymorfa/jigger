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
		var t = e.contactId, n = e.ellipsify, a = n === void 0 ? !0 : n, i = e.waitIdle, l = o("WAWebContactCollection").ContactCollection.gadd(t), s = l.getStatus(), m = o("useWAWebModelValues").useModelValues(s, [
			"id",
			"stale",
			"status"
		], { isStrong: !1 }), p = o("useWAWebContactValues").useContactValues(l.id, [
			o("WAWebFrontendContactGetters").getTextStatusString,
			o("WAWebFrontendContactGetters").getTextStatusEmoji,
			o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
			o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
			o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration
		]), _ = p[0], f = p[1], g = p[2], h = p[3], y = p[4], C = o("WAWebTextStatusUtils").shouldDisplayTextStatus(_, f, g, h, y), b = u.jsx(u.Fragment, {}), v = function() {
			if (!C) return b;
			var e;
			if (f != null) {
				var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(f);
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
					ellipsify: a === !1 ? void 0 : !0,
					titlify: !0,
					text: _ != null ? _ : "",
					breakWord: !0
				})]
			});
		}, S = o("WAWebTextStatusUtils").isTextStatusNotFetched(g), R = !_ && !f && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(m), L = o("WAWebUserPrefsMeUser").isMeAccount(t), E = o("WAWebTextStatusUtils").hasEverHadTextStatus(g), k = o("WAWebStateUtils").unproxy(m).stale;
		c(function() {
			!L && !E && !S && k && o("WAWebTextStatusCollection").TextStatusCollection.find(t);
		}, [
			t,
			L,
			E,
			S,
			k
		]);
		var I = function() {
			return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? C ? v() : !L && !E && !S && o("WAWebTextStatusUtils").hasCustomAboutSet(m) ? k ? d : u.jsx(u.Fragment, { children: m.status }) : b : b;
		}, T = I(), D = function() {
			var e = async function() {
				var e;
				return S ? e = o("WAWebTextStatusAction").getTextStatus(t, g) : !L && !E && R && (e = o("WAWebTextStatusCollection").TextStatusCollection.find(t)), e;
			};
			return e(), T;
		};
		return u.jsx(r("WAWebIdleComponent.react"), {
			id: t,
			onComplex: D,
			waitIdle: i,
			children: T
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.willTextStatusDisplayContent = m, l.TextStatus = p;
}), 226);

__d("WAWebMessageCommunityWelcomeAdmin.react", [
	"fbt",
	"WAWebFormatLinkNotification",
	"WAWebGroupMetadataCollection",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityWelcomeAdminTitle.react",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"WAWebWidFactory",
	"WDSPaddings.stylex",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = o("react-compiler-runtime").c(20), i = t.author, l = t.chat, u = t.templateParams, m = u.length > 0 ? u[0] : null, p;
		if (m instanceof r("WAWebWid")) p = m;
		else if (!r("isStringNullOrEmpty")(m)) {
			var _;
			a[0] !== m ? (_ = o("WAWebWidFactory").createWid(m), a[0] = m, a[1] = _) : _ = a[1], p = _;
		}
		var f;
		a[2] !== p ? (f = p != null ? r("WAWebGroupMetadataCollection").get(p) : null, a[2] = p, a[3] = f) : f = a[3];
		var g = f;
		g != null && g.parentGroup && (p = g.parentGroup);
		var h = o("WAWebUserPrefsMeUser").isMeAccount((n = l.groupMetadata) == null ? void 0 : n.owner);
		if (!h) {
			var y;
			a[4] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, d.paddingTop5, d.paddingBottom6), a[4] = y) : y = a[4];
			var C;
			a[5] !== i || a[6] !== u ? (C = o("WAWebFormatLinkNotification").formatLinkNotification({
				author: i,
				clickable: !0,
				subject: null,
				subtype: "community_create",
				templateParams: u
			}), a[5] = i, a[6] = u, a[7] = C) : C = a[7];
			var b;
			return a[8] !== C ? (b = c.jsx("div", babelHelpers.extends({}, y, { children: C })), a[8] = C, a[9] = b) : b = a[9], b;
		}
		if (p == null) return null;
		var v;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx("div", {
			className: "xe2zdcy x2vl965",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[10] = v) : v = a[10];
		var S = v, R;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), a[11] = R) : R = a[11];
		var L = R, E = p, k = l.id, I;
		a[12] !== i || a[13] !== l || a[14] !== u ? (I = o("WAWebMessageCommunityWelcomeAdminTitle.react").communityWelcomeAdminTitle({
			templateParams: u,
			chat: l,
			author: i
		}), a[12] = i, a[13] = l, a[14] = u, a[15] = I) : I = a[15];
		var T;
		return a[16] !== l.id || a[17] !== p || a[18] !== I ? (T = c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: E,
			subgroupId: k,
			title: I,
			subtitle: S,
			footer: L
		}), a[16] = l.id, a[17] = p, a[18] = I, a[19] = T) : T = a[19], T;
	}
	l.MessageCommunityWelcomeAdmin = m;
}), 226);

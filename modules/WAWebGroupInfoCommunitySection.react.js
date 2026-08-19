__d("WAWebGroupInfoCommunitySection.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebCellV2.react",
	"WAWebChatCommunityUtils",
	"WAWebDetailImage.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebL10N",
	"WAWebProfilePicThumbCollection",
	"WAWebQuerySubGroupAction",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"WDSProfilePhoto.react",
	"react",
	"react-compiler-runtime",
	"useWAWebCommunitySubgroups",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	function m(t) {
		var n = t.onClick, a = t.parentGroupChat, i = t.parentGroupMetadata, l = r("useWAWebCommunitySubgroups")(i), u = l.subgroupCount, m = o("useWAWebModelValues").useModelValues(a.contact, ["name"]), _ = m.name, f = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a);
		d(function() {
			o("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(i.id, i.joinedSubgroups).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[community][group-info] Failed to query subgroups metadata"]))).sendLogs("failed-query-subgroups-metadata");
			});
		}, []);
		var g = s._(
			/*BTDS*/
			""
		), h = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? c.jsx(p, {
			name: _,
			parentGroupMetadata: i
		}) : c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: i.id,
			shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
			size: 48
		}), y = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: _,
			ellipsify: !0
		});
		y = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: y });
		var C = c.jsxs(c.Fragment, { children: [g, f ? null : c.jsxs(c.Fragment, { children: [r("WAWebL10N").isRTL() ? " -\xA0" : " ·\xA0", s._(
			/*BTDS*/
			"",
			[s._plural(u, "count")]
		)] })] }), b = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: C }), v = {
			theme: "refresh-new",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer0, o("WDSPaddings.stylex").wdsPaddings.paddingHor0]
		}, S = "group-info-community-section";
		return c.jsx(r("WAWebDrawerSection.react"), babelHelpers.extends({}, v, { children: c.jsx(r("WAWebCellV2.react"), {
			testid: S,
			size: "medium",
			isRefresh: !0,
			detailLeft: h,
			primary: y,
			secondary: b,
			onClick: n
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("react-compiler-runtime").c(9), n = e.name, a = e.parentGroupMetadata, i;
		t[0] !== a.id ? (i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a.id), t[0] = a.id, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = ["img"], t[2] = s) : s = t[2];
		var u = o("useWAWebModelValues").useModelValues(l, s), d = u.img, m;
		t[3] !== a.id ? (m = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a.id), t[3] = a.id, t[4] = m) : m = t[4];
		var p;
		return t[5] !== n || t[6] !== d || t[7] !== m ? (p = c.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			name: n,
			src: d,
			size: "medium",
			color: m,
			isDecorative: !0
		}), t[5] = n, t[6] = d, t[7] = m, t[8] = p) : p = t[8], p;
	}
	l.default = m;
}), 226);

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
		var t = e.name, n = e.parentGroupMetadata, a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(n.id), i = o("useWAWebModelValues").useModelValues(a, ["img"]), l = i.img;
		return c.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			name: t,
			src: l,
			size: "medium",
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n.id),
			isDecorative: !0
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);

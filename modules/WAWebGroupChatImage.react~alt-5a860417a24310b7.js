__d("WAWebGroupChatImage.react", [
	"WAWebABProps",
	"WAWebChatCollection",
	"WAWebCommunitySpeakerIcon.react",
	"WAWebCommunitySubgroupImage.react",
	"WAWebDetailImage.react",
	"WAWebGroupType",
	"WAWebProfilePicThumbCollection",
	"WAWebStackedCirclesImage.react",
	"WAWebTextSizeUtils",
	"WDSProfilePhoto.react",
	"react",
	"useWAWebDefaultProfileColors",
	"useWAWebEventTargetValue",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.chat, n = e.isHovered, a = n === void 0 ? !1 : n, i = e.regularChatImage, l = e.selection, u = e.showCommunityInfo, c = e.showSpeakerForCag, p = e.size, _ = e.theme, f = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, [
			"groupType",
			"participants",
			"terminated",
			"parentGroup"
		]), g = (f == null ? void 0 : f.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || (f == null ? void 0 : f.groupType) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP || (f == null ? void 0 : f.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, h = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, ["add", "remove"], function() {
			var e;
			return (e = t.groupMetadata) == null ? void 0 : e.getParentGroupChat();
		}, [f == null ? void 0 : f.parentGroup]);
		if (g && h) {
			if ((f == null ? void 0 : f.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) return c === !0 ? s.jsx(d, {
				colorId: h.id,
				size: p,
				theme: _
			}) : s.jsx(m, {
				parentGroupChat: h,
				size: p,
				theme: _
			});
			if (u && _ === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST) return s.jsx(r("WAWebCommunitySubgroupImage.react"), {
				chat: t,
				parentGroupChat: h,
				selection: l,
				isHovered: a,
				size: p != null ? p : o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize
			});
		} else if (g) return s.jsx(d, {
			colorId: t.id,
			size: p,
			theme: _
		});
		return i;
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		return e === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER ? "small" : "medium";
	}
	function d(e) {
		var t = e.colorId, n = e.size, a = e.theme;
		return o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? s.jsx(r("WDSProfilePhoto.react"), {
			type: "announcement",
			name: "",
			size: c(a),
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(t),
			testid: "announcement-speaker",
			isDecorative: !0
		}) : s.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: n });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.parentGroupChat, n = e.size, r = e.theme;
		return o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? s.jsx(p, {
			parentGroupChat: t,
			theme: r
		}) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: t.id,
			shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
			size: n != null ? n : o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.parentGroupChat, n = e.theme, a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(t.id), i = o("useWAWebModelValues").useOptionalModelValues(a, ["img"]);
		return s.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			name: "",
			src: i == null ? void 0 : i.img,
			size: c(n),
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(t.id),
			isDecorative: !0
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = u;
}), 98);

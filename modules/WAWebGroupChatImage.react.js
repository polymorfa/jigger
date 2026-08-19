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
	"react-compiler-runtime",
	"useWAWebDefaultProfileColors",
	"useWAWebEventTargetValue",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(26), n = e.chat, a = e.isHovered, i = e.regularChatImage, l = e.selection, u = e.showCommunityInfo, c = e.showSpeakerForCag, p = e.size, _ = e.theme, f = a === void 0 ? !1 : a, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [
			"groupType",
			"participants",
			"terminated",
			"parentGroup"
		], t[0] = g) : g = t[0];
		var h = o("useWAWebModelValues").useOptionalModelValues(n.groupMetadata, g), y = (h == null ? void 0 : h.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || (h == null ? void 0 : h.groupType) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP || (h == null ? void 0 : h.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = ["add", "remove"], t[1] = C) : C = t[1];
		var b;
		t[2] !== n.groupMetadata ? (b = function() {
			var e;
			return (e = n.groupMetadata) == null ? void 0 : e.getParentGroupChat();
		}, t[2] = n.groupMetadata, t[3] = b) : b = t[3];
		var v = h == null ? void 0 : h.parentGroup, S;
		t[4] !== v ? (S = [v], t[4] = v, t[5] = S) : S = t[5];
		var R = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, C, b, S);
		if (y && R) {
			if ((h == null ? void 0 : h.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
				if (c === !0) {
					var L;
					return t[6] !== R.id || t[7] !== p || t[8] !== _ ? (L = s.jsx(d, {
						colorId: R.id,
						size: p,
						theme: _
					}), t[6] = R.id, t[7] = p, t[8] = _, t[9] = L) : L = t[9], L;
				}
				var E;
				return t[10] !== R || t[11] !== p || t[12] !== _ ? (E = s.jsx(m, {
					parentGroupChat: R,
					size: p,
					theme: _
				}), t[10] = R, t[11] = p, t[12] = _, t[13] = E) : E = t[13], E;
			}
			if (u && _ === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST) {
				var k;
				t[14] !== p ? (k = p != null ? p : o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize, t[14] = p, t[15] = k) : k = t[15];
				var I;
				return t[16] !== n || t[17] !== f || t[18] !== R || t[19] !== l || t[20] !== k ? (I = s.jsx(r("WAWebCommunitySubgroupImage.react"), {
					chat: n,
					parentGroupChat: R,
					selection: l,
					isHovered: f,
					size: k
				}), t[16] = n, t[17] = f, t[18] = R, t[19] = l, t[20] = k, t[21] = I) : I = t[21], I;
			}
		} else if (y) {
			var T;
			return t[22] !== n.id || t[23] !== p || t[24] !== _ ? (T = s.jsx(d, {
				colorId: n.id,
				size: p,
				theme: _
			}), t[22] = n.id, t[23] = p, t[24] = _, t[25] = T) : T = t[25], T;
		}
		return i;
	}
	function c(e) {
		return e === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER ? "small" : "medium";
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.colorId, a = e.size, i = e.theme;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo")) {
			var l;
			t[0] !== i ? (l = c(i), t[0] = i, t[1] = l) : l = t[1];
			var u;
			t[2] !== n ? (u = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n), t[2] = n, t[3] = u) : u = t[3];
			var d;
			return t[4] !== l || t[5] !== u ? (d = s.jsx(r("WDSProfilePhoto.react"), {
				type: "announcement",
				name: "",
				size: l,
				color: u,
				testid: "announcement-speaker",
				isDecorative: !0
			}), t[4] = l, t[5] = u, t[6] = d) : d = t[6], d;
		}
		var m;
		return t[7] !== a ? (m = s.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: a }), t[7] = a, t[8] = m) : m = t[8], m;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.parentGroupChat, r = e.size, a = e.theme;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo")) {
			var i;
			return t[0] !== n || t[1] !== a ? (i = s.jsx(p, {
				parentGroupChat: n,
				theme: a
			}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
		}
		var l;
		t[3] !== r ? (l = r != null ? r : o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize, t[3] = r, t[4] = l) : l = t[4];
		var u;
		return t[5] !== n.id || t[6] !== l ? (u = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
			size: l
		}), t[5] = n.id, t[6] = l, t[7] = u) : u = t[7], u;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(11), n = e.parentGroupChat, a = e.theme, i;
		t[0] !== n.id ? (i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(n.id), t[0] = n.id, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = ["img"], t[2] = u) : u = t[2];
		var d = o("useWAWebModelValues").useOptionalModelValues(l, u), m = d == null ? void 0 : d.img, p;
		t[3] !== a ? (p = c(a), t[3] = a, t[4] = p) : p = t[4];
		var _;
		t[5] !== n.id ? (_ = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n.id), t[5] = n.id, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== m || t[8] !== p || t[9] !== _ ? (f = s.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			name: "",
			src: m,
			size: p,
			color: _,
			isDecorative: !0
		}), t[7] = m, t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.default = u;
}), 98);

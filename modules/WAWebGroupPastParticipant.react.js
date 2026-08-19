__d("WAWebGroupPastParticipant.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCellFrame.react",
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebLeaveReasonType",
	"WAWebListsLabelGatingUtils",
	"WAWebName.react",
	"WAWebProfilePicThumbCollection",
	"WAWebUserPrefsMeUser",
	"WDSProfilePhoto.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(22), n = e.elevatedPushNamesEnabled, a = e.onClick, i = e.participant, l = n === void 0 ? !1 : n, s = i.contact, c;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var p;
			c = [
				(p = o("WAWebContactGetters")).getId,
				p.getShowBusinessCheckmarkAsPrimary,
				p.getName,
				p.getPushname,
				p.getNotifyName,
				o("WAWebFrontendContactGetters").getFormattedName,
				o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone
			], t[0] = c;
		} else c = t[0];
		var _ = o("useWAWebContactValues").useContactValues(s.id, c), f = _[0], g = _[1], h = _[5], y = _[6], C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebListsLabelGatingUtils").canDisplayLabel(), t[1] = C) : C = t[1];
		var b;
		t[2] !== s || t[3] !== l || t[4] !== g ? (b = u.jsx(o("WAWebName.react").Name, {
			contact: s,
			showBusinessCheckmark: g,
			showLabelIcon: C,
			titlify: !0,
			ellipsify: !0,
			you: !0,
			showNotifyName: l,
			elevatedPushNamesEnabled: l
		}), t[2] = s, t[3] = l, t[4] = g, t[5] = b) : b = t[5];
		var v = b, S;
		t[6] !== i ? (S = o("WAWebClock").Clock.pastParticipantOnDateAtTime(i.leaveTs, m(i)), t[6] = i, t[7] = S) : S = t[7];
		var R = S, L;
		t[8] !== s || t[9] !== l || t[10] !== y ? (L = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(s) && l ? y : null, t[8] = s, t[9] = l, t[10] = y, t[11] = L) : L = t[11];
		var E = L, k;
		t[12] !== s || t[13] !== h || t[14] !== f ? (k = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? u.jsx(d, {
			contact: s,
			formattedName: h
		}) : u.jsx(o("WAWebDetailImage.react").DetailImage, { id: f }), t[12] = s, t[13] = h, t[14] = f, t[15] = k) : k = t[15];
		var I;
		return t[16] !== a || t[17] !== v || t[18] !== R || t[19] !== E || t[20] !== k ? (I = u.jsx(r("WAWebCellFrame.react"), {
			image: k,
			primary: v,
			secondary: R,
			secondaryDetail: E,
			onClick: a
		}), t[16] = a, t[17] = v, t[18] = R, t[19] = E, t[20] = k, t[21] = I) : I = t[21], I;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.contact, a = e.formattedName, i;
		t[0] !== n ? (i = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n), t[0] = n, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] !== l.firstInitial || t[3] !== l.secondInitial ? (s = [l.firstInitial, l.secondInitial].filter(Boolean), t[2] = l.firstInitial, t[3] = l.secondInitial, t[4] = s) : s = t[4];
		var c = s.join(""), d;
		t[5] !== n.id ? (d = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(n.id), t[5] = n.id, t[6] = d) : d = t[6];
		var m = d, p;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = ["img"], t[7] = p) : p = t[7];
		var _ = o("useWAWebModelValues").useOptionalModelValues(m, p), f = _ == null ? void 0 : _.img, g;
		t[8] !== n.id ? (g = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n.id), t[8] = n.id, t[9] = g) : g = t[9];
		var h;
		t[10] !== n.id ? (h = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(n.id), t[10] = n.id, t[11] = h) : h = t[11];
		var y;
		t[12] !== n.id ? (y = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(n.id), t[12] = n.id, t[13] = y) : y = t[13];
		var C;
		return t[14] !== a || t[15] !== c || t[16] !== f || t[17] !== g || t[18] !== h || t[19] !== y ? (C = u.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: a,
			src: f,
			size: "medium",
			color: g,
			customColor: h,
			placeholderIcon: y,
			isDecorative: !0,
			initials: c
		}), t[14] = a, t[15] = c, t[16] = f, t[17] = g, t[18] = h, t[19] = y, t[20] = C) : C = t[20], C;
	}
	function m(e) {
		var t = o("WAWebUserPrefsMeUser").isMeAccount(e.id);
		return e.leaveReason === o("WAWebLeaveReasonType").LeaveReason.Left ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = c;
}), 226);

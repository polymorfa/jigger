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
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.elevatedPushNamesEnabled, n = t === void 0 ? !1 : t, a = e.onClick, i = e.participant, l = i.contact, s = o("useWAWebContactValues").useContactValues(l.id, [
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
			o("WAWebContactGetters").getName,
			o("WAWebContactGetters").getPushname,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone
		]), c = s[0], p = s[1], _ = s[2], f = s[3], g = s[4], h = s[5], y = s[6], C = u.jsx(o("WAWebName.react").Name, {
			contact: l,
			showBusinessCheckmark: p,
			showLabelIcon: o("WAWebListsLabelGatingUtils").canDisplayLabel(),
			titlify: !0,
			ellipsify: !0,
			you: !0,
			showNotifyName: n,
			elevatedPushNamesEnabled: n
		}), b = o("WAWebClock").Clock.pastParticipantOnDateAtTime(i.leaveTs, m(i)), v = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(l) && n ? y : null;
		return u.jsx(r("WAWebCellFrame.react"), {
			image: o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? u.jsx(d, {
				contact: l,
				formattedName: h
			}) : u.jsx(o("WAWebDetailImage.react").DetailImage, { id: c }),
			primary: C,
			secondary: b,
			secondaryDetail: v,
			onClick: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.contact, n = e.formattedName, a = o("WAWebInitialsFromNameUtils").getInitialsFromContact(t), i = [a.firstInitial, a.secondInitial].filter(Boolean).join(""), l = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(t.id), s = o("useWAWebModelValues").useOptionalModelValues(l, ["img"]);
		return u.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: n,
			src: s == null ? void 0 : s.img,
			size: "medium",
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(t.id),
			customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(t.id),
			placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(t.id),
			isDecorative: !0,
			initials: i
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
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

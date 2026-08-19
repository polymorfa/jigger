__d("WAWebProfilePicPicker.react", [
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WATimeUtils",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebFocusTracer",
	"WAWebMiscErrors",
	"WAWebNoop",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebProfilePicThumbAction",
	"WAWebUserPrefsGeneral",
	"react",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState;
	function p(t) {
		var n, a = t.profilePicThumb, i = t.size, l = t.tabIndex, s = t.wdsEditablePersonPhoto, c = !a.canSet() && !a.canDelete(), p = m(!1), _ = p[0], f = p[1], g = o("useWAWebModelValues").useModelValues(a, ["imgFull"]), h = g.imgFull, y = r("useWAWebUnmountSignal")(), C = d(null), b = (n = t.editImageButtonRef) != null ? n : C, v = function() {
			b.current && r("WAWebFocusTracer").focus(b.current);
		}, S = function(a, i) {
			var n = t.profilePicThumb;
			f(!0);
			var l = n.imgFull != null && n.imgFull !== "", s, u = !1, c;
			a != null && i != null ? (s = o("WAWebProfilePicThumbAction").setProfilePic(n, a, i, v), c = l ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD) : (u = !0, s = o("WAWebProfilePicThumbAction").deleteProfilePic(n, v), c = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE), o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveProfilePhoto(c), r("WAPromiseRaceAbort")(s, y).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ProfileDrawer: failed to set/delete profile image"])));
			})).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(function() {
				f(!1), u && o("WAWebUserPrefsGeneral").setLastProfilePicThumbUpdate(o("WATimeUtils").unixTime());
			});
		};
		return u.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			tabIndex: l,
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE,
			id: a.id,
			attachToChat: !1,
			pending: _,
			startImage: h,
			readOnly: c,
			onImageSet: S,
			size: i,
			editImageButtonRef: b,
			wdsEditablePersonPhoto: s
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

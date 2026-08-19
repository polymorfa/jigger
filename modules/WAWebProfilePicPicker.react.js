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
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState;
	function p(e) {
		var t, n = o("react-compiler-runtime").c(19), a = e.profilePicThumb, i = e.size, l = e.tabIndex, s = e.wdsEditablePersonPhoto, c;
		n[0] !== a ? (c = !a.canSet() && !a.canDelete(), n[0] = a, n[1] = c) : c = n[1];
		var p = c, f = m(!1), g = f[0], h = f[1], y;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (y = ["imgFull"], n[2] = y) : y = n[2];
		var C = o("useWAWebModelValues").useModelValues(a, y), b = C.imgFull, v = r("useWAWebUnmountSignal")(), S = d(null), R = (t = e.editImageButtonRef) != null ? t : S, L;
		n[3] !== R ? (L = function() {
			R.current && r("WAWebFocusTracer").focus(R.current);
		}, n[3] = R, n[4] = L) : L = n[4];
		var E = L, k;
		n[5] !== E || n[6] !== e.profilePicThumb || n[7] !== v ? (k = function(n, a) {
			var t = e.profilePicThumb;
			h(!0);
			var i = t.imgFull != null && t.imgFull !== "", l, s = !1, u;
			n != null && a != null ? (l = o("WAWebProfilePicThumbAction").setProfilePic(t, n, a, E), u = i ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD) : (s = !0, l = o("WAWebProfilePicThumbAction").deleteProfilePic(t, E), u = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE), o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveProfilePhoto(u), r("WAPromiseRaceAbort")(l, v).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, _)).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).finally(function() {
				h(!1), s && o("WAWebUserPrefsGeneral").setLastProfilePicThumbUpdate(o("WATimeUtils").unixTime());
			});
		}, n[5] = E, n[6] = e.profilePicThumb, n[7] = v, n[8] = k) : k = n[8];
		var I = k, T;
		return n[9] !== R || n[10] !== I || n[11] !== b || n[12] !== g || n[13] !== a.id || n[14] !== p || n[15] !== i || n[16] !== l || n[17] !== s ? (T = u.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			tabIndex: l,
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE,
			id: a.id,
			attachToChat: !1,
			pending: g,
			startImage: b,
			readOnly: p,
			onImageSet: I,
			size: i,
			editImageButtonRef: R,
			wdsEditablePersonPhoto: s
		}), n[9] = R, n[10] = I, n[11] = b, n[12] = g, n[13] = a.id, n[14] = p, n[15] = i, n[16] = l, n[17] = s, n[18] = T) : T = n[18], T;
	}
	function _(t) {
		o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ProfileDrawer: failed to set/delete profile image"])));
	}
	l.default = p;
}), 98);

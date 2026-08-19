__d("WAWebMediaMsgTooLargeFailIcon.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFailIcon.react",
	"WAWebL10nFilesize",
	"WAWebMediaGatingUtils",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebServerPropConstants",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.displayType, a = e.mediaType, i;
		t[0] !== a ? (i = d(a), t[0] = a, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] !== l ? (s = function() {
			return m(l);
		}, t[2] = l, t[3] = s) : s = t[3];
		var c = s, p;
		return t[4] !== n || t[5] !== l || t[6] !== c ? (p = u.jsx(r("WAWebFailIcon.react"), {
			displayType: n,
			onClick: c,
			tooltip: l,
			ariaLabel: l
		}), t[4] = n, t[5] = l, t[6] = c, t[7] = p) : p = t[7], p;
	}
	function d(e) {
		var t = o("WAWebL10nFilesize").getL10nFilesize(o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES);
		switch (e) {
			case o("WAWebMsgType").MSG_TYPE.AUDIO:
			case o("WAWebMsgType").MSG_TYPE.PTT: return s._(
				/*BTDS*/
				"",
				[s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("audio")))]
			);
			case o("WAWebMsgType").MSG_TYPE.IMAGE: return s._(
				/*BTDS*/
				"",
				[s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("image")))]
			);
			case o("WAWebMsgType").MSG_TYPE.VIDEO: return s._(
				/*BTDS*/
				"",
				[s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("video")))]
			);
			case o("WAWebMsgType").MSG_TYPE.DOCUMENT: return s._(
				/*BTDS*/
				"",
				[s._param("maxSize", t)]
			);
			case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
			default: return s._(
				/*BTDS*/
				"",
				[s._param("maxSize", t)]
			);
		}
	}
	function m(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: e
		}));
	}
	l.default = c;
}), 226);

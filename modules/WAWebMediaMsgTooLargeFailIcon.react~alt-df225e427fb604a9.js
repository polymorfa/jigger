__d("WAWebMediaMsgTooLargeFailIcon.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFailIcon.react",
	"WAWebL10nFilesize",
	"WAWebMediaGatingUtils",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebServerPropConstants",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.displayType, n = e.mediaType, o = d(n), a = function() {
			return m(o);
		};
		return u.jsx(r("WAWebFailIcon.react"), {
			displayType: t,
			onClick: a,
			tooltip: o,
			ariaLabel: o
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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

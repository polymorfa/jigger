__d("WAWebMediaMissingModal.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebMmsMediaTypes",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = function(t) {
		try {
			return o("WAWebMmsMediaTypes").getMsgMediaType(t);
		} catch (e) {
			return null;
		}
	};
	function m(t) {
		var n = t.msg, a = o("useWAWebMsgValues").useMsgValues(n.id, [o("WAWebMsgGetters").getType, o("WAWebMsgGetters").getIsVcardOverMmsDocument]), i = a[0], l = a[1], u = d(n), m, p;
		switch (u) {
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF:
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO:
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE:
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT:
				if (l) {
					m = s._(
						/*BTDS*/
						""
					), p = s._(
						/*BTDS*/
						""
					);
					break;
				}
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER:
				m = s._(
					/*BTDS*/
					""
				), p = s._(
					/*BTDS*/
					""
				);
				break;
			default: m = s._(
				/*BTDS*/
				""
			), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["type: ", ""])), u).sendLogs("MediaMissingModal: unexpected message type");
		}
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "media-missing"
			},
			title: m,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: p
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

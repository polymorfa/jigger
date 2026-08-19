__d("WAWebBugReportFlowMediaPicker.react", [
	"WAWebAttachMediaCollection",
	"WAWebBugReportFlowMediaView.react",
	"WAWebFilePicker.react",
	"WAWebKeyboardTabUtils",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebMsgType",
	"react",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = 30, _ = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(","), f = new Set([o("WAWebMsgType").MSG_TYPE.IMAGE, o("WAWebMsgType").MSG_TYPE.VIDEO]);
	function g(e) {
		var t, n = e.customCloseMediaModal, a = e.customOpenMediaModal, i = e.mediaPayload, l = e.onSend, u = r("useWAWebUIM")(), g = m(), h = (t = i.maxItems) != null ? t : p, y = c(function(e) {
			var t = e.attachments, i = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 }), u = function() {
				i.processAttachments(t, void 0, f, h);
			}, c = s.jsx(r("WAWebBugReportFlowMediaView.react"), {
				onRender: u,
				mediaCollection: i,
				suportedMediaTypes: f,
				mediaMimeTypes: _,
				maxItems: h,
				onSend: l,
				customCloseMediaModal: n
			}), d = {
				transition: "status-modal",
				blockClose: !0,
				focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }
			};
			a != null ? a(c, d) : o("WAWebModalManager").ModalManager.openMedia(c, d);
		}, [
			n,
			a,
			h,
			l
		]), C = c(function() {
			u == null || u.requestDismiss();
		}, [u]), b = c(function(e) {
			var t;
			if (!e) {
				C();
				return;
			}
			e.stopPropagation();
			var n = Array.from((t = e.target.files) != null ? t : []);
			C(), n.length && y({ attachments: n.map(function(e) {
				return { file: e };
			}) });
		}, [C, y]);
		return d(function() {
			var e;
			(e = g.current) == null || e.open();
		}, []), s.jsx(r("WAWebFilePicker.react"), {
			ref: g,
			mimes: _,
			onChange: b,
			multiple: !0
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

__d("WAWebStatusPostingMediaPicker.react", [
	"WALogger",
	"WAWebAttachMediaCollection",
	"WAWebCmd",
	"WAWebFilePicker.react",
	"WAWebLogStatusPosterActions",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebStatusJidUtils",
	"WAWebStatusPosterActionsLogger",
	"WAWebStatusPostingMediaView.react",
	"WAWebWamEnumMediaPickerOriginType",
	"nullthrows",
	"react",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo;
	function f(t) {
		var n = t.entryPoint, a = t.isNewsletterStatus, i = a === void 0 ? !1 : a, l = t.mediaPickerRef, c = t.newsletterWid, m = t.statusPostingSessionId, f = _(function() {
			return new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger(m, c);
		}, [m, c]);
		p(function() {
			o("WAWebCmd").Cmd.onStatusPostingFlow(), f.logMediaPickerImp(o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT.STATUS_TAB_CAMERA);
		}, [f]);
		var g = r("useWAWebUIM")(), h = o("WAWebStatusJidUtils").getStatusChat();
		if (h == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: chat not found"]))), null;
		var y = function(t) {
			var e = t.attachments, a = function() {
				var t = h.attachMediaContents;
				if (!t) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: attachMediaContents uninitialized"])));
					return;
				}
				if (e && e.length > 0) t.processAttachmentsForChat(e, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY, h);
				else {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: receive empty attachments"])));
					return;
				}
			};
			h.attachMediaContents || h.setAttachMediaContents(new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: h.getParticipantCount() }));
			var l = r("nullthrows")(h.attachMediaContents), m = d.jsx(r("WAWebStatusPostingMediaView.react"), {
				chat: h,
				onRender: a,
				mediaCollection: l,
				statusPosterActionsLogger: f,
				entryPoint: n,
				newsletterWid: c,
				isNewsletterStatus: i
			});
			o("WAWebModalManager").ModalManager.openMedia(m, { transition: "status-modal" });
		}, C = function() {
			g == null || g.requestDismiss();
		}, b = function(t) {
			var e;
			if (!t) {
				C();
				return;
			}
			t.stopPropagation();
			var n = Array.from((e = t.target.files) != null ? e : []);
			C(), n.length && (y({ attachments: n.map(function(e) {
				return { file: e };
			}) }), f.logMediaPickerMediaSelected(o("WAWebLogStatusPosterActions").STATUS_CONTENT_SOURCE.GALLERY));
		}, v = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(",");
		return d.jsx(r("WAWebFilePicker.react"), {
			ref: l,
			mimes: v,
			onChange: b,
			multiple: !0
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);

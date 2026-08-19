__d("WAWebBugnubScreenshotUpload.react", [
	"WAWebAttachMediaCollection",
	"WAWebBox.react",
	"WAWebBugReportFlowAttachMediaFlow.react",
	"WAWebBugReportFlowMediaView.react",
	"WAWebBugReportSessionWamEvent",
	"WAWebCloseRefreshedIcon.react",
	"WAWebCryptoCreateMediaKeys",
	"WAWebIcAddPhotoAlternateIcon.react",
	"WAWebKeyboardTabUtils",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebSpinner.react",
	"WAWebStartMediaUploadQpl",
	"WAWebUnstyledButton.react",
	"WAWebUploadManager",
	"WAWebWamEnumBugReportFlowAction",
	"WAWebWamEnumUploadOriginType",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = {
		container: {
			display: "x78zum5",
			columnGap: "x1s70e7g",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		mediaContainer: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x1dmp6jm",
			height: "xwzfr38",
			aspectRatio: "x1y5e3q9",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			backgroundColor: "x4wrhlh",
			":focus-visible_outline": "x1iy98g",
			":focus-visible_outlineOffset": "x7s97pk",
			$$css: !0
		},
		mediaContainerHover: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			pointerEvents: "x47corl",
			width: "xh8yej3",
			height: "x5yr21d",
			borderStartStartRadius: "x1fmog5m",
			borderStartEndRadius: "xu25z0z",
			borderEndEndRadius: "x140muxe",
			borderEndStartRadius: "xo1y3bh",
			backgroundColor: "x5fk640",
			opacity: "xg01cxk",
			transition: "x1y2wqyl",
			$$css: !0
		},
		mediaContainerHoverVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		mediaThumbnail: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		thumbnail: {
			position: "x1n2onr6",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			cursor: "x1ypdohk",
			$$css: !0
		},
		thumbnailContent: {
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		hoverOverlay: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x1l2mjrv",
			background: "x18bz5l2",
			opacity: "xg01cxk",
			transition: "x1y2wqyl",
			pointerEvents: "x47corl",
			$$css: !0
		},
		thumbnailHover: {
			":hover_cursor": "x1277o0a",
			$$css: !0
		},
		hoverOverlayVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		deleteButton: {
			position: "x10l6tqk",
			top: "xfr5jun",
			insetInlineEnd: "x11dcrhx",
			left: null,
			right: null,
			width: "x1kky2od",
			height: "xlup9mm",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			cursor: "x1ypdohk",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			opacity: "xg01cxk",
			transition: "x17j15dm",
			zIndex: "x11uqc5h",
			color: "x17t9dm2",
			$$css: !0
		},
		deleteButtonVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		imagePreview: {
			width: "xh8yej3",
			height: "x5yr21d",
			backgroundSize: "x18d0r48",
			backgroundPosition: "x1xsqp64",
			$$css: !0
		},
		clickable: {
			cursor: "x1ypdohk",
			$$css: !0
		}
	}, d = 3, m = 1024 * 1024 * 10;
	function p(e) {
		var t = e.customCloseMediaModal, n = e.customOpenMediaModal, a = e.customOpenSupportModal, i = e.mediaState, l = e.onChangeState, p = function(t) {
			new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({ bugReportFlowAction: t }).commit();
		}, _ = u(0), f = _[0], g = _[1], h = u(null), y = h[0], C = h[1], b = async function(t) {
			if (t.length > 0) {
				g(t.length), l({
					state: "uploading",
					mediaFiles: i.mediaFiles
				});
				var e = t.map(async function(e) {
					var t = e.type === "image" ? "image" : "video", n = e.file;
					if (n instanceof Blob) {
						var a = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
							entryPoint: "BugnubScreenshotUpload",
							mediaType: t,
							byteLength: n.size
						}), i = await r("WAWebUploadManager").encryptAndUpload({
							blob: n,
							mediaKey: null,
							mediaKeyTimestamp: null,
							type: t,
							signal: new AbortController().signal,
							userUploadAttemptCount: 0,
							forwardedFromWeb: !1,
							uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
							isViewOnce: !1,
							uploadQpl: a
						}), l = await r("WAWebCryptoCreateMediaKeys")(t, i.mediaKey);
						if (e.file instanceof Blob) return {
							url: i.url,
							iv: l.iv,
							encKey: l.encKey,
							previewUrl: t === "image" ? URL.createObjectURL(e.file) : "data:image/jpeg;base64," + e.preview,
							filename: e.filename,
							mediaType: t,
							originalFile: n
						};
					}
				}), n = await Promise.all(e).then(function(e) {
					return e.filter(Boolean);
				});
				p(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL), g(0), l({
					state: "success",
					mediaFiles: [].concat(i.mediaFiles, n)
				});
			}
		}, v = function() {
			p(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.ADD_SCREENSHOT_CLICK);
			var e = s.jsx(r("WAWebBugReportFlowAttachMediaFlow.react"), {
				mediaPayload: {
					maxItems: d - i.mediaFiles.length,
					maxFileSizeBytes: m
				},
				onSend: b,
				customOpenMediaModal: n,
				customCloseMediaModal: t
			});
			a != null ? a(e) : o("WAWebModalManager").ModalManager.openSupportModal(e);
		}, S = function(t) {
			p(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.REMOVE_SCREENSHOT_CLICK);
			var e = [].concat(i.mediaFiles);
			e.splice(t, 1), l({
				state: e.length > 0 ? "success" : "none",
				mediaFiles: e
			});
		}, R = function(a) {
			var e = i.mediaFiles[a], u = e.originalFile;
			if (u != null) {
				var c = new File([u], e.filename, { type: u.type }), d = async function(n) {
					if (n.length !== 0) {
						var t = n[0], s = t.type === "image" ? "image" : "video", u = t.file;
						if (u instanceof Blob) {
							var c = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
								entryPoint: "BugnubScreenshotUpload",
								mediaType: s,
								byteLength: u.size
							}), d = await r("WAWebUploadManager").encryptAndUpload({
								blob: u,
								mediaKey: null,
								mediaKeyTimestamp: null,
								type: s,
								signal: new AbortController().signal,
								userUploadAttemptCount: 0,
								forwardedFromWeb: !1,
								uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
								isViewOnce: !1,
								uploadQpl: c
							}), m = await r("WAWebCryptoCreateMediaKeys")(s, d.mediaKey), _ = [].concat(i.mediaFiles);
							t.file instanceof Blob && e.previewUrl && URL.revokeObjectURL(e.previewUrl), _[a] = {
								url: d.url,
								iv: m.iv,
								encKey: m.encKey,
								previewUrl: t.file instanceof Blob ? URL.createObjectURL(t.file) : e.previewUrl,
								filename: t.filename,
								mediaType: s,
								originalFile: t.file instanceof Blob ? t.file : void 0
							}, p(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL), l({
								state: "success",
								mediaFiles: _
							});
						}
					}
				}, m = new Set([o("WAWebMsgType").MSG_TYPE.IMAGE, o("WAWebMsgType").MSG_TYPE.VIDEO]), _ = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(","), f = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 }), g = { file: c }, h = function() {
					f.processAttachments([g], void 0, m, 1);
				}, y = s.jsx(r("WAWebBugReportFlowMediaView.react"), {
					onRender: h,
					mediaCollection: f,
					suportedMediaTypes: m,
					mediaMimeTypes: _,
					maxItems: 1,
					onSend: d,
					customCloseMediaModal: t
				}), C = {
					transition: "status-modal",
					blockClose: !0,
					focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }
				};
				n != null ? n(y, C) : o("WAWebModalManager").ModalManager.openMedia(y, C);
			}
		};
		return s.jsxs(r("WAWebBox.react"), {
			xstyle: c.container,
			children: [
				i.mediaFiles.map(function(e, t) {
					return s.jsxs(r("WAWebUnstyledButton.react"), {
						xstyle: [
							c.mediaContainer,
							c.mediaThumbnail,
							c.thumbnail,
							c.thumbnailHover
						],
						onMouseEnter: function() {
							return C(t);
						},
						onMouseLeave: function() {
							return C(null);
						},
						onClick: function() {
							return R(t);
						},
						children: [s.jsxs(r("WAWebBox.react"), {
							xstyle: c.thumbnailContent,
							children: [s.jsx(r("WAWebBox.react"), {
								xstyle: c.imagePreview,
								style: { backgroundImage: "url(" + e.previewUrl + ")" }
							}), s.jsx(r("WAWebBox.react"), { xstyle: [c.hoverOverlay, y === t && c.hoverOverlayVisible] })]
						}), s.jsx(r("WAWebUnstyledButton.react"), {
							xstyle: [c.deleteButton, y === t && c.deleteButtonVisible],
							onClick: function(n) {
								n.stopPropagation(), S(t);
							},
							tabIndex: -1,
							"aria-label": "Remove file",
							children: s.jsx(o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon, {
								height: 24,
								width: 24
							})
						})]
					}, t);
				}),
				i.state === "uploading" && Array.from({ length: f }, function(e, t) {
					return s.jsx(r("WAWebBox.react"), {
						xstyle: c.mediaContainer,
						children: s.jsx(o("WAWebSpinner.react").Spinner, {
							size: 24,
							color: "wdsSecondaryLighter"
						})
					}, "uploading-" + t);
				}),
				i.state !== "uploading" && i.mediaFiles.length < d && s.jsxs(r("WAWebUnstyledButton.react"), {
					xstyle: [c.mediaContainer, c.clickable],
					onClick: v,
					onMouseEnter: function() {
						return C(-1);
					},
					onMouseLeave: function() {
						return C(null);
					},
					title: i.state === "error" ? "Error uploading files. Click to retry." : "Add screenshot or video",
					children: [s.jsx(o("WAWebIcAddPhotoAlternateIcon.react").IcAddPhotoAlternateIcon, {
						height: 24,
						width: 24
					}), s.jsx(r("WAWebBox.react"), { xstyle: [c.mediaContainerHover, y === -1 && c.mediaContainerHoverVisible] })]
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

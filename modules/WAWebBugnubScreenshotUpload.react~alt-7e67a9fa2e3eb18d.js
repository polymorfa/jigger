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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(38), n = e.customCloseMediaModal, a = e.customOpenMediaModal, i = e.customOpenSupportModal, l = e.mediaState, p = e.onChangeState, y = h, C = u(0), b = C[0], v = C[1], S = u(null), R = S[0], L = S[1], E;
		t[0] !== l.mediaFiles || t[1] !== p ? (E = async function(t) {
			if (t.length > 0) {
				v(t.length), p({
					state: "uploading",
					mediaFiles: l.mediaFiles
				});
				var e = t.map(g), n = await Promise.all(e).then(f);
				y(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL), v(0), p({
					state: "success",
					mediaFiles: [].concat(l.mediaFiles, n)
				});
			}
		}, t[0] = l.mediaFiles, t[1] = p, t[2] = E) : E = t[2];
		var k = E, I;
		t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== k || t[7] !== l.mediaFiles.length ? (I = function() {
			y(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.ADD_SCREENSHOT_CLICK);
			var e = s.jsx(r("WAWebBugReportFlowAttachMediaFlow.react"), {
				mediaPayload: {
					maxItems: d - l.mediaFiles.length,
					maxFileSizeBytes: m
				},
				onSend: k,
				customOpenMediaModal: a,
				customCloseMediaModal: n
			});
			i != null ? i(e) : o("WAWebModalManager").ModalManager.openSupportModal(e);
		}, t[3] = n, t[4] = a, t[5] = i, t[6] = k, t[7] = l.mediaFiles.length, t[8] = I) : I = t[8];
		var T = I, D;
		t[9] !== l.mediaFiles || t[10] !== p ? (D = function(t) {
			y(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.REMOVE_SCREENSHOT_CLICK);
			var e = [].concat(l.mediaFiles);
			e.splice(t, 1), p({
				state: e.length > 0 ? "success" : "none",
				mediaFiles: e
			});
		}, t[9] = l.mediaFiles, t[10] = p, t[11] = D) : D = t[11];
		var x = D, $;
		t[12] !== n || t[13] !== a || t[14] !== l.mediaFiles || t[15] !== p ? ($ = function(t) {
			var e = l.mediaFiles[t], i = e.originalFile;
			if (i != null) {
				var u = new File([i], e.filename, { type: i.type }), c = async function(a) {
					if (a.length !== 0) {
						var n = a[0], i = n.type === "image" ? "image" : "video", s = n.file;
						if (s instanceof Blob) {
							var u = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
								entryPoint: "BugnubScreenshotUpload",
								mediaType: i,
								byteLength: s.size
							}), c = await r("WAWebUploadManager").encryptAndUpload({
								blob: s,
								mediaKey: null,
								mediaKeyTimestamp: null,
								type: i,
								signal: new AbortController().signal,
								userUploadAttemptCount: 0,
								forwardedFromWeb: !1,
								uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
								isViewOnce: !1,
								uploadQpl: u
							}), d = await r("WAWebCryptoCreateMediaKeys")(i, c.mediaKey), m = [].concat(l.mediaFiles);
							n.file instanceof Blob && e.previewUrl && URL.revokeObjectURL(e.previewUrl), m[t] = {
								url: c.url,
								iv: d.iv,
								encKey: d.encKey,
								previewUrl: n.file instanceof Blob ? URL.createObjectURL(n.file) : e.previewUrl,
								filename: n.filename,
								mediaType: i,
								originalFile: n.file instanceof Blob ? n.file : void 0
							}, y(o("WAWebWamEnumBugReportFlowAction").BUG_REPORT_FLOW_ACTION.MEDIA_UPLOAD_SUCCESSFUL), p({
								state: "success",
								mediaFiles: m
							});
						}
					}
				}, d = new Set([o("WAWebMsgType").MSG_TYPE.IMAGE, o("WAWebMsgType").MSG_TYPE.VIDEO]), m = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(","), _ = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 }), f = { file: u }, g = function() {
					_.processAttachments([f], void 0, d, 1);
				}, h = s.jsx(r("WAWebBugReportFlowMediaView.react"), {
					onRender: g,
					mediaCollection: _,
					suportedMediaTypes: d,
					mediaMimeTypes: m,
					maxItems: 1,
					onSend: c,
					customCloseMediaModal: n
				}), C = {
					transition: "status-modal",
					blockClose: !0,
					focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }
				};
				a != null ? a(h, C) : o("WAWebModalManager").ModalManager.openMedia(h, C);
			}
		}, t[12] = n, t[13] = a, t[14] = l.mediaFiles, t[15] = p, t[16] = $) : $ = t[16];
		var P = $, N;
		if (t[17] !== R || t[18] !== l.mediaFiles || t[19] !== P || t[20] !== x) {
			var M;
			t[22] !== R || t[23] !== P || t[24] !== x ? (M = function(t, n) {
				return s.jsxs(r("WAWebUnstyledButton.react"), {
					xstyle: [
						c.mediaContainer,
						c.mediaThumbnail,
						c.thumbnail,
						c.thumbnailHover
					],
					onMouseEnter: function() {
						return L(n);
					},
					onMouseLeave: function() {
						return L(null);
					},
					onClick: function() {
						return P(n);
					},
					children: [s.jsxs(r("WAWebBox.react"), {
						xstyle: c.thumbnailContent,
						children: [s.jsx(r("WAWebBox.react"), {
							xstyle: c.imagePreview,
							style: { backgroundImage: "url(" + t.previewUrl + ")" }
						}), s.jsx(r("WAWebBox.react"), { xstyle: [c.hoverOverlay, R === n && c.hoverOverlayVisible] })]
					}), s.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: [c.deleteButton, R === n && c.deleteButtonVisible],
						onClick: function(t) {
							t.stopPropagation(), x(n);
						},
						tabIndex: -1,
						"aria-label": "Remove file",
						children: s.jsx(o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon, {
							height: 24,
							width: 24
						})
					})]
				}, n);
			}, t[22] = R, t[23] = P, t[24] = x, t[25] = M) : M = t[25], N = l.mediaFiles.map(M), t[17] = R, t[18] = l.mediaFiles, t[19] = P, t[20] = x, t[21] = N;
		} else N = t[21];
		var w;
		t[26] !== l.state || t[27] !== b ? (w = l.state === "uploading" && Array.from({ length: b }, _), t[26] = l.state, t[27] = b, t[28] = w) : w = t[28];
		var A;
		t[29] !== R || t[30] !== l.mediaFiles.length || t[31] !== l.state || t[32] !== T ? (A = l.state !== "uploading" && l.mediaFiles.length < d && s.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: [c.mediaContainer, c.clickable],
			onClick: T,
			onMouseEnter: function() {
				return L(-1);
			},
			onMouseLeave: function() {
				return L(null);
			},
			title: l.state === "error" ? "Error uploading files. Click to retry." : "Add screenshot or video",
			children: [s.jsx(o("WAWebIcAddPhotoAlternateIcon.react").IcAddPhotoAlternateIcon, {
				height: 24,
				width: 24
			}), s.jsx(r("WAWebBox.react"), { xstyle: [c.mediaContainerHover, R === -1 && c.mediaContainerHoverVisible] })]
		}), t[29] = R, t[30] = l.mediaFiles.length, t[31] = l.state, t[32] = T, t[33] = A) : A = t[33];
		var F;
		return t[34] !== N || t[35] !== w || t[36] !== A ? (F = s.jsxs(r("WAWebBox.react"), {
			xstyle: c.container,
			children: [
				N,
				w,
				A
			]
		}), t[34] = N, t[35] = w, t[36] = A, t[37] = F) : F = t[37], F;
	}
	function _(e, t) {
		return s.jsx(r("WAWebBox.react"), {
			xstyle: c.mediaContainer,
			children: s.jsx(o("WAWebSpinner.react").Spinner, {
				size: 24,
				color: "wdsSecondaryLighter"
			})
		}, "uploading-" + t);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e.filter(Boolean);
	}
	async function g(e) {
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
	}
	function h(e) {
		new (o("WAWebBugReportSessionWamEvent")).BugReportSessionWamEvent({ bugReportFlowAction: e }).commit();
	}
	l.default = p;
}), 98);

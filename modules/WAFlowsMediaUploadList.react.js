__d("WAFlowsMediaUploadList.react", [
	"WAFlowsComponentConstants",
	"WAFlowsDocumentPicker.react",
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsNativeExperienceUtils",
	"WAFlowsNativeMediaUploadTypes",
	"WAFlowsProgressRing.react",
	"WAFlowsStateProvider.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		previewWidth: 3,
		cancelWidthAndroid: 1.5,
		cancelWidth: 1.75,
		columnGap: 1,
		padding: 1
	}, d = {
		mediaUploadingSuccessTextColor: {
			color: "xhslqc4",
			$$css: !0
		},
		error: {
			color: "x30a034",
			$$css: !0
		},
		ltr: {
			direction: "xzt5al7",
			$$css: !0
		},
		previewImage: {
			"pointer-events": "x47corl",
			width: "x188tqju",
			height: "x1pizb70",
			borderStartStartRadius: "x1rajyc1",
			borderStartEndRadius: "x1qndgat",
			borderEndEndRadius: "x1kprl8i",
			borderEndStartRadius: "x13matbc",
			borderTopWidth: "x1f3wszw",
			borderInlineEndWidth: "xt5rsg7",
			borderBottomWidth: "x1avzjbn",
			borderInlineStartWidth: "xpxabqs",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		rowWidthMobile: {
			width: "xjdehy0",
			$$css: !0
		},
		rowWidthWeb: {
			width: "xh8yej3",
			$$css: !0
		},
		docPreview: {
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		textGrow: {
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		rowAlignment: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, m = {
		mediaUploadRows: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "x1fc8kun",
			paddingBottom: "xsaxbkt",
			$$css: !0
		},
		rowContainer: {
			display: "x78zum5",
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			alignItems: "x6s0dn4",
			rowGap: "x1w6r25c",
			columnGap: "x1izhsip",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "x1rajyc1",
			borderStartEndRadius: "x1qndgat",
			borderEndEndRadius: "x1kprl8i",
			borderEndStartRadius: "x13matbc",
			backgroundColor: "x1od0jb8",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		previewContainer: {
			position: "x1n2onr6",
			display: "x78zum5",
			width: "x188tqju",
			height: "x1pizb70",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1rajyc1",
			borderStartEndRadius: "x1qndgat",
			borderEndEndRadius: "x1kprl8i",
			borderEndStartRadius: "x13matbc",
			$$css: !0
		},
		previewImage: {
			display: "x78zum5",
			alignItems: "x1cy8zhl",
			rowGap: "xw3a9ly",
			columnGap: "x1s07kcz",
			flexShrink: "x2lah0s",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		mediaMetadata: {
			height: "xt7dq6l",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			justifyContent: "xl56j7k",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			width: "x18reac0",
			$$css: !0
		},
		mediaTitleWrapper: {
			maxWidth: "x1te6s5y",
			$$css: !0
		},
		mediaTitle: {
			display: "x1rg5ohu",
			height: "xt7dq6l",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			color: "x14ug900",
			fontFeatureSettings: "x1cc3yi2",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			fontSize: "x1jchvi3",
			fontStyle: "x1j61x8r",
			fontWeight: "xo1l8bm",
			lineHeight: "x17mssa0",
			letterSpacing: "x17wp8dx",
			paddingTop: "x4p5aij",
			paddingBottom: "x1j85h84",
			$$css: !0
		},
		mediaUploadingSuccessText: {
			height: "xt7dq6l",
			alignSelf: "xkh2ocl",
			fontFeatureSettings: "x1cc3yi2",
			fontSize: "xkpwil5",
			fontStyle: "x1j61x8r",
			fontWeight: "xo1l8bm",
			lineHeight: "x8r4c90",
			letterSpacing: "ximi1cr",
			$$css: !0
		},
		dot: {
			whiteSpace: "x1sdyfia",
			transform: "x1rwoca6",
			fontWeight: "x117nqv4",
			$$css: !0
		},
		mediaFormatCase: {
			textTransform: "xtvhhri",
			$$css: !0
		}
	}, p = {
		mediaUploadRows: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			rowGap: "xxs79tx",
			borderStartStartRadius: "xka0v7t",
			borderStartEndRadius: "x1gy44zr",
			borderEndEndRadius: "x1equb14",
			borderEndStartRadius: "xreshn2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		rowContainer: {
			display: "x78zum5",
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			boxSizing: "x9f619",
			alignItems: "x6s0dn4",
			columnGap: "x1izhsip",
			backgroundColor: "xw5budq",
			borderBottomWidth: "x1avzjbn",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			":last-child_borderBottomStyle": "x14tvv71",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			$$css: !0
		},
		previewContainer: {
			display: "x78zum5",
			position: "x1n2onr6",
			borderStartStartRadius: "x1rajyc1",
			borderStartEndRadius: "x1qndgat",
			borderEndEndRadius: "x1kprl8i",
			borderEndStartRadius: "x13matbc",
			width: "x188tqju",
			height: "x1pizb70",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		previewImage: {
			display: "x78zum5",
			rowGap: "x1fc8kun",
			columnGap: "x4prdry",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			$$css: !0
		},
		mediaMetadata: {
			height: "xt7dq6l",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			rowGap: "x4arjd5",
			width: "x189g7z",
			$$css: !0
		},
		mediaTitleWrapper: {
			maxWidth: "x1te6s5y",
			$$css: !0
		},
		mediaTitle: {
			height: "xt7dq6l",
			display: "x1rg5ohu",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "x1r8uery",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			color: "x14ug900",
			fontFeatureSettings: "x1cc3yi2",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			fontSize: "x1lkfr7t",
			fontStyle: "x1j61x8r",
			fontWeight: "xo1l8bm",
			letterSpacing: "xty6byi",
			$$css: !0
		},
		mediaUploadingSuccessText: {
			alignSelf: "xkh2ocl",
			fontFeatureSettings: "x1cc3yi2",
			fontSize: "x1dcheo9",
			fontStyle: "x1j61x8r",
			fontWeight: "xo1l8bm",
			height: "xt7dq6l",
			$$css: !0
		},
		dot: {
			whiteSpace: "x1sdyfia",
			transform: "x1rwoca6",
			fontWeight: "x117nqv4",
			$$css: !0
		},
		removeIconContainer: {
			display: "x78zum5",
			alignItems: "x1cy8zhl",
			rowGap: "x10g6wfw",
			columnGap: "x1r3dd9g",
			$$css: !0
		},
		removeIcon: {
			display: "x78zum5",
			width: "xh29eag",
			height: "xb8l8e1",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "xbiv7yw",
			$$css: !0
		},
		mediaFormatCase: {
			textTransform: "x1kyqaxf",
			$$css: !0
		}
	};
	function _(e, t) {
		switch (e) {
			case 1e3: {
				var n = o("WAFlowsNativeExperienceUtils").getFileSizeUnit(t, o("WAFlowsNativeExperienceUtils").Units.KB);
				return o("WAFlowsLocalization").getFileSizeExceededErrorMsg(n.fileSize, n.unit);
			}
			case 1003: return o("WAFlowsLocalization").getNoInternetErrorMessage();
			case 1001:
			case 1002:
			case 1004:
			default: return o("WAFlowsLocalization").getNonRetryableFailureMsg();
		}
	}
	function f(t) {
		var n = t["data-testid"], a = t.isDocumentPicker, i = t.maxFileSizeKb, l = t.mediaUploadList, s = t.onRemoveMedia, c = t.onRetryMedia, _ = o("WAFlowsEnvContext.react").useWAFlowsEnv(), f = _.env, h = f.platform === "ios" ? p : m, y = ["web_tooling", "wa_web"].includes(f.hostPlatform);
		return u.jsx("ul", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.mediaUploadRows, y ? d.rowWidthWeb : d.rowWidthMobile), {
			"data-testid": void 0,
			children: l.map(function(e) {
				return u.jsx(g, {
					mediaUploadRow: e,
					onRemoveMedia: s,
					onRetryMedia: c,
					maxFileSizeKb: i,
					isDocumentPicker: a
				}, e.mediaId);
			})
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a, i, l = t.isDocumentPicker, s = t.maxFileSizeKb, c = t.mediaUploadRow, f = t.onRemoveMedia, g = t.onRetryMedia, h = o("WAFlowsEnvContext.react").useWAFlowsEnv(), y = h.env, C = y.platform === "ios" ? p : m, b = c.uploadProgress * 100, v = c.uploadState === o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.PROGRESS, S = c.uploadState === o("WAFlowsNativeMediaUploadTypes").WAFMediaUploadState.ERROR, R = S && ((n = c.isRetryable) != null ? n : !1), L = v || S, E = o("WAFlowsStateProvider.react").useWAFlowsState(), k = E.internal.status === o("WAFlowsStateProvider.react").flowJSONLoadState.READY, I = o("WAFlowsNativeExperienceUtils").getMediaExtn(c.mediaName), T = (a = c.docPageCount) != null ? a : 0;
		function D(t) {
			var n = t === "ios" ? p : m, o = k ? "var(--WDS-content-default)" : "var(--WDS-content-disabled)";
			return t === "android" ? u.jsxs("svg", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n.removeIconContainer, n.removeIcon), {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: function() {
					f(c.mediaId, k);
				},
				"data-testid": void 0,
				children: [u.jsx("title", { children: "Clear" }), u.jsx("path", {
					d: "M18.3 5.70999C18.1131 5.52273 17.8595 5.4175 17.595 5.4175C17.3305 5.4175 17.0768 5.52273 16.89 5.70999L12 10.59L7.10997 5.69999C6.92314 5.51273 6.66949 5.4075 6.40497 5.4075C6.14045 5.4075 5.8868 5.51273 5.69997 5.69999C5.30997 6.08999 5.30997 6.71999 5.69997 7.10999L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10999C18.68 6.72999 18.68 6.08999 18.3 5.70999Z",
					fill: o
				})]
			})) : u.jsxs("svg", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n.removeIconContainer, n.removeIcon), {
				width: "28",
				height: "28",
				viewBox: "0 0 28 28",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: function() {
					return f(c.mediaId, k);
				},
				"data-testid": void 0,
				children: [u.jsx("title", { children: "Clear" }), u.jsx("path", {
					d: "M5.76074 7.37988C5.639 7.25814 5.55664 7.11491 5.51367 6.9502C5.47786 6.78548 5.47786 6.62077 5.51367 6.45605C5.55664 6.29134 5.639 6.14811 5.76074 6.02637C5.88249 5.89746 6.02572 5.8151 6.19043 5.7793C6.35514 5.73633 6.51986 5.73633 6.68457 5.7793C6.85645 5.8151 7.00326 5.89746 7.125 6.02637L22.2393 21.1406C22.361 21.2624 22.4398 21.4056 22.4756 21.5703C22.5186 21.735 22.5186 21.8997 22.4756 22.0645C22.4398 22.2292 22.361 22.3724 22.2393 22.4941C22.1175 22.623 21.9707 22.7054 21.7988 22.7412C21.6341 22.7842 21.4694 22.7842 21.3047 22.7412C21.14 22.6982 20.9967 22.6159 20.875 22.4941L5.76074 7.37988ZM5.76074 21.1406L20.875 6.02637C20.9967 5.89746 21.14 5.8151 21.3047 5.7793C21.4694 5.73633 21.6341 5.73633 21.7988 5.7793C21.9635 5.8151 22.1104 5.89746 22.2393 6.02637C22.361 6.14811 22.4434 6.29134 22.4863 6.45605C22.5293 6.62077 22.5293 6.78548 22.4863 6.9502C22.4434 7.11491 22.361 7.25814 22.2393 7.37988L7.125 22.4941C7.00326 22.6159 6.86003 22.6982 6.69531 22.7412C6.5306 22.7842 6.36589 22.7842 6.20117 22.7412C6.03646 22.6982 5.88965 22.6159 5.76074 22.4941C5.63184 22.3724 5.5459 22.2292 5.50293 22.0645C5.46712 21.8997 5.4707 21.735 5.51367 21.5703C5.55664 21.4056 5.639 21.2624 5.76074 21.1406Z",
					fill: o
				})]
			}));
		}
		function x(e) {
			return e === "android" ? u.jsxs("svg", {
				className: "xp8d6y2 xam5rvr x10l6tqk x1nxzj52 xtmw667 xhtitgo",
				onClick: function() {
					return g(c.mediaId);
				},
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				"data-testid": void 0,
				children: [u.jsx("title", { children: "Retry" }), u.jsx("path", {
					d: "M11.9619 5.64236V2.85236C11.9619 2.40236 11.4219 2.18236 11.1119 2.50236L7.31194 6.29236C7.11194 6.49236 7.11194 6.80236 7.31194 7.00236L11.1019 10.7924C11.4219 11.1024 11.9619 10.8824 11.9619 10.4324V7.64236C15.6919 7.64236 18.6419 11.0624 17.8219 14.9324C17.3519 17.2024 15.5119 19.0324 13.2519 19.5024C9.68194 20.2524 6.50194 17.8024 6.02194 14.4924C5.95194 14.0124 5.53194 13.6424 5.04194 13.6424C4.44194 13.6424 3.96194 14.1724 4.04194 14.7724C4.66194 19.1624 8.84194 22.4124 13.5719 21.4924C16.6919 20.8824 19.2019 18.3724 19.8119 15.2524C20.8019 10.1224 16.9019 5.64236 11.9619 5.64236Z",
					fill: "var(--WDS-persistent-always-white)"
				})]
			}) : u.jsxs("svg", {
				className: "xp8d6y2 xam5rvr x10l6tqk x1nxzj52 xtmw667 xhtitgo",
				onClick: function() {
					return g(c.mediaId);
				},
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				"data-testid": void 0,
				children: [
					u.jsx("title", { children: "Retry" }),
					u.jsx("g", {
						clipPath: "url(#clip0_1652_11467)",
						children: u.jsx("g", {
							clipPath: "url(#clip1_1652_11467)",
							children: u.jsx("path", {
								d: "M12.1025 10.1279C11.6191 10.1279 11.2539 9.7627 11.2539 9.26855C11.2539 9.04297 11.3398 8.82812 11.501 8.65625L14.7129 5.46582C14.0684 5.32617 13.3164 5.26172 12.5 5.26172C8.19238 5.26172 4.7334 8.70996 4.7334 13.0176C4.7334 17.3359 8.19238 20.7949 12.5 20.7949C16.8076 20.7949 20.2559 17.3359 20.2559 13.0176C20.2559 12.502 20.5889 12.126 21.0938 12.126C21.6201 12.126 21.9854 12.502 21.9854 13.0176C21.9854 18.292 17.7637 22.5244 12.5 22.5244C7.23633 22.5244 3.00391 18.292 3.00391 13.0176C3.00391 7.75391 7.23633 3.53223 12.5 3.53223C13.123 3.53223 13.7461 3.59668 14.3584 3.7041L11.4902 0.889648C11.3398 0.717773 11.2539 0.50293 11.2539 0.277344C11.2539 -0.216797 11.6191 -0.603516 12.1025 -0.603516C12.3604 -0.603516 12.5752 -0.517578 12.7256 -0.345703L17.1514 4.14453C17.3232 4.31641 17.4199 4.55273 17.4199 4.78906C17.4199 5.03613 17.3447 5.25098 17.1514 5.43359L12.7256 9.88086C12.5752 10.042 12.3711 10.1279 12.1025 10.1279Z",
								fill: "var(--WDS-persistent-always-white)"
							})
						})
					}),
					u.jsxs("defs", { children: [u.jsx("clipPath", {
						id: "clip0_1652_11467",
						children: u.jsx("rect", {
							width: "24",
							height: "24",
							rx: "12",
							fill: "white"
						})
					}), u.jsx("clipPath", {
						id: "clip1_1652_11467",
						children: u.jsx("rect", {
							width: "24",
							height: "24",
							fill: "white"
						})
					})] })
				]
			});
		}
		return u.jsxs("li", babelHelpers.extends({}, (e || (e = r("stylex"))).props(C.rowContainer), { children: [
			u.jsxs("div", babelHelpers.extends({}, e.props(C.previewContainer), { children: [
				l ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.previewImage, C.previewImage, d.docPreview))) : u.jsx("img", babelHelpers.extends({ src: "data:image;base64," + c.mediaPreviewImage }, (e || (e = r("stylex"))).props(d.previewImage, C.previewImage), { "data-testid": void 0 })),
				l && u.jsx("div", {
					className: "x1h5jark xv6nkyv x10l6tqk xl56j7k xhtitgo",
					children: u.jsx("img", { src: o("WAFlowsDocumentPicker.react").getDocPngUrlByPlatformExtn(y.platform, I) })
				}),
				L && u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x10l6tqk x1rajyc1 x1qndgat x1kprl8i x13matbc x13vifvy xu96u03 xh8yej3 x5yr21d x1honnu5 x1vjfegm" },
					1: { className: "x10l6tqk x1rajyc1 x1qndgat x1kprl8i x13matbc x13vifvy xu96u03 xh8yej3 x5yr21d x1honnu5 xhtitgo" }
				}[!!l << 0])),
				v && u.jsx("div", {
					className: "xp8d6y2 xam5rvr x10l6tqk x1nxzj52 xtmw667 xhtitgo",
					"data-testid": void 0,
					children: u.jsx(r("WAFlowsProgressRing.react"), { progress: b })
				}),
				R && x(y.platform)
			] })),
			u.jsxs("div", babelHelpers.extends({}, e.props(C.mediaMetadata), { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: c.mediaName,
				xstyle: [C.mediaTitle, d.ltr],
				maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.MEDIA_UPLOAD_NAME,
				responsiveFontContainerXStyle: C.mediaTitleWrapper
			}), v ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: o("WAFlowsLocalization").getUploadingLabel(),
				xstyle: [C.mediaUploadingSuccessText, d.mediaUploadingSuccessTextColor]
			}) : S ? u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: _((i = c.errorCode) != null ? i : 0, s),
				xstyle: [C.mediaUploadingSuccessText, d.error]
			}) : u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.rowAlignment, C.mediaTitleWrapper), { children: [
				T > 0 && u.jsxs(u.Fragment, { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: o("WAFlowsLocalization").getDocPageCountString(T, I.toLowerCase()),
					xstyle: [
						C.mediaUploadingSuccessText,
						C.mediaFormatCase,
						d.mediaUploadingSuccessTextColor,
						d.ltr,
						d.textGrow
					]
				}), u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: " . ",
					xstyle: [
						C.mediaUploadingSuccessText,
						C.dot,
						d.mediaUploadingSuccessTextColor
					]
				})] }),
				u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: o("WAFlowsNativeExperienceUtils").formatFileSize(c.mediaSizeBytes, o("WAFlowsNativeExperienceUtils").Units.BYTES),
					xstyle: [
						C.mediaUploadingSuccessText,
						d.mediaUploadingSuccessTextColor,
						d.ltr,
						d.textGrow
					]
				}),
				I !== "" && u.jsxs(u.Fragment, { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: " . ",
					xstyle: [
						C.mediaUploadingSuccessText,
						C.dot,
						d.mediaUploadingSuccessTextColor
					]
				}), u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					text: I,
					xstyle: [
						C.mediaUploadingSuccessText,
						C.mediaFormatCase,
						d.mediaUploadingSuccessTextColor,
						d.textGrow
					]
				})] })
			] }))] })),
			D(y.platform)
		] }));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 98);

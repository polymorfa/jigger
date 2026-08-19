__d("WAWebProductCatalogProductImagesEditPanel.react", [
	"fbt",
	"Promise",
	"WAWebAttachMediaModel",
	"WAWebEventFiles",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMedia",
	"WAWebMediaOpaqueData",
	"WAWebMediaTypes",
	"WAWebMimeTypes",
	"WAWebMsgType",
	"WAWebProductCatalogProductThumb.react",
	"WAWebQplFlowWrapper",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebXAltIcon.react",
	"WDSIconIcPhotoCamera.react",
	"WDSMargins.stylex",
	"compactMap",
	"countWhere",
	"qpl",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useImperativeHandle, f = p.useRef, g = p.useState, h = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		marginInlineEnd10: {
			marginInlineEnd: "x1sa5p1d",
			$$css: !0
		},
		padding15: {
			paddingTop: "xqy66fx",
			paddingInlineEnd: "x1q3ajuy",
			paddingBottom: "xr1496l",
			paddingInlineStart: "x1gx403c",
			$$css: !0
		},
		paddingInlineEnd30: {
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		}
	}, y = "128px", C = "131px", b = r("qpl")._(774779113, "3440"), v = {
		btnDelete: {
			position: "x10l6tqk",
			top: "x1pdr0v7",
			insetInlineEnd: "x1lm9i9x",
			left: null,
			right: null,
			zIndex: "x11uqc5h",
			color: "x17t9dm2",
			filter: "xjjae95",
			$$css: !0
		},
		btnAdd: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x2pejg6",
			height: "x1vlo0dj",
			fontSize: "x1ncwhqj",
			fontWeight: "xk50ysn",
			lineHeight: "xo5v014",
			letterSpacing: "x1yrajzq",
			$$css: !0
		},
		btnAddContainer: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			width: "x2pejg6",
			height: "x1vlo0dj",
			color: "xqg7fiw",
			verticalAlign: "x16dsc37",
			backgroundColor: "xep993w",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		},
		btnAddContainerRefreshed: {
			color: "x1v5yvga",
			$$css: !0
		},
		imageTile: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			width: "x2pejg6",
			height: "x1vlo0dj",
			":focus_boxShadow": "x1s2ixkd",
			$$css: !0
		},
		imageThumb: {
			width: "xh8yej3",
			pointerEvents: "x47corl",
			$$css: !0
		},
		dismissableMessage: {
			backgroundColor: "x1280gxy",
			position: "x1n2onr6",
			lineHeight: "x1u7k74",
			$$css: !0
		}
	};
	function S(e) {
		var t = e.imageData, n = e.index, a = e.onDelete, i = e.ref, l = e.removable;
		return m.jsxs("div", babelHelpers.extends({ ref: i }, (c || (c = r("stylex"))).props(v.imageTile, o("WDSMargins.stylex").wdsMargins.marginEnd8, h.marginBottom10), { children: [l && m.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: v.btnDelete,
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("imageNumber", n + 1)]
			),
			testid: "delete-image",
			onClick: a,
			children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
				width: 30,
				height: 30
			})
		}), m.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			mediaData: t.mediaData,
			xstyle: v.imageThumb
		})] }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.handleFilePick, n = e.inputRef;
		return m.jsx("input", {
			ref: n,
			type: "file",
			accept: o("WAWebMimeTypes").IMAGE_MIMES,
			style: { display: "none" },
			onChange: t,
			multiple: !0
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.children, n = g(!1), r = n[0], a = n[1];
		return r ? null : m.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				h.marginInlineEnd10,
				h.padding15,
				h.paddingInlineEnd30,
				v.dismissableMessage
			],
			children: [t, m.jsx("button", {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				onClick: function() {
					a(!0);
				},
				className: "x10l6tqk xwa60dl x1lm9i9x xhslqc4 x1cb1t30 x11uqc5h x1wus5yt",
				children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
					width: 36,
					height: 36
				})
			})]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.onAddFileClick, n = e.ref;
		return m.jsx("div", babelHelpers.extends({ ref: n }, (c || (c = r("stylex"))).props(v.btnAddContainer, v.btnAddContainerRefreshed, o("WDSMargins.stylex").wdsMargins.marginEnd8, h.marginBottom10), { children: m.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: v.btnAdd,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: t,
			testid: "add-image",
			children: [m.jsx(r("WDSIconIcPhotoCamera.react"), {}), m.jsx("div", {
				className: "x2b8uid x14ug900 x1ok221b",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}) }));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.error;
		return m.jsx("div", {
			className: "xh8yej3 x1hshjfz x30a034",
			role: "alert",
			children: t
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.error, c = i.maxImageCount, d = i.onChange, p = i.product, h = f(null), y = g(function() {
			return p.productImageCollection.filter(function(e) {
				return !e.old;
			}).map(function(e) {
				return {
					url: e.mediaUrl,
					mediaData: e.mediaData,
					videoUrl: e.videoUrl
				};
			});
		}), C = y[0], v = y[1], I = function() {
			if (h.current) {
				var e = h.current;
				e.click();
			}
		}, T = function(t) {
			return C.some(function(e) {
				return e.mediaData.filehash === t.filehash;
			}) ? (o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1) : !0;
		}, D = function(t) {
			t.mediaPrep.waitForPrep().then(function(e) {
				if (T(e)) {
					e.mediaStage = o("WAWebMediaTypes").MediaDataStage.RESOLVED, e.renderableUrl = t.fullPreview;
					var n = e.mediaBlob;
					n && !(n instanceof r("WAWebMediaOpaqueData")) && r("WAWebMediaOpaqueData").createFromData(n, n.type).then(function(t) {
						e.mediaBlob = t;
					}), v(function(t) {
						return [].concat(t, [{
							url: null,
							mediaData: e
						}]);
					}), d == null || d([].concat(C, [{
						url: null,
						mediaData: e
					}]));
				}
			});
		}, x = function(t) {
			o("WAWebEventFiles").getFiles(t, o("WAWebMimeTypes").IMAGE_MIMES).then(function(e) {
				var t = c - C.length;
				e.length > t && o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					duration: 6e3,
					action: {
						actionText: r("WAWebFbtCommon")("GOT IT"),
						dismiss: !0,
						theme: "success"
					}
				})), e.slice(0, c - C.length).map(function(e) {
					return {
						file: e,
						filename: e.name,
						mimetype: e.type,
						type: o("WAWebMsgType").MSG_TYPE.PRODUCT
					};
				}).map(function(e) {
					var t, r = new (o("WAWebAttachMediaModel")).AttachMedia({ file: (u || (u = n("Promise"))).resolve(e) });
					return (t = r.processPromise) == null ? void 0 : t.then(function() {
						D(r);
					});
				});
			}), t.target instanceof HTMLInputElement && t.target.value != null && t.target.value !== "" && (t.target.value = "");
		}, $ = function(t) {
			var e = C.map(function(e, t) {
				return babelHelpers.extends({}, e, { mediaIndex: t });
			}), a = r("countWhere")(e, function(e) {
				return e.url == null && e.videoUrl == null;
			});
			o("WAWebQplFlowWrapper").QPL.markerAnnotate(b, { int: { ImagesCount: a } }), o("WAWebQplFlowWrapper").QPL.markerPoint(b, "images_upload_start");
			var i = e.filter(function(e) {
				return e.url == null && e.videoUrl == null;
			}), l = r("compactMap")(i, function(e) {
				var n = e.mediaData, a = n.filehash, i = n.mediaBlob, l = e.mediaIndex;
				return i instanceof r("WAWebMediaOpaqueData") ? o("WAWebMedia").uploadProductImage(i, a, l, t).then(function(t) {
					e.url = t;
				}) : null;
			});
			return (u || (u = n("Promise"))).all(l).then(function() {
				return o("WAWebQplFlowWrapper").QPL.markerPoint(b, "images_upload_end"), e.filter(function(e) {
					return e.videoUrl == null;
				}).map(function(e) {
					return e.url || "";
				});
			});
		};
		_(a, function() {
			return {
				uploadImages: $,
				handleFilePick: x
			};
		});
		var P = function(t) {
			var e = C.filter(function(e) {
				return e !== t;
			});
			v(e), d == null || d(e);
		}, N = C.some(function(e) {
			return e.videoUrl != null;
		}), M = N ? m.jsx(L, { children: s._(
			/*BTDS*/
			""
		) }) : null;
		return m.jsxs("div", {
			className: "x1u7kmwd",
			children: [
				m.jsxs("div", {
					className: "x78zum5 x1a02dak",
					children: [m.jsxs(r("WAWebVelocityTransitionGroup"), {
						appear: !0,
						transitionName: "thumb-scale-flex",
						children: [C.filter(function(e) {
							return e.mediaData;
						}).map(function(e, t) {
							return m.jsx(S, {
								index: t,
								imageData: e,
								onDelete: function() {
									return P(e);
								},
								removable: e.videoUrl == null
							}, e.mediaData.filehash);
						}), C.length < c ? m.jsx(E, { onAddFileClick: I }) : null]
					}), m.jsx(R, {
						inputRef: h,
						handleFilePick: x
					})]
				}),
				M,
				m.jsx(k, { error: l })
			]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = I;
}), 226);

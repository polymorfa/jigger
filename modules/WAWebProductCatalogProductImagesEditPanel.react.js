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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = e.imageData, a = e.index, i = e.onDelete, l = e.ref, u = e.removable, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = (c || (c = r("stylex"))).props(v.imageTile, o("WDSMargins.stylex").wdsMargins.marginEnd8, h.marginBottom10), t[0] = d) : d = t[0];
		var p;
		t[1] !== a || t[2] !== i || t[3] !== u ? (p = u && m.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: v.btnDelete,
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("imageNumber", a + 1)]
			),
			testid: "delete-image",
			onClick: i,
			children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
				width: 30,
				height: 30
			})
		}), t[1] = a, t[2] = i, t[3] = u, t[4] = p) : p = t[4];
		var _;
		t[5] !== n.mediaData ? (_ = m.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			mediaData: n.mediaData,
			xstyle: v.imageThumb
		}), t[5] = n.mediaData, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== l || t[8] !== p || t[9] !== _ ? (f = m.jsxs("div", babelHelpers.extends({ ref: l }, d, { children: [p, _] })), t[7] = l, t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(4), n = e.handleFilePick, r = e.inputRef, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { display: "none" }, t[0] = a) : a = t[0];
		var i;
		return t[1] !== n || t[2] !== r ? (i = m.jsx("input", {
			ref: r,
			type: "file",
			accept: o("WAWebMimeTypes").IMAGE_MIMES,
			style: a,
			onChange: n,
			multiple: !0
		}), t[1] = n, t[2] = r, t[3] = i) : i = t[3], i;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, r = g(!1), a = r[0], i = r[1];
		if (a) return null;
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			h.marginInlineEnd10,
			h.padding15,
			h.paddingInlineEnd30,
			v.dismissableMessage
		], t[0] = l) : l = t[0];
		var u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx("button", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				i(!0);
			},
			className: "x10l6tqk xwa60dl x1lm9i9x xhslqc4 x1cb1t30 x11uqc5h x1wus5yt",
			children: m.jsx(o("WAWebXAltIcon.react").XAltIcon, {
				width: 36,
				height: 36
			})
		}), t[1] = u) : u = t[1];
		var c;
		return t[2] !== n ? (c = m.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: l,
			children: [n, u]
		}), t[2] = n, t[3] = c) : c = t[3], c;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onAddFileClick, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = (c || (c = r("stylex"))).props(v.btnAddContainer, v.btnAddContainerRefreshed, o("WDSMargins.stylex").wdsMargins.marginEnd8, h.marginBottom10), t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var u, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(r("WDSIconIcPhotoCamera.react"), {}), d = m.jsx("div", {
			className: "x2b8uid x14ug900 x1ok221b",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[2] = u, t[3] = d) : (u = t[2], d = t[3]);
		var p;
		t[4] !== n ? (p = m.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: v.btnAdd,
			"aria-label": l,
			onClick: n,
			testid: "add-image",
			children: [u, d]
		}), t[4] = n, t[5] = p) : p = t[5];
		var _;
		return t[6] !== a || t[7] !== p ? (_ = m.jsx("div", babelHelpers.extends({ ref: a }, i, { children: p })), t[6] = a, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(3), n = e.error, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xh8yej3 x1hshjfz x30a034" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = m.jsx("div", babelHelpers.extends({}, r, {
			role: "alert",
			children: n
		})), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function I(t) {
		var a = o("react-compiler-runtime").c(52), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var c = i, d = c.error, p = c.maxImageCount, h = c.onChange, y = c.product, C = f(null), v;
		a[3] !== y.productImageCollection ? (v = function() {
			return y.productImageCollection.filter(F).map(A);
		}, a[3] = y.productImageCollection, a[4] = v) : v = a[4];
		var I = g(v), O = I[0], B = I[1], W;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			if (C.current) {
				var e = C.current;
				e.click();
			}
		}, a[5] = W) : W = a[5];
		var q = W, U;
		a[6] !== O ? (U = function(t) {
			return O.some(function(e) {
				return e.mediaData.filehash === t.filehash;
			}) ? (o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1) : !0;
		}, a[6] = O, a[7] = U) : U = a[7];
		var V = U, H;
		a[8] !== O || a[9] !== h || a[10] !== V ? (H = function(t) {
			t.mediaPrep.waitForPrep().then(function(e) {
				if (V(e)) {
					e.mediaStage = o("WAWebMediaTypes").MediaDataStage.RESOLVED, e.renderableUrl = t.fullPreview;
					var n = e.mediaBlob;
					n && !(n instanceof r("WAWebMediaOpaqueData")) && r("WAWebMediaOpaqueData").createFromData(n, n.type).then(function(t) {
						e.mediaBlob = t;
					}), B(function(t) {
						return [].concat(t, [{
							url: null,
							mediaData: e
						}]);
					}), h == null || h([].concat(O, [{
						url: null,
						mediaData: e
					}]));
				}
			});
		}, a[8] = O, a[9] = h, a[10] = V, a[11] = H) : H = a[11];
		var G = H, z;
		a[12] !== G || a[13] !== O.length || a[14] !== p ? (z = function(t) {
			o("WAWebEventFiles").getFiles(t, o("WAWebMimeTypes").IMAGE_MIMES).then(function(e) {
				var t = p - O.length;
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
				})), e.slice(0, p - O.length).map(w).map(function(e) {
					var t, r = new (o("WAWebAttachMediaModel")).AttachMedia({ file: (u || (u = n("Promise"))).resolve(e) });
					return (t = r.processPromise) == null ? void 0 : t.then(function() {
						G(r);
					});
				});
			}), t.target instanceof HTMLInputElement && t.target.value != null && t.target.value !== "" && (t.target.value = "");
		}, a[12] = G, a[13] = O.length, a[14] = p, a[15] = z) : z = a[15];
		var j = z, K;
		a[16] !== O ? (K = function(t) {
			var e = O.map(M), a = r("countWhere")(e, N);
			o("WAWebQplFlowWrapper").QPL.markerAnnotate(b, { int: { ImagesCount: a } }), o("WAWebQplFlowWrapper").QPL.markerPoint(b, "images_upload_start");
			var i = e.filter(P), l = r("compactMap")(i, function(e) {
				var n = e.mediaData, a = e.mediaIndex, i = n.filehash, l = n.mediaBlob;
				return l instanceof r("WAWebMediaOpaqueData") ? o("WAWebMedia").uploadProductImage(l, i, a, t).then(function(t) {
					e.url = t;
				}) : null;
			});
			return (u || (u = n("Promise"))).all(l).then(function() {
				return o("WAWebQplFlowWrapper").QPL.markerPoint(b, "images_upload_end"), e.filter($).map(x);
			});
		}, a[16] = O, a[17] = K) : K = a[17];
		var Q = K, X;
		a[18] !== j || a[19] !== Q ? (X = function() {
			return {
				uploadImages: Q,
				handleFilePick: j
			};
		}, a[18] = j, a[19] = Q, a[20] = X) : X = a[20], _(l, X);
		var Y;
		a[21] !== O || a[22] !== h ? (Y = function(t) {
			var e = O.filter(function(e) {
				return e !== t;
			});
			B(e), h == null || h(e);
		}, a[21] = O, a[22] = h, a[23] = Y) : Y = a[23];
		var J = Y, Z;
		a[24] !== O ? (Z = O.some(D), a[24] = O, a[25] = Z) : Z = a[25];
		var ee = Z, te;
		a[26] !== ee ? (te = ee ? m.jsx(L, { children: s._(
			/*BTDS*/
			""
		) }) : null, a[26] = ee, a[27] = te) : te = a[27];
		var ne = te, re, oe;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (re = { className: "x1u7kmwd" }, oe = { className: "x78zum5 x1a02dak" }, a[28] = re, a[29] = oe) : (re = a[28], oe = a[29]);
		var ae;
		if (a[30] !== J || a[31] !== O) {
			var ie;
			a[33] !== J ? (ie = function(t, n) {
				return m.jsx(S, {
					index: n,
					imageData: t,
					onDelete: function() {
						return J(t);
					},
					removable: t.videoUrl == null
				}, t.mediaData.filehash);
			}, a[33] = J, a[34] = ie) : ie = a[34], ae = O.filter(T).map(ie), a[30] = J, a[31] = O, a[32] = ae;
		} else ae = a[32];
		var le;
		a[35] !== O.length || a[36] !== p ? (le = O.length < p ? m.jsx(E, { onAddFileClick: q }) : null, a[35] = O.length, a[36] = p, a[37] = le) : le = a[37];
		var se;
		a[38] !== ae || a[39] !== le ? (se = m.jsxs(r("WAWebVelocityTransitionGroup"), {
			appear: !0,
			transitionName: "thumb-scale-flex",
			children: [ae, le]
		}), a[38] = ae, a[39] = le, a[40] = se) : se = a[40];
		var ue;
		a[41] !== j ? (ue = m.jsx(R, {
			inputRef: C,
			handleFilePick: j
		}), a[41] = j, a[42] = ue) : ue = a[42];
		var ce;
		a[43] !== se || a[44] !== ue ? (ce = m.jsxs("div", babelHelpers.extends({}, oe, { children: [se, ue] })), a[43] = se, a[44] = ue, a[45] = ce) : ce = a[45];
		var de;
		a[46] !== d ? (de = m.jsx(k, { error: d }), a[46] = d, a[47] = de) : de = a[47];
		var me;
		return a[48] !== ce || a[49] !== de || a[50] !== ne ? (me = m.jsxs("div", babelHelpers.extends({}, re, { children: [
			ce,
			ne,
			de
		] })), a[48] = ce, a[49] = de, a[50] = ne, a[51] = me) : me = a[51], me;
	}
	function T(e) {
		return e.mediaData;
	}
	function D(e) {
		return e.videoUrl != null;
	}
	function x(e) {
		return e.url || "";
	}
	function $(e) {
		return e.videoUrl == null;
	}
	function P(e) {
		return e.url == null && e.videoUrl == null;
	}
	function N(e) {
		return e.url == null && e.videoUrl == null;
	}
	function M(e, t) {
		return babelHelpers.extends({}, e, { mediaIndex: t });
	}
	function w(e) {
		return {
			file: e,
			filename: e.name,
			mimetype: e.type,
			type: o("WAWebMsgType").MSG_TYPE.PRODUCT
		};
	}
	function A(e) {
		return {
			url: e.mediaUrl,
			mediaData: e.mediaData,
			videoUrl: e.videoUrl
		};
	}
	function F(e) {
		return !e.old;
	}
	l.default = I;
}), 226);

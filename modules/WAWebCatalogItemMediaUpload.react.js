__d("WAWebCatalogItemMediaUpload.react", [
	"Promise",
	"WAWebBusinessProfileLabels",
	"WAWebCryptoCalculateFilehash",
	"WAWebFilePicker.react",
	"WAWebMedia",
	"WAWebMediaOpaqueData",
	"WAWebUnstyledButton.react",
	"WAWebXAltIcon.react",
	"WDSIconIcPhotoCamera.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState, f = "128px", g = "131px", h = 10, y = {
		addButtonText: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		deleteButton: {
			color: "x14ug900",
			filter: "xjjae95",
			insetInlineEnd: "x1lm9i9x",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x1pdr0v7",
			zIndex: "x11uqc5h",
			$$css: !0
		}
	};
	function C(t) {
		var a = o("react-compiler-runtime").c(37), i = t.error, l = t.maxImageCount, s = t.onChange, c = t.ref, f = l === void 0 ? h : l, g;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [], a[0] = g) : g = a[0];
		var C = _(g), v = C[0], k = C[1], I = p(null), T = p(null), D, x;
		a[1] !== v ? (D = function() {
			return (function() {
				v.forEach(E);
			});
		}, x = [v], a[1] = v, a[2] = D, a[3] = x) : (D = a[2], x = a[3]), d(D, x);
		var $;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			var e;
			(e = I.current) == null || e.open();
		}, a[4] = $) : $ = a[4];
		var P = $, N;
		a[5] !== v || a[6] !== f || a[7] !== s ? (N = function(t) {
			var e = Array.from(t.target.files || []);
			if (e.length !== 0) {
				var n = f - v.length, r = e.slice(0, n), o = r.map(L), a = [].concat(v, o);
				k(a), s(a.map(R));
			}
		}, a[5] = v, a[6] = f, a[7] = s, a[8] = N) : N = a[8];
		var M = N, w;
		a[9] !== v || a[10] !== s ? (w = function(t) {
			var e = v[t];
			e != null && URL.revokeObjectURL(e.url);
			var n = v.filter(function(e, n) {
				return n !== t;
			});
			k(n), s(n.map(S));
		}, a[9] = v, a[10] = s, a[11] = w) : w = a[11];
		var A = w, F;
		a[12] !== v ? (F = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = v.map(b);
				return (e || (e = n("Promise"))).all(t);
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), a[12] = v, a[13] = F) : F = a[13];
		var O = F, B;
		a[14] !== O ? (B = function() {
			return {
				focus: function() {
					var e;
					(e = T.current) == null || e.focus();
				},
				uploadImages: O
			};
		}, a[14] = O, a[15] = B) : B = a[15], m(c, B);
		var W;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x78zum5 x1a02dak x1qvou4u x1s70e7g" }, a[16] = W) : W = a[16];
		var q;
		if (a[17] !== A || a[18] !== v) {
			var U;
			a[20] !== A ? (U = function(t, n) {
				return u.jsxs("div", {
					className: "xbrszos xea3l6g x18isctg x2q3nzr x1rg5ohu x1vlo0dj x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
					children: [u.jsx("img", {
						alt: "Catalog item " + (n + 1),
						src: t.url,
						className: "x5yr21d xl1xv1r xh8yej3"
					}), u.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: y.deleteButton,
						"aria-label": o("WAWebBusinessProfileLabels").getRemoveImageAriaLabel(n + 1),
						onClick: function() {
							return A(n);
						},
						children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
							width: 30,
							height: 30
						})
					})]
				}, n);
			}, a[20] = A, a[21] = U) : U = a[21], q = v.map(U), a[17] = A, a[18] = v, a[19] = q;
		} else q = a[19];
		var V;
		a[22] !== i || a[23] !== v.length || a[24] !== f ? (V = v.length < f && u.jsxs("button", {
			ref: T,
			type: "button",
			onClick: P,
			"data-testid": "biz_catalog_item_add_image_button",
			className: "x6s0dn4 x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x1vlo0dj xl56j7k x2pejg6",
			"data-invalid": i != null ? "true" : void 0,
			"aria-describedby": i != null ? "biz_catalog_media_upload_error" : void 0,
			children: [u.jsx(r("WDSIconIcPhotoCamera.react"), {}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body3Emphasized",
				xstyle: y.addButtonText,
				children: o("WAWebBusinessProfileLabels").getAddImagesButtonLabel()
			})]
		}), a[22] = i, a[23] = v.length, a[24] = f, a[25] = V) : V = a[25];
		var H;
		a[26] !== q || a[27] !== V ? (H = u.jsxs("div", babelHelpers.extends({}, W, { children: [q, V] })), a[26] = q, a[27] = V, a[28] = H) : H = a[28];
		var G;
		a[29] !== M ? (G = u.jsx(r("WAWebFilePicker.react"), {
			ref: I,
			mimes: "image/*",
			onChange: M,
			multiple: !0
		}), a[29] = M, a[30] = G) : G = a[30];
		var z;
		a[31] !== i ? (z = i != null && u.jsx("div", {
			id: "biz_catalog_media_upload_error",
			"data-testid": "biz_catalog_media_upload_error",
			className: "x30a034 x1pg5gke xav9cv8 x1hshjfz xh8yej3",
			role: "alert",
			children: i
		}), a[31] = i, a[32] = z) : z = a[32];
		var j;
		return a[33] !== H || a[34] !== G || a[35] !== z ? (j = u.jsxs("div", {
			"data-testid": "biz_catalog_media_upload_container",
			children: [
				H,
				G,
				z
			]
		}), a[33] = H, a[34] = G, a[35] = z, a[36] = j) : j = a[36], j;
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			try {
				var n = yield r("WAWebMediaOpaqueData").createFromData(e.file, e.file.type), a = yield o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(e.file), i = yield o("WAWebMedia").uploadProductImage(n, a, t, !0);
				return i;
			} catch (e) {
				var l = e, s = "Unknown error";
				throw l instanceof Error ? s = l.message : typeof l == "string" && (s = l), r("err")("Failed to upload image " + (t + 1) + ": " + s);
			}
		}), v.apply(this, arguments);
	}
	function S(e) {
		return e.file;
	}
	function R(e) {
		return e.file;
	}
	function L(e) {
		return {
			file: e,
			url: URL.createObjectURL(e)
		};
	}
	function E(e) {
		URL.revokeObjectURL(e.url);
	}
	l.default = C;
}), 98);

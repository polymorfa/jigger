__d("WAWebCatalogItemMediaUpload.react", [
	"WAWebBusinessProfileLabels",
	"WAWebCryptoCalculateFilehash",
	"WAWebFilePicker.react",
	"WAWebMedia",
	"WAWebMediaOpaqueData",
	"WAWebUnstyledButton.react",
	"WAWebXAltIcon.react",
	"WDSIconIcPhotoCamera.react",
	"WDSText.react",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useImperativeHandle, m = u.useRef, p = u.useState, _ = "128px", f = "131px", g = 10, h = {
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
	function y(e) {
		var t = o("react-compiler-runtime").c(37), n = e.error, a = e.maxImageCount, i = e.onChange, l = e.ref, u = a === void 0 ? g : a, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], t[0] = _) : _ = t[0];
		var f = p(_), y = f[0], L = f[1], E = m(null), k = m(null), I, T;
		t[1] !== y ? (I = function() {
			return (function() {
				y.forEach(R);
			});
		}, T = [y], t[1] = y, t[2] = I, t[3] = T) : (I = t[2], T = t[3]), c(I, T);
		var D;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			var e;
			(e = E.current) == null || e.open();
		}, t[4] = D) : D = t[4];
		var x = D, $;
		t[5] !== y || t[6] !== u || t[7] !== i ? ($ = function(t) {
			var e = Array.from(t.target.files || []);
			if (e.length !== 0) {
				var n = u - y.length, r = e.slice(0, n), o = r.map(S), a = [].concat(y, o);
				L(a), i(a.map(v));
			}
		}, t[5] = y, t[6] = u, t[7] = i, t[8] = $) : $ = t[8];
		var P = $, N;
		t[9] !== y || t[10] !== i ? (N = function(t) {
			var e = y[t];
			e != null && URL.revokeObjectURL(e.url);
			var n = y.filter(function(e, n) {
				return n !== t;
			});
			L(n), i(n.map(b));
		}, t[9] = y, t[10] = i, t[11] = N) : N = t[11];
		var M = N, w;
		t[12] !== y ? (w = async function() {
			var e = y.map(C);
			return Promise.all(e);
		}, t[12] = y, t[13] = w) : w = t[13];
		var A = w, F;
		t[14] !== A ? (F = function() {
			return {
				focus: function() {
					var e;
					(e = k.current) == null || e.focus();
				},
				uploadImages: A
			};
		}, t[14] = A, t[15] = F) : F = t[15], d(l, F);
		var O;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x78zum5 x1a02dak x1qvou4u x1s70e7g" }, t[16] = O) : O = t[16];
		var B;
		if (t[17] !== M || t[18] !== y) {
			var W;
			t[20] !== M ? (W = function(t, n) {
				return s.jsxs("div", {
					className: "xbrszos xea3l6g x18isctg x2q3nzr x1rg5ohu x1vlo0dj x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
					children: [s.jsx("img", {
						alt: "Catalog item " + (n + 1),
						src: t.url,
						className: "x5yr21d xl1xv1r xh8yej3"
					}), s.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: h.deleteButton,
						"aria-label": o("WAWebBusinessProfileLabels").getRemoveImageAriaLabel(n + 1),
						onClick: function() {
							return M(n);
						},
						children: s.jsx(o("WAWebXAltIcon.react").XAltIcon, {
							width: 30,
							height: 30
						})
					})]
				}, n);
			}, t[20] = M, t[21] = W) : W = t[21], B = y.map(W), t[17] = M, t[18] = y, t[19] = B;
		} else B = t[19];
		var q;
		t[22] !== n || t[23] !== y.length || t[24] !== u ? (q = y.length < u && s.jsxs("button", {
			ref: k,
			type: "button",
			onClick: x,
			"data-testid": "biz_catalog_item_add_image_button",
			className: "x6s0dn4 x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x1vlo0dj xl56j7k x2pejg6",
			"data-invalid": n != null ? "true" : void 0,
			"aria-describedby": n != null ? "biz_catalog_media_upload_error" : void 0,
			children: [s.jsx(r("WDSIconIcPhotoCamera.react"), {}), s.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body3Emphasized",
				xstyle: h.addButtonText,
				children: o("WAWebBusinessProfileLabels").getAddImagesButtonLabel()
			})]
		}), t[22] = n, t[23] = y.length, t[24] = u, t[25] = q) : q = t[25];
		var U;
		t[26] !== B || t[27] !== q ? (U = s.jsxs("div", babelHelpers.extends({}, O, { children: [B, q] })), t[26] = B, t[27] = q, t[28] = U) : U = t[28];
		var V;
		t[29] !== P ? (V = s.jsx(r("WAWebFilePicker.react"), {
			ref: E,
			mimes: "image/*",
			onChange: P,
			multiple: !0
		}), t[29] = P, t[30] = V) : V = t[30];
		var H;
		t[31] !== n ? (H = n != null && s.jsx("div", {
			id: "biz_catalog_media_upload_error",
			"data-testid": "biz_catalog_media_upload_error",
			className: "x30a034 x1pg5gke xav9cv8 x1hshjfz xh8yej3",
			role: "alert",
			children: n
		}), t[31] = n, t[32] = H) : H = t[32];
		var G;
		return t[33] !== U || t[34] !== V || t[35] !== H ? (G = s.jsxs("div", {
			"data-testid": "biz_catalog_media_upload_container",
			children: [
				U,
				V,
				H
			]
		}), t[33] = U, t[34] = V, t[35] = H, t[36] = G) : G = t[36], G;
	}
	async function C(e, t) {
		try {
			var n = await r("WAWebMediaOpaqueData").createFromData(e.file, e.file.type), a = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(e.file), i = await o("WAWebMedia").uploadProductImage(n, a, t, !0);
			return i;
		} catch (e) {
			var l = e, s = "Unknown error";
			throw l instanceof Error ? s = l.message : typeof l == "string" && (s = l), r("err")("Failed to upload image " + (t + 1) + ": " + s);
		}
	}
	function b(e) {
		return e.file;
	}
	function v(e) {
		return e.file;
	}
	function S(e) {
		return {
			file: e,
			url: URL.createObjectURL(e)
		};
	}
	function R(e) {
		URL.revokeObjectURL(e.url);
	}
	l.default = y;
}), 98);

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
	"react"
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
		var t = e.error, n = e.maxImageCount, a = n === void 0 ? g : n, i = e.onChange, l = e.ref, u = p([]), _ = u[0], f = u[1], y = m(null), C = m(null);
		c(function() {
			return function() {
				_.forEach(function(e) {
					URL.revokeObjectURL(e.url);
				});
			};
		}, [_]);
		var b = function() {
			var e;
			(e = y.current) == null || e.open();
		}, v = function(t) {
			var e = Array.from(t.target.files || []);
			if (e.length !== 0) {
				var n = a - _.length, r = e.slice(0, n), o = r.map(function(e) {
					return {
						file: e,
						url: URL.createObjectURL(e)
					};
				}), l = [].concat(_, o);
				f(l), i(l.map(function(e) {
					return e.file;
				}));
			}
		}, S = function(t) {
			var e = _[t];
			e != null && URL.revokeObjectURL(e.url);
			var n = _.filter(function(e, n) {
				return n !== t;
			});
			f(n), i(n.map(function(e) {
				return e.file;
			}));
		}, R = async function() {
			var e = _.map(async function(e, t) {
				try {
					var n = await r("WAWebMediaOpaqueData").createFromData(e.file, e.file.type), a = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(e.file), i = await o("WAWebMedia").uploadProductImage(n, a, t, !0);
					return i;
				} catch (e) {
					var l = "Unknown error";
					throw e instanceof Error ? l = e.message : typeof e == "string" && (l = e), r("err")("Failed to upload image " + (t + 1) + ": " + l);
				}
			});
			return Promise.all(e);
		};
		return d(l, function() {
			return {
				focus: function() {
					var e;
					(e = C.current) == null || e.focus();
				},
				uploadImages: R
			};
		}), s.jsxs("div", {
			"data-testid": "biz_catalog_media_upload_container",
			children: [
				s.jsxs("div", {
					className: "x78zum5 x1a02dak x1qvou4u x1s70e7g",
					children: [_.map(function(e, t) {
						return s.jsxs("div", {
							className: "xbrszos xea3l6g x18isctg x2q3nzr x1rg5ohu x1vlo0dj x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
							children: [s.jsx("img", {
								alt: "Catalog item " + (t + 1),
								src: e.url,
								className: "x5yr21d xl1xv1r xh8yej3"
							}), s.jsx(r("WAWebUnstyledButton.react"), {
								xstyle: h.deleteButton,
								"aria-label": o("WAWebBusinessProfileLabels").getRemoveImageAriaLabel(t + 1),
								onClick: function() {
									return S(t);
								},
								children: s.jsx(o("WAWebXAltIcon.react").XAltIcon, {
									width: 30,
									height: 30
								})
							})]
						}, t);
					}), _.length < a && s.jsxs("button", {
						ref: C,
						type: "button",
						onClick: b,
						"data-testid": "biz_catalog_item_add_image_button",
						className: "x6s0dn4 x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x1vlo0dj xl56j7k x2pejg6",
						"data-invalid": t != null ? "true" : void 0,
						"aria-describedby": t != null ? "biz_catalog_media_upload_error" : void 0,
						children: [s.jsx(r("WDSIconIcPhotoCamera.react"), {}), s.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body3Emphasized",
							xstyle: h.addButtonText,
							children: o("WAWebBusinessProfileLabels").getAddImagesButtonLabel()
						})]
					})]
				}),
				s.jsx(r("WAWebFilePicker.react"), {
					ref: y,
					mimes: "image/*",
					onChange: v,
					multiple: !0
				}),
				t != null && s.jsx("div", {
					id: "biz_catalog_media_upload_error",
					"data-testid": "biz_catalog_media_upload_error",
					className: "x30a034 x1pg5gke xav9cv8 x1hshjfz xh8yej3",
					role: "alert",
					children: t
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 98);

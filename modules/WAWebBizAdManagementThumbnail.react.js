__d("WAWebBizAdManagementThumbnail.react", [
	"FBLogger",
	"WAWebBizBoostingStatusUtils",
	"WAWebImg.react",
	"WAWebProfilePicThumbCollection",
	"WAWebUserPrefsMeUser",
	"bx",
	"getErrorSafe",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = 48, m = r("bx")("78840"), p = r("bx").getURL(m), _ = { thumbnail: {
		borderStartStartRadius: "xbrszos",
		borderStartEndRadius: "xea3l6g",
		borderEndEndRadius: "x18isctg",
		borderEndStartRadius: "x2q3nzr",
		height: "xsdox4t",
		objectFit: "xl1xv1r",
		width: "x1useyqa",
		$$css: !0
	} };
	function f(t) {
		var n, a = t.boostingStatus, i = t.size, l = i === void 0 ? d : i, s = t.thumbnailUrl, m = t.thumbnailXStyle, f = c(function() {
			try {
				var e, t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(t);
				return (e = n == null ? void 0 : n.img) != null ? e : n == null ? void 0 : n.imgFull;
			} catch (e) {
				return r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).warn("Failed to get profile pic thumbnail for ad management"), null;
			}
		}, []), g = (n = s != null ? s : f) != null ? n : p, h = o("WAWebBizBoostingStatusUtils").getAdStatusIcon(a);
		return u.jsxs("div", {
			className: "xsdox4t x1n2onr6 x1useyqa",
			style: {
				height: l,
				width: l
			},
			children: [u.jsx(r("WAWebImg.react"), {
				alt: "",
				className: (e || (e = r("stylex")))(_.thumbnail, m),
				src: g,
				style: {
					height: l,
					width: l
				}
			}), h != null ? u.jsx("div", {
				className: "x1c7u0tx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xlup9mm x7hj1vm x10l6tqk x1v4kod4 x1kky2od",
				children: u.jsx(h.Icon, {
					colorName: h.colorName,
					height: 16,
					width: 16
				})
			}) : null]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);

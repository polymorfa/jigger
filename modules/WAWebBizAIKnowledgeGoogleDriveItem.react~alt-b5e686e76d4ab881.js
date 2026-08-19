__d("WAWebBizAIKnowledgeGoogleDriveItem.react", [
	"fbt",
	"WAWebBizAIKnowledgeRow.react",
	"WAWebClock",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = { icon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xxk0z11",
		width: "xvy4d1p",
		$$css: !0
	} }, f = 6e4;
	function g(e) {
		var t, n = e.deleting, o = n === void 0 ? !1 : n, a = e.file, i = e.index, l = e.onDelete, s = e.testidPrefix, c = s === void 0 ? "knowledge-gdrive-item" : s, d = a.has_thumbnail === !0 ? (t = a.thumbnail_link) != null ? t : a.cdn_url : null, m = a.sync_status === "SYNC_FAILED", p = h(a.sync_status === "SYNCED" && a.synced_at != null), _ = C(a, p);
		return u.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: a.file_name,
			deleting: o,
			fallbackIcon: y(a.mime_type),
			index: i,
			label: a.file_name,
			onDelete: l,
			secondaryLine: _ != null ? {
				isError: m,
				node: _
			} : null,
			testidPrefix: c,
			thumbnailUrl: d
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = p(function() {
			return Date.now();
		}), n = t[0], o = t[1];
		r("useWAWebInterval")(function() {
			return o(Date.now());
		}, f, { immediate: e });
		var a = m(e);
		return d(function() {
			e && !a.current && o(Date.now()), a.current = e;
		}, [e]), n;
	}
	function y(e) {
		return e.startsWith("image/") ? u.jsx(r("WDSIconIcImage.react"), { iconXstyle: _.icon }) : u.jsx(r("WDSIconIcDescription.react"), { iconXstyle: _.icon });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		return e.sync_status === "SYNCING" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNC_FAILED" && e.sync_failure_reason === "size_limit_exceeded" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNC_FAILED" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNCED" ? b(e, t) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.sync_status);
		})();
	}
	function b(e, t) {
		var n = e.synced_at;
		if (n == null) return null;
		var r = Math.max(0, Math.floor(t / 1e3) - n);
		return r < 60 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("time", o("WAWebClock").Clock.relativeShortStr(r))]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = g;
}), 226);

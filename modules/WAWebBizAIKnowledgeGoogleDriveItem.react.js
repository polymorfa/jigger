__d("WAWebBizAIKnowledgeGoogleDriveItem.react", [
	"fbt",
	"WAWebBizAIKnowledgeRow.react",
	"WAWebClock",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"react",
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(17), a = e.deleting, i = e.file, l = e.index, s = e.onDelete, c = e.testidPrefix, d = a === void 0 ? !1 : a, m = c === void 0 ? "knowledge-gdrive-item" : c, p = i.has_thumbnail === !0 ? (t = i.thumbnail_link) != null ? t : i.cdn_url : null, _ = i.sync_status === "SYNC_FAILED", f = h(i.sync_status === "SYNCED" && i.synced_at != null), g;
		n[0] !== i || n[1] !== f ? (g = b(i, f), n[0] = i, n[1] = f, n[2] = g) : g = n[2];
		var y = g, v = i.file_name, S;
		n[3] !== i.mime_type ? (S = C(i.mime_type), n[3] = i.mime_type, n[4] = S) : S = n[4];
		var R;
		n[5] !== _ || n[6] !== y ? (R = y != null ? {
			isError: _,
			node: y
		} : null, n[5] = _, n[6] = y, n[7] = R) : R = n[7];
		var L;
		return n[8] !== d || n[9] !== i.file_name || n[10] !== l || n[11] !== s || n[12] !== S || n[13] !== R || n[14] !== m || n[15] !== p ? (L = u.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: v,
			deleting: d,
			fallbackIcon: S,
			index: l,
			label: i.file_name,
			onDelete: s,
			secondaryLine: R,
			testidPrefix: m,
			thumbnailUrl: p
		}), n[8] = d, n[9] = i.file_name, n[10] = l, n[11] = s, n[12] = S, n[13] = R, n[14] = m, n[15] = p, n[16] = L) : L = n[16], L;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(6), n = p(y), a = n[0], i = n[1], l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			return i(Date.now());
		}, t[0] = l) : l = t[0];
		var s;
		t[1] !== e ? (s = { immediate: e }, t[1] = e, t[2] = s) : s = t[2], r("useWAWebInterval")(l, f, s);
		var u = m(e), c, _;
		return t[3] !== e ? (c = function() {
			e && !u.current && i(Date.now()), u.current = e;
		}, _ = [e], t[3] = e, t[4] = c, t[5] = _) : (c = t[4], _ = t[5]), d(c, _), a;
	}
	function y() {
		return Date.now();
	}
	function C(e) {
		return e.startsWith("image/") ? u.jsx(r("WDSIconIcImage.react"), { iconXstyle: _.icon }) : u.jsx(r("WDSIconIcDescription.react"), { iconXstyle: _.icon });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t) {
		return e.sync_status === "SYNCING" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNC_FAILED" && e.sync_failure_reason === "size_limit_exceeded" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNC_FAILED" ? s._(
			/*BTDS*/
			""
		) : e.sync_status === "SYNCED" ? v(e, t) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.sync_status);
		})();
	}
	function v(e, t) {
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
	v.displayName = v.name + " [from " + i.id + "]", l.default = g;
}), 226);

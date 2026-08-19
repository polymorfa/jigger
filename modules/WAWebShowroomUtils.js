__d("WAWebShowroomUtils", [
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactModel",
	"WAWebGroupType",
	"WAWebMsgCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"dompurify",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = r("dompurify").sanitize(e);
		return { __html: t };
	}
	function c(e) {
		var t = e.split("\n"), n = t.map(function(e) {
			return e.trim();
		}).filter(function(e) {
			return e !== "";
		}).map(function(e, t) {
			return s.jsx("p", { dangerouslySetInnerHTML: u(e) }, t);
		});
		return n;
	}
	var d = {
		padding: 0,
		height: 500,
		width: 360
	}, m = {
		padding: 0,
		height: 300,
		width: 360
	}, p = {
		padding: 0,
		minWidth: 420
	}, _ = {
		padding: 0,
		flex: "1 1 60%",
		height: 500
	}, f = { padding: 10 };
	function g() {
		var e = o("WAWebChatCollection").ChatCollection.toArray();
		return e[Math.floor(Math.random() * e.length)];
	}
	function h() {
		var e = o("WAWebMsgCollection").MsgCollection.toArray();
		return e[Math.floor(Math.random() * e.length)];
	}
	function y() {
		var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {});
		if (e.length === 0) {
			var t = o("WAWebWidFactory").createUserWidOrThrow("15551234567@c.us"), n = new (r("WAWebContactModel"))({
				id: t,
				name: "Showroom Contact"
			});
			return o("WAWebContactCollection").ContactCollection.add(n), n;
		}
		var a = e[Math.floor(Math.random() * e.length)];
		return r("nullthrows")(a, "No contacts available");
	}
	function C() {
		return o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {});
	}
	function b() {
		var e = g();
		return e.id;
	}
	function v() {
		var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {}), t = e.filter(function(e) {
			return e.getProfilePicThumb().img;
		});
		if (t.length) return t[Math.floor(Math.random() * t.length)].id;
		if (e.length) return e[0].id;
		var n = o("WAWebWidFactory").createUserWidOrThrow("15551234567@c.us");
		return o("WAWebContactCollection").ContactCollection.add(new (r("WAWebContactModel"))({
			id: n,
			name: "Showroom Contact"
		})), n;
	}
	function S() {
		var e, t = v();
		return t ? (e = o("WAWebContactCollection").ContactCollection.get(t)) == null ? void 0 : e.profilePicThumb.imgFull : null;
	}
	function R() {
		var e = o("WAWebChatCollection").ChatCollection.filter(function(e) {
			return o("WAWebChatGetters").getIsGroup(e);
		});
		return e.length ? e[Math.floor(Math.random() * e.length)] : null;
	}
	function L() {
		var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		return o("WAWebChatCollection").ChatCollection.findFirst(function(t) {
			var n, r, a;
			return ((n = t.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && ((r = t.groupMetadata) == null ? void 0 : r.owner) != null && ((a = t.groupMetadata) == null || (a = a.owner) == null ? void 0 : a.equals(e));
		});
	}
	function E() {
		var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		return o("WAWebChatCollection").ChatCollection.findFirst(function(t) {
			var n, r, a;
			return ((n = t.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY && ((r = t.groupMetadata) == null ? void 0 : r.owner) != null && !((a = t.groupMetadata) != null && (a = a.owner) != null && a.equals(e));
		});
	}
	function k() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx("div", {
			className: "x9f619 x78zum5 x6s0dn4 xl56j7k x5yr21d x1f6kntn x1o43s8z x889kno x2vl965 x1a8lsjc xe2zdcy",
			children: "block"
		}), e[0] = t) : t = e[0], t;
	}
	function I(e) {
		alert(e);
	}
	function T(e) {
		window.confirm(e);
	}
	l.formatText = c, l.bigPreview = d, l.mediumPreview = m, l.widePreview = p, l.XLTallPreview = _, l.compactPreview = f, l.getRandomChat = g, l.getRandomMsg = h, l.getRandomContact = y, l.getFilteredContacts = C, l.getRandomWid = b, l.getRandomContactWithImage = v, l.maybeGetProfilePicOfRandomContact = S, l.getRandomGroup = R, l.getCommunityCreatedByMe = L, l.getCommunityCreatedByAnotherUser = E, l.Placeholder = k, l.showroomAlert = I, l.showroomConfirm = T;
}), 98);

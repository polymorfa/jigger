__d("WAWebDebugParticipantsListModal.react", [
	"WAWebApiContact",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebWidFactory",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.participants;
		return s.jsx(r("WDSMenuItem.react"), {
			title: "Show participants",
			onPress: function() {
				return o("WAWebModalManager").ModalManager.open(s.jsx(c, { participants: t }));
			},
			testid: "mi-show-participants"
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.participants, n = t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e.id);
		}), r = n.filter(function(e) {
			return !e.isLid();
		}), a = n.filter(function(e) {
			return e.isLid();
		});
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: "Debug Participants List",
			okText: "Close",
			onOK: o("WAWebModalManager").closeModalManager,
			children: s.jsxs("div", {
				className: "x1jn0hjm x14aock7 x1rife3k",
				children: [
					s.jsxs("h2", { children: [
						"Phone JIDs (",
						r.length,
						")"
					] }),
					r.map(function(e, t) {
						return s.jsx("div", { children: e.toString() }, t);
					}),
					s.jsx("br", {}),
					s.jsxs("h2", { children: [
						"LID JIDs (",
						a.length,
						")"
					] }),
					a.map(function(e, t) {
						return s.jsx("div", { children: d(e) }, t);
					})
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t, n, r = (t = (n = o("WAWebApiContact").getPhoneNumber(e)) == null ? void 0 : n.toString()) != null ? t : "N/A";
		return s.jsxs(s.Fragment, { children: [s.jsx("span", {
			className: "x1rg5ohu x1oysuqx",
			children: e.toString()
		}), s.jsxs("span", { children: ["phone: ", r] })] });
	}
	l.default = u;
}), 98);

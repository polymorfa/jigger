__d("MAWEncryptionKeysForUserView.react", [
	"fbt",
	"BaseMiddot.react",
	"EBBridgedAPI",
	"FDSRelativeTimestamp.react",
	"I64",
	"MAWBridgeSendAndReceive",
	"MAWEndToEndEncryptionKeysIdentityKeyTextArea.react",
	"MAWSignalUtils",
	"MWVerticalRhythm",
	"MWXDialogHeader.react",
	"MWXDialogPage.react",
	"MWXText.react",
	"Promise",
	"WALogger",
	"WMIWABridgeApi",
	"formatDate",
	"gkx",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"usePopPage"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = c || (c = o("react")), p = c, _ = p.useEffect, f = p.useState;
	function g(e) {
		var t = o("react-compiler-runtime").c(2), n = e.currentUserDevices, r;
		return t[0] !== n ? (r = n.map(h), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function h(e, t) {
		var n, a = (n = r("gkx")("20879")) != null ? n : !1, i = e.model, l = i == null ? null : i, u = e.lastSeen, c = u == null ? null : m.jsxs(m.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			" ",
			m.jsx("span", { children: m.jsx(r("FDSRelativeTimestamp.react"), {
				date: u,
				format: "normal"
			}) })
		] }), d = l !== null && c !== null ? m.jsx(r("BaseMiddot.react"), {}) : null;
		return m.jsxs("div", { children: [
			m.jsx(r("MWVerticalRhythm"), { height: 24 }),
			m.jsx(r("MWXText.react"), {
				isSemanticHeading: !0,
				type: "headlineEmphasized4",
				children: a && e.isCurrentDevice ? s._(
					/*BTDS*/
					""
				) : m.jsxs(m.Fragment, { children: [
					l,
					d,
					c
				] })
			}),
			m.jsx(r("MWVerticalRhythm"), { height: 12 }),
			m.jsx(r("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react"), { identityKey: o("MAWSignalUtils").getHexRepresentation(e.identityKey) })
		] }, String(t));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = o("react-compiler-runtime").c(2), n = e.devicesInfo, r;
		return t[0] !== n ? (r = n.map(C), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function C(e, t) {
		var n, o = e.firstSeenTs, a = o == null ? "" : r("formatDate")(o, "M d, Y"), i = (n = r("gkx")("20879")) != null ? n : !1, l = s._(
			/*BTDS*/
			""
		), u = s._(
			/*BTDS*/
			"",
			[s._param("device first seen timestamp", a)]
		);
		return m.jsxs("div", { children: [
			m.jsx(r("MWVerticalRhythm"), { height: 24 }),
			m.jsx(r("MWXText.react"), {
				isSemanticHeading: !0,
				type: "headlineEmphasized4",
				children: i ? o ? u : l : u
			}),
			m.jsx(r("MWVerticalRhythm"), { height: 12 }),
			m.jsx(r("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react"), { identityKey: e.identityKey }, String(t))
		] }, String(t));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = o("react-compiler-runtime").c(13), n = e.commaSeparated, a = e.created, i = e.storageKey, l;
		if (t[0] !== n || t[1] !== a) {
			var u = a != null ? r("formatDate")(a, "M d, Y") : null, c;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
				/*BTDS*/
				""
			), t[3] = c) : c = t[3];
			var d = c;
			l = a ? n ? s._(
				/*BTDS*/
				"",
				[s._param("device created timestamp", u)]
			) : m.jsxs(m.Fragment, { children: [
				d,
				m.jsx(r("BaseMiddot.react"), {}),
				" ",
				s._(
					/*BTDS*/
					"",
					[s._param("device created timestamp", u)]
				)
			] }) : d, t[0] = n, t[1] = a, t[2] = l;
		} else l = t[2];
		var p = l, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = m.jsx(r("MWVerticalRhythm"), { height: 24 }), t[4] = _) : _ = t[4];
		var f;
		t[5] !== p ? (f = m.jsx(r("MWXText.react"), {
			isSemanticHeading: !0,
			type: "headlineEmphasized4",
			children: p
		}), t[5] = p, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx(r("MWVerticalRhythm"), { height: 12 }), t[7] = g) : g = t[7];
		var h;
		t[8] !== i ? (h = m.jsx(r("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react"), { identityKey: i }), t[8] = i, t[9] = h) : h = t[9];
		var y;
		return t[10] !== f || t[11] !== h ? (y = m.jsxs("div", { children: [
			_,
			f,
			g,
			h
		] }), t[10] = f, t[11] = h, t[12] = y) : y = t[12], y;
	}
	function v(t) {
		var a, i = t.props, l = i.contact, c = i.isViewer, p = i.onClose, h = i.title, C = r("usePopPage")(), v = f(function() {
			return [];
		}), S = v[0], R = v[1], L = f(function() {
			return [];
		}), E = L[0], k = L[1], I = f(null), T = I[0], D = I[1], x = f(null), $ = x[0], P = x[1], N = (a = r("gkx")("20879")) != null ? a : !1;
		_(function() {
			var t = function(n) {
				if (!n.success) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] ", ""])), n.error);
					return;
				}
				if (n.value != null) {
					var t = n.value, r = t.epochHead, a = t.epochHeadCreationTime, i = o("MAWSignalUtils").getHexRepresentation(new Uint8Array(r));
					D(i);
					var l = new Date(a * 1e3);
					P(l);
				}
			};
			N && r("promiseDone")(r("EBBridgedAPI").getContactEpochHead({ rawContactId: (d || (d = o("I64"))).to_string(l.id) }).then(t));
		}, [
			k,
			N,
			l.id
		]), _(function() {
			c ? r("promiseDone")(r("WMIWABridgeApi").getCurrentUserDeviceList().then(k)) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getThreadDevicesInfo", { fbid: (d || (d = o("I64"))).to_string(l.id) }).then(R).catch(function() {
				return (u || (u = n("Promise"))).resolve();
			});
		}, [
			l.id,
			c,
			k,
			R
		]);
		var M = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("name", l.name)]
		);
		return m.jsx(r("MWXDialogPage.react"), {
			disablePageScroll: !0,
			footer: null,
			header: m.jsx(r("MWXDialogHeader.react"), {
				mdsTitleLayout: "block",
				onBack: C != null ? C : void 0,
				onClose: p,
				title: h,
				withBackButton: C != null,
				withCloseButton: p != null,
				withoutDivider: !0
			}),
			children: m.jsxs("div", {
				"aria-label": M,
				className: "x1vd4hg5 x1odjw0f xwxc41k x106a9eq x1xnnf8n",
				children: [N && T != null ? m.jsx(b, {
					commaSeparated: !c,
					created: c && $ ? $ : void 0,
					storageKey: T
				}) : null, c ? m.jsx(g, { currentUserDevices: E }) : m.jsx(y, { devicesInfo: S })]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);

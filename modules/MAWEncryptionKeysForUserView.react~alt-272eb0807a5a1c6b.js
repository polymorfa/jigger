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
	"usePopPage"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = c || (c = o("react")), p = c, _ = p.useEffect, f = p.useState;
	function g(e) {
		var t = e.currentUserDevices;
		return t.map(function(e, t) {
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
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.devicesInfo;
		return t.map(function(e, t) {
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
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.commaSeparated, n = e.created, o = e.storageKey, a = n != null ? r("formatDate")(n, "M d, Y") : null, i = s._(
			/*BTDS*/
			""
		), l = n ? t ? s._(
			/*BTDS*/
			"",
			[s._param("device created timestamp", a)]
		) : m.jsxs(m.Fragment, { children: [
			i,
			m.jsx(r("BaseMiddot.react"), {}),
			" ",
			s._(
				/*BTDS*/
				"",
				[s._param("device created timestamp", a)]
			)
		] }) : i;
		return m.jsxs("div", { children: [
			m.jsx(r("MWVerticalRhythm"), { height: 24 }),
			m.jsx(r("MWXText.react"), {
				isSemanticHeading: !0,
				type: "headlineEmphasized4",
				children: l
			}),
			m.jsx(r("MWVerticalRhythm"), { height: 12 }),
			m.jsx(r("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react"), { identityKey: o })
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var a, i = t.props, l = i.contact, c = i.isViewer, p = i.onClose, C = i.title, b = r("usePopPage")(), v = f(function() {
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
				onBack: b != null ? b : void 0,
				onClose: p,
				title: C,
				withBackButton: b != null,
				withCloseButton: p != null,
				withoutDivider: !0
			}),
			children: m.jsxs("div", {
				"aria-label": M,
				className: "x1vd4hg5 x1odjw0f xwxc41k x106a9eq x1xnnf8n",
				children: [N && T != null ? m.jsx(y, {
					commaSeparated: !c,
					created: c && $ ? $ : void 0,
					storageKey: T
				}) : null, c ? m.jsx(g, { currentUserDevices: E }) : m.jsx(h, { devicesInfo: S })]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

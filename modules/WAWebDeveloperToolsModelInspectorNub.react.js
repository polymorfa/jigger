__d("WAWebDeveloperToolsModelInspectorNub.react", [
	"Promise",
	"ReactDOM",
	"WAWebCmd",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebDeveloperToolsModelInspector.react",
	"WAWebDeveloperToolsModelInspectorHeader.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgDataFromModel",
	"WAWebNoop",
	"WAWebSchemaChat",
	"WAWebSchemaMessage",
	"react",
	"useWAWebListener",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = {
		noModelInner: {
			width: "xbstwhj",
			textAlign: "x2b8uid",
			$$css: !0
		},
		noModel: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		}
	}, _ = [{
		key: "msg",
		getData: function(t) {
			return {
				data: o("WAWebMsgDataFromModel").msgDataFromMsgModel(t),
				id: t.id.id
			};
		},
		getRecord: function(t) {
			return o("WAWebSchemaMessage").getMessageTable().get(t.id.toString());
		}
	}, {
		key: "chat",
		getData: function(t) {
			var e = o("WAWebFrontendMsgGetters").getChat(t);
			return {
				data: e.toJSON(),
				id: e.id.toJid()
			};
		},
		getRecord: function(t) {
			var e = o("WAWebFrontendMsgGetters").getChat(t);
			return o("WAWebSchemaChat").getChatTable().get(e.id.toString());
		}
	}];
	function f() {
		var t = r("useWAWebToggle")(!1), a = t[0], i = t[1], l = m(null), s = l[0], c = l[1], f = m(window.msg), g = f[0], h = f[1], y = m(new Map()), C = y[0], b = y[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "debug-msg-changed", h);
		var v = [];
		if (d(function() {
			g != null && (e || (e = n("Promise"))).all(_.map(function(e) {
				var t = e.getRecord, n = e.key;
				return t(g).then(function(e) {
					return C.set(n, e);
				}).catch(r("WAWebNoop"));
			})).then(function() {
				b(C), c(_.find(function(e) {
					var t = e.key;
					return t === "msg";
				}));
			}).catch(r("WAWebNoop"));
		}, [g, C]), g == null) v.push(u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: p.noModel,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				align: "center",
				xstyle: p.noModelInner,
				children: [u.jsx("span", {
					className: "x13wtedm x117nqv4 x14mdic9",
					children: "No Model Selected"
				}), u.jsx("span", {
					className: "x1603h9y x1fcty0u",
					children: "Right click on a message bubble to select it, click magnifying glass to see it's information"
				})]
			})
		}, "no-model"));
		else {
			var S = s;
			if (S == null) v.push("Error selecting a model, please try again.");
			else {
				var R = S.getData(g), L = R.data, E = R.id, k = C.get(S.key);
				k != null && v.push(u.jsx(r("WAWebDeveloperToolsModelInspector.react"), {
					data: k,
					id: E,
					dataType: "Record",
					modelKey: S.key
				}, S.key + "-record")), v.push(u.jsx(r("WAWebDeveloperToolsModelInspector.react"), {
					data: L,
					id: E,
					dataType: "Model",
					modelKey: S.key
				}, S.key));
			}
		}
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "model-inspector-nub",
			icon: "🔎",
			title: "Model Inspector",
			onClick: i
		}), a && o("ReactDOM").createPortal(u.jsxs(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Model Inspector",
			onClose: i,
			modalId: "model-inspector-body-key",
			children: [g != null && s != null && u.jsx(r("WAWebDeveloperToolsModelInspectorHeader.react"), {
				plugins: _,
				selectedPlugin: s,
				msg: g,
				setSelectedPlugin: c
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				rowGap: 24,
				xstyle: g == null && p.noModel,
				children: v
			})]
		}), document.body)] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);

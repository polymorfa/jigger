__d("WASmaxInDevicesDeviceInfoMixin", [
	"WAResultOrError",
	"WASmaxInDevicesIdentityKeyMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "platform");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentString(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function s(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "manufacturer");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentString(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function u(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "model");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentString(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function c(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "seen");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentInt(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function d(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "creation");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentInt(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function m(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "ip");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").contentString(e);
		return n.success ? o("WAResultOrError").makeResult({ elementValue: n.value }) : n;
	}
	function p(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "location");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").attrString(e, "latitude");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").attrString(e, "longitude");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").contentString(e);
		return a.success ? o("WAResultOrError").makeResult({
			latitude: n.value,
			longitude: r.value,
			elementValue: a.value
		}) : a;
	}
	function _(t) {
		var n = o("WASmaxParseUtils").assertTag(t, "device");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").optionalChildWithTag(t, "platform", e);
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").optionalChildWithTag(t, "manufacturer", s);
		if (!a.success) return a;
		var i = o("WASmaxParseUtils").optionalChildWithTag(t, "model", u);
		if (!i.success) return i;
		var l = o("WASmaxParseUtils").optionalChildWithTag(t, "seen", c);
		if (!l.success) return l;
		var _ = o("WASmaxParseUtils").optionalChildWithTag(t, "creation", d);
		if (!_.success) return _;
		var f = o("WASmaxParseUtils").optionalChildWithTag(t, "ip", m);
		if (!f.success) return f;
		var g = o("WASmaxParseUtils").optionalChildWithTag(t, "location", p);
		if (!g.success) return g;
		var h = o("WASmaxParseUtils").attrIntRange(t, "id", 1, 999);
		if (!h.success) return h;
		var y = o("WASmaxInDevicesIdentityKeyMixin").parseIdentityKeyMixin(t);
		return y.success ? o("WAResultOrError").makeResult(babelHelpers.extends({ id: h.value }, y.value, {
			platform: r.value,
			manufacturer: a.value,
			model: i.value,
			seen: l.value,
			creation: _.value,
			ip: f.value,
			location: g.value
		})) : y;
	}
	l.parseDeviceInfoPlatform = e, l.parseDeviceInfoManufacturer = s, l.parseDeviceInfoModel = u, l.parseDeviceInfoSeen = c, l.parseDeviceInfoCreation = d, l.parseDeviceInfoIp = m, l.parseDeviceInfoLocation = p, l.parseDeviceInfoMixin = _;
}), 98);

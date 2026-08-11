pub const WAM_UNKNOWN_STANZA: u32 = 3448;

#[derive(Debug, Default)]
pub struct UnknownStanzaEvent {
    /// field 1, wire `unknown_stanza_tag`
    pub unknown_stanza_tag: Option<String>,
    /// field 2, wire `unknown_stanza_type`
    pub unknown_stanza_type: Option<String>,
    /// field 3, wire `unknown_stanza_drop_reason`
    pub unknown_stanza_drop_reason: Option<i64>,
}
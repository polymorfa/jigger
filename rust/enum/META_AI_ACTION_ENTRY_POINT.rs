#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum METAAIACTIONENTRYPOINT {
    THREEDOTMENU = 1,
    THREADLISTVIEW = 2,
    TOPNAV = 3,
    CHATLIST = 4,
    NAVIGATIONBARBUTTON = 5,
    CONTINUECHATMODULE = 6,
}
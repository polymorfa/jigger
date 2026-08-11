#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SETTINGSCLICKENTRYPOINT {
    SETTINGSSCREEN = 0,
    SETTINGSSEARCH = 1,
    DEEPLINK = 2,
    PRIVACYCHECKUP = 3,
    METABSCREEN = 4,
    THREEDOTMENU = 5,
}